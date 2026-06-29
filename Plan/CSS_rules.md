This is one of the best questions you can ask **before starting a project**.

A lot of beginners use units randomly (`px`, `%`, `vh`, `rem`, etc.). In professional projects, there's a strategy.

Since we're building a **modern e-commerce website**, here's what I'd recommend.

---

# 🏢 NOVA WEAR CSS Unit Guidelines

## 1. Font Sizes → ✅ `rem`

Always use `rem` for typography.

```css
h1 {
    font-size: 3rem;
}

p {
    font-size: 1rem;
}
```

### Why?

* Respects the user's browser font settings.
* Better accessibility.
* Scales consistently.

❌ Avoid:

```css
font-size: 48px;
```

---

# 2. Padding & Margin → ✅ `rem`

```css
padding: 1rem;
margin-bottom: 2rem;
gap: 1.5rem;
```

Why?

If the base font size changes, spacing scales naturally too.

---

# 3. Width → Depends

### Cards

```css
width: 100%;
```

or

```css
max-width: 20rem;
```

---

### Sections

Use a container.

```css
.container{
    width:min(1200px,90%);
    margin:auto;
}
```

This is very common in modern CSS.

---

# 4. Height

Use

```css
min-height:100vh;
```

for Hero sections.

Avoid

```css
height:100vh;
```

unless you truly want a fixed viewport height.

---

# 5. Images

```css
img{
    width:100%;
    height:auto;
}
```

or

```css
object-fit:cover;
```

---

# 6. Border Radius

Use

```css
0.5rem

1rem

2rem
```

Not

```css
13px
```

---

# 7. Gap

```css
gap:1rem;

gap:2rem;
```

Instead of adding margins between children.

---

# 8. Icons

Usually

```css
24px

32px
```

or

```css
1.5rem

2rem
```

---

# 9. Borders

```css
border:1px solid;
```

`1px` borders are completely fine.

---

# 10. Shadows

Pixels are perfectly acceptable.

```css
box-shadow:
0 4px 10px rgba(...);
```

---

# Industry Rule

| Property      | Unit                                   |
| ------------- | -------------------------------------- |
| Font Size     | ✅ `rem`                                |
| Padding       | ✅ `rem`                                |
| Margin        | ✅ `rem`                                |
| Gap           | ✅ `rem`                                |
| Width         | `%`, `max-width`, `min()`              |
| Height        | `vh`, `dvh`, `%` (depending on layout) |
| Border        | `px`                                   |
| Box Shadow    | `px`                                   |
| Transform     | `%`, `deg`, `px` (depending on effect) |
| Border Radius | `rem`                                  |
| Container     | `min()`, `max-width`                   |

---

# What About `%`?

Use it when the size should depend on the parent.

Example:

```css
width:100%;
```

Very common.

---

# What About `vw`?

Good for fluid layouts.

Example:

```css
width:50vw;
```

But don't overuse it.

For text,

❌

```css
font-size:5vw;
```

Usually looks bad on large screens.

---

# What About `em`?

`em` depends on the parent element's font size.

```css
.parent{
    font-size:20px;
}

.child{
    font-size:2em;
}
```

Child becomes

```text
40px
```

Nested `em` values can become confusing.

That's why most React projects prefer **`rem`** for sizing.

---

# Our Project Standards (Tech Lead Decision)

For **NOVA WEAR**, we'll follow these rules:

```css
/* Typography */
font-size: rem;

/* Margin */
margin: rem;

/* Padding */
padding: rem;

/* Gap */
gap: rem;

/* Width */
width: 100%;
max-width: ...;
min(...);

/* Height */
min-height: 100vh; /* or 100dvh where appropriate */

/* Borders */
1px;

/* Border Radius */
rem;

/* Shadows */
px;

/* Images */
width: 100%;
height: auto;
```

This is clean, accessible, and aligns well with modern frontend practices.

---

## 📌 One more industry tip

**Don't think "Which unit should I use?"**

Instead, ask:

* **Should this scale with the user's font settings?** → Use `rem`.
* **Should this scale with its parent?** → Use `%`.
* **Should this fill the viewport?** → Use `vh` or `dvh`.
* **Is this a physical effect like a border or shadow?** → `px` is perfectly fine.

If you follow that reasoning, you'll naturally choose the right unit instead of memorizing rules.
