/*
출처 : https://www.notion.so/7-Eureka-36ea6cf52e774e38973e93a8b043db71
문제 : Eureka!
- 큐브 문제
- 6면체 모양 8진법
- 어려움.
*/

c = [[3, 0, 1, 1, 8],
[5, 0, 4, 5, 4],
[1, 5, 0, 5, 1],
[1, 2, 1, 0, 1],
[8, 2, 5, 1, 1]]

let 가중치누적값 = Array(5).fill(0).map(() => Array(5).fill(0))
console.log(가중치누적값)

for (let i = 0; i < c.length; i++) {
  for (let j = 0; j < 5; j++) {
    if (i == 0 && j == 0) {
      가중치누적값[0][0] = c[0][0]
    } else if (i == 0) {
      가중치누적값[i][j] = 가중치누적값[i][j - 1] + c[i][j]
    } else if (j == 0) {
      가중치누적값[i][j] = 가중치누적값[i - 1][j] + c[i][j]
    } else {
      가중치누적값[i][j] = Math.min(가중치누적값[i][j - 1], 가중치누적값[i - 1][j]) + c[i][j]
    }
  }
}
console.log(가중치누적값)