---
draft: false
title: 03 Factorising
tags:
creation_date: Monday, February 3rd 2025, 12:59:31 pm
last_edit_date: Monday, April 28th 2025, 6:14:34 pm
---

Factorising is an important process involved in many areas of mathematics. It is the process of rewriting an algebraic expression as a product of its factors and is used to solve equations, investigate the nature of mathematical relationships and many other applications. We will review factorisation methods below with a focus on those involving quadratic expressions.

# HCF Factorisation

This method can be applied to an expression with any number of terms that share common factors. The key is to take out the highest common factor:

> [!Note] HCF Factorisation
> $$\begin{array}{r l r l}{{A B+A C+\ldots}}&{{}=}&{{}A{\bigl(}B+C+\ldots{\bigr)}}\end{array}$$

# Difference of Two Squares

To use this factorisation, look for the difference of two terms which are both perfect squares.

> [!NOTE] Difference of Two Squares
> $$\begin{array}{c c c}{{A^{2}-B^{2}}}&{{=}}&{{\left(A+B\right)\left(A-B\right)}}\end{array}$$

# Grouping in Pairs

Look for four terms which can be split into two pairs and factorised separately. Then factorise the resulting pair of terms afterwards. For example:

$$\begin{array}{r c l}{{2x+4+x y+2y}}&{{=}}&{{2\bigl(x+2\bigr)+y\bigl(x+2\bigr)}}\\ {{}}&{{=}}&{{\bigl(x+2\bigr)\bigl(2+y\bigr)}}\end{array}$$

# Perfect Squares

Look for three terms where the squared and constant terms are perfect squares, and the other term is twice the product of their square roots.

$$A^{2}+2A B+B^{2}\quad=\quad\left(A+B\right)^{2}$$

# Monic Quadratics

To factorise $x^2+Px+Q$, where $P$ and $Q$ are any numbers and the coefficient of $x^2$ is $1$, first check if its a perfect square. Otherwise, we look to factorise by finding two values $a$ and $b$ such that $a+b=P$ and $a\times b=Q$. We can then factorise the quadratic into the form $(x+a)(x+b)$.

$$\begin{array}{l}{x^{2}+P x+Q}&{=}&{(x+a)(x+b)}\\ {{\mathrm{where~}}a+b=P{\mathrm{~and~}}a\times b=Q}\end{array}$$

# Non-Monic Quadratics

Similar to monic quadratics, but the coefficient of $x^2$ is not $1$. To factorise, first check for HCF factorisation or perfect square factorisation. Otherwise, factorise by using either the Product Sum Factors method or the Cross method.

## Cross Method

Let's have a look at factorising $5x^2+11x−12$ using the cross method. We must draw a cross with a possible pair of factors of $5x^2$ on one side and another possible factor pair of $−12$ on the other side.

Let's start with the factor pairs of $5x$ & $x$ on the left, and $−6$ & $2$ on the other:

![[Screenshot_2025-04-28_165450-removebg-preview-1.png|379x337]]

$5x\times2+x\times\left(-6\right)=4x$, which is incorrect, so let's try again with another two pairs

![[Screenshot_2025-04-28_175943-removebg-preview.png|355x332]]

$5x\times3+x\times\left(-4\right)=11x$ which is the right answer.

![[Screenshot_2025-04-28_180539-removebg-preview.png|361x295]]

By reading across in the two circles, the quadratic must then factorise to $(5x-4)(x+3)$

## PSF Method

The PSF (Product, Sum, Factor) method uses a similar idea we had with monic quadratics where we think about sums and products, but slightly differently.

> [!NOTE] PSF Method
> For a quadratic in the form $ax^2+bx+c$,
> 1. Find two numbers, $m$ and $n$ that have a **SUM** of $b$ and a **PRODUCT** of $ac$.
> 2. Rewrite the quadratic as $ax^2+mx+nx+c$.
> 3. Use **grouping in pairs** to factorise the four-termed expression.

Example:

Factorise $5x^2+11x-12$ using the PSF method.

We want the sum of $m$ and $n$ to be $11$ and the product to be $-60$

The two numbers are $-4$ and $15$, so:

$$\begin{array}{r c l}{{5x^{2}+11x-12}}&{{=}}&{{5x^{2}-4x+15x-12}}\\ {{}}&{{=}}&{{x\bigl(5x-4\bigr)+3\bigl(5x-4\bigr)}}\\ {{}}&{{=}}&{{\bigl(5x-4\bigr)\bigl(x+3\bigr)}}\end{array}$$

> [!Warning] Be Careful!
> Before looking for more complicated factorisations (such as for non-monic quadratics), it is a good idea to carefully check for any **common factors** first. 
Also, after factorising an expression, make sure to check and see if any further factorisation can be done!
