/*
출처 : https://programmers.co.kr/learn/courses/30/lessons/43165
문제 : n개의 음이 아닌 정수들의 순서를 바꾸지 않고 적절히 더하거나 빼서 타겟넘버 만들기 숫자를 적절히 더하고 빼서 타켓 넘버를 만드는 방법의 수를 return */

function solution(numbers, target) {
    let answer = 0;

    dfs(0, 0); //초기화

    function dfs(index, sum) {
        if(index === numbers.length) {// 인덱스가 배열의 길이랑 같을 때까지 자식노드 내려감
            if(sum === target) { //합계가 target과 같을 때 answer에 더해줌
                answer++;
            }
        return;
        }

        dfs(index + 1, sum + numbers[index]); //재귀 과정으로 진행 (+)
        dfs(index + 1, sum - numbers[index]); //(-)
    }

    return answer;
}

//  트리모양을 생각하면서 풀이한다. DFS 알고리즘을 이용하면 모든 경우의 수를 탐색 할 수 있다. 일단 최상위 노트에 연결된 자식 노드를 모두 탐색한 후, 더 이상 자식 노드가 없을 때 인접한 상위노드의 형제노드 방문  일단 모든 숫자가 +인 경우를 모두 탐색한 뒤 다음 인덱스의 숫자가 -인 경우를 탐색함. (+)의 자식 노드 탐색 → (-)의 자식 노드 탐색 순서로 위 과정이 진행되며, index 1이(-)일 때의 자식 노드의 경우의 수(+), (-) 를 모두 탐색하면 해당 함수가 종료된다.
//참고 : https://jjnooys.medium.com/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%ED%83%80%EA%B2%9F-%EB%84%98%EB%B2%84-javascript-1d7983d423b5

/*
학습 노트 📖
깊이 우선 탐색 (DFS, Depth-First Search)
: 루트 노드에서 시작해서 다음 분기로 넘어가기 전에 해당 분기를 완벽하게 탐색하는 방법
- 미로를 탐색할 때 한 방향으로 갈 수 있을  때까지 계속 가다가 더 이상 갈 수 없게 되면 다시 가장 가까운 갈림길로 돌아와서 이곳으로부터 다른 방향으로 다시 탐색을 진행하는 방법
- 즉 넓게 탐색하기 전에 깊게 탐색하는 것임.
- 사용하는 경우 : 모든 노드를 방문하고자 하는 경우에 이 방법을 선택함.
- 깊이우선탐색DFS이 너비우선탐색BFS보다 좀 더 간단하다.

깊이 우선 탐색의 특징 
: 자기자신을 호출하는 순환 알고리즘의 형태를 가지고 있다. 
이 알고리즘을 구현할 때 가장 큰 차이점은 그래프 탐색의 경우 어떤 노드를 방문했었는지 여부를 반드시 검사해야한다는 것이다. -> 무한루프의 위험이 있기 때문

깊이 우선 탐색(DFS)의 구현
: 1. 순환 호출 이용 
💝2. 명시적인 스택 사용(명시적인 스택을 사용하여 방문한 정점들을 스택에 저장하였다가 다시 꺼내어 작업한다.)
 */