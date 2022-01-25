/*reduce 배열.reduce((누적값, 현재값, 인덱스, 요소) => {return 결과}, 초깃값);
- 이전 값이 아니라 누적값임 == 이전값이라고도 볼 수 있음. 
- 용어정리 : acc (누적값), cur(현재값) */
const oneTwoThree = [1,2,3];
          //  i값 :  0 1 2 
result = oneTwoThree.reduce((acc, cur, i) => {
    console.log(acc, cur, i);
    return acc + cur;
}, 0);

console.log(result);

// 0 1 0 (초기값 넣어줘서 누적값 0부터 시작)
// 1 2 1 (누적값 합산되서 1됨, 현재값은 배열의 인덱스 1번째 값인 2, 현재 인덱스 1)
// 3 3 2 (acc+cur 값이 누적값으로 나오니까 3, 현재 배열 값 3, 인덱스 2)
// 따라서 result 값은 (3+3 = ) 6이됨