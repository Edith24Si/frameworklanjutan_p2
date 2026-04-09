import frameworkData from "./framework.json";

export default function FrameworkList() {
    return (
        <div className="bg-[#e0e5ec] p-8 min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {frameworkData.map((item) => (
                    <div key={item.id} className="bg-[#e0e5ec] rounded-2xl p-6 shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] hover:shadow-[inset_20px_20px_60px_#bebebe,inset_-20px_-20px_60px_#ffffff] transition-all duration-300">
                        <h2 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">{item.name}</h2>
                        <p className="text-gray-600 text-sm mt-2 leading-relaxed">{item.description}</p>
                        <div className="mt-4 flex items-center justify-between">
                            <p className="text-xs text-gray-500">{item.details.developer} ({item.details.releaseYear})</p>
                            <a href={item.details.officialWebsite} className="text-sm bg-[#e0e5ec] px-4 py-2 rounded-xl shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] transition-all text-indigo-500 font-medium" target="_blank" rel="noopener noreferrer">
                                Visit Website
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}