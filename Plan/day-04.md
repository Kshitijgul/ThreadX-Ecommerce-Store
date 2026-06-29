# 🏢 THREAD X

# Sprint 1 — Day 4

**Role:** Frontend Developer (React Team)

Good Morning, Developer. ☕

Yesterday, you learned **Props**.

Today, you're going to learn one of the most used concepts in React:

> **Rendering UI from Data using `map()`**

This is how every modern React application works.

---

# 🎯 Today's Goal

By the end of today, you will understand:

* ✅ Arrays in React
* ✅ `map()`
* ✅ Rendering Components from Data
* ✅ `key` Prop
* ✅ Reusable Category Cards
* ✅ Organizing Static Data

---

# 🏢 Company Task

The UI designer has given us this section:

```text
--------------------------------
      SHOP BY CATEGORY
--------------------------------

 Hoodie    T-Shirt    Jeans

 Cargo     Shoes      Caps
```

Instead of manually writing:

```jsx
<CategoryCard />
<CategoryCard />
<CategoryCard />
<CategoryCard />
<CategoryCard />
<CategoryCard />
```

we'll generate them from data.

---

# 📁 Today's Folder Structure

```text
src/
│
├── assets/
│      images/
│
├── components/
│
├── data/
│      categories.js   ⭐ NEW
│
├── pages/
│
└── App.jsx
```

---

# 📋 Today's Tasks

## ✅ Task 1 — Create Category Folder

```text
Category/
│
├── Categories.jsx
├── CategoryCard.jsx
├── Category.css
```

---

## ✅ Task 2 — Create Category Data

Create:

```text
src/data/categories.js
```

It should contain category data.

Example structure (don't copy exactly—build it yourself):

```javascript
export const categories = [
    {
        id: 1,
        title: "...",
        image: ...
    }
];
```

---

## ✅ Task 3 — Learn `map()`

Instead of writing six cards manually...

You'll do something like:

```jsx
categories.map(...)
```

This is today's biggest React lesson.

---

## ✅ Task 4 — Build CategoryCard

It should receive props like:

```jsx
<CategoryCard
    image={...}
    title="Hoodies"
/>
```

Notice...

You're using the **same Props concept** from Day 3.

Only now, the data comes from an array instead of being written manually.

---

## ✅ Task 5 — Responsive Layout

Make sure the section works on:

* Desktop
* Tablet
* Mobile

We'll keep responsiveness in mind from the beginning instead of leaving it until the end.

---

# 📚 React Concepts You'll Learn Today

### 1. Arrays → UI

```javascript
const categories = [...]
```

↓

```jsx
categories.map(...)
```

↓

```
CategoryCard
CategoryCard
CategoryCard
```

---

### 2. `key` Prop

You'll learn why React says:

```
Each child should have a unique key
```

and how to fix it properly.

---

### 3. Data-Driven UI

This is how companies build:

* Products
* Orders
* Reviews
* Notifications
* Users
* Categories

Everything is driven by data.

---

# 🏢 Company Coding Standards

From today onwards, we'll follow these standards:

### ✅ Components

```text
PascalCase
```

```
CategoryCard.jsx
Hero.jsx
Navbar.jsx
```

---

### ✅ Variables

```javascript
camelCase
```

```javascript
const featuredProducts
const categoryData
```

---

### ✅ CSS Classes

```css
kebab-case
```

```css
.category-card
.feature-container
.hero-content
```

---

### ✅ Data Files

```text
camelCase
```

```
categories.js
products.js
```

---

# 📈 Project Progress After Today

```text
Home Page

████████████░░░░░░░░

Header            ✅

Hero              ✅

Features          ✅

Categories        🔄

Featured Products ⬜

Promo Banner      ⬜

New Arrivals      ⬜

Newsletter        ⬜

Footer            ⬜
```

---

# 🎓 Learning Objective

By the end of Day 4, you should be able to answer this confidently:

> **"Why is `map()` one of the most important methods in React?"**

If you understand that, you've crossed another major milestone.

---

# 🏢 Tech Lead's Challenge

Today, I'm **not** going to give you the implementation first.

I'm giving you the **requirements**, just like a real company would.

I want you to:

1. Create the folder structure.
2. Build the `CategoryCard` component.
3. Create `categories.js`.
4. Try rendering the cards using `map()`.

If you get stuck, don't search for the answer immediately. Tell me **where** you're stuck, and we'll solve it together. That's how you'll develop real problem-solving skills instead of just following tutorials.

**Good luck, Developer.** 🚀
