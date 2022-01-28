//filter을 사용하는 방법은 3개의 인자(요소값, 인덱스, 순회하는 대상 객체)를 사용해 Boolean 값인 true또는 false값을 반환하는 함수 등록


const numbers = [1, -1, 2, 3];

// const filtered = numbers.filter(function(value) {
//     return value >= 0;
// });

const filtered = numbers.filter(value => value >= 0); //위 코드와 같음

console.log(filtered); //[1,2,3]



