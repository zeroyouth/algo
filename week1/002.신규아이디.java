/* 2021.08.31 풀었음   
    1번 문제 - 신규 아이디 추천
    정규식 사용 - java
*/

class Solution {
    public String solution(String id) {
        id  = id.toLowerCase(); // 대문자-> 소문자 치환
        id = id.replaceAll("[^a-z0-9_.-]+", "");
        id = id.replaceAll("\\.{2,}", ".");
        id = id.replaceAll("(^\\.)|(\\.$)", "");
        if (id.isEmpty()) id = "a";
        if (id.length() >= 16) {
            id = id.substring(0, 15);
            id = id.replaceAll("\\.$", "");
        }
        while (id.length() <= 2)
            id += id.charAt(id.length() -1);
        return id;
    }
}