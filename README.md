# Quad Bike Admin Portal

## Overview

Quad Bike Admin Portal is a React-based Single Page Application (SPA) that allows administrators to manage an e-commerce inventory of quad bikes. The application provides functionality for viewing products, adding new products, updating existing product information, deleting products, and searching inventory dynamically.

The project demonstrates React Hooks, Context API state management, client-side routing, responsive design principles, and CRUD operations.

---

## Features

### Landing Page

* Displays information about the purpose of the application.
* Introduces the administrator dashboard.

### Product Inventory Page

* Displays all available quad bikes.
* Shows product information including:

  * Name
  * Brand
  * Price
  * Engine Size
  * Type
  * Image

### Add Product

* Allows administrators to add a new quad bike listing.
* Uses controlled form inputs with React state.

### Edit Product

* Allows administrators to update existing product information.
* Supports updating values such as:

  * Product name
  * Price
  * Brand
  * Engine size
  * Product type

### Delete Product

* Removes products from the inventory.

### Search Functionality

* Dynamically filters products as the user types.
* Searches by product name and brand.

### Responsive Design

* Uses CSS Grid and responsive layouts.
* Adapts to mobile, tablet, and desktop screens.

---

## Technologies Used

* React
* React Router DOM
* Context API
* JavaScript (ES6+)
* CSS3
* Vite

---

## Project Structure

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── QuadCard.jsx
│   └── SearchBar.jsx
│
├── pages/
│   ├── Landing.jsx
│   ├── Quads.jsx
│   ├── AddQuad.jsx
│   └── EditQuad.jsx
│
├── context/
│   └── QuadContext.jsx
│
├── App.jsx
├── main.jsx
└── styles.css
```

---

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Navigate into the project folder:

```bash
cd quad-bike-admin-portal
```

3. Install dependencies:

```bash
npm install
```

4. Install React Router:

```bash
npm install react-router-dom
```

5. Start the development server:

```bash
npm run dev
```

6. Open the application in your browser using the local URL provided by Vite.

---

## Learning Objectives Demonstrated

* React Hooks (`useState`, `useContext`)
* Context API state management
* Client-side routing with React Router
* CRUD operations
* Dynamic search and filtering
* Responsive design implementation
* Component-based architecture
* Single Page Application development

---

## Future Improvements

* Persistent storage using localStorage or a simulated backend
* Product categories and filters
* Authentication and role management
* Dashboard analytics
* Enhanced product image gallery

---

## Author

Developed as part of a React and Front-End Development learning project.
