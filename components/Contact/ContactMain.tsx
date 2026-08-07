"use client";

import { useState, useEffect, useRef } from "react";
import ChatMessage from "@/components/Contact/ChatMessage";
import { SendHorizonal, MessageSquareText } from "lucide-react";
import { motion } from "framer-motion";
import useClickSound from "@/hooks/useClickSound";

export default function ContactMain() {
  const [input, setInput] = useState("");

  const [step, setStep] = useState<"name" | "email" | "message" | "done">(
    "name"
  );

  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [messages, setMessages] = useState([
    {
      name: "Addax",
      text: "Hey! What's your name?",
      left: true,
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const playClick = useClickSound();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Play click sound on every new message sent/received
  useEffect(() => {
    if (messages.length > 1) {
      playClick();
    }
  }, [messages.length, playClick]);

  const handleSend = async () => {
    if (!input.trim() || step === "done") return;

    const value = input.trim();

    if (step === "name") {
      setContact((prev) => ({
        ...prev,
        name: value,
      }));

      // Append user message immediately
      setMessages((prev) => [
        ...prev,
        {
          name: "You",
          text: value,
          left: false,
        },
      ]);

      setStep("email");

      // Append Addax reply after delay
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            name: "Addax",
            text: "Nice to meet you! What's your email?",
            left: true,
          },
        ]);
      }, 700);

    } else if (step === "email") {
      setContact((prev) => ({
        ...prev,
        email: value,
      }));

      // Append user message immediately
      setMessages((prev) => [
        ...prev,
        {
          name: "You",
          text: value,
          left: false,
        },
      ]);

      setStep("message");

      // Append Addax reply after delay
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            name: "Addax",
            text: "Awesome! What would you like to tell me?",
            left: true,
          },
        ]);
      }, 700);

    } else if (step === "message") {
      const finalContact = {
        ...contact,
        message: value,
      };

      setContact(finalContact);

      // Append user message immediately
      setMessages((prev) => [
        ...prev,
        {
          name: "You",
          text: value,
          left: false,
        },
      ]);

      // Submit form and show response after delay
      setTimeout(async () => {
        try {
          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
              ...finalContact,
            }),
          });

          const result = await response.json();

          if (result.success) {
            setMessages((prev) => [
              ...prev,
              {
                name: "Addax",
                text: "Thanks! Your message has been sent successfully.",
                left: true,
              },
            ]);

            setStep("done");
          } else {
            throw new Error();
          }
        } catch {
          setMessages((prev) => [
            ...prev,
            {
              name: "Addax",
              text: "Something went wrong. Please try again.",
              left: true,
            },
          ]);
        }
      }, 700);
    }

    setInput("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black/40">
      <div className="relative w-240 rounded-[24px] border-[5px] border-gray-700 bg-gray-400 p-3 pr-15 shadow-2xl">
        {/* Inner panel */}
        <div className="rounded-[18px] border-[4px] border-gray-600 bg-slate-300 p-3">
          <div className="among-font flex items-center gap-2 text-3xl">
            <MessageSquareText className="h-10 w-10 text-gray-900" />
            <p className="font-bold text-black">Contact</p>
          </div>

          {/* Chat messages */}
          <div className="h-[500px] space-y-3 overflow-y-auto no-scrollbar rounded-lg bg-slate-200/40 p-2">
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
              >
                <ChatMessage
                  name={message.name}
                  text={message.text}
                  left={message.left}
                />
              </motion.div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="mt-3 flex items-center gap-3 rounded-xl border-[4px] border-gray-700 bg-white px-4 py-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSend();
                }
              }}
              disabled={step === "done"}
              className="flex-1 bg-transparent text-xl text-black outline-none"
              placeholder={
                step === "name"
                  ? "Type your name..."
                  : step === "email"
                  ? "Type your email..."
                  : step === "message"
                  ? "Type your message..."
                  : "Thank you!"
              }
            />

            <button
              onClick={handleSend}
              disabled={step === "done"}
              className="rounded-full p-2 transition hover:bg-blue-100 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <SendHorizonal className="h-9 w-9 text-blue-600" />
            </button>
          </div>
        </div>

        {/* Side button */}
        <button className="absolute right-[2px] top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border-[4px] border-gray-600 bg-gray-200 shadow-lg">
          <div className="h-8 w-8 rounded-full bg-white" />
        </button>
      </div>
    </div>
  );
}