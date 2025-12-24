interface DetailDecorationProps {
  position: "left" | "right";
  className?: string;
}

const DetailDecoration = ({
  position,
  className = "",
}: DetailDecorationProps) => {
  const baseClasses = "absolute w-64 h-64 opacity-30 pointer-events-none";
  const positionClasses =
    position === "left" ? "top-0 left-15" : "bottom-0 right-180 scale-x-[-1]";

  return (
    <img
      src="src/assets/detail.svg"
      alt=""
      className={`${baseClasses} ${positionClasses} ${className}`}
    />
  );
};

export default DetailDecoration;
