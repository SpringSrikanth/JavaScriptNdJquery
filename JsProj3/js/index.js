var array =[1,25,125,0,36,45,25];

console.log(array);
array.push(25);

array.push(11);

array.push(256);

array.push(214);

array.push(14);

console.log(array);

console.log(array[2])

console.log(array[3])

console.log(array[12])

console.log(array[11])

var arr2=array.filter(arr=>arr%2==0);
console.log(arr2);

array.forEach((arr,i)=>{
console.log(i+ "-" +arr);
})

console.log("after for each");
for (let index = 0; index < array.length; index++) {
        console.log(array[index]);
}

console.log("after for of loop")
for(let item of array){
        console.log(item);
}

console.log("after for in loop")
for(let item in array){
        console.log(array[item]);
}

console.log("after map loop")
let  newArr=array.map((item,index)=>{
        return item+10;
});
console.log(newArr);

console.log(array.shift())// to get first element

console.clear();
var array2=[4,5,6]
console.log("before ---",array2);
array2.unshift(1,2,3)
console.log("after ---",array2)

array2.unshift(0);
array2.unshift(-1);
array2.unshift(-2);


//array2.unshift([5,...[array] ])

array2.unshift([array],6)



//lenght of array
console.log(array2.length);
//array of --> to create array
var av=Array.of(2,3);
console.log(av.reverse());
console.log(av.concat(array2));//to combine to arrays i am java developer

//to get last element from array
console.log(Array.of(1,2,3,4).pop());

//to sort
let colors=["red","yellow","green","aqua","light-blue"];

console.log(colors);
console.log(colors.sort());


//using slice
console.log(colors.slice(4));
console.log(colors.slice(2,4));
console.log(colors.slice(4,5));

//using fill
let numArr=[1,2,3,4,5,6]
//console.log(numArr.fill(1,5));
//console.log(numArr.fill(1,5));
//here 1 is number you have to change , 5  means index
//console.log(numArr.fill(6));
console.log(numArr.fill(1,1,5));//fill 1 from 2 to 5 position

//using includes
let charArray=[52,62,85,95,25];
console.log(charArray.includes(521));

console.log([1,5,2].includes(2,2));//
console.log([1,5,2].includes(1,5));//


console.log(colors.indexOf("red"));//

console.log(colors.find(ele=>ele=="red"));//get the  item 

console.log(colors.findIndex(ele=>ele=="red"));//get the index of item 



console.log([1,2,3,4,[5,6]].flat())//to remove single array in array of arra
console.log([1,2,3,4,[[5,6]]].flat())
console.clear();

let arr1 = [1, 2, 3, 4];
console.log(arr1.map(x => [x * 2])); 
// [[2], [4], [6], [8]]

console.log(arr1.flatMap(x => [x * 2]));
// [2, 4, 6, 8]

// only one level is flattened
console.log(arr1.flatMap(x => [[x * 2]]));
// [[2], [4], [6], [8]]
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());

console.log([1,2,3].toString());

console.log([1,2,3].toLocaleString());
console.clear();
//splice is used for replace element 
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1,0,'Feb');//here 1 means position of index ,0 means from index
months.splice(2,0,'dec');
months.splice(0,0,'oct');
months.pop();


console.log(colors.pop(colors.slice(4,5)));