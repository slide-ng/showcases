---
title: Linear Algebra, Lecture 7
colorSchema: light
aspectRatio: 4/3
canvasWidth: 1024
drawings:
  enabled: true
  persist: true
  presenterOnly: false
  syncAll: true
duration: 50min
timer: countdown
---

# Linear Algebra

Lecture 7: Eigenvalues and diagonalisation

<!--
Start by recapping lecture 6: matrices as maps, and the determinant.
The deck has a 50-minute countdown (`duration` and `timer` in the headmatter), and drawing is on for everyone: annotate the derivations live.
-->

---
hideInToc: true
---

# Contents

<slide-ng-toc />

---

# Matrices recap

<div class="mb-2">A matrix $A \in \mathbb{R}^{m \times n}$ maps $\mathbb{R}^n \to \mathbb{R}^m$, with $A\mathbf{x} = \mathbf{b}$.</div>

$$
A = \begin{pmatrix} a_{11} & a_{12} & \cdots & a_{1n} \\ a_{21} & a_{22} & \cdots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{m1} & a_{m2} & \cdots & a_{mn} \end{pmatrix}
$$

1. Rows are indexed by $i$, columns by $j$.
2. The identity $I_n$ has $\delta_{ij}$ entries.
3. $\det(AB) = \det A \cdot \det B$[^det].

[^det]: Proven in lecture 5 via the Leibniz formula.

<!--
Recap slowly: most of the class saw determinants three weeks ago.
Ask who remembers why det(AB) = det A · det B before showing the footnote.
-->

---

# Eigenvalues

<div class="mb-2">$\lambda$ is an eigenvalue of $A$ if $\exists\, \mathbf{v} \neq \mathbf{0}$ with $A\mathbf{v} = \lambda\mathbf{v}$.</div>

$$ {1|2|3|all}
\begin{aligned}
A\mathbf{v} &= \lambda \mathbf{v} \\
(A - \lambda I)\mathbf{v} &= \mathbf{0} \\
\det(A - \lambda I) &= 0
\end{aligned}
$$

<!--
Start from the definition.
[click] Move everything to one side: (A − λI)v = 0.
[click] A non-zero v exists only if A − λI is singular...
[click] ...so its determinant vanishes: the characteristic polynomial.
-->

---

# A worked example

<div class="mb-2">Let $A = \begin{bmatrix} 2 & 1 \\ 1 & 2 \end{bmatrix}$. Then</div>

$$
\det(A - \lambda I) = \begin{vmatrix} 2-\lambda & 1 \\ 1 & 2-\lambda \end{vmatrix} = (2-\lambda)^2 - 1 = (\lambda - 1)(\lambda - 3)
$$

so $\lambda_1 = 1$, $\lambda_2 = 3$ with eigenvectors $\mathbf{v}_1 = \binom{1}{-1}$, $\mathbf{v}_2 = \binom{1}{1}$.

<div slide-ng-click class="mt-4 p-3 bg-blue-50 rounded">Check: $\operatorname{tr} A = 4 = \lambda_1 + \lambda_2$ and $\det A = 3 = \lambda_1 \lambda_2$.</div>

---

# Piecewise and cases

<div class="mb-2">The sign function:</div>

$$
\operatorname{sgn}(x) = \begin{cases} -1 & \text{if } x < 0, \\ 0 & \text{if } x = 0, \\ 1 & \text{if } x > 0. \end{cases}
$$

Spectral radius $\rho(A) = \max_i |\lambda_i|$ and the norm $\|A\|_2 = \sqrt{\lambda_{\max}(A^\top A)}$.

---

# Diagonalisation

<div slide-ng-motion class="origin-top-left" :initial="{ x: -120, opacity: 0 }" :enter="{ x: 0, opacity: 1 }" :click-1="{ scale: 1.15 }">

If $A$ has $n$ linearly independent eigenvectors, then

$$
A = P D P^{-1}, \quad D = \operatorname{diag}(\lambda_1, \dots, \lambda_n)
$$

</div>

<div slide-ng-click class="mt-10 p-3 bg-blue-50 rounded">Hence $A^k = P D^k P^{-1}$: powers of a diagonal matrix are just powers of its entries.</div>

---

# Drag the vectors

<div slide-ng-drag="[600, 150, 200, 80]" class="bg-red-200 p-2 rounded">$\mathbf{v}_1 = (1, -1)$</div>

<slide-ng-drag pos="600,300,200,_"><div class="bg-green-200 p-2 rounded">$\mathbf{v}_2 = (1, 1)$</div></slide-ng-drag>

<slide-ng-drag-arrow pos="100,400,400,250" color="blue" [width]="3" />

<p>Move $\mathbf{v}_1$ and $\mathbf{v}_2$ around to sketch the eigenbasis of $A$; the arrow marks the direction $A$ stretches most.</p>

<!--
The boxes and the arrow are draggable. While `npm start` runs, their new places are written back into slides.md; in the built deck a move lasts until the page closes.
-->

---

# Summary

1. Eigenvalues solve $\det(A - \lambda I) = 0$.
2. Diagonalisable $\iff$ $n$ independent eigenvectors.
   1. Symmetric $\Rightarrow$ orthogonally diagonalisable.
   2. Distinct eigenvalues $\Rightarrow$ diagonalisable.
3. Powers: $A^k = P D^k P^{-1}$.

> [!TIP]
> Next week: the singular value decomposition.

---
layout: end
---
