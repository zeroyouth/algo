/*
출처 : https://programmers.co.kr/learn/courses/30/lessons/42586
문제 : 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발 될 수 있고, 이때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포된다. 
먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 progresses와 각 작업의 개발 속도가 적힌 정수 배열 speeds가 주어질 때 각 배포마다 몇 개의 기능이 배포되는지를 return */

function solution(progresses, speeds) {
    var answer = [];
    let days = progresses.map((progress,i)=> Math.ceil((100-progress)/speeds[i])); //요일이니까 올림이 필요함!  
    let count = 1; //배포 개수는 최소 1개부터
    let value = 0; //배포되는 기능 수 
    for(let i =1; i<days.length; i++){
        if(days[value] >= days[i]){ //만약 days[0]이 days[1]보다 크거나 같으면 => 앞에 있는 기능의 기간이 뒤에 있는 기능 기간보다 클 때 카운터를 늘린다. 즉 n개 기능이 배포될 수 있음
            count += 1;
        } else{ //뒤의 기능 요일이 더 걸릴 경우, 배포 요일 달라짐
            answer.push(count);
            value += count //value에다가 count값 더하기
            count = 1; //count 값은 다시 돌려놓음.
        }

        if( i == days.length -1){ //for문 돌다가 인덱스가 마지막까지 돌았다면 
            answer.push(count) //count값을 push함.
        }
    }
    return answer;
}

/*
Math.ceil() : 올림
Math.round() : 반올림
Math.floor() : 내림 */