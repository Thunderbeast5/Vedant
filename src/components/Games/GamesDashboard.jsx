import { useNavigate } from "react-router-dom";

const games = [
  {
    name: "Frog Jump",
    description: "Help the frog jump to the correct vowel platform!",
    route: "frog",
    image: "🐸", // Updated emoji for Frog Jump
  },
  {
    name: "Fill in the Blanks",
    description: "Complete the sentence by filling in the blanks!",
    route: "fillintheblanks",
    image: "✍️", // Changed to a more appropriate emoji for writing
  },
  {
    name: "Match the Pairs",
    description: "Find and match the correct pairs of cards!",
    route: "match",
    image: "🃏", // Keeping the card emoji for match game
  },
  {
    name: "Sentence Builder",
    description: "Arrange the words to build a meaningful sentence!",
    route: "sentence",
    image: "🔠", // Changed emoji to represent words or letters
  },
  {
    name: "Canvas",
    description: "Draw and create on the virtual canvas!",
    route: "canvas",
    image: "🖼️", // Updated emoji to represent canvas and artwork
  },
  {
    name: "Flipped Card",
    description: "Flip and match the cards!",
    route: "flippedcard",
    image: "🎴", // Updated emoji for flipped card game
  },
  {
    name: "Noun Quest",
    description: "Identify and match the correct nouns in this fun game!",
    route: "noun",
    image: "🧩"
  },
  {
    name: "Rangoli Colors Quest",
    description: "Complete beautiful Rangoli patterns in this colorful and fun game!",
    route: "rangoli",
    image: "🎨"
  },
  {
    name: "Avatar Actions",
    description: "Control the avatar and perform actions!",
    route: "home",
    image: "🕺", // Changed to an action emoji for avatar movements
  },
];

const GamesDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-300 via-pink-200 to-white p-8 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center w-full pt-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {games.map((game, index) => (
            <div
              key={index}
              className="relative bg-white shadow-lg rounded-2xl p-5 hover:shadow-2xl transition-transform transform hover:scale-110 cursor-pointer flex flex-col items-center text-center"
              onClick={() => navigate(`/${game.route}`)}
            >
              <div className="flex items-center justify-center mb-4 text-7xl h-24 w-24 bg-purple-100 rounded-full">
                {game.image}
              </div>
              <h2 className="text-xl font-bold text-purple-700 mb-2">{game.name}</h2>
              <p className="text-gray-600 text-sm mb-4">{game.description}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/${game.route}`);
                }}
                className="px-6 py-2 bg-purple-500 text-white font-bold rounded-lg hover:bg-purple-600 transition-all"
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

export default GamesDashboard;