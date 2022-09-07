/*
22-09-07
출처 : https://www.notion.so/a5a0fafe306e4cb78ec4476a272d156d?v=e116f6cdc6e34075bf8e4c0e56429a26&p=0243c9d83a234e70b6e9d357a57bda21&pm=s
문제 : 출력조건 문자열
'   + -- + - + -   '
'   + --- + - +   '
'   + -- + - + -   '
'   + - + - + - +   '
*/

let data = ['   + -- + - + -   ',
  '   + --- + - +   ',
  '   + -- + - + -   ',
  '   + - + - + - +   '];

let answer = '';

for (let s of data) {
  console.log(s.replace(/ /g, '').replace(/\+/g, '1').replace(/-/g, '0'));
  console.log(Number(s.replace(/ /g, '').replace(/\+/g, '1').replace(/-/g, '0'))); console.log(parseInt(s.replace(/ /g, '').replace(/\+/g, '1').replace(/-/g, '0'), 2));
  console.log(String.fromCharCode(parseInt(s.replace(/ /g, '').replace(/\+/g, '1').replace(/-/g, '0'), 2)));

  answer += String.fromCharCode(parseInt(s.replace(/ /g, '').replace(/\+/g, '1').replace(/-/g, '0'), 2));
};

console.log(answer);

/*
알아야하는거 : 
- 아스키코드 번호 -> 문자열변환 (fromCharCode) , 반대의 경우(charCodeAt)
- 정규표현식 작성:  / /g, /\+/
  참고 : https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-%EC%A0%95%EA%B7%9C%EC%8B%9D-RegExp-%EB%88%84%EA%B5%AC%EB%82%98-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-%EC%89%BD%EA%B2%8C-%EC%A0%95%EB%A6%AC
*/