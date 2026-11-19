const baseUrl = (import.meta.env.VITE_API_BASE_URL || 'http://localhost:8081/api').replace(/\/$/, '');

async function request(path, options = {}) {
  let response;
  try {
    response = await fetch(`${baseUrl}${path}`, {
      ...options,
      headers: { ...(options.body ? { 'Content-Type': 'application/json' } : {}), ...options.headers },
    });
  } catch {
    throw new Error(`Cannot reach ${baseUrl}. Check that the backend is running and the API URL points to the backend PC.`);
  }
  if (!response.ok) {
    const problem = await response.json().catch(() => ({}));
    throw new Error(problem.message || problem.detail || problem.title || `Request failed (${response.status})`);
  }
  if (response.status === 204) return null;
  const text = await response.text();
  if (!text) return null;
  try { return JSON.parse(text); } catch { return text; }
}

const json = (method, body) => ({ method, body: JSON.stringify(body) });
export const api = {
  movies: () => request('/movies'),
  movie: (id) => request(`/movies/${id}`),
  searchMovies: (title) => request(`/movies/search?title=${encodeURIComponent(title)}`),
  showsForMovie: (id) => request(`/shows/movie/${id}`),
  showsForMovieOnDate: (id, date) => request(`/shows/movie/${id}/date?date=${encodeURIComponent(date)}`),
  cities: () => request('/cities'),
  theaters: () => request('/theaters'),
  theatersForCity: (id) => request(`/theaters/city/${id}`),
  seatsForScreen: (id) => request(`/seats/screen/${id}`),
  availableSeats: (showId) => request(`/bookings/show/${showId}/available-seats`),
  register: (data) => request('/users/register', json('POST', data)),
  login: (data) => request('/users/login', json('POST', data)),
  createBooking: (data) => request('/bookings', json('POST', data)),
  bookingReceipt: (id, userId) => request(`/bookings/${id}/receipt?userId=${encodeURIComponent(userId)}`),
};

export const API_BASE_URL = baseUrl;
