/*6. Write a JS function that input a number and return square & qube of number in aray. */
let sq_cube=(arr)=>{
    let array1=[]
    root =Math.pow(arr,2)
    array1.push(root)
    cube =Math.pow(arr,3)
    array1.push(cube)

    console.log(array1)


}
sq_cube(5)
