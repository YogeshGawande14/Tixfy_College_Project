# Tixify React frontend

React + Vite client for the Spring Boot API documented in `docs/API.md`. The frontend runs on **5173** and the backend runs on **8081**.

## Run on one computer

1. Install Node.js 20 or newer and Java 21; start MySQL.
2. Start the backend from the backend repository: `./mvnw.cmd spring-boot:run` (Windows) or `./mvnw spring-boot:run` (macOS/Linux).
3. In this folder run `npm install`.
4. Copy `.env.example` to `.env.local`; keep `VITE_API_BASE_URL=http://localhost:8081/api`.
5. Run `npm run dev` and open `http://localhost:5173`.

## Frontend and backend on separate computers

Both computers must be on the same trusted local network. On the backend computer, find its LAN IPv4 address (Windows: `ipconfig`; macOS/Linux: `ip addr` or network settings), for example `192.168.1.25`. In the frontend folder on the friend's computer, create `.env.local` with:

```env
VITE_API_BASE_URL=http://192.168.1.25:8081/api
```

Replace the example IP with the backend computer's current LAN address. Restart Vite after changing `.env.local`. Do not use `localhost` for the backend URL on the friend's computer: it refers to the friend's own computer.

The backend listens on port **8081**. Spring Boot's embedded server accepts network connections by default; if the backend computer has a custom `server.address`, remove that restriction or set `server.address=0.0.0.0`. Allow inbound TCP port 8081 through that computer's firewall on the private network. The current backend CORS config already allows all origins for `/api/**`. The frontend dev server binds to `0.0.0.0:5173`; allow TCP 5173 if another device needs to open the frontend page. Keep both machines on a trusted network; don't expose these prototype services to the public internet.

## API flows included

- Movie grid and search: `GET /api/movies`, `GET /api/movies/search?title=...`
- Movie showtimes: `GET /api/shows/movie/{movieId}`
- Available seats: `GET /api/bookings/show/{showId}/available-seats`
- Prototype login: `POST /api/users/login` with `{ "email", "password" }`
- Booking: `POST /api/bookings` with `{ "userId", "showId", "seatIds" }`

The booking endpoints use a numeric user ID, and the current prototype login is not a secure identity system. Seat holds, payment, and secure user authorization are not implemented by this frontend or guaranteed by the backend. Backend source and `docs/API.md` are authoritative if routes change.

## Build

```sh
npm run build
npm run preview
```

The build output is in `dist/`. `.env.local`, `node_modules/`, and `dist/` are ignored by Git. Never commit credentials or private environment files.
