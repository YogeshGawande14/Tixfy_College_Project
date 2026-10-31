# Tixify

**Tixify** is a proposed movie discovery and cinema ticket booking platform. The updated scope adds private, movie-specific discussions so customers can invite friends and talk about a film.

## Use case diagram

This beginner-friendly overview shows the main things each user can do in Tixify. The diagram uses GitHub-supported Mermaid flowchart syntax.

```mermaid
flowchart LR
    Visitor[Visitor]
    Customer[Customer]
    Admin[Administrator]
    Verifier["Cinema ticket verifier - proposed"]

    subgraph Tixify["Tixify System"]
        Browse(["Browse and search movies"])
        Register(["Register or log in"])
        Shows(["View theaters and showtimes"])
        Seats(["Choose available seats"])
        Lock(["Temporary seat hold - proposed"])
        Book(["Book tickets"])
        Ticket(["View or email ticket"])
        History(["View or cancel bookings"])
        Catalog(["Manage movies and cities"])
        Schedule(["Manage theaters, screens, seats, and shows"])
        StartDiscussion(["Start a movie discussion"])
        Invite(["Invite friends"])
        Talk(["Message, reply, react, and view spoilers"])
        Verify(["Check ticket QR code - proposed"])
    end

    Visitor --> Browse
    Visitor --> Register

    Customer --> Browse
    Customer --> Register
    Customer --> Shows
    Customer --> Seats
    Customer -.-> Lock
    Lock -.-> Book
    Customer --> Book
    Customer --> Ticket
    Customer --> History
    Customer --> StartDiscussion
    Customer --> Invite
    Customer --> Talk

    Admin --> Catalog
    Admin --> Schedule

    Verifier -.-> Verify
```

**How to read it:** Each arrow means that the person can use that feature. The Tixify box is the system boundary. Seat holding and QR verification are marked proposed; check their implementation status before presenting them as completed features.

## Main modules

1. **User Authentication and Management** — customer and administrator accounts.
2. **Movie Discovery and Management** — movie browsing, search, filters, and catalog management.
3. **Theater and Show Management** — cities, theaters, screens, seats, and showtimes.
4. **Interactive Seat Selection** — view and choose seats; temporary seat holds are proposed.
5. **Booking and Ticket Confirmation** — bookings, receipts, ticket PDFs, and optional email.
6. **Friends Movie Discussion** — private movie discussions, invitations, and messages; proposed in the updated scope.

## Technology

- Frontend: HTML, CSS, JavaScript
- Backend: Java 21 and Spring Boot REST API
- Database: MySQL
- Local API default: `http://localhost:8081/api`

## Documentation

- [Pre-development synopsis](docs/SYNOPSIS.md)
- [Updated scope and requirements](docs/REQUIREMENTS.md)
- [System design](docs/SYSTEM-DESIGN.md)
- [Database ERD](docs/DATABASE-ERD.md)
- [API reference](docs/API.md)
- [Setup guide](docs/SETUP.md)
- [Verification plan](docs/TEST-PLAN.md)
- [Project plan](docs/PROJECT-PLAN.md)

## Project status

This is an academic project prototype. The synopsis and requirements describe the proposed updated scope. Secure backend authorization, temporary seat locks, transaction-safe reservations, ticket verification, and Friends Movie Discussion need implementation and verification before being called complete. There is no payment gateway in the current scope.
