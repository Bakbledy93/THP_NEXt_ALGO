const fs = require('fs');

// Méthode synchrone
try {
    const fileName = process.argv[2];
    const fileName2 = process.argv[3];

    const data = fs.readFileSync(fileName, 'utf8');
    const ArrayData = data.split(' ').filter((item)=>!isNaN(item)).map((number)=>parseInt(number, 10));

    const data2 = fs.readFileSync(fileName2, 'utf8');
    const ArrayData2 = data2.split(' ').filter((item)=>!isNaN(item)).map((number)=>parseInt(number, 10));

    // Tri Fusion

const mergeSort = (data) =>{
  let comparison = 0 ;

  const mgSort = (data) =>{
    comparison +=1;
    const middle = Math.floor(data.length/2);
    const leftArr = data.slice(0,middle);
    const rightArr = data.slice(middle);

    if (data.length <=1){
      console.log(`Tri fusion : ${comparison}`)
      return data
    }else{
      return merge(
        mgSort(leftArr),
        mgSort(rightArr)
      )
    };
  }

  const merge = (data1, data2)=>{
    let resultArray = [], leftIndex = 0, rightIndex = 0;

    while (leftIndex < data1.length && rightIndex < data2.length){
      if(data1[leftIndex]<data2[rightIndex]){
        resultArray.push(data1[leftIndex]);
        leftIndex++;
      }else{
        resultArray.push(data2[rightIndex]);
        rightIndex++;
      }
    }
    return [...resultArray, ...data1.slice(leftIndex), ...data2.slice(rightIndex)];
  }
  
  return mgSort(data)
}

// console.log(mergeSort(ArrayData));
// console.log(mergeSort(ArrayData2));

//Tri Cocktail

const cocktailShakerSort = (data) =>{
  let comparison = 0;
  let exchange = false;
  let start = 0;
  let end = data.length ;

  while(!exchange ){
    exchange = true;
    comparison +=1;
    for (let i = start; i<end; i++){
            for (let j = 0; j < data.length; j++) {
              if(data[i]>data[i+1]){
                comparison +=1
                let tmpArray = data[i];
                data[i] = data[i+1];
                data[i+1] = tmpArray;
                exchange = false;
            }
        }
      }

      end --;
      let j = end;

    while(j>start){
        if(data[j]>data[j+1]){
          comparison +=1
          let tmpArray = data[j];
          data[j] = data[j+1];
          data[j+1] = tmpArray;
          exchange = false;
        }
        j-=1;
      }
      start ++;
  };
  console.log(`Tri Cocktail : ${comparison}`)
  return data
};

console.log(cocktailShakerSort(ArrayData));
console.log(cocktailShakerSort(ArrayData2));


const combSort = (data)=> {
  let comparison = 0
  let interval = Math.floor(data.length/1.3);
  while (interval > 0) {
    for(let i=0; i+interval<data.length; i+=1) {
      comparison +=1
      if (data[i] > data[i+interval]) {
        let small = data[i+interval];
        data[i+interval] = data[i];
        data[i] = small;
      }
    }
    interval = Math.floor(interval/1.3);
  }
  console.log(`Tri à Peigne : ${comparison}`)
  return data;
};

console.log(combSort(ArrayData));
console.log(combSort(ArrayData2));


} catch (error) {
    console.error(error.message);
}




