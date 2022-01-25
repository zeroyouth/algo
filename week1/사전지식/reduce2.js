// 초기값을 안 적었을 때
// 초기값을 적지 않으면 누적값은 자동으로 0번째 인덱스의 값이 된다. 따라서 1이 됨

const oneTwoThree = [1,2,3];
//                   0 1 2
result = oneTwoThree.reduce((acc,cur,i) => {
    console.log(acc, cur, i);
    return acc + cur;
});

console.log(result);


// 1 2 1 (누적값 인덱스 0번째 값이므로 1이됨, 현재값은 0번째 다음값인 1번째 값이므로 2, 인덱스는 현재 1)
// 3 3 2 (누적값 (1+2)되서 3됨, 현재값은 인덱스2번째인 3, 인덱스는 2)  
// result 값은 따라서 6임