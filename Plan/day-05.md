# 🏢 THREAD X

# Sprint 1 — Day 5

**Role:** Frontend Developer (React Team)

Good Morning, Developer! ☕🚀

Yesterday's Pull Request has been **merged into `main`**.

```text
Sprint Progress

✅ Announcement Bar
✅ Header
✅ Hero
✅ Features
✅ Categories

🔄 Featured Products (Today's Task)

⬜ Promotional Banner
⬜ Instagram Gallery
⬜ Newsletter
⬜ Footer
```

Today is another important milestone because we're going to build the **heart of every e-commerce website**.

# 🏢 Story TX-005

> **As a customer, I want to browse products so I can purchase them.**

---

# 🎯 Today's Learning Goals

Today you'll learn:

* ✅ Bigger reusable components
* ✅ Product data structure
* ✅ Reusing `ProductCard`
* ✅ `map()` with larger datasets
* ✅ Conditional Rendering
* ✅ React Fragments (`<>...</>`)
* ✅ Component Composition

---

# 🏗 What We'll Build

```text
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        TRENDING NOW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

┌──────────────┐
│              │
│    Image     │
│              │
├──────────────┤
 Hoodie
 ₹1499

 [ Add To Cart ]
└──────────────┘
```

8 products.

Exactly like Zara, H&M, Nike, Uniqlo etc.

---

# 📁 Folder Structure

Create:

```text
components/

Product/
│
├── Products.jsx
├── ProductCard.jsx
└── Product.css
```

and

```text
data/

products.js
```

---

# 🏢 Company Task

Instead of

```jsx
<ProductCard />
<ProductCard />
<ProductCard />
```

You'll create

```javascript
const products = [
   {
      id,
      title,
      image,
      price,
      category,
      badge
   }
]
```

and then

```jsx
products.map(...)
```

Exactly like yesterday.

Only bigger.

---

# 🆕 New React Concept #1

## Conditional Rendering

Not every product has a badge.

Example

```text
Hoodie

₹1499
```

Another product

```text
T-Shirt

NEW

₹999
```

How do we display "NEW" only for some products?

You'll learn:

```jsx
{badge && <Badge />}
```

This is one of the most used React patterns.

---

# 🆕 New React Concept #2

React Fragments

Yesterday you asked:

> What's the difference between `<></>` and `<div>`?

Today you'll use fragments naturally.

When a component doesn't need an extra wrapper:

```jsx
<>
    <Badge />
    <Price />
</>
```

instead of

```jsx
<div>
    ...
</div>
```

---

# 🆕 New React Concept #3

Component Composition

Today your hierarchy becomes:

```text
Products

        │

        ▼

ProductCard

        │

        ▼

Badge

Price

Button
```

Notice...

Components can contain components.

---

# 📦 Product Data

Each product should have something like:

```javascript
{
    id,
    title,
    image,
    price,
    category,
    badge
}
```

We'll later add:

```javascript
rating

sizes

colors

stock

description
```

Exactly like a real backend.

---

# 🎯 UI Requirements

Each card should display:

* Product Image
* Product Name
* Price
* Optional Badge
* Add To Cart Button

Hover effect:

* Image zoom
* Button animation
* Shadow

Try to make it feel premium.

---

# 📚 What This Prepares You For

Today you're using:

```text
Local Data
↓

products.js
```

Next week this becomes

```text
Express API

↓

GET /products
```

Then

```jsx
useEffect()

↓

fetch()

↓

products.map(...)
```

See how the project naturally evolves?

---

# 🏢 Deliverables

By the end of today I expect:

```
✅ products.js

✅ ProductCard.jsx

✅ Products.jsx

✅ Product Section UI

✅ map()

✅ Conditional Rendering

✅ Git Commit
```

---

# 🏆 Extra Challenge (Senior Developer Task)

Don't hardcode the button text.

Instead, make your button reusable:

```jsx
<Button text="Add To Cart" />
```

We'll eventually reuse the same `Button` component across the entire application:

* Shop Now
* Explore
* Buy Now
* Add To Cart
* Checkout

That's how design systems work.

---

# 📈 After Today

You'll have completed around **70% of the homepage**.

---

## 🏢 Boss's Note

One more thing...

From today onward, I want you to **start making small architecture decisions yourself**.

For example, before creating a component, ask yourself:

* Is this reusable?
* Should this be a separate component?
* Is this data or UI?
* Will the backend eventually provide this?

If you think this way consistently, you'll start developing the instincts of a professional React developer.

---

## 🎯 Mission

Build the **Featured Products** section.

When you're done, send me:

* `products.js`
* `Products.jsx`
* `ProductCard.jsx`
* A screenshot of the UI

Then I'll review it like a senior frontend engineer during a real pull request.

**Good luck, Developer. Let's build THREAD X.** 🚀
