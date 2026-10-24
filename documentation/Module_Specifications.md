# Tixify — Module Specifications

The modules below are taken from the submitted college scope. These describe intended behavior; implementation status must be confirmed through code review and testing.

## M1. User Authentication
**Scope:** Registration, login, logout and password management.  
**Acceptance checks:** valid/invalid requests handled appropriately; passwords not stored as plain text; protected operations reject unauthorized requests where applicable. Verify the actual authentication/session/token approach.

## M2. Movie Discovery & Search
**Scope:** Search movies, view synopsis/cast/language/ratings, filter by city or genre.  
**Acceptance checks:** search and filters return matching data; empty results are handled clearly; UI data corresponds to backend responses where integrated.

## M3. Theater & Show Management
**Scope:** Choose theatre, screen, date and showtime.  
**Acceptance checks:** show records refer to the intended movie/screen; invalid IDs and unavailable showtimes are handled; date/time display matches stored values.

## M4. Interactive Seat Selection
**Scope:** Visual seat grid showing available, booked and selected seats.  
**Acceptance checks:** displayed states match backend data; invalid seats are rejected; duplicate booking attempts are handled according to defined rules. A visual grid alone does not prove real-time locking or concurrency safety.

## M5. Booking & Ticket Confirmation
**Scope:** Ticket reservation, booking summary including seat cost/taxes, and booking history.  
**Acceptance checks:** valid booking creates the expected record; invalid references are rejected; price/tax calculations are tested; booking history respects user access rules if implemented.

## Cross-module checks
- Validate database relationships and transaction behavior.
- Document actual API paths and request/response shapes.
- Avoid publishing secrets.
- Mark a feature complete only after it has been verified.
