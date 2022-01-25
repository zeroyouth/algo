// reduce를 써서 배열안에 홀수만 넣기!
//이런 식으로 쓰면 sort, every,some,find, findIndex, includes도 다 reduce로 구현가능

const oneTwoThree = [1,2,3];
result = oneTwoThree.reduce((acc, cur) => {
    if (cur % 2) acc.push(cur); //현재값이 홀수면 누적값에 현재값 넣어라
    return acc;
}, []); // 누적값의 초기값으로 빈 배열을 넣어줌

console.log(result); // [1, 3]