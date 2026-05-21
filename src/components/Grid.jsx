export default function Grid({ children, cols = 3, className = "" }) {
  // Mapping grid col untuk Tailwind agar aman saat kompilasi
  const colStyles = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  };

  const selectedCols = colStyles[cols] || colStyles[3];

  return (
    <div className={`grid ${selectedCols} gap-6 ${className}`}>
      {children}
    </div>
  );
}