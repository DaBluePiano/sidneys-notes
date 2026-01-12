---
draft: false
title: Year 9 Mathematics Yearly
tags:
creation_date: Monday, February 3rd 2025, 12:59:31 pm
last_edit_date: Sunday, February 23rd 2025, 7:24:35 pm
---
# Core
## Probability A (Core)
### Independent and Dependent Events
### Two-Step Events: Independent and Dependent Events

#### Independent events

Two events are _independent_ when one doesn’t affect the other.

Example: tossing a coin twice — the first toss doesn’t change what happens on the second.

Mathematically, independence means:

$$P(A∩B)=P(A)×P(B)$$

If that equation holds, then events A and B are independent.

#### Dependent events

Two events are _dependent_ when one outcome affects the other.

Example: winning first place in a race affects the chance of winning second place.

#### Replacement

When events happen one after another (like drawing two cards or marbles), you can model them using a tree diagram, which shows all possible outcomes and their probabilities.

There are two main cases:

1. With replacement:
    
    - The item is put back before the next draw.
    - Probabilities stay the same each time.
    - Each event is _independent_.
    - Example: drawing a card, putting it back, then drawing again — probability of red each time is $\frac{26}{52}=\frac{1}{2}$
2. Without replacement:
    
    - The item is _not_ put back.
    - The total number of items changes.
    - Each event is _dependent_.
    - Example: if one red card is drawn and kept, now there are 25 red and 51 total — probability of another red is $\frac{25}{51}$.

#### Summary

- Independent: one event doesn’t affect the next.
    $P(A∩B)=P(A)×P(B)$
- Dependent: one event changes the probability of the next.
- With replacement → independent.
- Without replacement → dependent.
- Tree diagrams help calculate multi-step probabilities.
### Simple Tree Diagrams

A tree diagram is a way to show all possible outcomes in experiments that have more than one stage. Each branch represents one possible event, and probabilities can be written along the branches if they’re not all equal.

The main parts of a tree diagram are:

- Branch
- Probability (if the events have different chances)
- Outcome

For example, tossing three coins gives eight possible outcomes, each with probability $\frac{1}{8}$:

TTT, TTH, THT, THH, HTT, HTH, HHT, HHH

When all branches are equally likely, you can find probabilities in two ways:

1. Count the number of favourable outcomes and divide by the total number of outcomes.
2. Use complementary events with $P(A)=1−P(\overline{A})$.

Sometimes, the choices on later branches depend on what happened earlier — for example, if something is removed and not replaced.

#### Examples

Three fair coins are tossed.

a. Find the probability of getting at least one head.

b. Find the probability of getting TTH in that order.

c. Find the probability of getting two heads and one tail in any order.

#### Summary

Tree diagrams help track multi-step experiments. Each branch shows one possible event, and together they display every possible outcome.

Use $P(A)=1−P(\overline{A})$ when working with complementary events.

### Two Step Events
#### With and without replacement

Selecting items **with replacement** means putting each item back before selecting the next one. Probabilities stay the same at each stage.

Example: A pencil case has 2 blue pens and 1 red pen.

- Probability of picking a blue pen first: $\frac{2}{3}$
- If we replace it, probability of picking a blue pen second: $\frac{2}{3}$
- Probability of two blue pens: $\frac{2}{3}×\frac{2}{3}=\frac{4}{9}$

Selecting items **without replacement** means we do **not** put the item back. Probabilities change as the items left decrease.

Example: Same pencil case. If a blue pen is picked first and **not replaced**:

- Probability of picking a blue pen second: $\frac{1}{2}$
- Probability of two blue pens: $\frac{2}{3}×\frac{1}{2}=\frac{1}{3}$

When making tree diagrams **without replacement**, update the probabilities after each selection to reflect what’s left.

#### Summary

- With replacement: put the item back before next selection → probabilities stay the same.
- Without replacement: don’t put the item back → probabilities change.
- For tree diagrams without replacement, only include options still available after each selection.
### Multi-stage Events $A \cap B$

#### Tree diagrams with probabilities

Tree diagrams can show all possible outcomes in experiments, but sometimes outcomes aren’t equally likely. In these cases, the probabilities are written on the branches.

The probabilities along each trial should sum to 1 (or 100%) to ensure all outcomes are included.

