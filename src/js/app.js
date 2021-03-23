const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};

function orderByProps(obj, arr) {
  const finalArr = [];
  const musor = []
  for (let value in arr) {
    for (let value2 in obj) {
      if (arr[value] == value2) {
        finalArr.push(`key: "${value2}", value: "${obj[value2]}"`)
        delete obj[value2];
      } else {
        musor.push(`key: "${value2}", value: "${obj[value2]}"`)
      }
    }
  }
  console.log(finalArr);
  console.log(musor.sort());
  
}

orderByProps(obj, ["name", "level"])
console.log(obj)
//console.log(orderByProps(obj, ["name", "level"]));