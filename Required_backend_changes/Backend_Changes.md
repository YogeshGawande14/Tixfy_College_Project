# 🛠️ Tixify — Backend Changes Needed
### (For Backend Developer)

Hey! Based on our **latest ER Diagram and Use Case Diagram**, here's everything that needs to be built/changed in the backend. Right now the backend only has the Spring Boot startup file — nothing else exists yet.

---

## 📌 Current State of Backend
> Only `TixifyBackendApplication.java` exists. No entities, no repositories, no services, no controllers have been created yet.

---

## ✅ What Needs to Be Built

### 1. JPA Entities (Database Tables → Java Classes)
Create one Java class for each table in our new ER Diagram:

| Entity Class | Table | Why |
|---|---|---|
| `City.java` | CITIES | Cities where theatres are located |
| `Theater.java` | THEATERS | Theatre info, linked to a City |
| `Screen.java` | SCREENS | Screens inside a Theatre |
| `Seat.java` | SEATS | Individual seats in a Screen |
| `Movie.java` | MOVIES | Movie details |
| `Show.java` | SHOWS | A movie scheduled on a screen at a time |
| `User.java` | USERS | Customer / Admin / Owner accounts |
| `Booking.java` | BOOKINGS | A user's ticket booking |
| `BookingSeat.java` | BOOKING_SEATS | Junction table — which seats are in a booking |

> **Important:** `User.java` must have a `role` field with values: `CUSTOMER`, `ADMIN`, `OWNER`
> Because our new Use Case Diagram has 3 actors — not just Customer anymore.

---

### 2. Repositories (Database Access Layer)
Create a Spring Data JPA repository for each entity:

| Repository | Key Methods Needed |
|---|---|
| `CityRepository` | `findAll()` |
| `TheaterRepository` | `findByCityId()` |
| `ScreenRepository` | `findByTheaterId()` |
| `SeatRepository` | `findByScreenId()` |
| `MovieRepository` | `findAll()`, `findByTitleContaining()` |
| `ShowRepository` | `findByMovieId()`, `findByMovieIdAndShowDate()` |
| `UserRepository` | `findByEmail()` (for login) |
| `BookingRepository` | `findByUserId()`, `findByShowId()` |
| `BookingSeatRepository` | `findBookedSeatsByShowId()` |

---

### 3. Services (Business Logic Layer)
Create a service class for each module:

| Service | What it Does |
|---|---|
| `CityService` | Return list of all cities |
| `TheaterService` | Return theatres filtered by city |
| `ScreenService` | Return screens for a theatre |
| `SeatService` | Return available seats for a show (exclude already booked ones) |
| `MovieService` | List all movies, search by title |
| `ShowService` | Get shows by movie, filter by date |
| `UserService` | Register new user, login (check email + password), return user ID |
| `BookingService` | Create booking, prevent duplicate seat booking, calculate total price |

---

### 4. REST API Controllers (Endpoints)
Create controllers that the frontend will call:

| Controller | Endpoints |
|---|---|
| `CityController` | `GET /cities` |
| `TheaterController` | `GET /theaters`, `GET /theaters/city/{id}` |
| `ScreenController` | `GET /screens/theater/{id}` |
| `SeatController` | `GET /seats/screen/{id}` |
| `MovieController` | `GET /movies`, `GET /movies/{id}`, `GET /movies/search?title=` |
| `ShowController` | `GET /shows/movie/{id}`, `GET /shows/movie/{id}/date?date=` |
| `UserController` | `POST /users/register`, `POST /users/login` |
| `BookingController` | `POST /bookings`, `GET /bookings/show/{id}/available-seats`, `GET /bookings/{id}/receipt` |

> These endpoints already exist in the **frontend API client** (`client.js`) — the frontend is ready and waiting for these to work.

---

### 5. NEW — Admin Module
**Why?** Our new Use Case Diagram added an **Admin** actor who can manage the entire platform.

| File | Purpose |
|---|---|
| `AdminController.java` | `POST /admin/login`, `GET /admin/users`, `DELETE /admin/users/{id}`, `POST /admin/movies`, `PUT /admin/movies/{id}`, `DELETE /admin/movies/{id}`, `GET /admin/theaters` |
| `AdminService.java` | Admin login logic, CRUD for users/movies/theatres |

---

### 6. NEW — Theatre Owner Module
**Why?** Our new Use Case Diagram added a **Theatre Owner** actor who manages their own theatre.

| File | Purpose |
|---|---|
| `OwnerController.java` | `POST /owner/login`, `PUT /owner/theater/{id}`, `POST /owner/screens`, `GET /owner/shows`, `POST /owner/shows`, `GET /owner/bookings` |
| `OwnerService.java` | Owner login, manage their theatre/screens/shows, view their bookings |

---

## ⚠️ Fix in `pom.xml`

| Issue | Current | Fix |
|---|---|---|
| Java version wrong | `<java.version>17</java.version>` | Change to `21` |
| Wrong web dependency | `spring-boot-starter-webmvc` | Change to `spring-boot-starter-web` |
| Wrong test dependency | `spring-boot-starter-data-jpa-test` (doesn't exist) | Change to `spring-boot-starter-test` |

---

## 🗄️ Database Note
Use `spring.jpa.hibernate.ddl-auto=update` (already set in `application.properties`) — Hibernate will auto-create/update tables from your entities. No need to write SQL manually.

Just make sure MySQL is running and the `tixify` database exists (or set `createDatabaseIfNotExist=true` in DB URL — already done ✅).

---

## 📦 Suggested Package Structure

```
com.codeduo.tixify
│
├── entity/          → All JPA entity classes
├── repository/      → All Spring Data JPA repositories
├── service/         → All business logic services
├── controller/      → All REST API controllers
└── TixifyBackendApplication.java  ← already exists
```

---

## 🔑 Summary

| What | Count | Status |
|---|---|---|
| Entity classes to create | 9 | ❌ Not started |
| Repository interfaces to create | 9 | ❌ Not started |
| Service classes to create | 8 | ❌ Not started |
| Controllers to create | 8 | ❌ Not started |
| Admin module (new) | 2 files | ❌ Not started |
| Theatre Owner module (new) | 2 files | ❌ Not started |
| pom.xml fixes | 3 fixes | ⚠️ Needs fix |

**Total: ~38 files need to be created, 3 fixes in pom.xml.**

> Start with Entities first → then Repositories → then Services → then Controllers.
> That's the correct order because each layer depends on the one below it.
