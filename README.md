# IO-Factory

Assignments - Water Tank application, Max Profit problem

# Maximum Profit Problem

The Max Profit Problem, which requires figuring out the best mix of building kinds to maximise earnings over a specific time period, is solved by this programme.

## Problem Details

Mr. X owns a wide expanse of land in Mars Land, and he has the option of turning each plot into a theatre, bar, or business park. The amount of time and land needed for each form of building and the revenue it generates when it is occupied vary. The objective is to identify the building combination that generates the highest earnings over a specific time frame.


## Approach and Algorithm:
The problem can be solved using a dynamic programming approach. Here is a step-by-step explanation of the algorithm:

-Initialize an array, arr, with three elements representing the count of tasks: [0, 0, 0] (T: Time, P: Profit, C: Cost).
-Define a helper function, find(n), that takes the remaining time unit (n) as a parameter.
-Inside the find() function:
   *Create an array, prof, with three elements initialized to 0 to represent the potential profits for each task type.
   *Check if the remaining time unit (n) is less than 4. If so, return 0 as there are no more tasks that can be performed.
   *Calculate the potential profits (prof) for each task type based on the remaining time unit:
     *If n is greater than or equal to 4, subtract 4 from n and calculate the profit for task type T: prof[0] = (n - 4) * 1000.
     *If n is greater than or equal to 5, subtract 5 from n and calculate the profit for task type P: prof[1] = (n - 5) * 1500.
     *If n is greater than or equal to 10, subtract 10 from n and calculate the profit for task type C: prof[2] = (n - 10) * 3000.
   *Find the maximum profit from the prof array.
   *Increment the count of the corresponding task type in the arr array based on the task type with the maximum profit.
   *Recursively call the find() function with the reduced time unit and update the arr array.
   *Return the sum of the maximum profit and the recursive call to obtain the total earnings.
   
## Function Documentation:
The max_profit(n) function takes an integer n representing the available time unit as input. It returns a tuple containing the maximum earnings and a formatted string representing the count of tasks for each type (T, P, C).

Parameters:
-n (int): The available time unit.

Returns:
-earnings (int): The maximum earnings that can be obtained.
-solution (str): A formatted string representing the count of tasks for each type (T, P, C).

## Time and Space Complexity:
The time complexity of the algorithm is O(n) because the function makes recursive calls for each reduced time unit. The space complexity is O(n) as well, considering the function stack and the arr array.

## Implementation 

The challenge is solved by the programme using dynamic programming. Every time unit is iterated through, the idea of constructing a theatre, bar or business park is explored. Each option's earnings are calculated, and the option that yields the highest earnings is chosen.

The Python-based programme just has one function, max_profit(time_unit), which accepts the time unit as an input and outputs the maximum earnings and the development plan.

## Usage

Call the'max_profit' function with the desired time unit as the input to run the programme. A tuple comprising the development plan and the maximum profits will be returned.

```python
# Test cases
time_unit = 7
earnings, solution = max_profit(time_unit)
print("Time Unit:", time_unit)
print("Earnings: $", earnings)
print("Solution:", solution)

time_unit = 8
earnings, solution = max_profit(time_unit)
print("Time Unit:", time_unit)
print("Earnings: $", earnings)
print("Solution:", solution)

time_unit = 13
earnings, solution = max_profit(time_unit)
print("Time Unit:", time_unit)
print("Earnings: $", earnings)
print("Solution:", solution)
```
```output
Time Unit: 7
Earnings: $ 3000
Solution: T: 0, P: 1, C: 0
Time Unit: 8
Earnings: $ 4500
Solution: T: 1, P: 0, C: 0
Time Unit: 13
Earnings: $ 16500
Solution: T: 2, P: 0, C: 0
```

# Water Tank Problem

This is a web application that solves the water tank problem and visualizes the solution. Given a sequence of block heights, the application calculates the units of water stored and displays the result using a table representation.

## Features

- Input block heights separated by commas
- Calculates the units of water stored
- Displays the result in units
- Visualizes the water tank using a table

## Technologies Used

- HTML
- CSS
- JavaScript

## Usage

1. Clone the repository:
2. Navigate to the project directory:
3. Open the `index.html` file in a web browser.
4. Enter the block heights in the input field, separated by commas.
5. Click the "Calculate" button to calculate the units of water stored.
6. The result will be displayed, and the water tank will be visualized using a table.

## Screenshots

![Screenshot 1](https://github.com/Bhuvaneshbhuvi93/IO-Factory/blob/main/Bhuvaneshwar/IO-Factory-main/screenshots/screenshot3.JPG)
![Screenshot 2](https://github.com/Bhuvaneshbhuvi93/IO-Factory/blob/main/Bhuvaneshwar/IO-Factory-main/screenshots/screenshot4.JPG)
