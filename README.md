# 🎬 Tixify – Online Movie Discovery and Cinema Ticket Booking System

Tixify is an online movie discovery and cinema ticket booking platform that allows users to explore movies, check cinema showtimes, select seats, and book movie tickets conveniently.

The project also aims to provide social movie discussions, group movie booking, and smart alternative show recommendations to improve the movie-going experience.

---

## 📌 Project Objectives

- Provide an easy-to-use online movie discovery platform.
- Allow users to explore movies and available cinema shows.
- Enable users to select seats and book tickets online.
- Prevent duplicate seat bookings through temporary seat locking.
- Provide a secure and reliable booking process.
- Allow friends to discuss movies and plan group bookings.
- Suggest alternative shows based on user preferences and availability.

---

## ✨ Key Features and Modules

### 1. User Management
- User registration and login.
- Secure password storage.
- User account management.

### 2. Movie Management
- Browse available movies.
- View movie details, genres, and duration.
- Explore movies based on available information.

### 3. Cinema and Show Management
- Display cinema information and locations.
- View available screens.
- Explore movie showtimes and ticket prices.

### 4. Interactive Seat Selection
- Display an interactive cinema seating layout.
- Identify available, selected, and booked seats.
- Allow users to select their preferred seats.

### 5. Temporary Seat Locking
- Temporarily lock selected seats for 5 minutes.
- Display a countdown timer.
- Automatically release expired seat locks.
- Prevent multiple users from booking the same seat.

### 6. Friends Discussion and Group Movie Booking
- Discuss movies with friends.
- Share opinions through posts, likes, comments, and replies.
- Select individual friends or use the Select All option.
- Proceed to a group ticket booking interface.
- Select cinema, showtime, and seats for group participants.

### 7. Smart Show Recommendations and CrowdSense
- Suggest alternative movie shows when the preferred show is unavailable.
- Find suitable options based on cinema, timing, and ticket price.
- Display estimated crowd levels using seat occupancy.
- Categorize crowd levels as Low, Medium, and High.

### 8. Booking and Payment Management
- Store booking information.
- Maintain selected seat details.
- Calculate total ticket amounts.
- Record payment details and payment status.

---

## 🛠️ Technology Stack

| Component | Technology |
|---|---|
| Frontend | HTML, CSS, JavaScript |
| Backend | Java 21, Spring Boot |
| API | REST API |
| Database | MySQL |
| Development IDE | Visual Studio Code / IntelliJ IDEA |
| Version Control | Git and GitHub |

*Note: The above is the documented project stack. Confirm the final frontend and backend choices with your project team before implementation.*

---

## 🗄️ Database Design

Tixify uses MySQL as its relational database management system.

The current ER diagram contains the following nine entities:

| Entity | Purpose |
|---|---|
| Users | Stores registered user information |
| Movies | Stores movie details |
| Cinemas | Stores cinema information |
| Screens | Stores cinema screen details |
| Seats | Stores individual seat information |
| Shows | Stores movie show schedules |
| Bookings | Stores ticket booking information |
| Booking_Seats | Connects bookings with selected seats |
| Payments | Stores payment information |

### Database Relationships

- One cinema can have multiple screens.
- One screen can contain multiple seats.
- One screen can host multiple shows.
- One movie can have multiple shows.
- One user can make multiple bookings.
- One show can have multiple bookings.
- One booking can contain multiple seats.
- One booking can have payment records.

Primary Keys (PK) uniquely identify records, while Foreign Keys (FK) establish relationships between database tables.

### Planned Database Extensions

To support the additional modules, the database can be extended with:

- Seat_Locks
- Discussions
- Comments
- Likes
- Groups
- Group_Members

These entities are proposed additions and are not included in the current nine-table ER diagram.

---

## 🔄 Project Workflow

1. User registers or logs into Tixify.
2. User explores available movies.
3. User selects a movie and cinema.
4. User checks available showtimes.
5. User selects seats from the seating layout.
6. Selected seats are temporarily locked.
7. User completes the booking and payment.
8. Booking and payment details are stored in the database.

Friends can additionally discuss movies, select group participants, and proceed with group booking.

---

## 🔐 Data Security and Reliability

- Passwords should be stored using secure hashing.
- Primary and foreign keys maintain data integrity.
- Database constraints help prevent duplicate bookings.
- Transaction management ensures reliable booking operations.
- Temporary seat locks help avoid conflicting seat selections.
- Payment status is maintained separately from booking information.

---

## 🚀 Future Scope

- Digital movie tickets with QR codes.
- Booking history and cancellation management.
- Admin dashboard for managing movies, cinemas, and shows.
- Improved group booking and participant confirmation.
- Enhanced movie recommendation options.
- Notifications for booking confirmation and updates.

---

## 👨‍💻 Project Information

**Project Name:** Tixify

**Project Type:** MCA Academic Project

**Project Domain:** Web Application / Online Ticket Booking System

**Database:** MySQL

**Project Repository:** Add your GitHub repository link here.

---

## 🎯 Expected Outcome

Tixify aims to provide a convenient and user-friendly movie discovery and ticket booking experience. By combining seat selection, temporary seat locking, social movie discussions, group booking, and alternative show recommendations, the platform aims to make movie planning and booking easier for users.

---

*Developed as part of the Master of Computer Applications (MCA) academic project.*
