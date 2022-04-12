'''
구간합 빠르게 계산하기
- 접두사 합: 배열의 맨 앞부터 특정 위치까지의 합을 미리 구해놓은 것
1. 접두사 합을 계산하여 리스트에 저장
2. M개의 쿼리 정보를 확인할때 구간 합은 P[Right]-P[Left-1]입니다.
공식임!
'''

# 데이터의 개수 N과 데이터 입력받기
n = 5
data = [10, 20, 30, 40, 50]

# 접두사 합(Prefix Sum) 배열 계산
sum_value = 0
prefix_sum = [0]
for i in data:
    sum_value += i
    prefix_sum.append(sum_value)
print(prefix_sum)

# 특정한 구간 합 계산(3번째부터 4번째 수까지 더하라)
left = 3
right = 4
print(prefix_sum[right] - prefix_sum[left-1])