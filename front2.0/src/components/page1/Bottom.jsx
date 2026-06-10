import { MoveRight } from 'lucide-react';

const bottom = () => {
  return (
    <div className=" h-fit p-4">
      <div className="grid grid-cols-3 p-1 gap-4 text-white">
        <div>
          <p>The specific geographic location, city, or attraction a traveler plans to visit.</p>
          <button className="mt-2 px-4 py-2 rounded font-bold text-2xl flex items-center gap-2">
            <span>Destination</span>
            <MoveRight />
          </button>
        </div>
        <div>
          <p>The planned route, schedule of activities, and list of places to visit during a trip.</p>
          <button className="mt-2 px-4 py-2 rounded font-bold text-2xl flex items-center gap-2">
            <span>Itinerary</span>
            <MoveRight />
          </button>
        </div>
        <div>
          <p>The lodging or temporary housing options (such as hotels, resorts, or hostels) used by travelers.</p>
          <button className="mt-2 px-4 py-2 rounded font-bold text-2xl flex items-center gap-2">
            <span>Accommodation</span>
            <MoveRight />
          </button>
        </div>
      </div>
    </div>

  )
}

export default bottom