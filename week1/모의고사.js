/*
출처 : https://programmers.co.kr/learn/courses/30/lessons/42840

문제 : 모의고사 
1. 수포자 삼인방이 모의고사 문제를 찍는데 답안이 주어졌을 때 가장 많이 문제를 맞힌 사람이 누구인지 배열에 담아 리턴

조건 : 문제의 정답은 1,2,3,4,5 중에 하나다.*/

function solution(answers) {

    var list = [ // 찍은 답안들이 반복되므로 배열로 저장
        [1,2,3,4,5],
        [2,1,2,3,2,4,2,5],
        [3,3,1,1,2,2,4,4,5,5]
    ]

    var score = [0,0,0] //일단 수포자 3명의 점수 초기화

    for(var i=0; i<answers.length; i++) {
        if(answers[i] === list[0][i%5]) //수포자 1의 1번 답안과 답지의 1번 비교, 답이 반복되니까 나머지로 인덱스를 줌
            score[0]++; // 정답일 때 스코어 올린다.
        if(answers[i] === list[1][i%8])
            score[1]++;
        if(answers[i] === list[2][i%10])
            score[2]++;
    };

    let max = Math.max(...score); //최대 점수 max에 저장
    let result = []; //결과 반환 배열 선언
    for (let j=0; j<score.length; j++) { //점수루프를 돌면서 최대점수과 점수가 같을 때 결과값에 push해서 반환하도록 함.
        if(score[j] === max) {
            result.push(j+1) //이때 j는 0부터 시작하므로 +1을 해줌. (수포자 인덱스)
        }
    };

    return result;
};

// 다른사람들 답에서 filter를 사용했음. 근데 filter함수가 메모리를 많이 잡아 먹기 때문에 코드작성에서는 깔끔하지만 메모리에서 비효율적이라는 평이 있음 🌟
// a 는 요소값이고, i 는 인덱스임 

function solution(answers) {
    var answer = [];
    var a1 = [1, 2, 3, 4, 5];
    var a2 = [2, 1, 2, 3, 2, 4, 2, 5]
    var a3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    var a1c = answers.filter((a,i)=> a === a1[i%a1.length]).length;
    var a2c = answers.filter((a,i)=> a === a2[i%a2.length]).length;
    var a3c = answers.filter((a,i)=> a === a3[i%a3.length]).length;
    var max = Math.max(a1c,a2c,a3c);

    if (a1c === max) {answer.push(1)};
    if (a2c === max) {answer.push(2)};
    if (a3c === max) {answer.push(3)};


    return answer;
}