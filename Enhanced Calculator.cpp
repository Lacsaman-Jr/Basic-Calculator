#include <iostream>
using namespace std;

double answer (double num[], int SIZE)
{
	int index = 0;
	char operate;
	
	cin >>num [index]; //5
	do{
		
		cin >> operate;//+
		index++;
		cin >>num [index]; //4
		index++;
		
		if (operate == '/')      	{num[index] = num [index - 2] / num[index - 1];}
		else if (operate == '*') 	{num[index] = num [index - 2] * num[index - 1];}
		else if (operate == '-') 	{num[index] = num [index - 2] - num[index - 1];}
		else if (operate == '+') 	{num[index] = num [index - 2] + num[index - 1];}
		
	} while (cin.get() != '\n');
	
	return num[index];
}

int main()
{
	const int SIZE = 1000;
	double num[SIZE] = {0};
	cout << answer(num, SIZE);
	return 0;
}