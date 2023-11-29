// text that tells the diameter
function textdiameter() {
  const diatext = document.getElementsByClassName("resizable")[0];
  const cssDia = window.getComputedStyle(diatext, null);
  let diatextsize = cssDia.getPropertyValue("width").replace('px', '');
  document.getElementsByClassName("pdia")[0].innerHTML = 'o diametro mede ' + diatextsize;
}
// text that tells apotema size
function textapotemasize() {
  const apotematxt = document.getElementsByClassName("resizable")[0];
  const cssObj2 = window.getComputedStyle(apotematxt, null);
  let apotemasize = cssObj2.getPropertyValue("height").replace('px', '');
  document.getElementsByClassName("papotema")[0].innerHTML = 'a apotema mede ' + apotemasize * 0.35355335405;
} 
// text that tells the size of the square
function textsquaresize() {
const element = document.getElementsByClassName("resizable")[0];
const cssObj = window.getComputedStyle(element, null);
let size = cssObj.getPropertyValue("width").replace('px', '');
document.getElementsByClassName("psquare")[0].innerHTML = 'os lados do quadrado medem ' + size * 0.70710670811;
}
//square height and width values
function changesquaresize() {
const element16 = document.getElementsByClassName('resizable')[0];
const squarecss = window.getComputedStyle(element16, null);
let size16 = squarecss.getPropertyValue("width").replace('px', '');
document.getElementsByClassName('square')[0].style.width = size16 * 0.70710670811 + "px";
document.getElementsByClassName('square')[0].style.height = size16 * 0.70710670811 + "px";
}
//change apotema size
function changeapotemasize() {
const apotema = document.getElementsByClassName('resizable')[0];
const apotemacss = window.getComputedStyle(apotema, null);
let apotemasize = apotemacss.getPropertyValue("height").replace('px', '')
document.getElementsByClassName('apotema')[0].style.height = apotemasize * 0.35355335405 + "px";
}

function makeResizableDiv(div) {
    const element = document.querySelector(div);
    const resizers = document.querySelectorAll(div + ' .resizer')
    const minimum_size = 20;
    let original_width = 0;
    let original_height = 0;
    let original_x = 0;
    let original_y = 0;
    let original_mouse_x = 0;
    let original_mouse_y = 0;
    for (let i = 0;i < resizers.length; i++) {
      const currentResizer = resizers[i];
      currentResizer.addEventListener('mousedown', function(e) {
        e.preventDefault()
        original_width = parseFloat(getComputedStyle(element, null).getPropertyValue('width').replace('px', ''));
        original_height = parseFloat(getComputedStyle(element, null).getPropertyValue('height').replace('px', ''));
        original_x = element.getBoundingClientRect().left;
        original_y = element.getBoundingClientRect().top;
        original_mouse_x = e.pageX;
        original_mouse_y = e.pageY;
        window.addEventListener('mousemove', resize)
        window.addEventListener('mouseup', stopResize)
      })
      

      function resize(e) {
        textsquaresize();
        changesquaresize();
        changeapotemasize();
        textapotemasize();
        textdiameter();
        if (currentResizer.classList.contains('bottom-right')) {
          const width = original_width + (e.pageX - original_mouse_x);
          const height = original_width + (e.pageX - original_mouse_x);
          if (width > minimum_size) {
            element.style.width = width + 'px'
          }
          if (height > minimum_size) {
            element.style.height = height + 'px'
          }
        }
        else if (currentResizer.classList.contains('bottom-left')) {
          const height = original_height - (e.pageY - original_mouse_y)
          const width = original_height - (e.pageY - original_mouse_y)
          if (height > minimum_size) {
            element.style.height = height + 'px'
          }
          if (width > minimum_size) {
            element.style.width = width + 'px'
            element.style.left = original_x + (e.pageX - original_mouse_x) + 'px'
          }
        }
        else if (currentResizer.classList.contains('top-right')) {
          const width = original_width + (e.pageX - original_mouse_x)
          const height = original_width + (e.pageX - original_mouse_x)
          if (width > minimum_size) {
            element.style.width = width + 'px'
          }
          if (height > minimum_size) {
            element.style.height = height + 'px'
            element.style.top = original_y + (e.pageY - original_mouse_y) + 'px'
          }
        }
        else {
          const width = original_height - (e.pageY - original_mouse_y)
          const height = original_height - (e.pageY - original_mouse_y)
          if (width > minimum_size) {
            element.style.width = width + 'px'
            element.style.left = original_x + (e.pageX - original_mouse_x) + 'px'
          }
          if (height > minimum_size) {
            element.style.height = height + 'px'
            element.style.top = original_y + (e.pageY - original_mouse_y) + 'px'
          }
        }
      }
      
      function stopResize() {
        window.removeEventListener('mousemove', resize)
      }
    }
  }
  
  makeResizableDiv('.resizable')

const txtresizer = document.getElementById("resizertxt");
txtresizer.addEventListener("keyup",both);
function both(){
document.getElementsByClassName("resizable")[0].style.width = this.value+'px';
document.getElementsByClassName("resizable")[0].style.height = document.getElementsByClassName("resizable")[0].style.width;

changesquaresize();
textsquaresize();
changeapotemasize();
textapotemasize();
textdiameter();
}
textsquaresize();
changeapotemasize();
textapotemasize();
textdiameter();