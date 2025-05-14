---
draft: false
title: 06 Definition of Functions
tags:
creation_date: Monday, February 3rd 2025, 12:59:31 pm
last_edit_date: Monday, April 28th 2025, 8:02:58 pm
---

# Relation

A **relation** is a relationship between sets of information. For example, let's say we recorded all the names and heights of the people in your class. Then, for a given height (input), we could determine the names of all of the people (output) who are this tall. Each height is related to one or more peoples' names. We can describe a relation using a table, a rule, a graph, a set of ordered pairs or a diagram mapping elements of two different sets.

# Function

A **function** is a special type of relation where each input only has **one** output. Using the example above, if we found more than one person in your class with the same height this would be classified as a relation, not a function. 

Functions comprise a dependent variable that varies depending on the rule that is applied to the independent variable. Instead of a single dependent variable we commonly express functions using the notation $f(x)$. It indicates that the expression is a function of the independent variable $x$.

We can think of a function like a machine that has an input and an output, like you can see below. We take a value, $x$, apply a rule (i.e. put it through the function machine) and get an output value, $f(x)$. The output value can also be referred to as "$f$ of $x$".

![[Screenshot_2025-04-28_190809-removebg-preview.png|345x224]]

For example, if we think of a vending machine selling juice, the amount of money we have to pay (the dependent variable) depends on the amount of juice we want to buy (the independent variable). Let's say each bottle of juice cost $\$3$. If we bought one bottle, it would cost $\$3$, if we bought two bottles, it would cost $\$6$ and so on. Do you notice how the value of our independent variable (the number of bottles of juice) always produces a different, unique dependent variable (cost)? This is an example of a function. 

Let's look at another example. Say we have the rule $y=3x$. Let's construct a table of values of the output $y$ for a given input $x$ according to the rule given:

| $x$ | $−1$ | $0$ | $1$ | $2$ |
| --- | ---- | --- | --- | --- |
| $y$ | $−3$ | $0$ | $3$ | $6$ |

See how each $x$ value gives a unique $y$ value? This means this rule is considered a function.

# Functions and Relations Test

We can distinguish between relations and functions by carefully inspecting the ordered pairs. For example, 

do the following set of points  $(1,5)$, $(1,1)$, $(7,−2)$, $(−5,−10)$ describe a function or a relation? A function requires each $x$ value have a unique $y$ value. But there are $2$ possible $y$ values when $x=1$. So this set describes a relation.

If we have a graph of a relation, we can utilise the **vertical line test** to check if we have a function. If you can draw a vertical line anywhere on a graph and it crosses the graph in more than one place, then the relation is **not** a function.

Here is an example of a relation that is not a function. Consider the blue vertical line, it crosses the circle in two places? Hence, for the given input of $x=−5$ there are two outputs. In other words, functions have to pass the vertical line test for **every** input value.

![[Screenshot_2025-04-28_192158-removebg-preview.png|312x311]]

Here are two examples of functions:

![[Screenshot_2025-04-28_192455-removebg-preview.png|500x202]]

> [!Important] Functions and Relations
> While all functions are relations, not all relations are functions.

# Types of Functions and Relations

The formal definition of a function is that it is *a set of ordered pairs* $(x,y)$ *of real numbers that exists such that no two ordered pairs have the same first ($x$) component*. This is often visualised as a mapping of $x$ values to $y$ values, like in the diagram below:

![[Screenshot_2025-04-28_194036-removebg-preview.png|280x255]]

For starters, every $x$ value must produce a $y$ value, or $f(x)$ value, after its "trip through the function machine". It is possible that two $x$ values can produce the same $y$ value, as you can see happens in the diagram above. But the set is not considered a function if one $x$ value produces two or more $y$ values - this is what happens in a circle, for instance, which we saw failed the vertical line test.

We can introduce the following language to describe these distinctions.

- A **one-to-one** function means every $x$ input creates its own distinct $f(x)$ output
 ![[Screenshot_2025-04-28_194822-removebg-preview.png|268x266]]
 - A **many-to-one** function means that there are multiple $x$ values that create a certain $f(x)$ value
![[Screenshot_2025-04-28_195112-removebg-preview.png|262x257]]
- **One-to-many** is what happens in relations such as a circle - one $x$ input creating more than one $f(x) output$. This is not a function.
![[Screenshot_2025-04-28_195351-removebg-preview.png|276x236]]
- **Many-to-many** is hard to visualise, but exists when two or more $x$ inputs are related to two or more $f(x)$ outputs. It is also not a function!
![[Screenshot_2025-04-28_195746-removebg-preview.png|253x247]]

## One-to-one Functions

One-to-one functions are particularly important for later study in inverse functions and so, we are very interested in being able to find them. The definition of one-to-one functions states that every $x$ input creates its own distinct $f(x)$ output. This means the graph must either be always increasing or always decreasing left to right! So, we can test these functions with the **horizontal line test.** If at any horizontal position, a line 'passes over' two or more points on the curve or line, then the function cannot be one-to-one.

Consider the diagram below, showing a sketch of a straight line and a parabola. Both are functions since they pass the vertical line test. But only the straight line passes the horizontal line test. This means we can describe the line as a one-to-one function and the parabola as a many-to-one function.

![[Screenshot_2025-04-28_200203-removebg-preview.png|277x314]]
