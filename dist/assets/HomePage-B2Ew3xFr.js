import{j as e,u as a,r as o}from"./index-B4goEG5b.js";const t=[{id:1,name:"Swar (स्वर)",file:"swar.json",description:"Hindi vowels"},{id:2,name:"Consonants (व्यंजन)",file:"vyanjan.json",description:"Hindi consonants"},{id:3,name:"Noun (संज्ञा)",file:"noun.json",description:"Hindi nouns"},{id:4,name:"Pronoun (सर्वनाम)",file:"pronoun.json",description:"Hindi pronouns"},{id:5,name:"Verbs (क्रिया)",file:"verbs.json",description:"Hindi verbs"},{id:6,name:"Adjective (विशेषण)",file:"adjective.json",description:"Hindi adjectives"},{id:7,name:"Sentence (वाक्य)",file:"sentence.json",description:"Hindi sentences"},{id:8,name:"Words (शब्द)",file:"words.json",description:"Different types of Hindi words"},{id:9,name:"Greetings (अभिवादन)",file:"greetings.json",description:"Hindi greetings"},{id:10,name:"Complex Sentences (जटिल)",file:"complex.json",description:"Complex Hindi phrases"}],l=({level:s,onSelect:n})=>e.jsxs("div",{className:"bg-gradient-to-tr from-[#9089fc] to-[#f1f2b5] rounded-lg p-4 h-80 w-80 shadow-lg cursor-pointer hover:scale-105 transform transition-all flex flex-col justify-center items-center ",onClick:()=>n(s),children:[e.jsxs("div",{className:"bg-indigo-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-2",children:["Lesson ",s.id]}),e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:s.name})]}),c=()=>{const s=a();o.useState(!1),o.useState(!1);const n=i=>{s(`/lesson/${i.id}`,{state:{levelFile:i.file}})};return e.jsx("div",{className:"bg-white min-h-screen",children:e.jsxs("div",{className:"relative isolate px-6 pt-14 lg:px-8",children:[e.jsxs("div",{className:"absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80","aria-hidden":"true",children:[e.jsx("div",{className:"relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]",style:{clipPath:"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}}),e.jsx("div",{className:"relative right-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] translate-x-1/2 rotate-[-30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:right-[calc(50%-30rem)] sm:w-[72.1875rem]",style:{clipPath:"polygon(25.9% 44.1%, 0% 61.6%, 2.5% 26.9%, 14.5% 0.1%, 19.3% 2%, 27.5% 32.5%, 39.8% 62.4%, 47.6% 68.1%, 52.5% 58.3%, 54.8% 34.5%, 72.5% 76.7%, 99.9% 64.9%, 82.1% 100%, 72.4% 76.8%, 23.9% 97.7%, 25.9% 44.1%)"}})]}),e.jsx("div",{className:"flex min-h-screen items-center justify-center pt-20 pb-12",children:e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15 max-w-6xl mx-auto justify-items-center",children:t.map((i,r)=>e.jsx("div",{className:`w-80 h-80 bg-white rounded-lg shadow-md flex items-center justify-center ${r===t.length-1&&t.length%3===1?"lg:col-start-2":r===t.length-1&&t.length%3===2?"lg:col-start-2 lg:col-span-2":""}`,children:e.jsx(l,{level:i,onSelect:n})},i.id))})})]})})};export{c as default};
