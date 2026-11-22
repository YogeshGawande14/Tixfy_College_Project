# ✅ Tixify — Task List (Documentation + Frontend)

> This file tracks all pending tasks for the Tixify project.
> Backend tasks are tracked separately in `Required_backend_changes/Backend_Changes.md`

**Branch to work on:** `dev1`
**ER Diagram:** `Latest Diagrams/ER Diagram.png`
**Use Case Diagram:** `Latest Diagrams/Use Case.png`

---

## 📄 DOCUMENTATION TASKS

---

### Task001 — Update README.md

**File:** `README.md` (root)
**Why:** The current README has wrong frontend tech, old modules (Friends Discussion, CrowdSense), wrong database table names, and no mention of Admin or Theatre Owner roles.

**What to do:**
- Change frontend from "HTML, CSS, JavaScript" → **React, JavaScript**
- Rename "Cinemas" entity → **Theaters**
- Remove **Friends Discussion & Group Booking** module (not in new Use Case)
- Remove **Smart Show Recommendations & CrowdSense** module (not in new Use Case)
- Remove **Payments** from database table list (not in new ER diagram)
- Add **Admin** role with use cases: Manage Users, Manage Movies, Manage Theatres
- Add **Theatre Owner** role with use cases: Manage Theatre, Manage Screens, Manage Shows, View Bookings
- Add **CITIES** to database table list
- Add **"View My Bookings"** to Customer features
- Move Friends Discussion and CrowdSense to **Future Scope** section

---

### Task002 — Update Architecture_and_Workflow.md

**File:** `documentation/Architecture_and_Workflow.md`
**Why:** Has an entire Friends Movie Discussion workflow that is no longer in scope. Missing Admin and Theatre Owner workflows. Broken documentation links.

**What to do:**
- **Remove** the Friends Movie Discussion swimlane diagram completely
- **Add** Admin workflow: Login → Manage Users / Movies / Theatres
- **Add** Theatre Owner workflow: Login → Manage Theatre / Screens / Shows → View Bookings
- Change frontend tech from "HTML, CSS, JavaScript" → **React, JavaScript**
- Change Module 6 from "Friends Movie Discussion" → **Admin Module**
- Add **Module 7** — Theatre Owner Module
- Fix documentation links — currently point to `docs/` folder which doesn't exist. Change to `documentation/` folder
- Use diagram images from `Latest Diagrams/` folder

---

### Task003 — Update Module_Specifications.md

**File:** `documentation/Module_Specifications.md`
**Why:** Only has 5 modules. Missing Admin and Theatre Owner modules. M5 (Booking) is missing "View My Bookings".

**What to do:**
- Update **M5** — Add "booking history / View My Bookings" to its scope
- Add **M6 — Admin Module**
  - Scope: Admin login, manage all users, manage all movies, manage all theatres
- Add **M7 — Theatre Owner Module**
  - Scope: Owner login, manage own theatre info, manage screens and seats, manage shows, view bookings for their theatre
- Add cross-module note about role-based access: CUSTOMER / ADMIN / OWNER

---

### Task004 — Update Requirements.md

**File:** `documentation/Requirements.md`
**Why:** Only has FR-01 to FR-12, all for Customer use cases. No requirements for Admin or Theatre Owner at all.

**What to add:**

| Requirement | Description |
|---|---|
| FR-13 | Admin can log in separately from customers |
| FR-14 | Admin can view and manage all users |
| FR-15 | Admin can add, edit and delete movies |
| FR-16 | Admin can add, edit and delete theatres |
| FR-17 | Theatre Owner can log in |
| FR-18 | Owner can update their own theatre info |
| FR-19 | Owner can manage screens and seats |
| FR-20 | Owner can add and edit shows |
| FR-21 | Owner can view bookings made for their theatre |
| FR-22 | Customer can view their own booking history |

---

### Task005 — Update Database_Design.md

**File:** `documentation/Database_Design.md`
**Why:** Missing role field in USERS and owner link in THEATERS. Use images from Latest Diagrams folder.

**What to do:**
- Add note: USERS table needs a `role` field — values: CUSTOMER / ADMIN / OWNER
- Add note: THEATERS table needs `owner_id` FK linking to the owner user
- Update image reference to use `Latest Diagrams/ER Diagram.png`

---

### Task006 — Update Tixify_ERD.mmd

**File:** `documentation/Tixify_ERD.mmd`
**Why:** Missing role field in USERS entity and owner_id in THEATERS entity.

**What to do:**
- Add `varchar role` to USERS entity
- Add `int owner_id FK` to THEATERS entity

---

### Task007 — Update Activity2_Project_Scope.md

**File:** `documentation/Activity2_Project_Scope.md`
**Why:** Lists Tailwind CSS (not actually used), missing Admin and Theatre Owner modules, missing "View My Bookings".

