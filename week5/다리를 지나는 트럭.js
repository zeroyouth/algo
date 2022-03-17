/*
출처 : https://programmers.co.kr/learn/courses/30/lessons/42583
문제 : 트럭이 다리를 지나야하는데 다리길이와, 다리 무게, 트럭 무게가 주어지고 트럭이 순서대로 최단 시간 안에 다리를 건너는 solution 함수를 완성하기  */

function solution(bridge_length, weight, truck_weights) {
    //answer은 걸린 시간
    let answer = 0;
    //현재 다리 상태
    let now_bridge = [];
    //현재 다리 무게
    let now_bridge_weight = [];

    for(let i=0; i<bridge_length; i++){ //현재 다리 상태를 0으로 초기화
        now_bridge.push(0);
    }
    //now_truck : 현재 다리를 지나가는 트럭
    let now_truck = truck_weights.shift(); //트럭 무게 중에 앞에꺼 제거하기 
    
    //현재 다리 상태에 현재 다리를 지나는 트럭을 넣고 다리 상태 pop, 차 이동방향을 왼에서 오른쪽으로 생각
    now_bridge.unshift(now_truck); //왼쪽에 추가
    now_bridge.pop(); //[7,0,0,0]=> [7,0,0] 뒤쪽 제거

    //현재 다리 무게에 현 트럭무게 추가
    now_bridge_weight += now_truck;

    //그런 다음 시간 증가
    answer++;
    
    //현재 다리 무게가 0이면 트럭이 다 지나간 것임.
    while(now_bridge_weight){ 
        now_bridge_weight -= now_bridge.pop(); //현 다리 무게에서 현재 다리에 있는 무게 뺌 -> 트럭이 지나간걸 의미

        now_truck = truck_weights.shift(); //다리를 안 건넌 트럭을 빼고,
        if(now_truck + now_bridge_weight<=weight){ //현재 트럭에서 다리 무게가 제한무게보다 작거나 같을 때만
            now_bridge.unshift(now_truck);
            now_bridge_weight += now_truck;
        }
        else{
            now_bridge.unshift(0);
            truck_weights.unshift(now_truck);
        }
        answer++;
    }
    return answer;

}
//shift 메서드는 0번째 위치의 요소를 제거 하고 연이은 나머지 값들의 위치를 한칸 씩 앞으로 당깁니다. 그리고 제거된 값을 반환 합니다. (*참고 : pop은 배열의 뒤쪽 제거)
/*const array1 = [1, 2, 3];
const firstElement = array1.shift();
console.log(array1); //[2,3]
*/