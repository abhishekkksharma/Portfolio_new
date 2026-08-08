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
      name: "Abhishek",
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

      // Append Abhishek reply after delay
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            name: "Abhishek",
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

      // Append Abhishek reply after delay
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            name: "Abhishek",
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
                name: "Abhishek",
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
              name: "Abhishek",
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
    <div className="flex justify-center items-center min-h-screen bg-black/40 p-4 sm:p-8">
      {/* 
        Responsive Wrapper: 
        Uses w-full and max-w-4xl to stretch safely on mobile while capping size on desktop. 
        Adjusted pr-12 (mobile) to sm:pr-16 (desktop) to make room for the side button.
      */}
      <div className="relative w-full max-w-4xl rounded-[16px] sm:rounded-[24px] border-[3px] sm:border-[5px] border-gray-700 bg-gray-400 p-2 sm:p-3 pr-12 sm:pr-16 shadow-2xl">
        
        {/* Inner panel */}
        <div className="rounded-[12px] sm:rounded-[18px] border-[2px] sm:border-[4px] border-gray-600 bg-slate-300 p-2 sm:p-3">
          
          <div className="among-font flex items-center gap-2 text-xl sm:text-3xl mb-2 sm:mb-0">
            <MessageSquareText className="h-7 w-7 sm:h-10 sm:w-10 text-gray-900" />
            <p className="font-bold text-black">Contact</p>
          </div>

          {/* Chat messages */}
          <div className="h-[60vh] sm:h-[500px] max-h-[500px] space-y-3 overflow-y-auto no-scrollbar rounded-lg bg-slate-200/40 p-2">
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
          <div className="mt-2 sm:mt-3 flex items-center gap-2 sm:gap-3 rounded-xl border-[2px] sm:border-[4px] border-gray-700 bg-white px-3 sm:px-4 py-1.5 sm:py-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSend();
                }
              }}
              disabled={step === "done"}
              /* text-base on mobile prevents iOS Safari from auto-zooming in on focus */
              className="flex-1 bg-transparent text-base sm:text-xl text-black outline-none min-w-0"
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
              className="rounded-full p-1.5 sm:p-2 transition hover:bg-blue-100 disabled:cursor-not-allowed disabled:opacity-50 shrink-0"
            >
              <SendHorizonal className="h-6 w-6 sm:h-9 sm:w-9 text-blue-600" />
            </button>
          </div>
        </div>

        {/* Side button */}
        <button className="absolute right-[2px] sm:right-[4px] top-1/2 flex h-10 w-10 sm:h-14 sm:w-14 -translate-y-1/2 items-center justify-center rounded-full border-[2px] sm:border-[4px] border-gray-600 bg-gray-200 shadow-lg">
          <div className="h-5 w-5 sm:h-8 sm:w-8 rounded-full bg-white" />
        </button>
      </div>
    </div>
  );
}