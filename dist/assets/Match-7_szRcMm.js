import{r as s,j as t}from"./index-Dpz8RGI2.js";const g="/assets/grapes-D2ptGdIM.png",x="/assets/banana-DD10UCwH.png",h="/assets/mango-CkKd7Hga.png",m="/assets/watermelon-Bow71YZ7.png",p="/assets/orange-C9s8BPvu.png",c=[{fruit:t.jsx("img",{src:g,alt:"Grapes",className:"w-10 h-10 object-cover rounded-lg"}),fruitHindi:"अंगूर"},{fruit:t.jsx("img",{src:x,alt:"Banana",className:"w-10 h-10 object-cover rounded-lg"}),fruitHindi:"केला"},{fruit:t.jsx("img",{src:h,alt:"Mango",className:"w-10 h-10 object-cover rounded-lg"}),fruitHindi:"आम"},{fruit:t.jsx("img",{src:m,alt:"Watermelon",className:"w-10 h-10 object-cover rounded-lg"}),fruitHindi:"तरबूज"},{fruit:t.jsx("img",{src:p,alt:"Orange",className:"w-10 h-10 object-cover rounded-lg"}),fruitHindi:"संतरा"}],b=n=>n.slice().sort(()=>Math.random()-.5);function j(){const[n,d]=s.useState([]),[l,u]=s.useState([]),[a,o]=s.useState(null);s.useEffect(()=>{d(b(c))},[]);const f=e=>{if(a&&e.fruitHindi===a.fruitHindi){const r=[...l,{fruit:a.fruit,fruitHindi:e.fruitHindi}];u(r)}o(null)},i=e=>l.some(r=>r.fruitHindi===e.fruitHindi);return t.jsx("div",{className:"w-full h-screen fixed top-0 left-0 bg-gradient-to-b from-purple-300 via-pink-200 to-white overflow-auto flex items-center justify-center",children:t.jsx("div",{className:"relative w-full flex flex-col items-center",children:t.jsxs("div",{className:"flex gap-5 justify-center p-5",children:[t.jsx("div",{className:"flex flex-col gap-4",children:c.map((e,r)=>t.jsx("button",{onClick:()=>o(e),className:`
                  w-52 h-20 flex justify-center items-center
                  bg-white border border-black/10 rounded-2xl
                  text-lg text-gray-700 cursor-pointer
                  transition-all duration-200 outline-none
                  hover:translate-y-[-2px] hover:shadow-lg
                  ${i(e)?"bg-green-500 text-black border-green-500":""}
                  ${a===e?"bg-gray-600 text-white border-gray-600":""}
                  ${i(e)?"":"hover:shadow-black/10"}
                `,children:e.fruit},r))}),t.jsx("div",{className:"flex flex-col gap-4",children:n.map((e,r)=>t.jsx("button",{onClick:()=>f(e),disabled:a===null,className:`
                  w-52 h-20 flex justify-center items-center
                  bg-white border border-black/10 rounded-2xl
                  text-lg text-gray-700
                  transition-all duration-200 outline-none
                  ${i(e)?"bg-green-500 text-black border-green-500":""}
                  ${a===null?"opacity-70 cursor-not-allowed":"cursor-pointer hover:translate-y-[-2px] hover:shadow-lg hover:shadow-black/10"}
                `,children:e.fruitHindi},r))})]})})})}export{j as default};
