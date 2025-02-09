import  { useState, useEffect } from "react";

const CharminarStory = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      title: "Charminar: The Story of a Timeless Monument",
      image: "/images/charu1.jpg",
      description:
        "Long ago, in the kingdom of Golconda, a terrible plague spread across the land, causing great suffering. The young Sultan Muhammad Quli Qutb Shah was deeply saddened by the plight of his people. Standing by the Musi River, he prayed, “If my city is freed from this disaster, I shall build a grand monument in gratitude.”",
      hindiDescription:
        "बहुत समय पहले, गोलकुंडा राज्य में एक भयानक महामारी फैली, जिससे लोग बहुत परेशान हो गए। युवा सुल्तान मुहम्मद कुली कुतुब शाह अपने लोगों की दुर्दशा से दुखी थे। मूसी नदी के किनारे खड़े होकर, उन्होंने प्रार्थना की, 'यदि मेरा शहर इस आपदा से मुक्त हो जाता है, तो मैं आभार स्वरूप एक भव्य स्मारक बनाऊंगा।'",
    },
    {
      title: "The Birth of Charminar",
      image: "/images/charu2.jpg",
      description:
        "In 1591, after the plague subsided, the Sultan kept his promise and ordered the construction of a magnificent structure at the heart of his new city, Hyderabad. He named it Charminar, meaning 'Four Towers,' as it had four grand minarets, symbolizing the four Khalifas of Islam.",
      hindiDescription:
        "1591 में, जब महामारी समाप्त हो गई, तो सुल्तान ने अपना वादा निभाया और अपने नए शहर, हैदराबाद के केंद्र में एक भव्य संरचना बनाने का आदेश दिया। उन्होंने इसे चारमीनार नाम दिया, जिसका अर्थ है 'चार मीनारें,' जो इस्लाम के चार खलीफाओं का प्रतीक थीं।",
    },
    {
      title: "The Stunning Architecture",
      image: "/images/charu3.jpg",
      description:
        "Charminar was an architectural wonder made of limestone and granite, blending Indo-Islamic and Persian designs. Each of its four towering minarets was 56 meters (184 feet) high, and inside, a spiral staircase of 149 steps led to the upper levels. At the very top was a mosque, where the Sultan and his people gathered for prayers.",
      hindiDescription:
        "चारमीनार एक वास्तुशिल्प चमत्कार था, जो चूना पत्थर और ग्रेनाइट से बना था और भारतीय-इस्लामिक और फारसी डिजाइनों को मिलाकर बनाया गया था। इसकी चार ऊँची मीनारें 56 मीटर (184 फीट) ऊँची थीं, और भीतर 149 सीढ़ियों वाली घुमावदार सीढ़ी ऊपरी स्तरों तक जाती थी। सबसे ऊपर एक मस्जिद थी, जहाँ सुल्तान और उनके लोग प्रार्थना करने आते थे।",
    },
    {
      title: "The Marketplace and Laad Bazaar",
      image: "/images/charu4.jpg",
      description:
        "Over time, Charminar became the center of trade and culture. Merchants from faraway lands came to Laad Bazaar, the market next to Charminar, to buy and sell precious pearls, silk, and bangles. The Sultan's vision of a grand city came to life as Hyderabad flourished around this monument.",
      hindiDescription:
        "समय के साथ, चारमीनार व्यापार और संस्कृति का केंद्र बन गया। दूर-दूर से व्यापारी लाड बाजार में आते थे, जो चारमीनार के पास स्थित था, और यहाँ कीमती मोती, रेशम और चूड़ियाँ खरीदी और बेची जाती थीं। सुल्तान का एक भव्य शहर बनाने का सपना चारमीनार के चारों ओर साकार हुआ।",
    },
    {
      title: "A Symbol of Hyderabad",
      image: "/images/charu5.jpg",
      description:
        "Today, Charminar is the pride of Hyderabad, standing tall for over 400 years. Visitors from around the world come to admire its beauty and hear the stories of its royal past. Whether at sunrise or under the evening lights, Charminar continues to be a symbol of history, culture, and architectural brilliance.",
      hindiDescription:
        "आज, चारमीनार हैदराबाद की शान है, जो 400 से अधिक वर्षों से मजबूती से खड़ा है। दुनियाभर से लोग इसकी सुंदरता देखने और इसके शाही अतीत की कहानियाँ सुनने आते हैं। सूर्योदय हो या रात की रोशनी, चारमीनार अब भी इतिहास, संस्कृति और वास्तुकला की उत्कृष्टता का प्रतीक बना हुआ है।",
    },
  ];

  useEffect(() => {
    window.speechSynthesis.getVoices();
  }, []);

  const nextCard = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const readAloud = (text) => {
    if (!window.speechSynthesis) {
      alert("Text-to-Speech is not supported in this browser.");
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "hi-IN";

    let voices = window.speechSynthesis.getVoices();
    if (voices.length === 0) {
      window.speechSynthesis.onvoiceschanged = () => {
        voices = window.speechSynthesis.getVoices();
        utterance.voice = voices.find((v) => v.lang === "hi-IN") || null;
        window.speechSynthesis.speak(utterance);
      };
    } else {
      utterance.voice = voices.find((v) => v.lang === "hi-IN") || null;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-300 to-blue-100 p-5 pt-18">
      <div className="w-96 bg-gradient-to-b from-blue-300 to-blue-100 shadow-xl rounded-lg overflow-hidden">
        <div className="p-4 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">{cards[currentIndex].title}</h1>
          <img src={cards[currentIndex].image} alt="Story Illustration" className="w-full rounded-lg mb-4" />
          <p className="text-gray-600 text-lg mb-4">{cards[currentIndex].description}</p>
          <button
            onClick={() => readAloud(cards[currentIndex].hindiDescription)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Read Aloud
          </button>
          <button
            onClick={() => window.speechSynthesis.cancel()}
            className="ml-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Stop Reading
          </button>
        </div>
      </div>
      <div className="flex justify-between mt-6 gap-4">
        <button onClick={prevCard} className="px-4 py-2 bg-gray-300 rounded-lg text-gray-800 hover:bg-gray-400" disabled={currentIndex === 0}>
          Previous
        </button>
        <button onClick={nextCard} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700" disabled={currentIndex === cards.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
};

export default CharminarStory;
