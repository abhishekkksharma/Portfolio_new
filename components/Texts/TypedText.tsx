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
      typingSpeed={60}
      pauseDuration={1000}
      showCursor
      cursorCharacter="|"
      deletingSpeed={20}
      cursorBlinkDuration={0.5}
      className={className}
    />
  );
}