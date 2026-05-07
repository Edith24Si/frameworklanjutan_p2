import { LuUsers, LuCar, LuCalendarCheck, LuDollarSign, LuWrench } from "react-icons/lu";
import PageHeader from "../components/PageHeader";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Area } from 'recharts'; // Import elemen Recharts

// Data simulasi agar mirip dengan Figma (gunakan interval data yang masuk akal)
const salesData = [
  { name: '5k', sales: 25 },
  { name: '10k', sales: 30 },
  { name: '15k', sales: 28 },
  { name: '20k', sales: 45 },
  { name: '25k', sales: 35 },
  { name: '30k', sales: 42 },
  { name: '35k', sales: 30 },
  { name: '40k', sales: 60 }, // Puncak data mirip 64k di Figma
  { name: '45k', sales: 50 },
  { name: '50k', sales: 52 },
  { name: '55k', sales: 48 },
  { name: '60k', sales: 55 },
];

// Komponen Tooltip kustom agar mirip dengan Figma yang berwarna biru
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#4880FF] text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-lg">
        {payload[0].value.toFixed(2)}
      </div>
    );
  }
  return null;
};

export default function Dashboard() {
  const cards = [
    { id: "pelanggan", icon: LuUsers, label: "Total Pelanggan", value: "128", color: "#3b82f6" },
    { id: "kendaraan", icon: LuCar, label: "Total Kendaraan", value: "95", color: "#8b5cf6" },
    { id: "booking", icon: LuCalendarCheck, label: "Booking Aktif", value: "24", color: "#f97316" },
    { id: "revenue", icon: LuDollarSign, label: "Total Revenue", value: "Rp 18Jt", color: "#22c55e" },
  ];

  return (
    <div className="pb-10">
      <PageHeader title="Dashboard" breadcrumb={["Dashboard"]} />

      {/* Grid Card Statistik */}
      <div className="p-5 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex items-center space-x-4 rounded-2xl shadow-md p-5 border"
            style={{ background: "#1a1d27", borderColor: "#ffffff0d" }}
          >
            <div className="rounded-xl p-3" style={{ background: `${card.color}22` }}>
              <card.icon className="text-2xl" style={{ color: card.color }} />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">{card.value}</span>
              <span className="text-xs" style={{ color: "#9ca3af" }}>
                {card.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Welcome Banner */}
      <div
        className="mx-5 rounded-2xl p-6 border mb-6"
        style={{
          background: "linear-gradient(135deg, #1a1208, #1f1508)",
          borderColor: "rgba(249,115,22,0.2)",
        }}
      >
        <div className="flex items-center gap-2 mb-2">
          <LuWrench size={16} style={{ color: "#f97316" }} />
          <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#f97316" }}>
            RevDrive AutoSolution
          </span>
        </div>
        <h2 className="text-xl font-black text-white mb-1">Selamat Datang, Admin RevDrive! 🔧</h2>
        <p className="text-sm" style={{ color: "#9ca3af" }}>
          Sistem CRM Bengkel berjalan normal. Kelola pelanggan, kendaraan, dan servis dengan mudah.
        </p>
      </div>

      {/* SALES DETAILS - IMPLEMENTASI RECHARTS YANG MIRIP FIGMA */}
      <div
        className="mx-5 rounded-2xl p-6 border"
        style={{ background: "#1a1d27", borderColor: "#ffffff0d" }}
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold text-white">Sales Details</h3>
          <select className="bg-[#2d303a] text-xs text-white px-3 py-1.5 rounded-lg border-none outline-none cursor-pointer">
            <option>October</option>
          </select>
        </div>

        {/* Container untuk Grafik (wajibResponsiveContainer) */}
        <div className="h-[250px] w-full text-xs" style={{ color: "#9ca3af" }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={salesData}
              margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            >
              {/* Grid transparan sesuai Figma */}
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff0d" vertical={false} />
              
              {/* Sumbu X (Kategori: 5k, 10k, dll) */}
              <XAxis dataKey="name" axisLine={false} tickLine={false} stroke="#9ca3af" />
              
              {/* Sumbu Y (Persentase: 100%, 80%, dll) */}
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                stroke="#9ca3af" 
                tickFormatter={(value) => `${value}%`} 
                ticks={[20, 40, 60, 80, 100]}
              />
              
              {/* Tooltip Kustom (Warna Biru Figma) */}
              <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#4880FF22', strokeWidth: 1 }} />
              
              {/* Definisi Gradient Biru di bawah garis (Area Chart) */}
              <defs>
                <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4880FF" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#4880FF" stopOpacity={0}/>
                </linearGradient>
              </defs>
              
              {/* Area Grafik (Gradient di bawah garis) */}
              <Area type="monotone" dataKey="sales" stroke="none" fill="url(#colorSales)" fillOpacity={1} />

              {/* Garis Grafik Utama (Warna Biru Figma, type monotone agar smooth) */}
              <Line 
                type="monotone" 
                dataKey="sales" 
                stroke="#4880FF" 
                strokeWidth={3} 
                dot={{ stroke: '#ffffff', strokeWidth: 2, fill: '#4880FF', r: 5 }} // Lingkaran poin sesuai Figma
                activeDot={{ stroke: '#4880FF', strokeWidth: 2, fill: '#ffffff', r: 7 }} // Efek lingkaran aktif
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
}