To find the probability of an outcome, multiply the probabilities along the branches from left to right.

Example: A child has $P(D)=0.7$ of getting home during the day and $P(N)=0.3$ at night, over three days:

- $P(DDD)=0.7×0.7×0.7=0.343$
- $P(DDN)=0.7×0.7×0.3=0.147$

Adding the probabilities of all possible outcomes should equal 1.

When constructing tree diagrams **without replacement**, update the probabilities after each selection to reflect what’s left.

#### Multiply probabilities

We can find the probability of a multi-stage event by multiplying the probabilities at each stage. This works even if we don’t draw the full tree diagram.

- For experiments **with replacement**, probabilities at each stage stay the same.
- For experiments **without replacement**, probabilities at later stages depend on previous outcomes.

#### Summary

- Tree diagrams can include probabilities for outcomes that aren’t equally likely.
- Multiply along the branches to get the probability of a specific outcome.
- Add the probabilities of all outcomes to check they sum to 1 (or 100%).
- For experiments without replacement, adjust probabilities at each stage based on previous selections.
- You can multiply probabilities step by step instead of drawing the whole tree diagram.
## Equations A (Core)
### Two and Three Step Equations

#### Two and three-step equations

We solve two and three-step equations by applying **inverse operations** in reverse order to both sides of the equation.

Example:

$$4x+7=314$$

- Original operations: multiply by 4, add 7
- Reverse operations: subtract 7, divide by 4

Another example:

$$7(y+6)=49$$

- Original operations: add 6, multiply by 7
- Reverse operations: divide by 7, subtract 6

For three-step equations, follow the same idea but with more steps.

Example:

$$\frac{6x-14}{2}=38$$

- Original operations: multiply by 6, subtract 14, divide by 2
- Reverse operations: multiply by 2, add 14, divide by 6
- Solution: $x=15$

Check your answer by substituting it back into the original equation.

#### Formulas and word problems

- When using **formulas**, substitute known values and solve for the unknown variable.
- In **word problems**, create an equation from the scenario before solving.
- Clearly define what each variable represents.
- It can help to write an equation in words first, then translate it algebraically.

Example of writing in words first:

$$\text{Total cost}=(\text{Flat fee}+ \text{Number of hours} × \text{Cost per hour}) × \text{Tax rate}$$

Then algebraically:

$$167.75=(100+h×17.50)×1.1$$

#### Summary

- Solve two and three-step equations by applying inverse operations in reverse order.
- Always do the same operation to both sides of the equation.
- For formulas and word problems, define the variables clearly.
- After solving, express the answer with the correct units and in the context of the problem.
### Expanding Brackets
### Expanding Brackets

#### Expanding Single Brackets

To expand a single bracket, multiply the term outside the bracket by **each term inside**:

$$a(b + c) = ab + ac$$

Example:

$$3(x + 4) = 3x + 12$$

#### Expanding Double Brackets

To expand two brackets, multiply each term in the first bracket by each term in the second bracket:

$$(x + a)(x + b) = x \cdot x + x \cdot b + a \cdot x + a \cdot b = x^2 + (a+b)x + ab$$

Example:

$$(x + 2)(x + 3) = x^2 + 3x + 2x + 6 = x^2 + 5x + 6$$

#### Expanding with Negatives

Be careful with negative signs. Multiply the negative term as you would any other term:

$$(x - 2)(x + 5) = x^2 + 5x - 2x - 10 = x^2 + 3x - 10$$

#### Summary
- Multiply the term outside a single bracket by every term inside.
- For double brackets, multiply **every term in the first bracket** by **every term in the second bracket**.
- Combine like terms carefully.
- Watch out for negative signs; distribute them across all terms.
### Pronumerals on Both Sides

#### Equations with variables on both sides

When solving equations with variables (pronumerals) on both sides, we can still use inverse operations to isolate the variable. Sometimes, the variable appears in more than one term.

#### Steps to solve
1. Expand brackets if needed.
2. Move all variable terms to **one side** of the equation by adding or subtracting.
3. Combine like terms to simplify the equation.
4. Apply inverse operations to isolate the variable.

#### Special Cases
- If the variable term is the same on both sides, they cancel out. This can result in:

**No solution:**

