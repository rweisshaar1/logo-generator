const {Square} = require('../index.js');
const {Triangle} = require('../index.js');
const {Circle} = require('../index.js');

describe("Test of create Circle Class", () => {
  describe("creates a blue circle logo with red text that says BBB", () => {
    it("should create a circle based on input", () => {
      let shapeCol = `fill= "Blue"`;
      let characterInput = `BBB`;
      let textCol = `fill= "Red"`;

      let newCircle = new Circle (shapeCol, characterInput, textCol);

      expect(newCircle.svgBuilder()).toEqual(`
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> 
<circle cx="150" cy="100" r="80" fill= "Blue" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill= "Red">BBB</text>
</svg>`)
    })
  }),
  describe("creates a blue Square logo with red text that says BBB", () => {
    it("should create a Square based on input", () => {
      let shapeCol = `fill= "Blue"`;
      let characterInput = `BBB`;
      let textCol = `fill= "Red"`;

      let newSquare = new Square (shapeCol, characterInput, textCol);

      expect(newSquare.svgBuilder()).toEqual(`
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> 
<rect x="75" y="65" width="150" height="150" fill= "Blue" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill= "Red">BBB</text>
</svg>`)
    })
  }),
  describe("creates a blue Triangle logo with red text that says BBB", () => {
    it("should create a Triangle based on input", () => {
      let shapeCol = `fill= "Blue"`;
      let characterInput = `BBB`;
      let textCol = `fill= "Red"`;

      let newTriangle = new Triangle (shapeCol, characterInput, textCol);

      expect(newTriangle.svgBuilder()).toEqual(`
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> 
<polygon points="50,50 150,50 100,150" fill= "Blue" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill= "Red">BBB</text>
</svg>`)
    })
  })
})
