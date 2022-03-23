/*
출처 : https://programmers.co.kr/learn/courses/30/lessons/12969
문제 : 두 개의 정수 n,m이 주어질 때 별(*)문자를 이용해 가로의 길이가 n 세로의 길이가 m인 직사각형 형태를 출력
 */

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);

    const row = "*".repeat(a) //a 만큼 * 반복
    for (let i = 0; i < b; i++) {// 위 과정을 b만큼 반복 
        console.log(row);
    }
});

/*
별찍기는 반복문에 익숙해지기 위한 훈련

for(let star = 1; star <= 5; star += 1) {
    console.log('*'.repeat(star))
}

>*
>**
>***
>****
>*****


for(let star = 9; star >= 1; star -= 2) {
    console.log(' '.repeat((9 - star) / 2) + '*'.repeat(star))    
}

>*********
> *******
>  *****
>   ***
>    *
*/
