---
draft: false
title: 09 Domain and Range
tags:
creation_date: Monday, February 3rd 2025, 12:59:31 pm
last_edit_date: Tuesday, April 29th 2025, 5:48:36 pm
---

Domain and range give us a way to describe these sets of inputs and outputs.

> [!Definition] Domain and Range
> - Domain is the possible input (usually $x$) values of a relation
> - Range is the possible output (usually $y$) values of a relation

The first way to find a relation's domain and range is to simply look at the coordinates given and list the possible values.

Consider the relation described by the set of points:$\lbrace{(1,2),(5,3),(2,−7),(5,−1)}\rbrace$. For this relation, the domain is $\lbrace{1,5,2}\rbrace$ and the range is $\lbrace{2,3,−7,−1}\rbrace$. Notice how repeated values are not included and order is not important, as we only care about the **possible** values of $x$ and $y$.

Another method is to look at a relation graphically, and see how 'wide' or 'long' the graph is:

![[Screenshot_2025-04-29_172939-removebg-preview.png|327x292]]

Horizontally this graph spans from $−1$ to $1$, so we can write the domain as $−1≤x≤1$. Similarly, the graph goes vertically from $−2$ to $2$ so the range can be written as $−2≤y≤2$. 

We could write the domain for the example above as  $x≥−1$ AND $x≤1$. which is technically correct but not as elegant as the compound inequality used above. The values of $x$ that satisfy this compound inequality include all numbers between $−1$ and $1$ inclusive with the inequality showing that $x$ actually *is* between $−1$ and $1$.

# Interval Notation

Our second option is to use interval notation for domain and range. An **interval** on the real number line is the set of numbers between two endpoints. One or both endpoints, or neither, can belong to interval and there are notations for each possibility.

Intervals that include their endpoints are called *closed* intervals. This is the case for the inequality $−1≤x≤1$.  Closed intervals use square brackets, and so we could write this as $[−1,1]$. Intervals that do not include their endpoints are called *open* intervals. The notation for these uses rounded brackets. For example, we write $(0,100)$ to mean the set of numbers between $0$ and $100$ but not including either $0$ or $100$. It is also possible for an interval to be closed at one end but open at the other. For example, $[0,√2)$ or $(−9,0]$.

An interval with no upper bound is indicated with the $[a,∞)$ sign. Such intervals are said to be open on the right. Similarly, an interval with no lower bound is open on the left and is notated with the sign $(−∞,b]$. 

Think about a straight line like $y=2x+1$, pictured below. Its domain and range have no restrictions at all. And so, we could write the domain and range in interval notation as $(−∞,∞)$.

![[Screenshot_2025-04-29_174206-removebg-preview.png|294x284]]

# Natural Domain of an Equation

A relation or function may be given to us as an equation rather than a graph. The equation may have implied restrictions because of the mathematical operations involved within it and this is called the natural domain. In general, the best way to approach these questions is to ask yourself "is there any input value the equation cannot handle?".

For example, the function $f(x)=√x$ cannot handle negative real numbers. Hence, its domain is: $x≥0$. The function $f(x)=\frac{1}{x}​$ cannot handle zero as we know it is impossible to divide any number by zero. Other than that however there aren't any restrictions. Hence, its domain is the compound interval: $(−∞,0)∪(0,∞)$.

Note that we use the symbol '$∪$' when we want to specify more than one interval that applies to a relation. This happens when functions or relations have discontinuities, usually because of asymptotes.

# Combining Functions

Finally, it is important to consider how combining functions through addition, subtraction, multiplication or division will affect domain and range. The restrictions on each component will affect the combined irrespective of the new functions structure. For example, if $f(x)$ has the domain $x>3$ and $g(x)$ has a domain $x≤10$, then $(f−g)(x)$ will only exist for $3<x≤10$.  Or, if $f(x)=\frac{6}{x-9}$​ and $g(x)=4−x$, then $(g/f)(x)$ will still have the restriction in the domain due to $f(x)$ having $x≠9$ even though $\frac{(4−x)(x−9)}{6}$ does not have this restriction. So, always look carefully at the restrictions of each component function!