$$
\begin{aligned}
4x + 3 &= 4x + 5 \\
4x - 4x + 3 &= 4x - 4x + 5 \\
3 &\neq 5
\end{aligned}
$$

No solution exists.

**Infinite solutions (true for any value of $x$):**

$$
\begin{aligned}
4x + 3 &= 4x + 3 \\
4x - 4x + 3 &= 4x - 4x + 3 \\
3 &= 3
\end{aligned}
$$

This is always true, so the equation has infinitely many solutions.

### Substitution
#### What is substitution?

Substitution is a method used to solve equations or evaluate expressions by replacing a variable with a given value.

#### Steps for substitution
1. Identify the variable(s) that need to be replaced.
2. Replace each variable with the given number or expression.
3. Follow the order of operations (BIDMAS/BODMAS) to simplify.
4. Write the final value as the answer.

#### Examples

**Example 1:**
Evaluate $3x + 5$ when $x = 4$.

$$
\begin{aligned}
3x + 5 &= 3(4) + 5 \\
       &= 12 + 5 \\
       &= 17
\end{aligned}
$$

**Example 2:**
Evaluate $2a - b$ when $a = 6$ and $b = 3$.

$$
\begin{aligned}
2a - b &= 2(6) - 3 \\
       &= 12 - 3 \\
       &= 9
\end{aligned}
$$

**Example 3:**
If $y = 2x + 1$ and $x = 5$, find $y$.

$$
\begin{aligned}
y &= 2x + 1 \\
  &= 2(5) + 1 \\
  &= 10 + 1 \\
  &= 11
\end{aligned}
$$

#### Summary
- Substitution means replacing variables with known values.
- Always follow the order of operations.
- Useful for evaluating expressions, formulas, and checking solutions to equations.

### Worded Questions

## Linear Relationships B (Core)
### Gradient Intercept Form

#### The gradient-intercept form of a line

All linear equations can be written in the form:

$$y = mx + c$$

where:

- $m$ is the gradient
- $c$ is the $y$-value of the $y$-intercept

For the gradient $m$:

- If $m < 0$, the gradient is negative and the line is decreasing.
- If $m > 0$, the gradient is positive and the line is increasing.
- If $m = 0$, the gradient is 0 and the line is horizontal.
- The larger the magnitude of $m$, the steeper the line.

For the $y$-intercept $c$:

- If $c > 0$, the line crosses the $y$-axis above the origin.
- If $c < 0$, the line crosses the $y$-axis below the origin.

An equation of the form $y = mx + c$ is called the gradient-intercept form because we can easily identify both the gradient $m$ and the $y$-intercept $c$.

#### Idea summary

For all equations in gradient-intercept form $y = mx + c$:

- The value of $m$ is the gradient. The larger the value of $m$, the steeper the line. An increasing line has a positive gradient, and a decreasing line has a negative gradient.
- The value of $c$ is the $y$-value of the $y$-intercept. The line passes through the point $(0,c)$.

#### Finding the equation of a line from a graph

To find the equation of a line from a graph:

1. Find the gradient $m$ using the coordinates of any two points on the line:

$$m = \frac{y_2 - y_1}{x_2 - x_1}$$

2. Identify the $y$-intercept by finding where the line crosses the $y$-axis. The coordinates will be $(0,c)$, but only $c$ is needed.
3. Write the equation in the form:

$$y = mx + c$$

#### Example

Find the equation of a line whose gradient is $-8$ and $y$-intercept is $-9$:

$$y = -8x - 9$$

#### Idea summary

We can find the equation of a line in the form $y = mx + c$ by identifying:

- The gradient $m$ from two points on the line
- The $y$-value of the $y$-intercept $c$

### *Coordinate Geometry (Path)

#### Overview

Coordinate geometry problems use the skills of linear relationships, line segments, gradients, midpoints, and distance between points. We can apply these formulas to analyze points, lines, and shapes in 2D space.

#### Equation of a line

A line can be written in **gradient-intercept form**:

$$
y = mx + c
$$

where:

- $m$ is the gradient
- $c$ is the $y$-intercept
- $(x, y)$ is a point on the line

We can also find the **x-intercept** by setting $y = 0$ and the **y-intercept** by setting $x = 0$.

#### Gradient

