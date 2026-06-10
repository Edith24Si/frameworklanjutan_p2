import { LuUsers, LuCar, LuCalendarCheck, LuDollarSign, LuWrench, LuSearch } from "react-icons/lu";
import PageHeader from "../components/PageHeader";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Area } from 'recharts';

// IMPORT 3 KOMPONEN SHADCN UI BARU (BUKAN BUTTON, CARD, BADGE)
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

// Data dibuat lebih rapat untuk meniru kepadatan grafik di Figma
const salesData = [
  { name: '5k', sales: 20 }, { name: '', sales: 30 }, { name: '10k', sales: 35 },
  { name: '', sales: 50 }, { name: '15k', sales: 32 }, { name: '', sales: 45 },
  { name: '20k', sales: 52 }, { name: '', sales: 38 }, { name: '21k', sales: 85 }, // Peak mirip Figma
  { name: '25k', sales: 48 }, { name: '', sales: 55 }, { name: '30k', sales: 42 },
  { name: '', sales: 62 }, { name: '35k', sales: 28 }, { name: '', sales: 30 },
  { name: '40k', sales: 72 }, { name: '', sales: 65 }, { name: '45k', sales: 78 },
  { name: '', sales: 58 }, { name: '50k', sales: 55 }, { name: '', sales: 60 },
  { name: '55k', sales: 45 }, { name: '', sales: 58 }, { name: '60k', sales: 52 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="relative mb-2">
        <div className="bg-[#4880FF] text-white px-3 py-1 rounded-md text-[10px] font-bold shadow-xl">
          {payload[0].value.toFixed(2)}
        </div>
        {/* Pointer segitiga tooltip */}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#4880FF] rotate-45"></div>
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
    <div className="pb-10 bg-[#09090b] min-h-screen space-y-6">
      <PageHeader title="Dashboard" breadcrumb={["Dashboard"]} />

      {/* SHADCN COMPONENT 1: Alert Status Sistem */}
      <div className="mx-5">
        <Alert className="border-orange-500/20 bg-[#1a1d27] text-gray-200">
          <LuWrench className="h-4 w-4 text-orange-500" />
          <AlertTitle className="font-bold text-white text-sm">Sistem RevDrive CRM Aktif</AlertTitle>
          <AlertDescription className="text-xs text-[#9ca3af]">
            Semua data bengkel, manajemen pelanggan, dan riwayat kendaraan telah tersinkronisasi.
          </AlertDescription>
        </Alert>
      </div>

      {/* Stats Grid */}
      <div className="px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div key={card.id} className="flex items-center space-x-4 rounded-2xl p-6 border bg-[#1a1d27] border-[#ffffff0d]">
            <div className="rounded-xl p-3" style={{ background: `${card.color}22` }}>
              <card.icon className="text-2xl" style={{ color: card.color }} />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">{card.value}</p>
              <p className="text-xs text-[#9ca3af]">{card.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Sales Details - Figma High Fidelity Version */}
      <div className="mx-5 rounded-2xl p-8 border bg-[#1a1d27] border-[#ffffff0d] shadow-2xl">
        <div className="flex justify-between items-center mb-10">
          <h3 className="text-xl font-bold text-white">Sales Details</h3>
          <div className="relative">
            <select className="appearance-none bg-[#2d303a] text-[10px] text-white px-4 py-2 pr-8 rounded-lg border border-[#ffffff1a] outline-none">
              <option>October</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[8px]">▼</div>
          </div>
        </div>

        <div className="h-[350px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={salesData} margin={{ top: 5, right: 20, left: -15, bottom: 0 }}>
              <defs>
                <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4880FF" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#4880FF" stopOpacity={0}/>
                </linearGradient>
              </defs>
              
              <CartesianGrid strokeDasharray="0" stroke="#ffffff08" vertical={false} />
              
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                stroke="#9ca3af" 
                tick={{fontSize: 10, fill: '#9ca3af'}}
                interval={1} // Mengatur kerapatan label
              />
              
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                stroke="#9ca3af" 
                tickFormatter={(val) => `${val}%`}
                ticks={[20, 40, 60, 80, 100]}
                tick={{fontSize: 10, fill: '#9ca3af'}}
              />
              
              <Tooltip 
                content={<CustomTooltip />} 
                cursor={{ stroke: '#4880FF', strokeWidth: 1, strokeDasharray: '3 3' }} 
              />
              
              <Area 
                type="linear" 
                dataKey="sales" 
                stroke="none" 
                fill="url(#colorSales)" 
                connectNulls={true}
              />

              <Line 
                type="linear" 
                dataKey="sales" 
                stroke="#4880FF" 
                strokeWidth={2.5} 
                dot={{ stroke: '#4880FF', strokeWidth: 2, fill: '#ffffff', r: 3 }}
                activeDot={{ stroke: '#FF9500', strokeWidth: 4, fill: '#ffffff', r: 5 }} // Dot orange saat hover seperti Figma
                connectNulls={true}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* SHADCN COMPONENT 2: Separator Garis Pembatas */}
      <div className="mx-5 py-2">
        <Separator className="bg-white/10" />
      </div>

      {/* Panel Fitur Pencarian & Quick View */}
      <div className="mx-5">
        <div className="rounded-2xl p-6 border bg-[#1a1d27] border-[#ffffff0d] shadow-2xl">
          <div className="flex items-center gap-2 mb-4">
            <LuSearch size={18} className="text-orange-500" />
            <h3 className="text-base font-bold text-white">Quick Search Data</h3>
          </div>
          
          <p className="text-xs text-[#9ca3af] mb-3">
            Cari berkas mekanik, data pelanggan, atau nomor polisi kendaraan secara langsung di sini.
          </p>

          {/* SHADCN COMPONENT 3: Input Search Box */}
          <div className="flex max-w-md gap-2">
            <Input
              type="text"
              placeholder="Masukkan plat nomor (e.g. BM 1234 XX) atau nama..."
              className="bg-[#09090b] border-white/10 text-white placeholder:text-gray-500 text-xs focus-visible:ring-orange-500"
            />
            <button 
              className="px-4 py-2 text-xs font-semibold text-white rounded-md bg-orange-600 hover:bg-orange-700 transition-colors">
              Cari
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}