**What to do:**
- Remove **Tailwind CSS** from tech stack (it's not in package.json)
- Add **Admin Module** to features list
- Add **Theatre Owner Module** to features list
- Add **"View My Bookings"** under Booking Management section

---

## 🖥️ FRONTEND TASKS

---

### Task008 — Add React Router

**File:** `frontend/package.json` + new `frontend/src/router.jsx`
**Why:** The app has zero routing. Everything is on one page. We need separate pages for each section.

**What to do:**
- Run `npm install react-router-dom` in the frontend folder
- Create `src/router.jsx` with routes for all pages
- Update `src/main.jsx` to use the router

---

### Task009 — Split App.jsx Into Separate Pages

**File:** `frontend/src/pages/App.jsx` → split into multiple files
**Why:** Everything is in one giant file. Hard to manage, hard to scale.

**What to do:**
- Create `src/pages/HomePage.jsx` — movie listing + search
- Create `src/pages/MovieDetailPage.jsx` — movie info + available shows
- Create `src/pages/SeatSelectionPage.jsx` — seat picking interface
- Create `src/pages/BookingConfirmPage.jsx` — booking summary + confirm
- Create `src/pages/LoginPage.jsx` — login and register forms

---

### Task010 — Create "My Bookings" Page

**File:** `frontend/src/pages/MyBookingsPage.jsx` (new file)
**Why:** "View My Bookings" is a confirmed Customer use case in the new Use Case Diagram. Currently doesn't exist.

**What to do:**
- Create the page
- Call `api.getMyBookings(userId)` to load bookings
- Show booking details: movie, show date/time, seats, booking status

---

### Task011 — Add City and Theatre Selection to Booking Flow

**File:** `frontend/src/pages/` (booking flow pages)
**Why:** The API client already has `api.cities()` and `api.theatersForCity(id)` but the UI never uses them. User jumps from movie straight to show — skipping city and theatre selection.

**What to do:**
- After selecting a movie, show a **City selection step**
- After selecting a city, show a **Theatre selection step**
- Then show available shows for that movie at that theatre

---

### Task012 — Create Admin Pages

**Files:** `frontend/src/pages/admin/` (new folder with new files)
**Why:** Admin is a confirmed actor in the new Use Case Diagram with 4 use cases.

**What to create:**
- `AdminLoginPage.jsx` — Admin login form
- `AdminDashboard.jsx` — Overview page
- `ManageUsers.jsx` — View/delete users
- `ManageMovies.jsx` — Add/edit/delete movies
- `ManageTheatres.jsx` — Add/edit/delete theatres

---

### Task013 — Create Theatre Owner Pages

**Files:** `frontend/src/pages/owner/` (new folder with new files)
**Why:** Theatre Owner is a confirmed actor in the new Use Case Diagram with 5 use cases.

**What to create:**
- `OwnerLoginPage.jsx` — Owner login form
- `OwnerDashboard.jsx` — Overview page
- `ManageScreens.jsx` — Manage screens and seats
- `ManageShows.jsx` — Add/edit shows
- `ViewBookings.jsx` — View bookings for their theatre

---

### Task014 — Create Shared Components

**Files:** `frontend/src/components/` (new folder)
**Why:** Currently there are no reusable components. Navbar, movie card, seat grid are all baked into App.jsx.

**What to create:**
- `Navbar.jsx` — Top navigation bar (move out of App.jsx)
- `MovieCard.jsx` — Reusable movie card used in movie grid
- `SeatGrid.jsx` — Reusable seat layout component

---

### Task015 — Update client.js with New API Calls

**File:** `frontend/src/api/client.js`
**Why:** Currently missing API calls for Admin, Theatre Owner, and My Bookings. These will be needed once backend is ready.

**What to add:**

```js
// Customer
getMyBookings: (userId) => request(`/bookings/user/${userId}`)

// Admin
adminLogin: (data) => request('/admin/login', json('POST', data))
getUsers: () => request('/admin/users')
deleteUser: (id) => request(`/admin/users/${id}`, { method: 'DELETE' })
addMovie: (data) => request('/admin/movies', json('POST', data))
updateMovie: (id, data) => request(`/admin/movies/${id}`, json('PUT', data))
deleteMovie: (id) => request(`/admin/movies/${id}`, { method: 'DELETE' })

// Theatre Owner
ownerLogin: (data) => request('/owner/login', json('POST', data))
getOwnerShows: () => request('/owner/shows')
addShow: (data) => request('/owner/shows', json('POST', data))
getOwnerBookings: () => request('/owner/bookings')
```

---

## 📊 TASK STATUS OVERVIEW

| Task | Area | Status |
|---|---|---|
| Task001 | Update README.md | ⏳ Pending |
| Task002 | Update Architecture_and_Workflow.md | ⏳ Pending |
| Task003 | Update Module_Specifications.md | ⏳ Pending |
| Task004 | Update Requirements.md | ⏳ Pending |
| Task005 | Update Database_Design.md | ⏳ Pending |
| Task006 | Update Tixify_ERD.mmd | ⏳ Pending |
| Task007 | Update Activity2_Project_Scope.md | ⏳ Pending |
| Task008 | Add React Router | ⏳ Pending |
| Task009 | Split App.jsx into pages | ⏳ Pending |
| Task010 | Create My Bookings page | ⏳ Pending |
| Task011 | Add City + Theatre selection step | ⏳ Pending |
| Task012 | Create Admin pages | ⏳ Pending |
| Task013 | Create Theatre Owner pages | ⏳ Pending |
| Task014 | Create shared components | ⏳ Pending |
| Task015 | Update client.js with new API calls | ⏳ Pending |
