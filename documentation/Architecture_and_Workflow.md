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
