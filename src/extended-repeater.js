import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let string = String(str);
  let repeatTimes = options.repeatTimes;
  let separator = options.separator;
  let addition = options.addition;
  let additionRepeatTimes = options.additionRepeatTimes;
  let additionSeparator = options.additionSeparator;

  if (repeatTimes === undefined) {
    let separator = '+';
    let additionSeparator = '|';
    let addString = Array(additionRepeatTimes).fill(addition); 
    let addArray = addString.join(additionSeparator);
    let superString = `${string}${addArray}`;
    let array = Array(repeatTimes).fill(superString);
    return array.join(separator);
  }

  else if (string === 'null') {
    let addition = 'null';
    let addString = Array(additionRepeatTimes).fill(addition); 
    let addArray = addString.join(additionSeparator);
    let superString = `${string}${addArray}`;
    let array = Array(repeatTimes).fill(superString);
    return array.join(separator);
  }

  else if (separator === undefined && additionSeparator === undefined){
    let separator = '+';
    let additionSeparator = '|';
    let addString = Array(additionRepeatTimes).fill(addition); 
    let addArray = addString.join(additionSeparator);
    let superString = `${string}${addArray}`;
    let array = Array(repeatTimes).fill(superString);
    return array.join(separator);
  }

  else if (separator === undefined) {
    let separator = '+';
    let addString = Array(additionRepeatTimes).fill(addition); 
    let addArray = addString.join(additionSeparator);
    let superString = `${string}${addArray}`;
    let array = Array(repeatTimes).fill(superString);
    return array.join(separator);
  }

  else if (addition === undefined) {
  let array = Array(repeatTimes).fill(string);
  return array.join(separator);
  }

  else if (additionRepeatTimes === undefined) {
    let additionSeparator = '|';
    let additionRepeatTimes = 1;
    let addString = Array(additionRepeatTimes).fill(addition); 
    let addArray = addString.join(additionSeparator);
    let superString = `${string}${addArray}`;
    let array = Array(repeatTimes).fill(superString);
    return array.join(separator);
  }

   else if (additionSeparator === undefined) {
    let additionSeparator = '|';
    let addString = Array(additionRepeatTimes).fill(addition); 
    let addArray = addString.join(additionSeparator);
    let superString = `${string}${addArray}`;
    let array = Array(repeatTimes).fill(superString);
    return array.join(separator);
  }

  else {
    let addString = Array(additionRepeatTimes).fill(addition); 
    let addArray = addString.join(additionSeparator);
    let superString = `${string}${addArray}`;
    let array = Array(repeatTimes).fill(superString);
    return array.join(separator);
  }
   
}
