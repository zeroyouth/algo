/*
출처 : https://www.notion.so/6-8d5c183dd3d84df7b4dbf10bb9803b73
문제 : 밭의 비밀 (행렬)
- 꽃 마다 번호 다름 0~7
- 2개의 텃밭, 하나는 90도 회전된 방향
*/

let sample = []

let 밭1 = [
  [1, 0, 0, 0, 0],
  [0, 0, 1, 0, 1],
  [0, 0, 1, 0, 1],
  [0, 0, 1, 0, 1],
  [0, 0, 1, 0, 1]
]

let 밭2 = [
  [0, 0, 0, 0, 1],
  [0, 0, 0, 0, 3],
  [0, 0, 0, 0, 4],
  [0, 2, 0, 0, 2],
  [4, 5, 0, 2, 0]
]

for (let i = 0; i < 밭1.length; i++) {
  sample[i] = new Array(밭1[0].length)
}

for (let i = 0; i < 밭2.length; i++) {
  for (let j = 0; j < 밭2[0].length; j++) {
    sample[i][j] = 밭2[j][밭2[0].length - 1 - i];
    sample[i][j] += 밭1[i][j]
  }
}

/*
0, 4 => 0, 0
1, 4 => 0, 1
2, 4 => 0, 2
3, 4 => 0, 3
4, 4 => 0, 4

0, 3 => 1, 0
1, 3 => 1, 1
2, 3 => 1, 2
3, 3 => 1, 3
4, 3 => 1, 4

0, 3 => 1, 0
1, 3 => 1, 1
2, 3 => 1, 2
3, 3 => 1, 3
4, 3 => 1, 4

0, 2 => 2, 0
1, 2 => 2, 1
2, 2 => 2, 2
3, 2 => 2, 3
4, 2 => 2, 4

*/
console.log(sample);
result = '';
for (let v of sample) {
  result += String.fromCharCode(parseInt(v.join(''), 8));
}

console.log(result);