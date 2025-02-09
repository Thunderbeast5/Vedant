import { useNavigate } from "react-router-dom";

const games = [
  {
  name: "Whispering Fort",
  description: "Whispering Fort: A place where ancient secrets echo through time.",
  route: "golconda",
  image: "🏰",
  genre: "Historical" // Updated genre
  },
  {
  name: "Clean Brilliance",
  description: "A fun and interactive way to learn about cleanliness and hygiene.",
  route: "cleanliness",
  image: "🧹",
  genre: "Awareness" // Updated genre
  },
  {
  name: "The Kumbh Quest of Pratappur",
  description: "Embark on a journey to discover the ancient mysteries of the Mahakumbh!",
  route: "mahakumbh",
  image: "⚔️",
  genre: "Cultural"
  },
  {
    name: "Charminar",
    description: "Charminar the glimpse of Hyderabad!",
    route: "charminar",
    image: "🕌",
    genre: "Historical" // Added genre
  },
  {
    name: "The Lost Temple of Hampi",
    description: "A hidden temple a lost legend!",
    route: "cleanliness",
    image: "🏛️",
    genre: "Mythologica" // Added genre
  },
  {
    name: "Sunset Over Konark",
    description: "A chariot frozen in time!",
    route: "mahakumbh",
    image: "🌅",
    genre: "Archaeological" // Added genre
  },
];

const StoryDashboard = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-300 to-blue-100 p-8 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center w-full pt-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {games.map((game, index) => (
            <div
              key={index}
              className="relative bg-white shadow-lg rounded-2xl p-5 hover:shadow-2xl transition-transform transform hover:scale-110 cursor-pointer flex flex-col items-center text-center"
              onClick={() => navigate(`/${game.route}`)}
            >
              {/* Genre Badge */}
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full">
                  {game.genre}
                </span>
              </div>
              
              <div className="flex items-center justify-center mb-4 text-7xl h-24 w-24 bg-purple-100 rounded-full">
                {game.image}
              </div>
              
              <h2 className="text-xl font-bold text-blue-800 mb-2">{game.name}</h2>
              <p className="text-gray-600 text-sm mb-4">{game.description}</p>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/${game.route}`);
                }}
                className="px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all"
              >
                Play Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoryDashboard;