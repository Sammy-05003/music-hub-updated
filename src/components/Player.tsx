import { Play, SkipBack, SkipForward, Volume2, Repeat, Shuffle } from 'lucide-react';

export function Player() {
  return (
    <div className="h-20 bg-black border-t border-gray-800 fixed bottom-0 w-full px-4">
      <div className="flex items-center justify-between h-full">
        <div className="flex items-center gap-4 w-1/3">
          <img 
            src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=50&h=50&fit=crop" 
            alt="Album cover" 
            className="w-14 h-14 rounded"
          />
          <div>
            <div className="text-white">Song Title</div>
            <div className="text-xs text-gray-400">Artist Name</div>
          </div>
        </div>

        <div className="flex flex-col items-center w-1/3">
          <div className="flex items-center gap-6">
            <button className="text-gray-400 hover:text-white">
              <Shuffle size={20} />
            </button>
            <button className="text-gray-400 hover:text-white">
              <SkipBack size={20} />
            </button>
            <button className="bg-white rounded-full p-2 hover:scale-105 transition">
              <Play size={20} className="text-black" />
            </button>
            <button className="text-gray-400 hover:text-white">
              <SkipForward size={20} />
            </button>
            <button className="text-gray-400 hover:text-white">
              <Repeat size={20} />
            </button>
          </div>
          <div className="w-full flex items-center gap-2 mt-2">
            <span className="text-xs text-gray-400">0:00</span>
            <div className="h-1 flex-1 bg-gray-800 rounded-full">
              <div className="h-1 w-1/3 bg-white rounded-full"></div>
            </div>
            <span className="text-xs text-gray-400">3:45</span>
          </div>
        </div>

        <div className="flex items-center gap-2 w-1/3 justify-end">
          <Volume2 size={20} className="text-gray-400" />
          <div className="h-1 w-24 bg-gray-800 rounded-full">
            <div className="h-1 w-2/3 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}