- **Positive gradient:** line rises from left to right
- **Negative gradient:** line falls from left to right
- **Zero gradient:** horizontal line, $y = c$
- **Undefined gradient:** vertical line, $x = b$

Gradient formula:

$$
m = \frac{\text{rise}}{\text{run}} = \frac{y_2 - y_1}{x_2 - x_1}
$$

where $(x_1, y_1)$ and $(x_2, y_2)$ are two points on the line.

- **Parallel lines:** same gradient ($m_1 = m_2$)
- **Perpendicular lines:** gradients are negative reciprocals ($m_1 \cdot m_2 = -1$)

#### Midpoint

The midpoint $M$ of two points $A(x_1, y_1)$ and $B(x_2, y_2)$:

$$
M = \left( \frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2} \right)
$$

#### Distance between two points

The distance $d$ between $(x_1, y_1)$ and $(x_2, y_2)$:

$$
d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}
$$

#### Using these tools

Coordinate geometry problems often involve:

- Finding gradients of line segments
- Checking if lines are parallel or perpendicular
- Calculating midpoints
- Calculating distances between points
- Analysing properties of 2D figures (triangles, quadrilaterals, etc.)

These formulas can be applied to find lengths, areas, and classifications of shapes.

#### Idea summary

- **Midpoint formula:**

$$
M = \left( \frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2} \right)
$$

- **Gradient formula:**

$$
m = \frac{y_2 - y_1}{x_2 - x_1}
$$

- **Distance formula:**

$$
d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}
$$

- **Parallel lines:** same gradient
- **Perpendicular lines:** gradients are negative reciprocals ($m_1 \times m_2 = -1$)

### Horizontal and Vertical Lines
#### Horizontal Lines

A **horizontal line** is a straight line that runs parallel to the $x$-axis.

- All points on a horizontal line have **different $x$-coordinates** but the **same $y$-coordinate**.
- The equation of any horizontal line is:

$$
y = c
$$

where $c$ is the $y$-intercept.

- There is **no change in $y$** as $x$ increases or decreases, meaning the gradient is $0$.
- The $x$-axis itself is a horizontal line where every point has $y = 0$, so its equation is:

$$
y = 0
$$

**Gradient of a Horizontal Line**

Since gradient is defined as:

$$
m = \frac{\text{rise}}{\text{run}}
$$

and the rise is $0$ for a horizontal line,

then:

$$
m = 0
$$

**Example**

A line passing through $(1, 4)$, $(3, 4)$, and $(6, 4)$ has the same $y$-coordinate for all points.

Hence the equation is:

$$
y = 4
$$

#### Vertical Lines

A **vertical line** is a straight line that runs parallel to the $y$-axis.

- All points on a vertical line have **different $y$-coordinates** but the **same $x$-coordinate**.
- The equation of a vertical line is:

$$
x = b
$$

where $b$ is the $x$-intercept.

- There is **no change in $x$** as $y$ increases or decreases.
- The $y$-axis itself is a vertical line where every point has $x = 0$, so its equation is:

$$
x = 0
$$

**Gradient of a Vertical Line**

Since gradient is:

$$
m = \frac{\text{rise}}{\text{run}} = \frac{\Delta y}{\Delta x}
$$

and the run ($\Delta x$) is $0$ for a vertical line,

then the gradient is **undefined** because division by $0$ is not possible.

**Example**

A line passing through $(-3, 8)$, $(-3, 3)$, and $(-3, -3)$ has the same $x$-coordinate for all points.

Hence the equation is:

$$
x = -3
$$

#### Gradients of Horizontal and Vertical Lines

| Type of Line | Equation | Gradient ($m$) |
|---------------|-----------|----------------|
| Horizontal | $y = c$ | $0$ |
| Vertical | $x = b$ | Undefined |

**Example**

Points $A(3,1)$, $B(3,-4)$, and $C(1,-4)$:

- $AB$ is a **vertical line** ($x=3$), so $m$ is **undefined**.
- $BC$ is a **horizontal line** ($y=-4$), so $m=0$.
#### Summary

- **Horizontal lines:** $y = c$ where $m = 0$
- **Vertical lines:** $x = b$ where $m$ is undefined
- **$x$-axis:** $y = 0$
- **$y$-axis:** $x = 0$

# Path
## Equations B (Path)
### Monic Quadratic Trionomials
#### The Null Factor Law

