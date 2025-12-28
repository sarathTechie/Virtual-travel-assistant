# 🌍 Virtual Travel Assistant

A web-based **Virtual Travel Assistant** that helps users plan trips intelligently using an interactive map, radius-based destination discovery, and itinerary generation — all in a modern dark-themed UI.

---

## 🚀 Features

### 🧭 Landing Page
- Attractive dark-themed landing page
- Smooth navigation into travel planning

---

## 🗺️ Travel Planning Modes

### 🔹 Fixed Destination
- User enters:
  - Destination
  - Budget
  - Currency
  - Trip duration
  - Trip type (Family / Friends / Couple / Solo)
- Generates a **detailed day-wise itinerary**
- Options to:
  - Save itinerary
  - Regenerate itinerary
  - Discard itinerary

---

### 🔹 Plan Your Travel (Radius-Based)
- User enters:
  - Starting location
  - Travel radius (in km)
  - Budget
  - Currency
  - Trip duration
  - Trip type
- Displays:
  - Interactive map
  - Radius circle from starting location
  - 📍 Emoji pins for nearby tourist cities
- Clicking a pin:
  - Shows itinerary option
  - Generates a detailed itinerary for that city

---

## 🧠 Smart Logic (Without External APIs)

- Uses **static geographic data**
- Implements **distance calculation (Haversine formula)**
- Filters destinations based on radius input
- API-ready architecture (can integrate Google Maps / OpenTripMap later)

---

## 🛠️ Technologies Used

- **Frontend:** React.js
- **Routing:** React Router DOM
- **Maps:** Leaflet + OpenStreetMap
- **Styling:** CSS (Dark Theme)
- **State Management:** React Hooks
- **Icons:** Emoji-based map pins (📍)

---

## 📂 Project Structure

virtual-travel-assistant/
│
├── src/
│ ├── components/
│ ├── pages/
│ │ ├── LandingPage.jsx
│ │ ├── FixedDestination.jsx
│ │ ├── PlanTravel.jsx
│ │ ├── MapView.jsx
│ │ └── Itinerary.jsx
│ │
│ ├── data/
│ │ ├── cityDatabase.js
│ │ └── locationPins.js
│ │
│ ├── utils/
│ │ └── distance.js
│ │
│ ├── styles/
│ │ └── dark.css
│ │
│ └── App.js
│
└── README.md

---


