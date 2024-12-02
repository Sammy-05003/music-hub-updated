import { Play, Heart } from 'lucide-react';

const featuredPlaylists = [
  {
    title: "Today's Top Hits",
    description: "The biggest hits right now",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop"
  },
  {
    title: "Peaceful Piano",
    description: "Relax and indulge with beautiful piano pieces",
    image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=300&h=300&fit=crop"
  },
  {
    title: "Deep Focus",
    description: "Keep calm and focus with this music",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop"
  },
  {
    title: "Rock Classics",
    description: "Rock legends & epic songs",
    image: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=300&h=300&fit=crop"
  }
];

export function MainContent() {
  return (
    <div className="flex-1 bg-gradient-to-b from-indigo-900 to-black overflow-auto">
      <div className="p-8">
        <h1 className="text-3xl font-bold text-white mb-6">Good evening</h1>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {featuredPlaylists.slice(0, 6).map((playlist) => (
            <div
              key={playlist.title}
              className="flex items-center bg-white/10 rounded-md hover:bg-white/20 transition cursor-pointer group"
            >
              <img src={playlist.image} alt={playlist.title} className="w-20 h-20 rounded-l-md" />
              <span className="p-4 font-semibold text-white flex-1">{playlist.title}</span>
              <button className="opacity-0 group-hover:opacity-100 mr-4 bg-green-500 rounded-full p-3 shadow-lg transition">
                <Play fill="white" className="text-white" size={20} />
              </button>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Made for you</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {featuredPlaylists.map((playlist) => (
            <div
              key={playlist.title}
              className="bg-white/5 p-4 rounded-md hover:bg-white/10 transition cursor-pointer group"
            >
              <div className="relative">
                <img src={playlist.image} alt={playlist.title} className="w-full aspect-square object-cover rounded-md mb-4" />
                <button className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 bg-green-500 rounded-full p-3 shadow-lg transition translate-y-2 group-hover:translate-y-0">
                  <Play fill="white" className="text-white" size={20} />
                </button>
              </div>
              <h3 className="text-white font-semibold mb-1">{playlist.title}</h3>
              <p className="text-gray-400 text-sm">{playlist.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}