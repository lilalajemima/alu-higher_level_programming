#!/usr/bin/python3
import random
number = random.randint(-10000, 10000)

# To pick the last digit of a number
last_digit = abs(number) % 10

# For the last digit to keep the correct digit
if number < 0:
    last_digit *= -1

# The conditions and output
if last_digit > 5:
    print(f"Last digit of {number} is {last_digit} and is greater than 5")
elif last_digit < 6 and last_digit != 0:
    print(
        f"Last digit of {number} is {last_digit} and is less than 6 and not 0")
else:
    print(f"Last digit of {number} is {last_digit} and is 0")
