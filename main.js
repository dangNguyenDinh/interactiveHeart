function sleep(ms) {
    return new Promise((resolve)=>{
        setTimeout(resolve(),ms);
    })
}

function handleClick(event) {
    document.querySelector("body").removeAttribute('onclick');

    var x = Math.floor((event.offsetX)/16)*16;
    var y = Math.floor((event.offsetY)/16)*16;
   //black
   document.querySelector(".ele1").style = `top: ${y}px; left: ${x}px`;
   document.querySelector(".ele2").style = `top: ${y-16}px; left: ${x-16}px`;
   document.querySelector(".ele3").style = `top: ${y-32}px; left: ${x-32}px`;
   document.querySelector(".ele4").style = `top: ${y-48}px; left: ${x-48}px`;
   document.querySelector(".ele5").style = `top: ${y-64}px; left: ${x-64}px`;
   document.querySelector(".ele6").style = `top: ${y-80}px; left: ${x-80}px`;
   document.querySelector(".ele7").style = `top: ${y-96}px; left: ${x-96}px`;
   document.querySelector(".ele8").style = `top: ${y-112}px; left: ${x-96}px`;
   document.querySelector(".ele9").style = `top: ${y-128}px; left: ${x-96}px`;
   document.querySelector(".ele10").style = `top: ${y-144}px; left: ${x-80}px`;
   document.querySelector(".ele11").style = `top: ${y-160}px; left: ${x-64}px`;
   document.querySelector(".ele12").style = `top: ${y-160}px; left: ${x-48}px`;
   document.querySelector(".ele13").style = `top: ${y-160}px; left: ${x-32}px`;
   document.querySelector(".ele14").style = `top: ${y-144}px; left: ${x-16}px`;
   document.querySelector(".ele15").style = `top: ${y-128}px; left: ${x}px`;
   document.querySelector(".ele16").style = `top: ${y-144}px; left: ${x+16}px`;
   document.querySelector(".ele17").style = `top: ${y-160}px; left: ${x+32}px`;
   document.querySelector(".ele18").style = `top: ${y-160}px; left: ${x+48}px`;
   document.querySelector(".ele19").style = `top: ${y-160}px; left: ${x+64}px`;
   document.querySelector(".ele20").style = `top: ${y-144}px; left: ${x+80}px`;
   document.querySelector(".ele21").style = `top: ${y-128}px; left: ${x+96}px`;
   document.querySelector(".ele22").style = `top: ${y-96}px; left: ${x+96}px`;
   document.querySelector(".ele23").style = `top: ${y-112}px; left: ${x+96}px`;
   document.querySelector(".ele24").style = `top: ${y-80}px; left: ${x+80}px`;
   document.querySelector(".ele25").style = `top: ${y-16}px; left: ${x+16}px`;
   document.querySelector(".ele26").style = `top: ${y-32}px; left: ${x+32}px`;
   document.querySelector(".ele27").style = `top: ${y-48}px; left: ${x+48}px`;
   document.querySelector(".ele28").style = `top: ${y-64}px; left: ${x+64}px`;
    //red
    document.querySelector(".ele29").style = `top: ${y-16}px; left: ${x}px`;
    document.querySelector(".ele30").style = `top: ${y-16}px; left: ${x}px`;
    document.querySelector(".ele31").style = `top: ${y-32}px; left: ${x}px`;
    document.querySelector(".ele32").style = `top: ${y-48}px; left: ${x}px`;
    document.querySelector(".ele33").style = `top: ${y-64}px; left: ${x}px`;
    document.querySelector(".ele34").style = `top: ${y-80}px; left: ${x}px`;
    document.querySelector(".ele35").style = `top: ${y-96}px; left: ${x}px`;
    document.querySelector(".ele36").style = `top: ${y-112}px; left: ${x}px`;
    document.querySelector(".ele37").style = `top: ${y-32}px; left: ${x+16}px`;
    document.querySelector(".ele38").style = `top: ${y-48}px; left: ${x+16}px`;
    document.querySelector(".ele39").style = `top: ${y-64}px; left: ${x+16}px`;
    document.querySelector(".ele40").style = `top: ${y-80}px; left: ${x+16}px`;
    document.querySelector(".ele41").style = `top: ${y-96}px; left: ${x+16}px`;
    document.querySelector(".ele42").style = `top: ${y-112}px; left: ${x+16}px`;
    document.querySelector(".ele43").style = `top: ${y-128}px; left: ${x+16}px`;
    document.querySelector(".ele44").style = `top: ${y-32}px; left: ${x-16}px`;
    document.querySelector(".ele45").style = `top: ${y-48}px; left: ${x-16}px`;
    document.querySelector(".ele46").style = `top: ${y-64}px; left: ${x-16}px`;
    document.querySelector(".ele47").style = `top: ${y-80}px; left: ${x-16}px`;
    document.querySelector(".ele48").style = `top: ${y-96}px; left: ${x-16}px`;
    document.querySelector(".ele49").style = `top: ${y-112}px; left: ${x-16}px`;
    document.querySelector(".ele50").style = `top: ${y-128}px; left: ${x-16}px`;
    document.querySelector(".ele51").style = `top: ${y-48}px; left: ${x+32}px`;
    document.querySelector(".ele52").style = `top: ${y-64}px; left: ${x+32}px`;
    document.querySelector(".ele53").style = `top: ${y-80}px; left: ${x+32}px`;
    document.querySelector(".ele54").style = `top: ${y-96}px; left: ${x+32}px`;
    document.querySelector(".ele55").style = `top: ${y-112}px; left: ${x+32}px`;
    document.querySelector(".ele56").style = `top: ${y-128}px; left: ${x+32}px`;
    document.querySelector(".ele57").style = `top: ${y-144}px; left: ${x+32}px`;
    document.querySelector(".ele58").style = `top: ${y-48}px; left: ${x-32}px`;
    document.querySelector(".ele59").style = `top: ${y-64}px; left: ${x-32}px`;
    document.querySelector(".ele60").style = `top: ${y-80}px; left: ${x-32}px`;
    document.querySelector(".ele61").style = `top: ${y-96}px; left: ${x-32}px`;
    document.querySelector(".ele62").style = `top: ${y-112}px; left: ${x-32}px`;
    document.querySelector(".ele63").style = `top: ${y-128}px; left: ${x-32}px`;
    document.querySelector(".ele64").style = `top: ${y-144}px; left: ${x-32}px`;
    document.querySelector(".ele65").style = `top: ${y-64}px; left: ${x+48}px`;
    document.querySelector(".ele66").style = `top: ${y-80}px; left: ${x+48}px`;
    document.querySelector(".ele67").style = `top: ${y-96}px; left: ${x+48}px`;
    document.querySelector(".ele68").style = `top: ${y-112}px; left: ${x+48}px`;
    document.querySelector(".ele69").style = `top: ${y-128}px; left: ${x+48}px`;
    document.querySelector(".ele70").style = `top: ${y-144}px; left: ${x+48}px`;
    document.querySelector(".ele71").style = `top: ${y-64}px; left: ${x-48}px`;
    document.querySelector(".ele72").style = `top: ${y-80}px; left: ${x-48}px`;
    document.querySelector(".ele73").style = `top: ${y-96}px; left: ${x-48}px`;
    document.querySelector(".ele74").style = `top: ${y-112}px; left: ${x-48}px`;
    document.querySelector(".ele75").style = `top: ${y-128}px; left: ${x-48}px`;
    document.querySelector(".ele76").style = `top: ${y-144}px; left: ${x-48}px`;
    document.querySelector(".ele77").style = `top: ${y-80}px; left: ${x-64}px`;
    document.querySelector(".ele78").style = `top: ${y-96}px; left: ${x-64}px`;
    document.querySelector(".ele79").style = `top: ${y-112}px; left: ${x-64}px`;
    document.querySelector(".ele80").style = `top: ${y-128}px; left: ${x-64}px`;
    document.querySelector(".ele81").style = `top: ${y-144}px; left: ${x-64}px`;
    document.querySelector(".ele82").style = `top: ${y-80}px; left: ${x+64}px`;
    document.querySelector(".ele83").style = `top: ${y-96}px; left: ${x+64}px`;
    document.querySelector(".ele84").style = `top: ${y-112}px; left: ${x+64}px`;
    document.querySelector(".ele85").style = `top: ${y-128}px; left: ${x+64}px`;
    document.querySelector(".ele86").style = `top: ${y-144}px; left: ${x+64}px`;
    document.querySelector(".ele87").style = `top: ${y-96}px; left: ${x+80}px`;
    document.querySelector(".ele88").style = `top: ${y-112}px; left: ${x+80}px`;
    document.querySelector(".ele89").style = `top: ${y-128}px; left: ${x+80}px`;
    document.querySelector(".ele90").style = `top: ${y-96}px; left: ${x-80}px`;
    document.querySelector(".ele91").style = `top: ${y-112}px; left: ${x-80}px`;
    document.querySelector(".ele92").style = `top: ${y-128}px; left: ${x-80}px`;

    console.log("Click at (" + x + ", " + y + ")");
    var leftElement = document.querySelectorAll("#heart .left");
    var rightElement = document.querySelectorAll("#heart .right");
    var midElement = document.querySelectorAll("#heart .mid");
    var block = document.querySelectorAll("#heart .ele");

            //in
            for(let i=0;i<leftElement.length;i++){
                leftElement[i].style.animation = `fadeInLeft ${Math.random()*1.5 + 1}s linear forwards`;
            }
            for(let i=0;i<rightElement.length;i++){
                rightElement[i].style.animation = `fadeInRight ${Math.random()*1.5 + 1}s linear forwards`;
            }
            for(let i=0;i<midElement.length;i++){
                midElement[i].style.animation = `fadeInUp ${Math.random()*1.5 + 1}s linear forwards`;
            }
            //out
            setTimeout(()=>{
                for(let i=0;i<leftElement.length;i++){
                leftElement[i].style.animation = `fadeOutRight ${Math.random()*2 + 1}s linear forwards`;
                }
                for(let i=0;i<rightElement.length;i++){
                    rightElement[i].style.animation = `fadeOutLeft ${Math.random()*2 + 1}s linear forwards`;
                }
                for(let i=0;i<midElement.length;i++){
                    midElement[i].style.animation = `fadeOutUp ${Math.random()*2 + 1}s linear forwards`;
                }
                setTimeout(()=>{
                  for(let i=0;i<block.length;i++){
                        block[i].style = 'display: none';
                    }  
                    document.querySelector("body").setAttribute('onclick','handleClick(event)');
                },3000);
            },3000)
                   
    }
    
var timeOut = 6;

function wrapperOnclick(){
    document.querySelector("#wrapper").removeAttribute('onclick');
    document.querySelector("#wrapper").style.animation = `snowFall 2000s linear infinite, invisible ${timeOut}s linear 1`; 
    document.querySelector("#footer").style.animation = `invisible ${timeOut}s linear 1`; 
    setTimeout(()=>{
        document.querySelector("#wrapper").style.animation = `snowFall 2000s linear infinite, notInvisible 2s linear 1`;
        document.querySelector("#wrapper").setAttribute('onclick','wrapperOnclick()');
        document.querySelector("#footer").style ='display: none'
    },timeOut*1000)
}


     var audio = document.getElementById("audio");
     audio.play();
  



