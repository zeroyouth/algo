import math
'''
약수의 성질을 이용한 소수찾기
: 모든 약수가 가운데 약수를 기준으로 곱셈 연산에 대해 대칭을 이룬다.
따라서 우리는 가운데 약수까지만 확인을 하면 된다.
1 2 4 8 16 => 16의 제곱근 4
1 2 3 6 12 18 36 => 36의 제곱근 6
'''

def is_prime_number(x):
    for i in range(2, int(math.sqrt(x)) + 1): # 2부터 x의 제곱근까지의 모든 수를 확인하며
        if x % i == 0: # x 가 해당 수로 나누어 떨어진다면
            return False # 소수가 아님
    return True # 소수임

print(is_prime_number(4))
print(is_prime_number(7))