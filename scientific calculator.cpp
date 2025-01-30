#include <iostream>
#include <cmath>
using namespace std;

double answer(double num[], int SIZE) {
    int index = 0;
    char operate;

    cin >> num[index]; // First number input
    do {
        cin >> operate; // Operation input
        index++;
        cin >> num[index]; // Next number input
        index++;

        if (operate == '/')          { num[index] = num[index - 2] / num[index - 1]; }
        else if (operate == '*')     { num[index] = num[index - 2] * num[index - 1]; }
        else if (operate == '-')     { num[index] = num[index - 2] - num[index - 1]; }
        else if (operate == '+')     { num[index] = num[index - 2] + num[index - 1]; }
        else if (operate == '^')     { num[index] = pow(num[index - 2], num[index - 1]); }
        else if (operate == '%')     { num[index] = fmod(num[index - 2], num[index - 1]); }
        else if (operate == 'r')     { num[index] = sqrt(num[index - 1]); index--; } // Square root
        else if (operate == 'l')     { num[index] = log(num[index - 1]); index--; }  // Natural log
        else if (operate == 'L')     { num[index] = log10(num[index - 1]); index--; } // Log base 10
        else if (operate == 's')     { num[index] = sin(num[index - 1]); index--; }  // Sine
        else if (operate == 'c')     { num[index] = cos(num[index - 1]); index--; }  // Cosine
        else if (operate == 't')     { num[index] = tan(num[index - 1]); index--; }  // Tangent

    } while (cin.get() != '\n');

    return num[index];
}

int main() {
    const int SIZE = 1000;
    double num[SIZE] = {0};
    
    cout << "\nScientific Calculator Commands:\n";
    cout << " + : Addition\n";
    cout << " - : Subtraction\n";
    cout << " * : Multiplication\n";
    cout << " / : Division\n";
    cout << " ^ : Exponentiation\n";
    cout << " % : Modulus\n";
    cout << " r : Square Root\n";
    cout << " l : Natural Logarithm (ln)\n";
    cout << " L : Logarithm Base 10\n";
    cout << " s : Sine\n";
    cout << " c : Cosine\n";
    cout << " t : Tangent\n";
    
    cout << "\nEnter your calculation:\n";
    cout << "Result: " << answer(num, SIZE) << endl;
    return 0;
}