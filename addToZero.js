// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]
let array2 = [2,4,1,4,-6,-7,-2]
let array3 = [0, 1, 2, 3, 4, 5]

// Write your solution below:

/* Given an array of numbers, console.log true if any two numbers in the array add to zero, otherwise log false.

For example:

[1, 4, 11, 2, 37, -4] should log true because 4 and -4 add to 0.

[0, 21, 33, 6, 0, -9] should log true because 0 and 0 add to 0.

[0, 1, 2, 3, 4, 5] should log false because no two numbers add to 0.

*/
let value = false
const zeroCheck = (array) =>{
    for (let x = 0; x < array.length; x++){
            for (let y = 0; y < array.length; y++){
                if (x !== y){
                    if(array[x] +array[y] === 0){
                        return value = true
                    }
                }
            }
        }
}

// zeroCheck (array)

console.log(value)