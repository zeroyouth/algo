// reduce로 비동기 프로그래밍 할 때
const promiseFactory = (time) => {
    return new Promise((resolve, reject) => {
        console.log(time);
        setTimeout(resolve, time);
    });
};

[1000, 2000, 3000, 4000].reduce((acc, cur) => {
    return acc.then(() => promiseFactory(cur)); //2. return된 프로미스에 then을 붙여 다음 누적값으로 넘기면 됩니다. 이렇게 하면 프로미스가 순차적으로 실행됨을 보장할 수 있다. 
}, Promise.resolve()); //1. 초기값을 Pormise.resovle()로 하고 

//바로 1000
//1초후 2000
//2초후 3000
//3초후 4000

// 반복되는 모든 것에 reduce를 쓸 수 있다는 것을 기억하시오!