If the product of two or more factors equals zero, at least one of the factors must equal zero.

If $xy = 0$, then either $x = 0$ or $y = 0$.

For a quadratic in factorised form, such as

$$0 = (x - x_1)(x - x_2)$$

then either

$$x - x_1 = 0$$

or

$$x - x_2 = 0$$

so

$$x = x_1 \text{ or } x = x_2$$

#### Summary

If $(x - a)(x - b) = 0$, then $x = a$ or $x = b$.

#### Solve by Factorisation

When a quadratic equation is factorised, such as

$$y = (x - x_1)(x - x_2)$$

setting $y = 0$ gives the $x$-intercepts.

Using the null factor law,

$$(x - x_1)(x - x_2) = 0$$

means that

$$x = x_1 \text{ or } x = x_2$$

Equations like $ax^2 + bx = 0$ can be factorised to

$$x(ax + b) = 0$$

Then by the null factor law:

$$x = 0 \text{ or } ax + b = 0$$

$$x = 0 \text{ or } x = -\frac{b}{a}$$

#### Solve Quadratic Trinomials

A quadratic expression with three terms, $ax^2 + bx + c$, is called a quadratic trinomial.

If $a = 1$, it is called a **monic quadratic trinomial**.

To factorise a monic quadratic trinomial $x^2 + bx + c$, find numbers $p$ and $q$ such that:

$$b = p + q$$

$$c = pq$$

Then the expression can be rewritten as:

$$x^2 + bx + c = x^2 + (p + q)x + pq$$

$$= x^2 + px + qx + pq$$

$$= x(x + p) + q(x + p)$$

$$= (x + q)(x + p)$$

#### Summary

To factorise $x^2 + bx + c$:

- Find $p$ and $q$ so that $p + q = b$ and $pq = c$.
- The factorised form is $(x + p)(x + q)$.

To solve $x^2 + bx + c = 0$:

$$(x + p)(x + q) = 0$$

By the null factor law:

$$x = -p \text{ or } x = -q$$

### *Factorise non-monic quadratic trinomials*
### Cubic Equations
#### Solve Two-step Quadratic Equations

To solve two-step quadratic equations, we apply inverse operations in reverse order to both sides.

For equations of the form $x^2 = k$:

- **Two solutions** if $k > 0$ → $x = \sqrt{k}$ and $x = -\sqrt{k}$
- **One solution** if $k = 0$ → $x = 0$
- **No solutions** if $k < 0$ because the square of a real number cannot be negative

Example process:

Given

$$x^2 - 6 = 30$$

Add 6 to both sides:

$$x^2 = 36$$

Take the square root of both sides:

$$x = \pm 6$$

#### Summary

To solve two-step quadratic equations:

- Use inverse operations to isolate the pronumeral.
- The inverse of squaring is taking the positive and negative square root.
- There may be two, one, or no solutions depending on the value of $k$.

For $x^2 = k$:

\[

\begin{aligned}

k > 0 &\Rightarrow x = \pm \sqrt{k} \\

k = 0 &\Rightarrow x = 0 \\

k < 0 &\Rightarrow \text{no real solution}

\end{aligned}

\]

#### Solve Two-step Cubic Equations

We can also solve cubic equations using inverse operations.

For example:

$$x^3 + 8 = 35$$

Subtract 8 from both sides:

$$x^3 = 27$$

Take the cube root of both sides:

$$x = 3$$

For $x^3 = k$, there is **only one real solution** because:

$$(\sqrt[3]{k})^3 = k \quad \text{and} \quad (-\sqrt[3]{k})^3 = -k$$

The cube of a negative number is negative, so cube roots work for both positive and negative numbers.

#### Summary
- Solving cubic equations uses the same inverse operation principle.
- The inverse of cubing is taking the cube root.
- Every cubic equation $x^3 = k$ has exactly one real solution.
### Linear Inequalities
#### Solve Linear Inequalities

We solve inequalities just like equations, except that the inequality sign flips direction when we multiply or divide by a negative number.

Example: Solve and plot

$$2(3 + x) < 8$$

$$2(3 + x) < 8$$

$$3 + x < 4 \quad \text{(divide both sides by 2)}$$

$$x < 1 \quad \text{(subtract 3 from both sides)}$$

