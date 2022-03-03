/*
출처 : https://programmers.co.kr/learn/courses/30/lessons/12935
문제 : 정수를 저장한 배열에서 가장 작은 수를 제거한 배열을 리턴.
 */
const solution = (arr) => {
    arr.splice(arr.indexOf(Math.min(...arr)), 1); //splice는 원본 배열 수정
    return arr.length ? arr : [-1]; //배열의 길이가 없으면, 삼항연산자를 사용
};

//풀이방법 : indexOf()와 Math.min(숫자형이 나와야 함. 따라서 Spread Operator 사용시 배열의 원소를 하나씩 펼쳐서 리턴)을 이용해서 배열의 가장 작은 수와 그 수의 배열 인덱스 찾아내기, 이후에 splice를 이용해 배열의 가장 작은 수 제거하기, 삼항연산자로 빈 배열일 경우 [-1]반환

/*기초지식 📖 : slice와 splice의 차이

- 🌟Array.slice(start[,end]): slice() 메소드는 begin부터 end 전까지의 복사본을 새로운 배열 객체로 반환한다. 원본 배열은 수정되지 않는다

1. start는 추출 시작점에 대한 인덱스임
2. end를 제외하고 그 전까지의 요소만 추출
3. undefined인 경우 0부터 slice, 
4. 반환값 : 추출한 요소를 포함한 새로운 배열
ex) var arr1 = arr.slice(3, 5); // [4, 5]

- 🌟Array.splice(start[, deleteCount[, 'item1'[, ...]]]): splice() 메소드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경한다. 이 메소드는 원본 배열 자체를 수정한다.

1. start는 배열의 변경을 시작할 인덱스
2. deleteCount는 배열에서 제거할 요소의 수(생략가능), (0이하의 수를 지정: 어떤 요소도 제거되지 않음)
3. item1, item2는 배열에 추가할 요소(생략가능). 지정하지 않는 경우 요소 제거만 수행함.
4. 반환값 : 제거한 요소를 담은 배열.

// 가장 작은 수 (최솟값), 가장 큰 수(최댓값)이 나오면 Math함수 활용하기!
- 🌟Array.indexOf(찾을 문자열, 위치(생략가능)) 함수 : 문자열에서 특정 문자열을 찾고, 검색된 문자열이 '첫번째'로 나타나는 위치 index를 리턴 
1. 찾는 문자열이 없으면 -1을 리턴.
2. 문자열을 찾을 때 대소문자를 구분함.
 */