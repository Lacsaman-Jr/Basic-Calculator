def answer(num):
    index = 0
    # Get the first number
    num[index] = float(input("Enter a number: "))  # equivalent to cin >> num[index]
    
    while True:
        operate = input("Enter operator (+, -, *, /): ")  # equivalent to cin >> operate
        if operate not in ['+', '-', '*', '/']:
            print("Invalid operator, please try again.")
            continue
        
        index += 1
        num[index] = float(input(f"Enter another number for operation {operate}: "))  # equivalent to cin >> num[index]
        index += 1
        
        # Perform the operation
        if operate == '/':
            num[index] = num[index - 2] / num[index - 1]
        elif operate == '*':
            num[index] = num[index - 2] * num[index - 1]
        elif operate == '-':
            num[index] = num[index - 2] - num[index - 1]
        elif operate == '+':
            num[index] = num[index - 2] + num[index - 1]
        
        # Check if user presses Enter to stop
        if input("Press Enter to stop or type any key to continue: ") == '':
            break
    
    return num[index]

def main():
    num = [0] * 1000  # Create a list with 1000 zeros (equivalent to the array in C++)
    result = answer(num)
    print(f"The result is: {result}")

if __name__ == "__main__":
    main()
