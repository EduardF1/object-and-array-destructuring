import React from "react";
import ReactDOM from "react-dom";
import cars from "./models/practice";
//import animals, {useAnimals} from "./models/data";
// import {Animal} from "./models/animal";

// Destructure array, equivalent to `const cat = animals[0]`, `const dog = animals[1]`
// console.log(animals);
//const  [cat, dog] = animals;
// console.log(cat);

// Destructure object, equivalent to cat.name and cat.sound
// const {name, sound} = cat;
// console.log(sound);

// Destructure object, providing alternative property names (use case: wrong names in API retrieved values)
// const {name: catName, sound: catSound} = cat;
// console.log(catSound);

// Destructure object, provide default values
// const {name = 'Bullet', sound = 'Pow' } = cat;
// console.log(name);

const [honda, tesla] = cars;
const {speedStats: {topSpeed:hondaTopSpeed, zeroToSixty:hondaZeroToSixty}} = honda;
const {speedStats: {topSpeed:teslaTopSpeed, zeroToSixty:teslaZeroToSixty}} = tesla;
const {coloursByPopularity: hondaTopColour} = honda;
const {coloursByPopularity: teslaTopColour} = tesla;


ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
