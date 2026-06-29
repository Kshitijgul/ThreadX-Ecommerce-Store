Perfect. This is exactly how React is best learned.

From now on, **we won't just learn React—we'll build an E-commerce application while learning React concepts one by one.**

---

# 🚀 Phase 1 — Components & Props

## 🎯 Goal

By the end of Phase 1, you should be able to answer:

* ✅ What is a Component?
* ✅ Why do Components exist?
* ✅ What is a Parent Component?
* ✅ What is a Child Component?
* ✅ What are Props?
* ✅ Why are Props needed?
* ✅ How does data flow?
* ✅ What is Component Composition?
* ✅ Why should components be reusable?
* ✅ How should we organize components?

**No state. No API. No routing.**
Just mastering **Components and Props**.

---

# 🛒 Final UI (Phase 1)

```
---------------------------------------------------
Logo          Search Bar             Cart 👤
---------------------------------------------------

🔥 Summer Sale Banner

---------------------------------------------------
Categories

📱 Electronics

👕

Fashion

💻 Laptops

⌚ Watches
---------------------------------------------------

Featured Products

+--------------------------------+
| 📷 Product Image               |
|                                |
| iPhone 16                      |
| ⭐⭐⭐⭐⭐                         |
| ₹79,999                        |
| 20% OFF                        |
| Add To Cart                    |
+--------------------------------+

+--------------------------------+
|                                |
+--------------------------------+

+--------------------------------+
|                                |
+--------------------------------+

Footer
```

Everything is **static** for now.

---

# Step 0 — Create the Project

If you haven't already:

```bash
npm create vite@latest
```

Project name:

```
shop-sphere
```

Choose:

```
React

JavaScript
```

Then:

```bash
cd shop-sphere

npm install

npm run dev
```

---

# Step 1 — Clean the Project

Delete unnecessary files.

Your `src` should look like:

```
src/

App.jsx

main.jsx

index.css
```

---

# Step 2 — Create Folder Structure

```
src/

assets/

components/

pages/

data/

styles/
```

---

Inside `components`

```
components/

Header/

Footer/

Hero/

Category/

Product/
```

---

Each folder

```
Header/

Header.jsx

Header.css
```

Same for every component.

---

# Step 3 — Think Like React

Don't start coding.

First identify the UI pieces.

Ask yourself:

> **Can this part exist independently?**

If yes → Component.

For our app

```
App
```

contains

```
Header

Hero

CategorySection

ProductSection

Footer
```

---

Header contains

```
Logo

SearchBar

Navigation

Cart
```

---

Product Section contains

```
Section Title

Product Grid

Product Card
```

---

Product Card contains

```
Image

Name

Price

Rating

Discount

Button
```

---

Now look carefully.

**Everything is becoming a tree.**

```
App

│

├── Header

│      ├── Logo

│      ├── SearchBar

│      ├── Navbar

│      └── Cart

│

├── Hero

│

├── CategorySection

│      ├── CategoryCard

│      ├── CategoryCard

│      ├── CategoryCard

│      └── CategoryCard

│

├── ProductSection

│      ├── ProductCard

│      ├── ProductCard

│      ├── ProductCard

│      └── ProductCard

│

└── Footer
```

This is called the **Component Tree**.

Every React application can be visualized like this.

---

# Step 4 — Build Only Empty Components

Don't worry about styling or data yet.

Create these components:

```
Header

Hero

CategorySection

CategoryCard

ProductSection

ProductCard

Footer
```

Each one can temporarily return something simple like:

```jsx
function Header() {
  return <h1>Header</h1>;
}

export default Header;
```

Do the same for the others.

---

# Step 5 — Assemble the App

Your `App.jsx` should only compose these pieces:

```jsx
<>
  <Header />
  <Hero />
  <CategorySection />
  <ProductSection />
  <Footer />
</>
```

Notice that **App doesn't know how each component works**. It simply arranges them. That's the essence of composition.

---

# 🧠 Today's Learning Objectives

By completing this step, you'll understand:

* Why React uses components.
* How to break a UI into smaller pieces.
* The difference between parent and child components.
* How a component tree is formed.
* Why `App` is often the root component.
* Why composition is more powerful than one large file.

---

# 📌 Before Writing More Code

I want you to follow one rule throughout this project:

> **Don't ask, "What component should I make?"**
>
> Instead ask, **"Can this piece of UI be reused or understood independently?"**

If the answer is **yes**, it should probably be its own component.

That mindset is what separates someone who *knows React syntax* from someone who *thinks in React*.

---

## 🎯 Your First Milestone

Create:

* `Header`
* `Hero`
* `CategorySection`
* `CategoryCard`
* `ProductSection`
* `ProductCard`
* `Footer`

Then compose them inside `App.jsx`.

Once you've done that, we'll move to the next lesson, where you'll learn **component composition and props** by making `CategoryCard` and `ProductCard` reusable instead of duplicating their markup.