To check, substitute values:

For $x = 0$: $2(3 + 0) = 6 < 8$ → true

For $x = 2$: $2(3 + 2) = 10 < 8$ → false

So $x < 1$ is correct. On a number line, draw a hollow circle at $x = 1$ and shade left (since $<$ excludes 1).

#### Example 1

Solve $3x + 1 > 4$.

$$3x + 1 > 4$$

$$3x > 3$$

$$x > 1$$

On a number line: hollow circle at 1, shade right.

#### Example 2

Solve $15 > 5(2 - a)$.

$$15 > 10 - 5a$$

$$5 > -5a$$

$$-1 < a \quad \text{(divide both sides by -5 and flip the sign)}$$

So $a > -1$.

#### Example 3

“2 less than 4 groups of $p$ is no more than 18.”

Construct the inequality:

$$4p - 2 \le 18$$

$$4p \le 20$$

$$p \le 5$$

Largest possible value of $p$: 5.

#### Check Solutions to a Linear Inequality

To test if a value satisfies an inequality, substitute it and check if the statement is true.

Example: Does $t = 6$ satisfy $3t - 5 < 12$?

$$3(6) - 5 = 13 \not< 12$$

No, $t = 6$ does not satisfy the inequality.

#### Summary
- Solve inequalities like equations.
- Flip the inequality sign when multiplying or dividing by a negative.
- Use a hollow circle for $<$ or $>$, and a solid circle for $\le$ or $\ge$.
- To check a specific value, substitute it into the inequality.
## Linear Relationships C (Path)
### Midpoint
#### Midpoint Formula

The midpoint of any two points lies exactly halfway between their $x$-coordinates and halfway between their $y$-coordinates.

We can find it by taking the average of both coordinates.

$$M = \left( \frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2} \right)$$

Where:

- $(x_1, y_1)$ = first endpoint
- $(x_2, y_2)$ = second endpoint

#### Example 1

Find the midpoint $M$ of $A(-2, 7)$ and $B(3, -1)$.

$$M = \left( \frac{-2 + 3}{2}, \frac{7 + (-1)}{2} \right) = \left( \frac{1}{2}, 3 \right)$$

So, $M\left( \frac{1}{2}, 3 \right)$.

#### Example 2

$(6, -9)$ is the midpoint of $A(4, -6)$ and $B(x, y)$. Find the coordinates of $B$.

$$6 = \frac{4 + x}{2} \quad \Rightarrow \quad x = 8$$

$$-9 = \frac{-6 + y}{2} \quad \Rightarrow \quad y = -12$$

So, $B(8, -12)$.

#### Summary

For points $A(x_1, y_1)$ and $B(x_2, y_2)$, the midpoint $M$ is found using

$$M = \left( \frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2} \right)$$

### Gradient Formula
#### Gradient Formula

The **gradient** of a line represents how steep the line is — how much it rises or falls for every unit of horizontal change.

We can calculate it using two points on the line.

$$m = \frac{y_2 - y_1}{x_2 - x_1}$$

Where:

- $m$ = gradient (slope)
- $(x_1, y_1)$ = first point
- $(x_2, y_2)$ = second point

#### Example

Find the gradient of the line that passes through $A(3, 5)$ and $B(-2, 10)$.

$$m = \frac{10 - 5}{-2 - 3} = \frac{5}{-5} = -1$$

The line has a **negative gradient**, meaning it slopes downwards from left to right.

#### Summary

For any two points $(x_1, y_1)$ and $(x_2, y_2)$,

the gradient is given by

$$m = \frac{y_2 - y_1}{x_2 - x_1}$$

### Distance Formula
#### Distance Formula

The **distance** between two points $(x_1, y_1)$ and $(x_2, y_2)$ on a Cartesian plane can be found using the Pythagorean theorem. Create a right-angled triangle with sides:

$$a = x_2 - x_1$$

$$b = y_2 - y_1$$

Then the length of the hypotenuse $d$ (the distance between the points) is:

$$d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$

Where:

- $d$ = distance between the two points
- $(x_1, y_1)$ = first point
- $(x_2, y_2)$ = second point

#### Example

Find the distance between $A(-2, -9)$ and $B(2, -14)$.

