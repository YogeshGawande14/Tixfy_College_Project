# 📄 Tixify — Documentation Changes Needed

Based on the **latest ER Diagram and Use Case Diagram**, here is what needs to be updated in every documentation file.

---

## 1. `README.md` (Root File)

| # | Problem | Fix |
|---|---|---|
| 1 | Frontend listed as HTML, CSS, JavaScript | Change to **React, JavaScript** |
| 2 | "Cinemas" entity mentioned | Rename to **Theaters** (matches new ER diagram) |
| 3 | Friends Discussion & Group Booking listed as a module | **Remove it** — not in new Use Case diagram |
| 4 | Smart Show Recommendations & CrowdSense listed | **Remove it** — not in new Use Case diagram |
| 5 | No mention of Admin role | **Add Admin** — can manage users, movies, theatres |
| 6 | No mention of Theatre Owner role | **Add Theatre Owner** — manages their own theatre |
| 7 | Payments listed as a database table | **Remove it** — PAYMENTS table is not in new ER diagram |
| 8 | Seat_Locks, Discussions, Comments, Likes listed as planned | **Move to Future Scope section** or remove |
| 9 | CITIES table not mentioned | **Add Cities** to the database table list |
| 10 | "View My Bookings" missing from Customer features | **Add it** — it's in the new Use Case diagram |

---

## 2. `documentation/Architecture_and_Workflow.md`

| # | Problem | Fix |
|---|---|---|
| 1 | Friends Movie Discussion workflow diagram is there | **Remove** the entire Friends Discussion swimlane |
| 2 | No Admin workflow | **Add** Admin swimlane: Login → Manage Users / Movies / Theatres |
| 3 | No Theatre Owner workflow | **Add** Owner swimlane: Login → Manage Theatre / Screens / Shows → View Bookings |
| 4 | Frontend listed as HTML, CSS, JavaScript | Change to **React, JavaScript** |
| 5 | Module 6 says "Friends Movie Discussion" | **Replace** with Admin Module |
| 6 | No Module 7 | **Add** Theatre Owner Module |
| 7 | Documentation links point to `docs/` folder | **Fix links** — that folder doesn't exist. Point to actual `documentation/` folder |

---

## 3. `documentation/Module_Specifications.md`

| # | Problem | Fix |
|---|---|---|
| 1 | Only 5 modules (M1–M5) | **Add M6** — Admin Module |
| 2 | Theatre Owner module missing | **Add M7** — Theatre Owner Module |
| 3 | M5 (Booking) doesn't mention booking history | **Add** "View My Bookings" to M5 scope |

**M6 to Add:**
> **M6. Admin Module**
> Scope: Admin login, manage all users, manage all movies, manage all theatres.

**M7 to Add:**
> **M7. Theatre Owner Module**
> Scope: Owner login, manage own theatre info, manage screens and seats, manage shows, view bookings for their theatre.

---

## 4. `documentation/Requirements.md`

Currently only has FR-01 to FR-12 (all Customer use cases). Need to add:

| New Requirement | What it Covers |
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

## 5. `documentation/Database_Design.md`

This file is mostly correct already. Only small things to add:

| # | Problem | Fix |
|---|---|---|
| 1 | USERS table has no `role` field | Add note: USERS needs a `role` field — CUSTOMER / ADMIN / OWNER |
| 2 | THEATERS has no `owner_id` | Add note: THEATERS needs `owner_id` FK linking to the owner user |

---

## 6. `documentation/Tixify_ERD.mmd`

| # | Problem | Fix |
|---|---|---|
| 1 | USERS entity has no `role` field | Add `varchar role` to USERS |
| 2 | THEATERS has no `owner_id` | Add `int owner_id FK` to THEATERS |

---

## 7. `documentation/Activity2_Project_Scope.md`

| # | Problem | Fix |
|---|---|---|
| 1 | Only 5 modules listed | Add Admin and Theatre Owner modules |
| 2 | Tailwind CSS listed in tech stack | **Remove Tailwind** — it's not actually in the project (not in package.json) |
| 3 | "View My Bookings" not listed | Add it under Booking Management features |

---

## Summary

| File | Changes | Priority |
|---|---|---|
| `README.md` | Remove old modules, fix tech stack, add Admin & Owner, fix DB tables | 🔴 High |
| `Architecture_and_Workflow.md` | Remove Friends Discussion flow, add Admin & Owner flows, fix links | 🔴 High |
| `Module_Specifications.md` | Add M6 and M7 | 🟠 Medium |
| `Requirements.md` | Add FR-13 to FR-22 | 🟠 Medium |
| `Database_Design.md` | Add role and owner_id notes | 🟡 Low |
| `Tixify_ERD.mmd` | Add role and owner_id fields | 🟡 Low |
| `Activity2_Project_Scope.md` | Remove Tailwind, add Admin & Owner | 🟡 Low |
