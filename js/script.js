// Created by: Everett
// Created on: March 2023
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates the distance of a line.
 */
function calculate () {
  // input
  let ValueX1 = parseFloat(document.getElementById('number-x1').value);
  let ValueX2 = parseFloat(document.getElementById('number-x2').value);
  let ValueY1 = parseFloat(document.getElementById('number-y1').value);
  let ValueY2 = parseFloat(document.getElementById('number-y2').value);
  // process
  let ValueX =  ValueX2 - ValueX1
  let ValueY =  ValueY2 - ValueY1
  let FinnalX = ValueX ** 2
  let FinnalY = ValueY ** 2
  let FinnalXY = FinnalX + FinnalY
  let Distance = Math.sqrt(FinnalXY);
  
  // output
  document.getElementById('Slope-of-Line').innerHTML = 'The distance of the line is ' + Distance.toFixed(2)
  

}
