import TextType from "../TextType";

type TypedTextProps = {
  texts: string[];
  className?: string;
};

export default function TypedText({
  texts,
  className = "",
}: TypedTextProps) {
  return (
    <TextType
      text={texts}
      typingSpeed={80}
      pauseDuration={2500}
      showCursor
      cursorCharacter="|"
      deletingSpeed={40}
      cursorBlinkDuration={0.5}
      className={className}
    />
  );
}