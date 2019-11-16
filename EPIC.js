
//TODO add buttons and input field for custom options
//TODO create image file
//TODO create image file with custom size

var option = {
  bgColor : {
    r: 255,
    g: 255,
    b: 255
  },
  inline: true,
  symetric: true,
  rotation : {
    allowed: true,
    maxRotation: 45,
    minRotation: -45,
    step: 2
  },
  text: {
    size: 20,
    spacing: 2
  }
};

const WIDTH = document.getElementById('js_box').clientWidth;
const HEIGHT = document.getElementById('js_box').clientHeight;

var emoji = '🍟';

function setup() {
  var canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent('js_box');
  background(option.bgColor.r,option.bgColor.g,option.bgColor.b);
  push();
  translate(option.text.size,option.text.size);
  generatePreview();
  pop();
}

function getRotation() {
  let array = [option.rotation.maxRotation,option.rotation.minRotation];
  let diff = option.rotation.maxRotation - option.rotation.minRotation;
  diff = diff / option.rotation.step;
  for(let i = 1; i < option.rotation.step; i++){
    array.push(option.rotation.minRotation + diff * i); 
  }
  return array[Math.floor(Math.random()*array.length)];
}

function createElement(x,y) {
  push();
  translate(x,y);
  textAlign(CENTER,CENTER);
  rotate( radians(getRotation()) );
  textSize(option.text.size);
  text(String(emoji), 0,0);
  pop();
}

function generatePreview() {
  if(option.symetric){
    let disX = option.text.size * option.text.spacing; 
    let disY = disX;
    if(option.inline){
      let y = 0;
      while(y < HEIGHT + disY){
        let x = 0;
        while(x < WIDTH + disX){
          createElement(x,y);
          x += disX;
        }
        y += disY;
      }
    }else{
      //TODO add option for inline = false
    }
  }else{
    //TODO rnd pattern without overlapping
  }
}
