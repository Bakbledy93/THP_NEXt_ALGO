let data1 = [3, 7, 8, 3, 6, 1];
let data2 = [1, 4, 5, 8];
let data3 = [3, 7, 8, 3, 6, 1, 2, 2];
let data4 = [1];
let data5 = [3, 7, 8, 3, 6, 1, 2, 7];



// Exercice 2
console.log("Exercice 2")

const BubbleSort = (data) =>{
  let comparison = 0
  let res = 0;
  for (let i = 0; i < data.length; i++) {
    let count = 0 ;
    for (let j = i+1; j < data.length; j++) {
      comparison +=1
      if (data[i] <= data[j]) {
        count ++ ;
      }
    }
    if(count === 0){
      res ++;
    }
  }
  console.log(`Nombre de comparaison : ${comparison}`)
  return res;
}

console.log(BubbleSort(data1));
console.log(BubbleSort(data2));
console.log(BubbleSort(data3));
console.log(BubbleSort(data4));
console.log(BubbleSort(data5));



// Exercice 4

console.log("Exercice 4")

const exercice4 = (data)=>{
  const arr = data.slice()
  let count = 0
  const sort1 = (arr) =>{
    let max  = Math.max(...arr);
    count +=1
    for(let i = 0; i<arr.length; i++){
      if (arr.indexOf(max) === arr.length-1){
      };

      if(arr.indexOf(arr[0])<arr.indexOf(max) && arr.length > 1){
        arr.splice(arr.indexOf(arr[0]),1)
      };

      if (arr.indexOf(arr[0])===arr.indexOf(max)&& arr.length > 1){
        if(!(arr.length == 2 && arr[0]==arr[1])){
          arr.splice(arr.indexOf(arr[0]),1)
          return sort1(arr)
        }
      };
    };
  return count
  }
  sort1(arr);
  return count
}

console.log(exercice4(data1));
console.log(exercice4(data2));
console.log(exercice4(data3));
console.log(exercice4(data4));
console.log(exercice4(data5));

// Exercice 6

console.log("Exercice 6")
const sort = (array) => {
  const arr = array.slice()
  let count = 1
  let max = arr[arr.length - 1]
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] > max) {
      max = arr[i]
      count += 1
    }
  }
  return count
} 

console.log(sort(data1));
console.log(sort(data2));
console.log(sort(data3));
console.log(sort(data4));
console.log(sort(data5));
