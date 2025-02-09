import { useNavigate } from "react-router-dom";

const games = [
  {
    name: "Habit 1",
    description: "Doing homework daily helps you learn and grow!",
    route: "habit1",
    image: "📚",
  },
  {
    name: "Habit 2",
    description: "Brushing your teeth keeps them strong and healthy!",
    route: "habit2",
    image: "🪥",
  },
  {
    name: "Habit 3",
    description: "Respecting elders shows kindness and good manners!",
    route: "habit3",
    image: "🙏",
  },
  {
    name: "Habit 4",
    description: "Keeping your surroundings clean makes life better!",
    route: "habit4",
    image: "🧹",
  },
  {
    name: "Habit 5",
    description: "Should you pick your nose? Think wisely!",
    route: "habit5",
    image: "👃",
  },
  {
    name: "Habit 6",
    description: "Skipping a bath daily? Hygiene matters!",
    route: "habit6",
    image: "🚿",
  },
];
  

const LearningDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-400 to-lime-200 p-8 flex items-center justify-center">
      {/* Centered Content */}
      <div className="flex flex-col items-center justify-center w-full pt-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {games.map((game, index) => (
            <div
              key={index}
              className="relative bg-white shadow-lg rounded-2xl p-5 hover:shadow-2xl transition-transform transform hover:scale-110 cursor-pointer flex flex-col items-center text-center"
              onClick={() => navigate(`/${game.route}`)} // Navigate to the route on card click
            >
              <div className="flex items-center justify-center mb-4 text-7xl h-24 w-24 bg-purple-100 rounded-full">
                {game.image}
              </div>
              {/* Title Color Adjustment */}
              <h2 className="text-xl font-bold text-emerald-800 mb-2">{game.name}</h2>
              <p className="text-gray-600 text-sm mb-4">{game.description}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent the parent card click event
                  navigate(`/${game.route}`);
                }}
                className="px-6 py-2 bg-emerald-500 text-white font-bold rounded-lg hover:bg-emerald-600 transition-all"
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

export default LearningDashboard;