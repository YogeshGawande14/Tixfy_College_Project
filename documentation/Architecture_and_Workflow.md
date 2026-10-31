# Tixify Use Case Diagram

## Purpose

This simple diagram shows the main interactions between Tixify users and the proposed system. It is suitable for the GitHub repository README and for a beginner-level project presentation.

```mermaid
flowchart LR
    Visitor[Visitor]
    Customer[Customer]
    Admin[Administrator]
    Verifier[Cinema ticket verifier<br/>(proposed)]

    subgraph Tixify["Tixify System"]
        Browse([Browse and search movies])
        Register([Register or log in])
        Shows([View theaters and showtimes])
        Seats([Choose available seats])
        Lock([Temporarily hold seats<br/>(proposed)])
        Book([Book tickets])
        Ticket([View or email ticket])
        History([View or cancel bookings])
        Catalog([Manage movies and cities])
        Schedule([Manage theaters, screens, seats, and shows])
        StartDiscussion([Start a movie discussion])
        Invite([Invite friends])
        Talk([Message, reply, react, and view spoilers])
        Verify([Check ticket QR code<br/>(proposed)])
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

## Simple explanation

- A **Visitor** can browse movies and register.
- A **Customer** can browse movies, view shows, select seats, book tickets, view booking information, and join movie discussions.
- An **Administrator** manages the movie and cinema schedule information.
- A **Cinema ticket verifier** is shown only for the proposed QR ticket-checking feature.
- The box labelled **Tixify System** contains the features provided by the application.
- A dotted arrow marks the proposed ticket-verification interaction.

## Presentation script

> “This use case diagram shows what each type of user can do in Tixify. Visitors can browse movies and register. Customers can view showtimes, choose seats, book tickets, and join discussions about movies with friends. Administrators manage the movie and theater information. QR ticket checking is a proposed feature.”

Before presenting, confirm with the guide which proposed features are in the approved project scope. Do not describe a proposed feature as already implemented.
