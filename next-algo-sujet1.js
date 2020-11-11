let data1 = [10, 15, 3, 7];
let k1 = 17;

let data2 = [1, 8, 10, 21];
let k2= 19;

// Exercice 1

console.log("Exercice 1")

const BubbleSort = (data, key) =>{
  let comparison = 0
  for (let i = 0; i < data.length; i++){
    if (data[i] ===key){
      return true;
    }
    for (let j = i+1; j < data.length; j++) {
      comparison +=1;
      let sum = data[i] + data[j]
      if (sum == key) {
          console.log(`Nombre de comparaison : ${comparison}`)
          return true;
        };
      }
    }
    console.log(`Nombre de comparaison : ${comparison}`)
    return false;
  }

console.log(BubbleSort(data1, k1));
console.log(BubbleSort(data2, k2));

// Exercice 3

console.log("Exercice 3")

const sort=(data,key) =>{
  let comparison = 0
  const exSort = (data, key) => {
      comparison +=1
      let start = 0;
      let firstElement = data[0]
      if (data[0] === key){
        console.log(`Nombre de comparaison : ${comparison}`)
        return true;
      }
      else if (data.length<1){
        console.log(`Nombre de comparaison : ${comparison}`)
        return false
      };

      for (let i = start; i < data.length -1 ; i++){
        sum = firstElement + data[i+1]
        if(sum === key){
          console.log(`Nombre de comparaison : ${comparison}`)
          return true
        }
        else if(i == data.length -2){
          newData = data.shift()
          return exSort(data, key);
        };
    }
    console.log(`Nombre de comparaison : ${comparison}`)
    return false
  }
return exSort(data,key);
}

console.log(sort(data1, k1));
console.log(sort(data2, k2));

//Exercice 5


