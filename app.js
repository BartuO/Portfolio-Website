const sections = document.querySelectorAll(".section");
const sectionButtons = document.querySelectorAll(".control");
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
  
  
  

function pageTransitions(){
    sectionButtons.forEach(button => {
        button.addEventListener("click", function(){
            const sectionId = this.getAttribute("data-id");
            const section = document.getElementById(sectionId);

            if (section) {

                
                section.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        })
    })
}


function navButtons() {
    window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY;

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const sectionTop = section.offsetTop - 250;
            const sectionBot = section.offsetTop + rect.height - 250;



            if (scrollPosition >= sectionTop && scrollPosition <= sectionBot) {
 

                const activeButton = document.querySelector(".active-btn");
                const newActiveButton = document.querySelector(`[data-id="${section.id}"]`);


                if (activeButton.getAttribute("data-id") !== newActiveButton.getAttribute("data-id")) {
                    activeButton.classList.remove("active-btn");
                    newActiveButton.classList.add("active-btn");
                }
            }
        });
    });
}


function toggleTheme(){
    const themeButton = document.querySelector(".theme-btn");
    themeButton.addEventListener("click", () => {
        let element = document.body;
        element.classList.toggle("light-mode");
        rotateUpsideDown();
    })

   
}









let triangleIndex = 0;
let colorIndex = 0;

async function triangleCycle(){
    while (true){
        await new Promise((resolve) => setTimeout(resolve, 500));
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
        triangle.classList.remove("upside-down");

    }else{
        triangle.classList.add('upside-down');
        triangle.classList.remove("not-upside-down");
    }

  }

function schoolProjectPopUp(){
    const h4s = document.querySelectorAll(".school-project");
    h4s.forEach(h4 => {
        h4.addEventListener("click", () => {
            window.alert("This project is one of my school projects. Therefore, it doesn't have a public repository. Feel free to contact me to request more information, discuss the project in detail, or inquire about specific aspects you'd like to explore further.")
        })
    })
}



  


 

toggleTheme();
triangleHover();
triangleCycle();
pageTransitions();
navButtons();
schoolProjectPopUp();