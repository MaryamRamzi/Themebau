
// **************************** show & hide menu****************************
(function(){
  var doc = document.documentElement;
  var w = window;

var curScroll= prevScroll = w.scrollY || doc.scrollTop;
var curDirection = prevDirection = 0;


var header = document.getElementById('site-header');

var threshold = 250;
var toggled;

var checkScroll = function(){
curScroll = w.screenY || doc.scrollTop;
if(curScroll > prevScroll){
  curDirection = 2;
}
else{
  curDirection = 1;
}

if(curDirection !== prevDirection){
  toggled = toggleHeader();
}

if(toggled){
  prevDirection=curDirection;
}


prevScroll=curScroll;

}

var toggleHeader = function() {
  toggled = true
if(curDirection===2 && curScroll > threshold){
  header.classList.add('hide');
}
else if(curDirection===1){
  header.classList.remove('hide');
}
else{
  toggled = false;
}
return toggled;
}

window.addEventListener('scroll',checkScroll);

})();


// *******************************************************************************

// ***** log btn
function printLog(){
  console.log("hi")
}

// ********** btn of colors
function setBgColor(color){
  var btn = document.querySelector("#btnf");
  btn.style.backgroundColor = color;
}

function randBg() {
  var bgColor, colors = new Array('#34495e', '#8e44ad', '#c0392b', '#16a085', '#d35400');
  bgColor=colors[(Math.floor(Math.random() * colors.length))];
  setBgColor(bgColor);
  btnf.innerHTML= "Color:" + bgColor;
}

function setColor(color){
  var btn2 = document.querySelector("#btns");
  btn2.style.backgroundColor = color;
}

function changeBg() {
  var bgColor, colors = new Array('#34495e', '#8e44ad', '#c0392b', '#16a085', '#d35400');
  bgColor=colors[(Math.floor(Math.random() * colors.length))];
  setColor(bgColor);
  btns.innerHTML= "Color:" + bgColor;
}

function color(color){
  var btn3 = document.querySelector("#btnt");
  btn3.style.backgroundColor = color;
}

function colorBg() {
  var bgColor, colors = new Array('red', 'yellow', 'pink', 'green', 'blue','black');
  bgColor=colors[(Math.floor(Math.random() * colors.length))];
  color(bgColor);
  btnt.innerHTML= "Color:" + bgColor;
}
// *******end

// **********active menu item
const currrentLocation = location.href;
const menuItem = document.querySelectorAll('a');
const menuLenght = menuItem.length
for(let i = 0;i<menuLenght;i++){
  if(menuItem[i].href===currrentLocation){
    menuItem[i].className="active"
  }
}
// *******end

// ************ get valu from form & shwo result
  const list = document.querySelector('#cart')

  eventlisteners()
function eventlisteners(){

  document.querySelector('#form').addEventListener('submit', addList)

  document.querySelector('#cart').addEventListener('click', removeNote)
 
}
function addList(e){
  e.preventDefault()
  const subTitle = document.querySelector('#subtitle').value

  const description = document.querySelector('#description').value

  const pic = document.querySelector('#picture').value


  const div= document.createElement('div')
  div.className = 'model'
  list.appendChild(div)

  const removeBtn = document.createElement('a')
  removeBtn.textContent = 'X'
  removeBtn.classList = 'remove-cart'
  div.appendChild(removeBtn)

  const divImg= document.createElement('div')
  divImg.className = 'div-img'
  div.appendChild(divImg)

  const picture= document.createElement('img')
  picture.src=pic
  picture.className = 'pics'
  divImg.appendChild(picture)

  const divContent= document.createElement('div')
  divContent.className = 'div-content'
  div.appendChild(divContent)

  const title= document.createElement('h1')
  title.appendChild(document.createTextNode(subTitle))
  title.className = 'name'
  divContent.appendChild(title)

  const divPara= document.createElement('div')
  divPara.className = 'div-para'
  divContent.appendChild(divPara)

  const note= document.createElement('p')
  note.appendChild(document.createTextNode(description))
  note.className = 'paragraph'
  divPara.appendChild(note)
}

function removeNote(e){
  if(e.target.classList.contains('remove-cart')){
      e.target.parentElement.remove()
  } 
}
// *******end
