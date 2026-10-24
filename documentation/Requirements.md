# Tixify — Requirements

These are target requirements based on the submitted college scope; they are not claims that all features are already implemented.

## Functional requirements
- FR-01: Support registration, login, logout and password management.
- FR-02: Allow users to search movie information.
- FR-03: Display movie synopsis, cast, language and ratings when available.
- FR-04: Support city/genre filters.
- FR-05: Provide theatre, screen, date and showtime selection.
- FR-06: Display available, booked and selected seat states.
- FR-07: Accept booking requests for valid show/seat selections.
- FR-08: Display a booking confirmation/summary.
- FR-09: Display seat cost and taxes according to defined rules.
- FR-10: Provide booking history according to implemented access rules.
- FR-11: Persist records in MySQL.
- FR-12: Validate API requests and return documented responses/errors.

## Non-functional requirements
- Usability: seat states and navigation should be understandable.
- Maintainability: separate API, business logic and persistence responsibilities.
- Data integrity: booking and seat records should remain consistent.
- Security: protect credentials and ensure authentication claims match actual code.
- Reliability: handle invalid inputs consistently.
- Testability: make core endpoints/workflows repeatable.
- Portability: document compatible setup requirements.
- Performance: measure response times before claiming performance targets.

## Constraints and assumptions
The submitted scope lists React, Spring Boot and MySQL. Screenshots show a Spring Boot backend and a `UI` folder; verify the actual frontend framework and run commands. Verify seat locking, payment, email, admin controls and deployment before describing them as implemented.
