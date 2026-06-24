(function () {

/* ==========================================================
   Agents DeTLeng AI Assistant Widget
   Version 2.0
   ========================================================== */

/* ==========================================================
   Bubble
========================================================== */

const bubble = document.createElement("div");

bubble.id = "detleng-ai-bubble";

bubble.innerHTML = `
<div style="
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
line-height:1.1;
">
<div style="font-size:28px;">🤖</div>
<div style="font-size:18px;font-weight:700;">Ask AI</div>
</div>
`;

bubble.style.position = "fixed";
bubble.style.bottom = "20px";
bubble.style.right = "20px";

bubble.style.width = "82px";
bubble.style.height = "82px";

bubble.style.borderRadius = "50%";

bubble.style.background =
"linear-gradient(135deg,#2563eb,#06b6d4)";

bubble.style.color = "#fff";

bubble.style.display = "flex";
bubble.style.alignItems = "center";
bubble.style.justifyContent = "center";

bubble.style.cursor = "pointer";

bubble.style.fontFamily =
"'Segoe UI',Arial,sans-serif";

bubble.style.boxShadow =
"0 8px 22px rgba(37,99,235,.45)";

bubble.style.userSelect = "none";

bubble.style.zIndex = "999999";

bubble.style.animation =
"detlengPulse 1.8s infinite";


/* ==========================================================
   Popup
========================================================== */

const popup = document.createElement("div");

popup.id = "detleng-popup";

popup.style.position = "fixed";

popup.style.right = "20px";

popup.style.bottom = "115px";

popup.style.width = "360px";

popup.style.maxWidth = "92vw";

popup.style.background = "#ffffff";

popup.style.borderRadius = "18px";

popup.style.boxShadow =
"0 10px 40px rgba(0,0,0,.20)";

popup.style.border =
"1px solid #dbeafe";

popup.style.display = "none";

popup.style.zIndex = "999999";

popup.innerHTML = `

<div style="
background:linear-gradient(135deg,#2563eb,#06b6d4);
padding:18px;
color:white;
border-radius:18px 18px 0 0;
display:flex;
justify-content:flex-start;
align-items:center;
">

<div>

<div style="
font-size:22px;
font-weight:700;
">

🤖 Agents DeTLeng

</div>

<div style="
font-size:13px;
opacity:.9;
margin-top:4px;
">

AI Assistant

</div>

</div>



</div>


<div style="
padding:22px;
font-family:'Segoe UI',Arial,sans-serif;
">

<div style="
font-size:20px;
font-weight:700;
color:#111827;
margin-bottom:12px;
">

👋 Hello!

</div>

<p style="
font-size:15px;
line-height:1.8;
color:#444;
margin:0;
">

Thank you for visiting
<b>Agents DeTLeng.</b>

<br><br>

🚀 Our AI Assistant is currently under development.

<br><br>

Very soon you'll be able to chat with us about:

</p>

<ul style="
margin-top:14px;
line-height:2;
color:#374151;
">

<li>🤖 AI Agents</li>

<li>⚙ Business Automation</li>

<li>📊 Data Engineering</li>

<li>🔄 ETL Pipelines</li>

<li>☁ Cloud Solutions</li>

<li>💡 AI Consulting</li>

</ul>

<div style="
margin-top:18px;
padding:14px;
background:#eff6ff;
border-radius:12px;
text-align:center;
font-weight:700;
color:#2563eb;
">

✨ We Will Talk Soon...

</div>

</div>

`;


/* ==========================================================
   CSS
========================================================== */

const style = document.createElement("style");

style.innerHTML = `

@keyframes detlengPulse{

0%{

transform:scale(1);

box-shadow:
0 0 12px rgba(37,99,235,.35);

}

50%{

transform:scale(1.12);

box-shadow:
0 0 24px rgba(37,99,235,.70),
0 0 40px rgba(6,182,212,.40);

}

100%{

transform:scale(1);

box-shadow:
0 0 12px rgba(37,99,235,.35);

}

}

@media(max-width:768px){

#detleng-ai-bubble{

width:72px !important;

height:72px !important;

right:15px !important;

bottom:15px !important;

}

#detleng-popup{

right:10px !important;

left:10px !important;

width:auto !important;

bottom:100px !important;

}

}

`;

document.head.appendChild(style);


/* ==========================================================
   Events
========================================================== */

bubble.onclick = function(){

popup.style.display = "block";

};


document.addEventListener("click",function(e){

if(e.target.id==="closeDetlengPopup"){

popup.style.display="none";

}

});


/* ==========================================================
   Render
========================================================== */

document.body.appendChild(bubble);

document.body.appendChild(popup);


/* ==========================================================
   END
========================================================== */

})();
