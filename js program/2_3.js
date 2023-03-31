/*3. Write a JS function that generates all combinations of a string. 
Example string : 'dog'
Expected Output : d,do,dog,o,og,g*/

let fun_name = (str) => {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i+1; j < str.length + 1; j++) {

            arr.push(str.slice(i, j));
        }
    }
    return arr;
}
console.log(fun_name('dog'));

