n, t = map(int,input().split()) # 주문 개수와 시간
data = list(map(int,input().split()))

count = 0
summary = 0
end = 0

for _ in range(n): # start값을 증가시키는 거임.
    # end 값을 증가시키는 거
    while summary < t and end < n: # 대신 조건은 합이 시간보다 작아야하고 끝인덱스는 주문 개수보다 작아야함.
        summary += data[end] # end 인덱스값이 가리는 데이터 저장
        end += 1 # 그 후 end를 증가

        if summary <= t: # 만약 부분합이 시간과 같거나 작을 때 카운트를 센다.
            count += 1

print(count)