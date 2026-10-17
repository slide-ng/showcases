---
title: Gradient Descent, Honestly
theme: ../../themes/paper
issue: No. 24
date: October 2026
---

# Gradient Descent, Honestly

What $\nabla f$ really costs, in maths and in money

<!--
Every formula is drawn by KaTeX while the deck is built. `setup/katex.ts` adds three macros used throughout: \RR, \E{...} and \norm{...}.
-->

---
hideInToc: true
---

# Contents

<slide-ng-toc />

<!--
The table of contents keeps the maths in slide titles, like the update rule below.
-->

---
layout: section
no: I
---

# The maths

---

# The update rule $\theta_{t+1} = \theta_t - \eta \nabla f(\theta_t)$

- Parameters live in $\RR^n$, with $n \approx 10^9$
- Loss: $f(\theta) = \E{\ell(x;\theta)}$ over the data
- Step size $\eta > 0$; we want $\norm{\nabla f} \to 0$

$$
\theta_{t+1} = \theta_t - \eta\, \nabla f(\theta_t)
$$

---

# Derivation, one line per click

$$ {1|2|3|all}
\begin{align}
f(\theta + \delta) &\approx f(\theta) + \nabla f(\theta)^\top \delta + \tfrac{1}{2}\delta^\top H \delta \\
\delta^\star &= -H^{-1} \nabla f(\theta) \\
\delta_{\text{GD}} &= -\eta\, \nabla f(\theta)
\end{align}
$$

<div slide-ng-click="4" class="mt-8 text-center text-xl">Gradient descent is Newton's step with $H^{-1}$ replaced by $\eta I$.</div>

<!--
The second-order Taylor expansion around the current point.
[click] Minimise it over delta: the Newton step.
[click] Too expensive at a billion parameters, so swap the inverse Hessian for a scalar.
[click] All three lines together.
[click] The punchline.
-->

---

# Matrices and cases

$$
H = \begin{pmatrix} \partial_{11} f & \partial_{12} f \\ \partial_{21} f & \partial_{22} f \end{pmatrix},
\qquad
\operatorname{ReLU}(x) = \begin{cases} x & \text{if } x > 0 \\ 0 & \text{otherwise} \end{cases}
$$

$$
\begin{bmatrix} 1 & 0 & 0 \\ 0 & \cos\phi & -\sin\phi \\ 0 & \sin\phi & \cos\phi \end{bmatrix}
\begin{bmatrix} x \\ y \\ z \end{bmatrix}
$$

<!--
The Hessian of a two-parameter loss, the ReLU every network uses, and a rotation: the loss surface looks different from every angle.
-->

---

# When does it converge?

> [!NOTE]
> Convergence needs $\eta < 2/L$ where $L$ is the Lipschitz constant of $\nabla f$.

> [!WARNING]
> With $\eta \ge 2/L$ the iterates $\theta_t$ may diverge.

Strong convexity gives a linear rate[^1].

[^1]: Rate $\left(1 - \mu/L\right)^t$, with $\mu$ the convexity constant.

---

# The vocabulary

1. Gradient: $\nabla f = \left(\frac{\partial f}{\partial \theta_1}, \dots, \frac{\partial f}{\partial \theta_n}\right)$
2. Hessian: $H_{ij} = \frac{\partial^2 f}{\partial \theta_i \partial \theta_j}$
3. Taylor: $f(\theta+\delta) = f(\theta) + O(\norm{\delta})$
   - a sublevel set: $\{\theta : f(\theta) \le c\}$
   - and the most famous identity: $e^{i\pi} + 1 = 0$

---

# One formula, many scripts

$$
\text{Größe} = \sqrt{\text{Länge}^2 + \text{Breite}^2}, \qquad \text{coût} \approx 3\,\text{EUR}
$$

$$
\text{速度} = \frac{\text{距离}}{\text{时间}}
$$

Inline too: $\text{naïve } \lambda$ and $\text{café}$.

<!--
Labels inside \text can be in any script, so a lecture can keep the words of its audience.
-->

---
layout: section
no: II
---

# The money

---

# Cost table

| Optimizer | Update                                      | Memory     | Cost / run |
| --------- | ------------------------------------------- | ---------- | ---------- |
| SGD       | $\theta - \eta g$                           | $O(n)$     | $120       |
| Momentum  | $\theta - \eta v,\; v = \beta v + g$        | $O(2n)$    | $135       |
| Adam      | $\theta - \eta \hat m / (\sqrt{\hat v}+\epsilon)$ | $O(3n)$ | $150       |

Budget: between $1,000 and $2,000 per week.

<!--
Prices and formulas share the table: a dollar sign followed by a number is money, so "$120" stays text.
-->

---

# What a run costs

<div class="text-xl leading-relaxed mt-4">

The GPUs cost $96 and the storage $24, so $120 a run.
A spare node is $5 and the full cluster $10 per hour.
Shell variables like `$RUN_ID` and `$BUDGET` stay as code.
A spot price of $1-$3 an hour is not maths. But $\eta^2$ is.

Written out by hand: \$100 for the cluster and US\$ 50 for the logs.

</div>

<!--
The rule follows Slidev: a dollar sign only opens maths when the text after it looks like maths, and \$ is always a plain dollar sign.
-->

---
layout: center
---

# Thank you

$$\int_0^\infty e^{-x^2}\,dx = \frac{\sqrt{\pi}}{2}$$
