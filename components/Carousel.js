/*
  STRETCH GOAL
  STRETCH GOAL
  STRETCH GOAL

  If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="../assets/carousel/mountains.jpeg" />
    <img src="../assets/carousel/computer.jpeg" />
    <img src="../assets/carousel/trees.jpeg" />
    <img src="../assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
let currentIndex = 0;
function makeCarousel() {

  let carousel = document.createElement('div')
  carousel.className = "carousel"
    
    let leftButton = document.createElement('div')
    leftButton.className = "left-button"
    leftButton.addEventListener("click", ()=>{

      if (currentIndex <= 0){
        console.log('limit reached');
      } else {
        currentIndex--
        let cas = currentIndex;
        switch (cas) {
          case 0:
            mountains.style.display = "block"
            computer.style.display ="none"
            trees.style.display ="none"  
            turntable.style.display ="none"
            gsap.from(".carousel-container", {duration: 1, ease: "back", opacity: 0, x:-150});
            break;
          case 1:
            mountains.style.display = "none"
            computer.style.display ="block"
            trees.style.display ="none"  
            turntable.style.display ="none"
            gsap.from(".carousel-container", {duration: 1, ease: "back", opacity: 0, x:-150});
            break;
          case 2:
            mountains.style.display = "none"
            computer.style.display ="none"
            trees.style.display ="block"  
            turntable.style.display ="none"
            gsap.from(".carousel-container", {duration: 1, ease: "back", opacity: 0, x:-150});
            break;
          case 3:
            mountains.style.display = "none"
            computer.style.display ="none"
            trees.style.display ="none"  
            turntable.style.display ="block"
            gsap.from(".carousel-container", {duration: 1, ease: "back", opacity: 0, x:-150});
            break;
        
          default:
            break;
        }
      }
      
    })
    carousel.appendChild(leftButton)

    let  mountains = document.createElement('img')
    mountains.src = "../assets/carousel/mountains.jpeg"
    mountains.style.display = "block"
    console.log(mountains)
    carousel.appendChild(mountains)
    
    let  computer = document.createElement('img')
    computer.src = "../assets/carousel/computer.jpeg"
    computer.style.display ="none"
    carousel.appendChild(computer)
    
    let  trees = document.createElement('img')
    trees.src = "../assets/carousel/trees.jpeg"
    trees.style.display ="none"   
    carousel.appendChild(trees)
    
    let  turntable = document.createElement('img')
    turntable.src = "../assets/carousel/turntable.jpeg"
    turntable.style.display ="none"
    carousel.appendChild(turntable)
    
    let rightButton = document.createElement('div')
    rightButton.className = "right-button"
    rightButton.addEventListener("click", ()=>{
      if (currentIndex >= 3){
        console.log('limit reached');
      } else {
        currentIndex++
        let cas = currentIndex;
        switch (cas) {
          case 0:
            mountains.style.display = "block"
            computer.style.display ="none"
            trees.style.display ="none"  
            turntable.style.display ="none"
            gsap.from(".carousel-container", {duration: 1, ease: "back", opacity: 0, x:-150});
            break;
          case 1:
            mountains.style.display = "none"
            computer.style.display ="block"
            trees.style.display ="none"  
            turntable.style.display ="none"
            gsap.from(".carousel-container", {duration: 1, ease: "back", opacity: 0, x:-150});
            break;
          case 2:
            mountains.style.display = "none"
            computer.style.display ="none"
            trees.style.display ="block"  
            turntable.style.display ="none"
            gsap.from(".carousel-container", {duration: 1, ease: "back", opacity: 0, x:-150});
            break;
          case 3:
            mountains.style.display = "none"
            computer.style.display ="none"
            trees.style.display ="none"  
            turntable.style.display ="block"
            gsap.from(".carousel-container", {duration: 1, ease: "back", opacity: 0, x:-150});
            break;
        
          default:
            break;
        }
      }
    })
    carousel.appendChild(rightButton)

    return carousel
}
document.querySelector('.carousel-container').appendChild(makeCarousel())
console.log(makeCarousel())
