const arr = ['a', 'b', 'c'];

const arrObj = {
  0: 'a',
  1: 'b',
  2: 'c',
  abc: {
    df: [{},{}],
    def:{

    }
  }
};

// arrObj.b = '1234';
arrObj['b'] = '1234';

// console.log(arr[1]);
console.log(arrObj['b']);
console.log(arrObj.b);