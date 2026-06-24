(function () {

/* ==========================================================
   AL-NOOR AI Assistant Bubble Widget
   Version 1.0
   ========================================================== */

const bubble = document.createElement("div");

bubble.innerHTML = `
<div style="
display:flex;
flex-direction:column;
align-items:center;
line-height:1.05;
">
<div style="font-size:26px;">🤖</div>
<div style="font-size:18px;">Hola</div>
</div>
`;

bubble.style.position = "fixed";
bubble.style.bottom = "20px";
bubble.style.left = "20px";

bubble.style.width = "82px";
bubble.style.height = "82px";

bubble.style.borderRadius = "50%";

bubble.style.background =
"linear-gradient(135deg,#2563eb,#06b6d4)";

bubble.style.color = "#ffffff";

bubble.style.display = "flex";
bubble.style.alignItems = "center";
bubble.style.justifyContent = "center";

bubble.style.fontFamily =
"'Segoe UI', Arial, sans-serif";

bubble.style.fontWeight = "700";

bubble.style.cursor = "pointer";

bubble.style.userSelect = "none";

bubble.style.zIndex = "99999";

bubble.style.boxShadow =
"0 0 15px rgba(37,99,235,.45),0 0 30px rgba(6,182,212,.25)";

bubble.style.animation =
"holaPulse 1.8s infinite";

/* ==========================================================
   Animation
========================================================== */

const style = document.createElement("style");

style.innerHTML = `

@keyframes holaPulse{

0%{

transform:scale(1);

box-shadow:
0 0 10px rgba(37,99,235,.45);

}

50%{

transform:scale(1.12);

box-shadow:
0 0 18px rgba(37,99,235,.75),
0 0 32px rgba(6,182,212,.45);

}

100%{

transform:scale(1);

box-shadow:
0 0 10px rgba(37,99,235,.45);

}

}

/* Mobile */

@media(max-width:768px){

#alnoor-hola-bubble{

width:72px !important;
height:72px !important;

left:15px !important;
bottom:15px !important;

}

#alnoor-hola-bubble div:first-child{

font-size:22px !important;

}

#alnoor-hola-bubble div:last-child{

font-size:16px !important;

}

}

`;

document.head.appendChild(style);

bubble.id = "alnoor-hola-bubble";

/* ==========================================================
   Future API Placeholder
========================================================== */

bubble.addEventListener("click", function(){

// Future:
// Open AI Assistant
// Connect API
// Launch Chat Window

console.log("AL-NOOR AI Assistant - Coming Soon");

});

/* ==========================================================
   Render Bubble
========================================================== */

document.body.appendChild(bubble);

/* ==========================================================
   END - AL-NOOR AI Assistant Bubble Widget
========================================================== */

})();