$$d = \sqrt{(2 - (-2))^2 + (-14 - (-9))^2} = \sqrt{4^2 + (-5)^2} = \sqrt{16 + 25} = \sqrt{41} \approx 6.40$$

#### Summary

The distance formula generalises finding the straight-line distance between any two points:

$$d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$

### Other forms of linear equations
#### General Form

A line in **gradient-intercept form** is:

$$y = mx + c$$

where $m$ is the gradient and $c$ is the $y$-intercept.

The **general form** of a line is:

$$ax + by + c = 0$$

- $a$ is positive
- $a, b, c$ are integers
- Gradient and $y$-intercept are not immediately visible

**Intercepts:**
- $x$-intercept: set $y = 0$ and solve for $x$
- $y$-intercept: set $x = 0$ and solve for $y$

#### Point-Gradient Formula

Gradient between two points $(x_1, y_1)$ and $(x_2, y_2)$:

$$m = \frac{y_2 - y_1}{x_2 - x_1}$$

Equation using a point $(x_1, y_1)$ and gradient $m$:

$$y - y_1 = m(x - x_1)$$

- $m$ = gradient
- $(x_1, y_1)$ = point on the line

#### Examples

**Example 1:** Convert $3x - 9y - 27 = 0$ to gradient-intercept form.

$$3x - 9y - 27 = 0 \implies -9y = -3x + 27 \implies y = \frac{1}{3}x - 3$$

Gradient: $m = \frac{1}{3}$

$y$-intercept: $c = -3$

**Example 2:** Convert $y = 4x - 8$ to general form.

$$y - 4x + 8 = 0 \implies -4x + y + 8 = 0$$

**Example 3:** Sketch $2x + 3y - 12 = 0$ using intercepts.

- $x$-intercept: $y = 0 \implies 2x - 12 = 0 \implies x = 6$
- $y$-intercept: $x = 0 \implies 3y - 12 = 0 \implies y = 4$

**Example 4:** Line through $(2,-7)$ and $(-5,6)$.

Gradient:

$$m = \frac{6 - (-7)}{-5 - 2} = \frac{13}{-7} = -\frac{13}{7}$$

Equation using point-gradient formula:

$$y - (-7) = -\frac{13}{7}(x - 2) \implies y + 7 = -\frac{13}{7}(x - 2)$$

### Line and Rotational Symmetry
#### Line Symmetry
- A shape has **line symmetry** if it looks the same before and after a reflection.
- A **line of symmetry** (or axis of symmetry) is a line that reflects a shape onto itself.
- Lines of symmetry always pass through the centre of the shape if it is regular.
- Shapes with no lines of symmetry are called **asymmetric**.

**Examples:**
- A square has 4 lines of symmetry: vertical, horizontal, and two diagonals.
- A rhombus has 2 lines of symmetry (along its diagonals).
- Irregular shapes may have no lines of symmetry.

#### Rotational Symmetry
- A shape has **rotational symmetry** if it can be rotated less than $360^\circ$ and still match its original position.
- The point around which the rotation occurs is the **centre of rotation**.
- **Order of rotational symmetry** = number of times a shape matches its original position in a full $360^\circ$ rotation.

**Examples:**
- Square: rotate $90^\circ$, $180^\circ$, $270^\circ$, $360^\circ$ → order 4
- Equilateral triangle: rotate $120^\circ$, $240^\circ$, $360^\circ$ → order 3
- Right triangle: only matches at $360^\circ$ → order 1

**Worked Examples:**
1. **V-shape:** line symmetry only
2. **Irregular polygon:** neither line nor rotational symmetry
3. **Square with triangles on each side:** both line and rotational symmetry

**Summary:**
- **Line symmetry:** reflected shape overlaps original
- **Rotational symmetry:** rotated shape overlaps original
- **Centre of rotation:** point about which rotation occurs
- **Order of rotational symmetry:** number of overlaps in $360^\circ$ rotation
### Transformations
#### Translations

##### What is a Translation?
- A **translation** is a type of transformation where a shape moves **up, down, left, right, or a combination** of these directions.
- Think of it as **sliding a shape across a page** without rotating or flipping it.
- The **size, shape, and orientation** of the object do not change during a translation.

