# 🏢 NOVA WEAR

## Sprint 1 — Day 2

**Role:** Frontend Developer Intern

**Assigned By:** Senior Frontend Engineer (Me)

---

# ✅ Code Review (Day 1)

I reviewed your project structure.

### 👍 Good

```
src/
│
├── assets/
├── components/
├── data/
├── pages/
├── App.jsx
├── main.jsx
└── index.css
```

This is a solid start.

### 🔧 Small Suggestions

1. **Use consistent folder naming.**

You have:

```
Header
Hero
Footer
Product
category
```

Choose one convention.

I recommend **PascalCase** for component folders:

```
components/

Header/
Hero/
Category/
Product/
Footer/
```

Because React components are PascalCase.

---

2. **Remove `App.css`**

We'll use modular CSS (or later CSS Modules/Tailwind), so we don't need the default Vite `App.css`.

---

3. **Create `Home.jsx`**

Don't put the homepage directly inside `App`.

Instead

```
App

↓

Home

↓

Header
Hero
Category
Product
Footer
```

This becomes useful once we add multiple pages.

---

# 🎫 JIRA TICKET

## FRONT-002

### Title

Build Header Architecture

Priority: High

Estimated Time: 2 Hours

---

# 📝 Description

The UI team has finalized the Header design.

Your task is to build the Header component.

❌ No functionality

❌ No Search Logic

❌ No Routing

Only UI.

---

# 🎯 Learning Goal

Today you'll learn

* Breaking one component into smaller components
* Component Composition
* When to split components
* Folder organization

---

# 🤔 First Question

Yesterday we created

```
Header.jsx
```

Today...

Should Header remain a single file?

Let's inspect the UI.

```
--------------------------------------------------

LOGO

HOME

SHOP

COLLECTIONS

ABOUT

CONTACT

Search

User

Cart

--------------------------------------------------
```

Can you see different independent pieces?

YES.

---

# 🏗 Header Architecture

Today we'll evolve the Header.

```
Header/

│

├── Header.jsx

├── Header.css

│

├── Logo.jsx

├── Navbar.jsx

├── NavItem.jsx

├── Icons.jsx
```

Notice

We are NOT making

```
Hero/

↓

HeroTitle.jsx

HeroSubtitle.jsx

HeroButton.jsx
```

That would be over-engineering.

We split **only because Header naturally contains reusable pieces**.

---

# Why?

Because later

Logo

can appear on

* Login

* Footer

* Checkout

Navbar

can be reused

Icons

can be reused

---

# Today's Component Tree

```
Home

↓

Header

├── Logo

├── Navbar

│      ├── NavItem

│      ├── NavItem

│      ├── NavItem

│      ├── NavItem

│      └── NavItem

└── Icons
```

Look carefully.

This is your first nested component tree.

---

# 📂 Folder

```
Header/

│

├── Header.jsx

├── Header.css

├── Logo.jsx

├── Navbar.jsx

├── NavItem.jsx

└── Icons.jsx
```

---

# Header.jsx

Think of Header as the manager.

It shouldn't contain HTML for everything.

Instead it should compose smaller pieces.

Mentally:

```
Header

↓

Logo

Navbar

Icons
```

---

# Navbar

Navbar should NOT know

what links exist.

It only renders

```
NavItem

NavItem

NavItem
```

Later Props will solve this elegantly.

For now

hardcode them.

---

# Icons

Contains

```
Search

User

Cart
```

No functionality.

Only UI.

---

# 🚫 Important

Don't make

```
SearchIcon.jsx

UserIcon.jsx

CartIcon.jsx
```

today.

Why?

Each file would contain

```
<svg />
```

That's unnecessary complexity.

One `Icons.jsx` is enough for now.

---

# 🎓 Today's React Lesson

There is no fixed rule that says:

> "Every HTML tag should become a React component."

The real rule is:

> **Create a component when it has its own responsibility or is likely to be reused.**

For example:

* `Header` → Yes.
* `Navbar` → Yes.
* `NavItem` → Yes (because later it will receive props like `label` and `href`).
* `Icons` → Yes.
* `HeaderContainer` → No (no unique responsibility).
* `HeaderLeft` → No (premature abstraction).

---

# 📋 Deliverables

By the end of Day 2, you should have:

```
Header/

├── Header.jsx
├── Header.css
├── Logo.jsx
├── Navbar.jsx
├── NavItem.jsx
└── Icons.jsx
```

And your `Header.jsx` should **compose** these components rather than containing all the markup itself.

---

# 💡 Tech Lead Tip

As we continue, I'm going to teach you something that many React tutorials skip:

**Not every visible section deserves its own component, and not every component deserves to be split further.**

One of the most valuable skills in React is knowing **where to draw those boundaries**. Throughout this project, I'll explain *why* we split a component or *why* we deliberately keep it together. That's a skill you'll use on every React project, whether it's this e-commerce site or a large production application.

---

## 📝 Your Assignment

Build the complete **Header architecture** with placeholder content first.

Don't worry about making it look like the final UI yet. Focus on the **component hierarchy** and **clean composition**.

Once you finish, send me:

1. Your updated folder structure.
2. `Header.jsx`.
3. `Navbar.jsx`.

I'll review it like a pull request before we move on to styling and Props.
