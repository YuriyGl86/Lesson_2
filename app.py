import time


def timer(func):
    def wrapper(*args, **kwargs):
        time_start = time.time()
        res = func(*args, **kwargs)
        time_end = time.time()

        time_delta = time_end - time_start
        print(time_delta)

        return res

    return wrapper


def is_prime_number(x):
    if x == 1:
        return False
    for i in range(2, x):
        if x % i == 0:
            return False
    return True


@timer
def primes_finder(n):
    res = []
    prime_number = 2

    while len(res) < n:
        if is_prime_number(prime_number):
            res.append(prime_number)
        prime_number += 1

    return res


print(primes_finder(30000))
