export default function Spinner({ size = "md" }) {
  const sizes = {
    sm: "w-5 h-5 border-2",
    md: "w-8 h-8 border-2",
    lg: "w-12 h-12 border-3",
  };

  return (
    <div className="flex justify-center items-center p-4">
      <div 
        className={`${sizes[size]} rounded-full animate-spin`} 
        style={{ borderColor: "#ffffff0d", borderTopColor: "#f97316" }}
      />
    </div>
  );
}