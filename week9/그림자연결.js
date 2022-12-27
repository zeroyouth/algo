/*
22-12-27 
출처 : https://www.notion.so/5-92515913f41c4dbf9a33b659472184e6
문제 : 그림자 연결
- 데이터 : 그림자의 길이 비율 ,2진 트리 형태
- 간선들의 2진 깊이우선 탐색(DFS)
*/

graph = {
  100: new Set([67, 66]),
  67: new Set([100, 82, 63]),
  66: new Set([100, 73, 69]),
  82: new Set([67, 61, 79]),
  63: new Set([67]),
  73: new Set([66]),
  69: new Set([66, 65, 81]),
  61: new Set([82]),
  79: new Set([82, 87, 77]),
  65: new Set([69, 84, 99]),
  81: new Set([69]),
  87: new Set([79, 31, 78]),
  77: new Set([79]),
  84: new Set([65]),
  99: new Set([65]),
  31: new Set([87]),
  78: new Set([87])
};

function 깊이우선(graph, start) {
  let 방문 = [];
  let stack = [start];

  while (stack) {
    let n = 0; //다음 방문 노드
    n = stack.pop();//맨 마지막꺼 꺼냄
    if (!방문.includes(n)) {
      방문.push(n);
      let 차집합 = new Set([...graph[n]].filter(x => !(new Set(방문).has(x))));
      for (let v of 차집합) {
        stack.push(v);
      }
    }
    if (stack.length == 0) {
      break
    }
  }
  return 방문
}

function 깊이우선최댓값(graph, start) {
  let 방문 = [];
  let stack = [start];

  while (stack) {
    let n = 0; //다음 방문 노드
    n = stack.pop();
    if (!방문.includes(n)) {
      방문.push(n);
      let 차집합 = new Set([...graph[n]].filter(x => !(new Set(방문).has(x))));
      if ([...차집합].length == 0) {
        break
      }
      stack.push(Math.max(...차집합));

      console.log(`방문 : ${방문}`);
      console.log(`stack : ${stack}`);
    }
    if (stack.length == 0) {
      break
    }
  }
  return 방문
}



function 깊이우선최솟값(graph, start) {
  let 방문 = [];
  let stack = [start];

  while (stack) {
    let n = 0; //다음 방문 노드
    n = stack.pop();
    if (!방문.includes(n)) {
      방문.push(n);
      let 차집합 = new Set([...graph[n]].filter(x => !(new Set(방문).has(x))));
      if ([...차집합].length === 0) {
        break
      }
      stack.push(Math.min(...차집합));

    }
    if (stack.length == 0) {
      break
    }
  }
  return 방문
}

결과값 = 깊이우선최댓값(graph, 100);
console.log(결과값);
result = '';
for (let v of 결과값) {
  result += String.fromCharCode(v);
}
console.log(result);

결과값2 = 깊이우선최솟값(graph, 100);
console.log(결과값2);
result2 = '';
for (let v of 결과값2) {
  result2 += String.fromCharCode(v);
}
console.log(result2);

