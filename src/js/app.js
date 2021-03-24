const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};

function orderByProps(obj, arr) {
  const finalArr = [];
  const musor = []
  for (let value in arr) {
    for (let value2 in obj) {
      if (arr[value] == value2) {
        finalArr.push(`key: "${value2}", value: "${obj[value2]}"`)
        delete obj[value2];
      }   
    }
  }
  for(let value in obj) {
    musor.push(`key: "${value}", value: "${obj[value]}"`)
  }

  return finalArr.concat(musor.sort())
}

orderByProps(obj, ["name", "level"])
