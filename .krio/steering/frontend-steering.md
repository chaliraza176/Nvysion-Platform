# Frontend Steering Guide for Kiro Code Editor

## Purpose

This document defines **strict generation rules** for Kiro when producing frontend code. The goal is to ensure **consistent design**, **high reusability**, **clean architecture**, and **full compliance** with the project stack and conventions.

---

## Tech Stack (Fixed)

* **React** (Functional Components only)
* **Tailwind CSS v4**
* **shadcn/ui** (primary component library)
* **Vite-based setup**

No alternative frameworks, styling systems, or component libraries are allowed.

---

## Core Design Rules (Mandatory)

### 1. Design Consistency

* UI must be **visually consistent** across all screens.
* Reuse spacing, typography, colors, and components everywhere.
* Do not introduce custom styling patterns per page.

---

### 2. Tailwind CSS v4 Rules

#### ✅ Allowed

* Utility-first Tailwind classes only
* CSS variables defined in `global.css`
* Predefined design tokens (colors, radius, spacing)

#### ❌ Forbidden

* Inline styles
* Arbitrary values (e.g. `bg-[#123456]`)
* Hardcoded colors in JSX
* Custom CSS files outside `global.css`

---

### 3. Color Usage Policy (Very Strict)

* **ONLY use predefined colors from `global.css`**
* Example allowed usage:

  * `bg-primary`
  * `text-muted-foreground`
  * `border-border`

#### Adding New Colors

If a required color does not exist:

1. Add it **once** in `global.css`
2. Use CSS variables
3. Follow naming convention:

   * `--primary`
   * `--secondary`
   * `--accent`
   * `--destructive`

❌ Never define colors directly in components

---

## Component Strategy (Critical)

### 4. Premade Components First

Kiro must follow this priority order:

1. **Reuse existing components** from `/components`
2. **Install from shadcn/ui** if component exists
3. **Create a new reusable component** if not available

❌ Never write large UI blocks directly inside pages

---

### 5. shadcn/ui Rules

* Use only official shadcn components
* Install via CLI when missing
* Do not rewrite shadcn internals
* Extend via composition, not modification

Examples:

* `Button`
* `Card`
* `Dialog`
* `DropdownMenu`
* `Tabs`

---

## Reusability & Architecture

### 6. Reusable Components (Required)

Every UI element must be:

* Reusable
* Isolated
* Configurable via props

Examples:

* `PageHeader`
* `SectionWrapper`
* `EmptyState`
* `ConfirmDialog`

❌ No duplicate UI logic

---

### 7. Code Splitting & Folder Structure

Follow this structure strictly:

```
src/
 ├─ components/
 │   ├─ ui/            # shadcn components
 │   ├─ layout/        # headers, footers, wrappers
 │   ├─ common/        # reusable shared components
 │
 ├─ features/
 │   ├─ auth/
 │   │   ├─ components/
 │   │   ├─ hooks/
 │   │   └─ index.js
 │
 ├─ pages/
 ├─ hooks/
 ├─ lib/
 ├─ styles/
 │   └─ global.css
```

---

### 8. Page Responsibility Rule

Pages must:

* Only compose components
* Contain **no complex logic**
* Contain **no styling logic**

All logic goes to:

* Hooks
* Feature-level components

---

## State Management (Zustand)

### 9. Global State Management Rules

* **Zustand is the ONLY allowed global state manager**
* Redux, Context API for global state, MobX, or other libraries are NOT allowed
* React Context may be used **only for theme or very small scoped cases**

#### When to Use Zustand

Use Zustand when:

* State is shared across multiple pages or features
* State must persist across navigation
* UI state becomes complex (modals, filters, auth, preferences)

Examples:

* Auth state
* User preferences
* Global modals
* Dashboard filters

---

### 10. Zustand Store Structure

Each store must:

* Be feature-based
* Live inside the related feature folder
* Expose minimal state and actions

Example structure:

```
features/auth/store/useAuthStore.js
features/ui/store/useUIStore.js
```

---

### 11. Zustand Best Practices

* One store per feature
* No god/global mega-store
* Actions must be colocated with state
* Store logic must NOT contain UI code
* Async logic is allowed inside actions

---

### 12. Zustand Usage Rules

* Select only required state using selectors
* Avoid subscribing to entire store
* No direct mutations outside Zustand setters

Example usage pattern:

* `const user = useAuthStore((s) => s.user)`

---

## React Best Practices

### 9. Component Standards

* Functional components only
* One component per file
* Named exports preferred
* Props must be validated using PropTypes (if required)
* No anonymous default exports

---

### 10. State & Logic

* Use custom hooks for logic
* Keep components presentational
* Avoid prop drilling

Examples:

* `useAuth()`
* `useModal()`
* `usePagination()`

---

## Accessibility & UX

### 11. Accessibility (Required)

* Use semantic HTML
* shadcn components must retain ARIA attributes
* Buttons must be real `<button>` elements
* Forms must have labels

---

## Performance Rules

### 12. Performance

* Lazy-load heavy components
* Avoid unnecessary re-renders
* Use memoization when required

---

## Code Generation Checklist (Kiro Must Validate)

Before generating code, Kiro must ensure:

* ✅ Tailwind v4 compliant
* ✅ Colors only from `global.css`
* ✅ shadcn components reused
* ✅ No duplicated UI
* ✅ Reusable components created
* ✅ Clean folder structure
* ✅ Page-only composition

---

## Final Enforcement Rule

If **any rule conflicts**, priority order is:

1. This Steering Document
2. Tailwind v4 rules
3. shadcn/ui conventions
4. React best practices

Kiro must **refuse** to generate code that violates these rules.

---

**This document is authoritative and must be followed for all frontend code generation.**
