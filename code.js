
const rndColor=function()
{
    const hex='0123456789ABCDEF';
    let color='#';
    for(i=1;i<=6;i++)
    {
        color+= hex[Math.floor(Math.random()*16)];
    }
    return color;
}
console.log(rndColor());


let stopD;
const startBackground=function(){

function bgchange(){
        document.body.style.backgroundColor=rndColor();

    }
    if(!stopD)
    {
  stopD=  setInterval(bgchange,1000);
    }
    
    console.log("clicked")
};


const stoptBackground=function(){
    clearInterval(stopD)
    stopD=null;
};


document.querySelector('#start').addEventListener('click',startBackground);
document.querySelector('#stop').addEventListener('click',stoptBackground);