##### Describing a Translation
- Choose a point on the shape (often a corner).
- Count the number of units it moves **horizontally** (left or right) and **vertically** (up or down).
- Example: Triangle $A$ moved 4 units to the right → Triangle $B$.

##### Notation
- Translation can be written as $(x, y) \to (x + a, y + b)$, where:
  - $a$ = horizontal shift (positive = right, negative = left)
  - $b$ = vertical shift (positive = up, negative = down)

##### Examples
1. **Point Translation:** Move a point 11 units left and 9 units down:
   $(x, y) \to (x - 11, y - 9)$

2. **Shape Translation:** Translate figure $A$ 3 units right and 1 unit down:
   Each point $(x, y)$ of $A$ moves to $(x + 3, y - 1)$ to form figure $B$.

##### Key Points
- Translations **do not change** size, shape, or rotation.
- Only the **position** of the object changes.
#### Reflections
##### What is a Reflection?
- A **reflection** is formed by **flipping an object or point** over a line called the **line of reflection**.
- The line of reflection can be **horizontal, vertical, or diagonal**.
- The reflected image is a **mirror image** of the original object.

##### Key Properties
- The reflected image is the **same size** as the original.
- The reflected image **faces the opposite direction**.
- **Corresponding points** on the original and reflected object are the **same distance from the line of reflection**.

##### How to Determine a Reflection
- Check the distance of key points from the line of reflection.
- If corresponding points are **equidistant** from the line, a reflection has occurred.

##### Example
- Triangle $A$ is reflected across the $y$-axis → forms triangle $B$.
- Each vertex of $A$ has a corresponding vertex on $B$ at the same distance from the $y$-axis.

##### Summary
- Reflections **flip a shape** over a line.
- The shape **stays the same size** but **changes direction**.
- Use distances from the line of reflection to identify corresponding points.
#### Rotations
##### What is a Rotation?
- A **rotation** is a transformation where a shape is **turned about a fixed point** called the **centre of rotation**.
- The centre of rotation can be the **origin**, a point on the shape, or a point outside the shape.

##### Key Properties
- The size of the shape **does not change**.
- The rotated image **faces a different direction**.
- Corresponding points on the shape and its image form the **same angle** with the centre of rotation.

##### How to Perform a Rotation
1. Identify the **centre of rotation**.
2. Determine the **angle of rotation**.
3. Decide the **direction**: clockwise or anticlockwise.
4. Use a protractor to measure angles from the centre of rotation to each vertex.
5. Connect the rotated points to form the rotated shape.

##### Example
- Rotate a triangle **90° clockwise about the origin**:
  - Each vertex forms a 90° angle with the origin compared to the original triangle.
  - The rotated triangle is the same size but faces a different direction.
- Rotate a shape **180° clockwise about point A**:
  - Each vertex is turned 180° around point A, maintaining distances and angles relative to the centre.

##### Summary
- Rotations **turn a shape around a point**.
- The **size stays the same**, but the orientation changes.
- Corresponding points **maintain the same angles** with respect to the centre of rotation.
#### Multiple Transformations
##### What Are Multiple Transformations?
- A shape can be transformed **more than once**.
- Performing transformations **one after another** is called a **composition of transformations**.
- The **order matters**: changing the order can result in a different final position.

##### Key Points
1. **Translation + Reflection**
   - Translating first, then reflecting, may end up in a different position than reflecting first, then translating.
2. **Rotation + Translation**
   - Rotating a shape and then translating it can give a different result than translating first and then rotating.
3. **Rotation + Reflection**
   - The final orientation and position depend on the order of operations.

##### Steps to Apply Multiple Transformations
1. Identify the **first transformation** and apply it to all points.
2. Take the resulting points and apply the **next transformation**.
3. Repeat for all transformations in the list, **in the given order**.
4. Keep track of vertices with labels or ticks to avoid confusion.

##### Examples
- **Example 1:** Translate a point 5 units down, then rotate 90° anticlockwise about the origin.
- **Example 2:** Rotate point A 90° clockwise about the origin to get B, then translate B so it aligns vertically with A.
- **Example 3:** Rotate a shape 180° clockwise about the origin, then reflect it across the y-axis.

##### Summary
- Multiple transformations are done **in sequence**.
- **The order affects the result**—the same transformations in a different order can produce a different final position or orientation.
- Always apply transformations **step by step** and track points carefully.
