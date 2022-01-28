/*
조건을 충족하는 요소가 여러 개라면 `배열.filter(함수)`를 사용하면 됩니다.
filter는 find와 문법이 유사하지만, 조건에 맞는 요소 전체를 담은 배열을 반환한다는 점에서 차이가 있습니다.*/

let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
];

// 앞쪽 사용자 두 명을 반환합니다.
let someUsers = users.filter(item => item.id < 3);

console.log(someUsers); // Jone과 Pete 배열이 나온다.