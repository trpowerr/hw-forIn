/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable no-param-reassign */
export const person = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};

export default function orderByProps(obj, param) {
  const paramArr = [];
  const otherParamArr = [];
  for (const objKey in obj) {
    if (obj.hasOwnProperty(objKey)) {
      if (param.includes(objKey)) {
        paramArr[paramArr.length] = { key: objKey, value: obj[objKey] };
      } else {
        otherParamArr[otherParamArr.length] = { key: objKey, value: obj[objKey] };
      }
    }
  }

  otherParamArr.sort((a, b) => a.key.localeCompare(b.key));

  return paramArr.concat(otherParamArr.sort());
}
