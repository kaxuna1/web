//http://www.codewars.com/dojo/katas/5244b0588978473f9500002b/play/javascript
/*
Given an object with an arbitrary number of properties, any number of which may be objects or arrays, replace all occurrences of the string "dynamic" with a given string.
*/


function solution (data, replace) {
  for(key in data){
      if(key==="dynamic"){
          data[key]=replace;
      }else{
         
      }
  }
    return data;
}