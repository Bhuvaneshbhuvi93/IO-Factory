# IO-Factory

Assignments - Water Tank application, Max Profit problem

# Maximum Profit Problem

The Max Profit Problem, which requires figuring out the best mix of building kinds to maximise earnings over a specific time period, is solved by this programme.

## Problem Details

Mr. X owns a wide expanse of land in Mars Land, and he has the option of turning each plot into a theatre, bar, or business park. The amount of time and land needed for each form of building and the revenue it generates when it is occupied vary. The objective is to identify the building combination that generates the highest earnings over a specific time frame.

## Implementation 

The challenge is solved by the programme using dynamic programming. Every time unit is iterated through, the idea of constructing a theatre, bar or business park is explored. Each option's earnings are calculated, and the option that yields the highest earnings is chosen.

The Python-based programme just has one function, max_profit(time_unit), which accepts the time unit as an input and outputs the maximum earnings and the development plan.

## Usage

Call the'max_profit' function with the desired time unit as the input to run the programme. A tuple comprising the development plan and the maximum profits will be returned.

```python
time_unit = 7
earnings, developed = max_profit(time_unit)
print("Time Unit:", time_unit)
print("Earnings: $", earnings)
print("Development Plan:", developed)
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

![Screenshot 1](https://github.com/Bhuvaneshbhuvi93/IO-Factory/blob/main/screenshots/screenshot3.JPG)
![Screenshot 2](https://github.com/Bhuvaneshbhuvi93/IO-Factory/blob/main/screenshots/screenshot4.JPG)
