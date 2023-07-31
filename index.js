const fs = require('fs');
const inquirer = require('inquirer');


let textCol = ``;
let characterInput = ``;
let shapeInput = ``;
let shapeCol = `` ;

let svg = ``;

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
  shapeFunc(response.shape);
  shapeColor(response.shapeColor) ;
  
  svgBuilder()

  writeFile(svg);
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
    shapeInput = `<circle cx="150" cy="100" r="80"`
    console.log(shapeInput);
  } else if (response === 'Square') {
    shapeInput = `<rect x="50" y="20" width="150" height="150"`
    console.log(shapeInput) ;
  } else if ( response === 'Triangle') {
    shapeInput = `<polygon points="0,0 100,0 50,100"`
    console.log(shapeInput)
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

function svgBuilder () {
  svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> 

  ${shapeInput} ${shapeCol} />

  <text x="150" y="125" font-size="60" text-anchor="middle" ${textCol}>${characterInput}</text>

</svg>`
  console.log(svg)
}

function writeFile (data) {
  fs.writeFile(`logo.svg`, data,(err)=>
  err ? console.error(err) : console.log('File Write Success!'))
  console.log("Generated logo.svg")
}

start()