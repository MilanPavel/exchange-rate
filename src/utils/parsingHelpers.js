export function convertDataToModel(arr) {
  let key = 0;

  if (arr) {
    return arr.map(item =>
      item
        .split('|')
        // convert array to object
        .reduce((acc, value, index) => {
          if (index === 0) {
            acc['key'] = key++;
            acc['state'] = value;
          } else if (index === 1) {
            acc['currency'] = value;
          } else if (index === 2) {
            acc['amount'] = value;
          } else if (index === 3) {
            acc['code'] = value;
          } else if (index === 4) {
            acc['rate'] = value;
          }
          return acc;
        }, {})
    );
  }
}
