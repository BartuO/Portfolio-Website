const sections = document.querySelectorAll(".section");
const sectionButtons = document.querySelectorAll(".controls");
const sectionButton = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");
const triangles = document.querySelectorAll(".tri");
const namespan = document.querySelector(".name");

const colorCodes = [
    '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#00FFFF', '#FF00FF', '#FFA500', '#800080', '#008000', '#000080',
    '#FF4500', '#FF1493', '#00CED1', '#800000', '#00FF7F', '#9932CC', '#7FFF00', '#1E90FF', '#FFD700', '#8A2BE2',
    '#FF69B4', '#32CD32', '#0000CD', '#FF6347', '#BA55D3', '#FF8C00', '#8B008B', '#ADFF2F', '#20B2AA', '#FF7F50',
    '#FF00FF', '#8FBC8F', '#DDA0DD', '#FFDAB9', '#FF4500', '#1E90FF', '#FFA500', '#800080', '#008000', '#000080',
    '#FF4500', '#FF1493', '#00CED1', '#800000', '#00FF7F', '#9932CC', '#7FFF00', '#1E90FF', '#FFD700', '#8A2BE2',
    '#FF69B4', '#32CD32', '#0000CD', '#FF6347', '#BA55D3', '#FF8C00', '#8B008B', '#ADFF2F', '#20B2AA', '#FF7F50',
    '#FF00FF', '#8FBC8F', '#DDA0DD', '#FFDAB9', '#FF4500', '#1E90FF', '#FFA500', '#800080', '#008000', '#000080',
    '#FF4500', '#FF1493', '#00CED1', '#800000', '#00FF7F', '#9932CC', '#7FFF00', '#1E90FF', '#FFD700', '#8A2BE2',
    '#FF69B4', '#32CD32', '#0000CD', '#FF6347', '#BA55D3', '#FF8C00', '#8B008B', '#ADFF2F', '#20B2AA', '#FF7F50',
    '#FF00FF', '#8FBC8F', '#DDA0DD', '#FFDAB9', '#FF4500', '#1E90FF', '#FFA500', '#800080', '#008000', '#000080',
    '#FF4500', '#FF1493', '#00CED1', '#800000', '#00FF7F', '#9932CC', '#7FFF00', '#1E90FF', '#FFD700', '#8A2BE2',
  ];
  
  
  

function PageTransitions(){
    for(let i = 0; i < sectionButton.length; i++){
        sectionButton[i].addEventListener("click", (e) =>{
            let currentBtn = document.querySelectorAll(".active-btn");
            currentBtn[0].className = currentBtn[0].className.replace("active-btn", " ");
            e.target.className += " active-btn";
            sections.forEach((section) => {section.classList.remove("active")});
            const element = document.getElementById(e.target.dataset.id);
            element.classList.add("active");

        })
    }


}


let triangleIndex = 0;
let colorIndex = 0;

async function triangleCycle(){
    while (true){
        await new Promise((resolve) => setTimeout(resolve, 2000));
        triangles[triangleIndex].style.borderBottomColor = colorCodes[colorIndex];
        colorIndex++;
        triangleIndex++;
        if(triangleIndex >= 9){
            triangleIndex = 0;
        }
        if(colorIndex >= 100){
            colorIndex = 0;
        }
    }
    
}

function triangleHover(){
    for(let i = 0; i < triangles.length; i++){
        triangles[i].addEventListener("mouseenter", (event, i) => {
            let rand = Math.floor(Math.random() * 100);
            event.target.style.borderBottomColor = colorCodes[rand];
            colorIndex = rand;
           
        })

        triangles[i].addEventListener("click", (e) => {
            let rand = Math.floor(Math.random() * 100);
            triangles.forEach((triangle) => {
                triangle.style.borderBottomColor = colorCodes[rand];
                rand++;
            })
        })
    }
}


function toggleBlackAndWhite() {
    const elements = document.querySelectorAll('body *');

    elements.forEach(element => {
      element.classList.toggle('black-and-white');
    });
  }

  function rotateUpsideDown() {
    const triangle = document.querySelector('.big-triangle');
    if(triangle.classList.contains("upside-down")){
        triangle.classList.add("not-upside-down");
        setTimeout(function() {
            triangle.classList.remove("not-upside-down");
            triangle.classList.remove("upside-down");
          }, 1100);
    }else{
        triangle.classList.add('upside-down');
    }

  }

  


  function blackandwhiteButton(){
    const btn = document.querySelector(".black-and-white-btn");

    function clickHandler(){
        toggleBlackAndWhite();
        rotateUpsideDown();
        
        btn.removeEventListener("click", clickHandler);
        
        setTimeout(function(){
            btn.addEventListener("click", clickHandler);
        }, 1200);


    }

    btn.addEventListener("click", clickHandler);


  }

blackandwhiteButton();
triangleHover();
triangleCycle();
PageTransitions();