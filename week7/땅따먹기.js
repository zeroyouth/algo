/*
출처 : https://programmers.co.kr/learn/courses/30/lessons/12913
문제 : 땅따먹기 게임의 땅은 총 n행 4열로 이루어져 있고 
칸에는 점수가 쓰여있다. 한 행씩 내려올 때, 같은 열을 연속해서 밟을 수 없는
특수 규칙이 있다. 
마지막 행까지 모두 내려왔을 때, 얻을 수 있는 점수의 최대값을 return하는 함수 완성 */

function solution(land) {
  let answer = [];
  let raw = land.length;
  //land의 행(n)만큼 반복문 돌기
  for (let i = 1; i < raw; i++) {
    //   행 열
    land[i][0] += Math.max( //본인 열을 제외한 i-1행(직전행)의 최댓값 누적 5
      land[i - 1][1], //2
      land[i - 1][2], //3
      land[i - 1][3]  //5 ✔️
    );
    land[i][1] += Math.max( //6
      land[i - 1][0], //1
      land[i - 1][2], //3
      land[i - 1][3]  //5 ✔️
    );
    land[i][2] += Math.max( //7 => 7+5=12로 가장 큼
      land[i - 1][0], //1
      land[i - 1][1], //2
      land[i - 1][3]  //5 ✔️
    );
    land[i][3] += Math.max( //8
      land[i - 1][0], //1
      land[i - 1][1], //2
      land[i - 1][2]  //3 ✔️
    );
  }

  //answer에 마지막 행 할당
  answer = land[land.length - 1]; //answer = [16,15,13,13];

  //answer의 최댓값 반환
  return Math.max(...answer); //16 반환
}

//동적 프로그래밍*으로 풀어야 함 ✏️
//* 구한 문제를 메모해놓고
// 다시 그보다 큰 문제를 풀어나갈 떄 앞서 메모한 작은 문제의 결과값 이용
// 어렵;;