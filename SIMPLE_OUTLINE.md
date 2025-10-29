# EZRA - Simple App Outline

## Core Concept
A simple bilingual marketplace for home services (customers post jobs, providers accept them).

## Tech Stack (Minimal)
- **React + Vite** (already works, no extra config)
- **React Router** (basic routing)
- **Plain CSS** (inline styles or simple CSS file - NO Tailwind)
- **No backend for now** (just mock data in JavaScript)

## Pages (3 simple screens)

### 1. Home Page (`/`)
- Welcome message
- "Post a Job" button → goes to Customer page
- "I'm a Provider" button → goes to Provider page
- Language toggle (EN/HE)

### 2. Customer Page (`/customer`)
- Simple form: Category, Description, Location, Budget, Time
- Submit button → shows list of 3 mock providers
- Click provider → "Book" button (just shows alert "Booked!" for now)

### 3. Provider Page (`/provider`)
- List of available jobs (mock data)
- Each job shows: category, description, location, budget
- "Accept Job" button (just alert for now)

## Data Structure (all in one file)

```javascript
// src/data.js
export const jobs = [
  { id: 1, category: 'Plumbing', description: 'Leaky faucet', location: 'Tel Aviv', budget: '₪350' },
  // ... more
];

export const providers = [
  { id: 1, name: 'David Cohen', service: 'Plumbing', rating: 4.9, verified: true },
  // ... more
];
```

## Features to Build First
1. ✅ 3 pages with navigation
2. ✅ Customer form to post job
3. ✅ Show providers after posting
4. ✅ Provider sees job list
5. ✅ Simple buttons (alerts for now, no real actions)
6. ✅ Language toggle (just switch text, no RTL yet)

## What to Skip (for now)
- ❌ Admin panel (add later)
- ❌ Chat/Messaging
- ❌ Payments
- ❌ Authentication
- ❌ Database/Backend
- ❌ Complex styling libraries

## File Structure
```
frontend/
  src/
    App.jsx          (routing)
    pages/
      Home.jsx       (landing)
      Customer.jsx   (post job)
      Provider.jsx   (view jobs)
    data.js          (mock data)
    main.jsx
    index.css        (basic reset)
```

This should take ~30 minutes to build and will actually work! 🚀

