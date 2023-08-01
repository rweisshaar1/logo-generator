const fs = require('fs');
const inquirer = require('inquirer');


let textCol = ``;
let characterInput = ``;
let shapeCol = `` ;

function start (){
inquirer 
  .prompt([  
  {
    type: 'input',
    message: 'Please Enter three characters for your logo?',
    name: 'characters'
  },
  {
    type: 'input',
    message: 'What color would you like the text to be?',
    name: 'characterColor'
  },
  {
    type: 'list',
    message: 'What shap would you like:',
    name: 'shape',
    choices: ['Circle', 'Triangle', 'Square']
  },
  {
    type: 'input',
    message: 'What color would you like the shape to be?',
    name: 'shapeColor'
  },
])
.then((response) => {
  createLogo (response)})
}

function createLogo (response) {
  text(response.characters);
  textColor(response.characterColor);
  shapeColor(response.shapeColor) ;
  shapeFunc(response.shape);

}

function text (response) {

  if (response.length <= 3){
    characterInput = response 
    console.log(characterInput);

  } else if (response.length >= 4 ) {
    console.log("Please Enter no more than 3 Characters") ;
    start();
  } else if (response === '') {
    console.log("Please Enter 3 Characters");
    start() ;
  }
}

function textColor (response) {
  if (response === '') {
    console.log('Please enter a text color')
    start()
  } else {
    textCol = `fill= "${response}"`
    console.log(textCol);
  }
}

function shapeFunc (response) {
  if (response === 'Circle') {
    const newCircle = new Circle (shapeCol, characterInput, textCol) ;
    writeFile( newCircle.svgBuilder() );
  } else if (response === 'Square') {
    const newSquare = new Square (shapeCol, characterInput, textCol)
    writeFile( newSquare.svgBuilder() );
  } else if ( response === 'Triangle') {
    const newTriangle = new Triangle (shapeCol, characterInput, textCol)
    writeFile( newTriangle.svgBuilder() );
  }
}

function shapeColor (response) {
  if (response === '') {
    console.log('Please enter a shape color')
    start()
  } else {
    shapeCol = `fill="${response}"`
    console.log(shapeCol);
  }
}

class Circle {
  constructor(shapeCol, texts, textCol){
    this.shapeCol = shapeCol ;
    this.texts = texts;
    this.textCol = textCol ;
  }
  svgBuilder() {
  return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> 
<circle cx="150" cy="100" r="80" ${this.shapeCol} />
<text x="150" y="125" font-size="60" text-anchor="middle" ${this.textCol}>${this.texts}</text>
</svg>`
  }
}

class Square {
  constructor(shapeCol, texts, textCol){
    this.shapeCol = shapeCol ;
    this.texts = texts;
    this.textCol = textCol ;
  }
  svgBuilder() {
  return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> 
<rect x="75" y="65" width="150" height="150" ${this.shapeCol} />
<text x="150" y="125" font-size="60" text-anchor="middle" ${this.textCol}>${this.texts}</text>
</svg>`
  }
}

class Triangle {
  constructor(shapeCol, texts, textCol){
    this.shapeCol = shapeCol ;
    this.texts = texts;
    this.textCol = textCol ;
  }
  svgBuilder() {
  return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> 
<polygon points="50,50 150,50 100,150" ${this.shapeCol} />
<text x="150" y="125" font-size="60" text-anchor="middle" ${this.textCol}>${this.texts}</text>
</svg>`
  }
}

function writeFile (data) {
  fs.writeFile(`logo.svg`, data,(err)=>
  err ? console.error(err) : console.log('File Write Success!'))
  console.log("Generated logo.svg")
}


module.exports = {Square, Triangle, Circle}


start()