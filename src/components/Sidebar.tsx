import { Home, Search, Library, Plus, Heart, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Sidebar() {
  return (
    <div className="w-64 bg-black h-full p-6">
      <div className="space-y-4">
        <div className="text-2xl font-bold text-white mb-8">Music-Hub</div>
        
        <nav className="space-y-4">
          <Link to="/" className="flex items-center gap-4 text-gray-400 hover:text-white transition">
            <Home size={24} />
            <span>Home</span>
          </Link>
          <Link to="/search" className="flex items-center gap-4 text-gray-400 hover:text-white transition">
            <Search size={24} />
            <span>Search</span>
          </Link>
          <Link to="/mood" className="flex items-center gap-4 text-gray-400 hover:text-white transition">
            <Brain size={24} />
            <span>Mood Detection</span>
          </Link>
          <Link to="/library" className="flex items-center gap-4 text-gray-400 hover:text-white transition">
            <Library size={24} />
            <span>Your Library</span>
          </Link>
        </nav>

        <div className="pt-8">
          <button className="flex items-center gap-4 text-gray-400 hover:text-white transition">
            <Plus className="p-1 bg-gray-400 text-black rounded-sm" size={24} />
            <span>Create Playlist</span>
          </button>
          <button className="flex items-center gap-4 text-gray-400 hover:text-white transition mt-4">
            <Heart className="p-1 bg-gradient-to-br from-indigo-600 to-purple-700 text-white rounded-sm" size={24} />
            <span>Liked Songs</span>
          </button>
        </div>

        <div className="border-t border-gray-800 pt-4 mt-4">
          <div className="text-xs text-gray-400">
            Your Playlists
          </div>
          <div className="mt-4 space-y-2">
            {['Workout Mix', 'Chill Vibes', 'Party Hits', 'Focus Flow'].map((playlist) => (
              <div key={playlist} className="text-gray-400 hover:text-white cursor-pointer transition">
                {playlist}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}