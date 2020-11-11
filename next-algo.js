const fs = require('fs');

const fileName = process.argv[2];
let ArrayData = []

// Méthode synchrone
try {
    const data = fs.readFileSync(fileName, 'utf8');
    ArrayData = data.split(' ');
} catch (error) {
    console.error(error.message);
}

// Tri à bulle

const BubbleSort = (data) =>{
  console.log(data);
  let comparison = 0

  for (let i = 0; i < data.length; i++){
    for (let j = 0; j < data.length; j++) {
        if (data[j] > data[j+1]) {
          comparison +=1;
          let tmpArray = data[j];
          data[j] = data[j+1];
          data[j+1] = tmpArray
        }
      }
    }
    console.log(`Tri à bulle : ${comparison}`)
    console.log(data)
    return data
  }

BubbleSort(ArrayData);

// Tri à Insertion

const InsertionSort = (data) => {
  let comparison = 0

  for (let i = 0; i < data.length; i++){
    let tmpArray = data[i];
    let j = i - 1

    while ( j>=0 && data[j]>tmpArray){
      data[j+1] = data[j];
      j = j-1;
    }
    comparison +=1

    data[j+1] = tmpArray;
  }
  console.log(`Tri à insertion : ${comparison}`)
  console.log(data)
  return data
};

InsertionSort(ArrayData);

const SelectionSort = (data) =>{
  let comparison = 0
  let dataLength = data.length
  for (let i = 0; i < dataLength; i++) {
    let min = i;
    for (let j = i +1; j<dataLength; j++){
      comparison +=1
      if (data[j] < data[min]) {
        min = j;
      }
    }
      if (min!==i){
        let tmpArray = data[i];
        data[i]=data[min];
        data[min] = tmpArray;
      }
  }
  console.log(`Tri à selection : ${comparison}`)
  console.log(data)
  return data
};

SelectionSort(ArrayData);

const qSort = (data) =>{
  let comparison = 0
  const quickSort = (data) => {
    comparison +=1
    if (data.length === 1){
      console.log(`Tri rapide : ${comparison}`)
      return data;
    }
    const leftArr = [];
    const rightArr = [];
    const pivot = data[data.length-1];
    for (let i = 0; i < data.length -1 ; i++){
      if (data[i]>pivot){
        rightArr.push(data[i]);
      }
      else{
        leftArr.push(data[i]);
      }
    }

    if (leftArr.length>0 && rightArr.length>0){
      return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
    }else if(leftArr.length>0){
      return [...quickSort(leftArr), pivot];
    }else{
      return [pivot, ...quickSort(rightArr)];
    }
  };
  quickSort(data);
  return data
}

console.log(qSort(ArrayData));

const fileName2 = process.argv[3];
let ArrayData2 = []

// Méthode synchrone
try {
    const data = fs.readFileSync(fileName2, 'utf8');
    ArrayData2 = data.split(' ');
} catch (error) {
    console.error(error.message);
}

BubbleSort(ArrayData2);
InsertionSort(ArrayData2);
SelectionSort(ArrayData2);
console.log(qSort(ArrayData2));



