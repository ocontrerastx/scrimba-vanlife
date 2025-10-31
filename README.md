# Vanlife

A React-based van rental application developed as part of the Scrimba React Advanced course focused on routing architecture. This project demonstrates building a multi-page application with nested navigation, user authentication flows, and dynamic route parameters.

## Setup

```bash
npm install
npm run dev
```

## Key React Concepts

**React Router Implementation:** Built a complete routing system using React Router, including basic Routes for navigation between pages and nested Routes for complex layout hierarchies.

**Protected Routes Pattern:** Implemented authentication-based route protection to restrict access to certain pages, demonstrating real-world authorization patterns in React applications.

**Dynamic Routing with useParams:** Utilized the `useParams` hook to extract URL parameters and render content dynamically based on route values, enabling detail pages and filtered views.

**Layout Components with Outlet:** Created reusable layout structures using the `Outlet` component to render child routes while maintaining consistent navigation and UI elements across nested pages.

**Outlet Context for Data Sharing:** Passed data between parent and child routes using Outlet Context, avoiding prop drilling while maintaining component hierarchy.

**Enhanced Navigation Components:** Implemented `NavLink` for active link styling, `Link` for client-side navigation, and `Navigate` for programmatic redirects and route guards.

## Learning Highlights

The project reinforced modern routing architecture patterns by building a complete multi-page application structure. Understanding the difference between declarative navigation with `Link`/`NavLink` and imperative navigation with `Navigate` provided insights into user flow management.

Implementing protected routes demonstrated authentication patterns essential for production applications, showing how to guard sensitive content and redirect unauthorized users appropriately.

Working with nested routes and outlets revealed the power of compositional routing, where layout components can wrap child routes while maintaining URL hierarchy and code organization that scales with application complexity.
