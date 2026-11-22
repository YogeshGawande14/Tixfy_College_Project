# 🖥️ Tixify — Frontend Changes Needed

Based on the **latest ER Diagram and Use Case Diagram**, here is everything that needs to be built or changed in the frontend.

---

## 📌 Current State of Frontend
> Only one file exists — `App.jsx` — which handles everything (movies, shows, seats, login) in a single giant component. There is no routing, no separate pages, no Admin panel, no Theatre Owner panel.

---

## 1. Add React Router (Routing)

Currently the app has **no routing at all** — everything is on one page.

**Install it:**
```
npm install react-router-dom
```

**Then create `src/router.jsx`** with routes for all pages below.

---

## 2. Break App.jsx Into Separate Pages

Right now `App.jsx` does everything. Split it into proper pages:

| New File | Purpose |
|---|---|
| `src/pages/HomePage.jsx` | Movie listing + search (currently in App.jsx) |
| `src/pages/MovieDetailPage.jsx` | Movie info + available shows |
| `src/pages/SeatSelectionPage.jsx` | Pick seats for a show |
| `src/pages/BookingConfirmPage.jsx` | Booking summary + confirm button |
| `src/pages/LoginPage.jsx` | Login and Register forms |

---

## 3. Missing Pages — Add These (From Use Case Diagram)

These pages are in the Use Case Diagram but don't exist at all yet:

| New File | Why Needed |
|---|---|
| `src/pages/MyBookingsPage.jsx` | Customer use case: **"View My Bookings"** |
| `src/pages/admin/AdminDashboard.jsx` | Admin actor in Use Case Diagram |
| `src/pages/admin/ManageUsers.jsx` | Admin use case: **"Manage Users"** |
| `src/pages/admin/ManageMovies.jsx` | Admin use case: **"Manage Movies"** |
| `src/pages/admin/ManageTheatres.jsx` | Admin use case: **"Manage Theatres"** |
| `src/pages/owner/OwnerDashboard.jsx` | Theatre Owner actor in Use Case Diagram |
| `src/pages/owner/ManageScreens.jsx` | Owner use case: **"Manage Screens and Seats"** |
| `src/pages/owner/ManageShows.jsx` | Owner use case: **"Manage Shows"** |
| `src/pages/owner/ViewBookings.jsx` | Owner use case: **"View Theatre Bookings"** |

---

## 4. Missing Components — Add These

| New File | Purpose |
|---|---|
| `src/components/Navbar.jsx` | Shared top navigation bar (move out of App.jsx) |
| `src/components/SeatGrid.jsx` | Reusable seat layout grid component |
| `src/components/MovieCard.jsx` | Reusable movie card component |

---

## 5. City & Theatre Selection — Missing Step in Booking Flow

The API client (`client.js`) already has these methods ready:
- `api.cities()` — get all cities
- `api.theatersForCity(id)` — get theatres in a city

But the UI **never uses them**. The booking flow skips from "pick a movie" directly to "pick a seat" — missing the City and Theatre selection step.

**Fix:** Add a City → Theatre selection step between choosing a movie and choosing a show.

---

## 6. Update `src/api/client.js`

Add new API calls for Admin and Theatre Owner:

| Method to Add | Endpoint |
|---|---|
| `api.adminLogin(data)` | `POST /admin/login` |
| `api.getUsers()` | `GET /admin/users` |
| `api.deleteUser(id)` | `DELETE /admin/users/{id}` |
| `api.addMovie(data)` | `POST /admin/movies` |
| `api.updateMovie(id, data)` | `PUT /admin/movies/{id}` |
| `api.deleteMovie(id)` | `DELETE /admin/movies/{id}` |
| `api.ownerLogin(data)` | `POST /owner/login` |
| `api.getOwnerShows()` | `GET /owner/shows` |
| `api.addShow(data)` | `POST /owner/shows` |
| `api.getOwnerBookings()` | `GET /owner/bookings` |
| `api.getMyBookings(userId)` | `GET /bookings/user/{userId}` |

---

## 7. `package.json` — Add Missing Dependency

| Dependency | Why |
|---|---|
| `react-router-dom` | For page routing (currently missing) |

---

## Summary

| What | Status | Priority |
|---|---|---|
| Add React Router | ❌ Not done | 🔴 High |
| Split App.jsx into pages | ❌ Not done | 🔴 High |
| My Bookings page | ❌ Missing | 🔴 High |
| City + Theatre selection step | ❌ Missing | 🔴 High |
| Admin pages (3 pages) | ❌ Missing | 🟠 Medium |
| Theatre Owner pages (3 pages) | ❌ Missing | 🟠 Medium |
| Shared components (Navbar, SeatGrid, MovieCard) | ❌ Missing | 🟠 Medium |
| Update client.js with new API calls | ❌ Missing | 🟠 Medium |
| Add react-router-dom to package.json | ❌ Missing | 🟡 Low |

---

> **Build order suggestion:**
> Router → Split App.jsx → Add My Bookings Page → Add City/Theatre step → Admin Pages → Owner Pages
