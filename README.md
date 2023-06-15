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
