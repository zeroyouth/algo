def gcd(a, b):
    if a % b == 0:
        return b
    else:
        return gcd(b, a % b)

# 가로수 갯수와 앞에 있는 가로수
n = int(input())
a = int(input())

# 가로수 사이의 거리
arr = []
for _ in range(1, n):
    t = int(input())
    arr.append(t-a)
    a = t

# 가로수 사이의 거리의 최대 공약수
m = arr[0]
for i in arr:
    m = gcd(m, i)

# 가로수 사이의 거리에 최대 공약수를 나누면 된다. 간격//최대공약수-1
count = 0
for i in arr:
    count += i // m-1

print(count)
