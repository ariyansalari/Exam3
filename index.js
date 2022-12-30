const body=document.getElementById("body")

body.addEventListener("keydown",changecolorbody)

function changecolorbody(e){
    e.preventDefault();
if(e.ctrlKey && e.key=="d")
{
    const x = Math.floor(Math.random() * 256);
   const y = Math.floor(Math.random() * 256);
   const z= Math.floor(Math.random() * 256);
   const bgColor ="RGB("+x+","+y+","+z+")";
 console.log("CTRL+D =",bgColor);
    
    body.style.backgroundColor=bgColor;

    
console.log("✔")
console.log("اینجا گودبای پارتی جعفره")
}

}
