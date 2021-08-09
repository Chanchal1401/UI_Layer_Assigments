function foo() {
  var x = 10;
  function inner() {
    return x;
  }
  return inner;
}

var get_func_inner = foo();
console.log(get_func_inner());
console.log(get_func_inner());

//global scope
let x = 10;
function sum(a) {
  return function sum2(b) {
    return function sum3(c) {
      //outer function scope
      return function sum4(d) {
        //local scope
        return a + b + c + d + x;
      };
    };
  };
}

let s = sum(1);
let s1 = s(2);
let s2 = s1(3);
let s3 = s2(4);

console.log(s3);
