# Tixify — Architecture and Workflow

## Target architecture from the submitted scope
```text
React UI
  ├─ Movie discovery/search
  ├─ Theatre/show selection
  ├─ Seat selection
  └─ Booking confirmation/history
          |
          v
Spring Boot REST API
  ├─ Controllers
  ├─ DTOs
  ├─ Services / business rules
  ├─ Repositories / entities
  └─ Validation and error handling
          |
          v
        MySQL
```

The target stack is React, Spring Boot and MySQL. Confirm actual frontend setup, routes, endpoints, ORM configuration and authentication behavior in the repository.

## Intended booking workflow
1. User browses/searches movies.
2. User selects a theatre, screen, date and showtime.
3. User views the seat layout and selects available seats.
4. User submits a booking request.
5. Backend validates user, show and seat data.
6. Backend stores the booking and updates seat state according to implemented rules.
7. UI displays confirmation and a summary; history is available as specified.
