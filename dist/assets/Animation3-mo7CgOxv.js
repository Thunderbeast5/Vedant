import{r as a,j as e}from"./index-B4goEG5b.js";const i=()=>{const[r,t]=a.useState(!1),s=o=>{const l=document.getElementById("yesButton1"),n=document.getElementById("noButton1");o==="Yes"?(l.style.backgroundColor="green",n.style.backgroundColor="#d1d5db",t(!0),setTimeout(()=>t(!1),1500)):o==="No"&&(n.style.backgroundColor="red",l.style.backgroundColor="#d1d5db")};return e.jsx("div",{className:"min-h-screen flex justify-center items-center bg-gradient-to-b from-emerald-400 to-lime-200",children:e.jsxs("div",{className:"w-[400px] h-[480px] bg-white rounded-2xl shadow-2xl flex flex-col justify-between p-6 relative",children:[e.jsxs("div",{className:"text-center flex flex-col items-center",children:[e.jsx("div",{className:"text-xl font-bold mb-3",children:"Should respect elders?"}),e.jsx("img",{src:"/images/team/learnings/habit2.png",alt:"Habit Image",className:"w-[65%] h-auto mb-3"})]}),r&&e.jsx("div",{className:"absolute top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-md text-lg font-bold animate-pulse",children:"Correct! ✅"}),e.jsxs("div",{className:"flex flex-col items-center gap-2 pb-3",children:[e.jsx("button",{id:"yesButton1",className:"bg-gray-100 text-black text-lg px-4 py-2 rounded-lg shadow-md w-3/4 hover:bg-white transition duration-200",onClick:()=>s("Yes"),children:"Yes"}),e.jsx("button",{id:"noButton1",className:"bg-gray-100 text-black text-lg px-4 py-2 rounded-lg shadow-md w-3/4 hover:bg-white transition duration-200",onClick:()=>s("No"),children:"No"})]})]})})};export{i as HabitGame3,i as default};
