import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, CalendarDays, Clapperboard, Film, LoaderCircle, MapPin, Search, ShieldCheck, Ticket, X } from 'lucide-react';
import { api, API_BASE_URL } from '../api/client.js';

const sampleArt = ['photo-1489599849927-2ee91cede3ba', 'photo-1440404653325-ab127d49abc1', 'photo-1517604931442-7e0c8ed2963c', 'photo-1478720568477-152d9b164e26'];
const imageFor = (movie, index) => movie.posterUrl || `https://images.unsplash.com/${sampleArt[index % sampleArt.length]}?auto=format&fit=crop&w=900&q=80`;
const dateKey = (date) => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

export default function App() {
  const [movies, setMovies] = useState([]); const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true); const [error, setError] = useState('');
  const [selected, setSelected] = useState(null); const [shows, setShows] = useState([]);
  const [seats, setSeats] = useState([]); const [chosen, setChosen] = useState([]);
  const [userId, setUserId] = useState(localStorage.getItem('tixify-user-id') || '');
  const [email, setEmail] = useState(''); const [password, setPassword] = useState('');
  const [name, setName] = useState(''); const [phone, setPhone] = useState(''); const [registerMode, setRegisterMode] = useState(false);
  const [busy, setBusy] = useState(false); const [notice, setNotice] = useState('');
  const [show, setShow] = useState(null);

  async function loadMovies(search = '') {
    setLoading(true); setError('');
    try { setMovies(search.trim() ? await api.searchMovies(search.trim()) : await api.movies()); }
    catch (e) { setError(e.message); } finally { setLoading(false); }
  }
  useEffect(() => { loadMovies(); }, []);
  const todayShows = useMemo(() => shows.filter((item) => !item.showDate || item.showDate >= dateKey(new Date())), [shows]);

  async function openMovie(movie) {
    setSelected(movie); setShows([]); setSeats([]); setChosen([]); setShow(null); setNotice('');
    try { setShows(await api.showsForMovie(movie.id)); } catch (e) { setError(e.message); }
  }
  async function chooseShow(item) {
    setShow(item); setChosen([]); setSeats([]); setNotice('');
    try { setSeats(await api.availableSeats(item.id)); } catch (e) { setError(e.message); }
  }
  async function login() {
    setBusy(true); setNotice('');
    try {
      if (registerMode) {
        const user = await api.register({ name, email, password, phone });
        const newId = user?.id ?? user?.userId;
        if (newId) { setUserId(String(newId)); localStorage.setItem('tixify-user-id', String(newId)); setNotice('Account created. You are ready to book.'); }
        else { setRegisterMode(false); setNotice('Account created. Sign in to continue.'); }
        return;
      }
      const user = await api.login({ email, password });
      const id = user.id ?? user.userId;
      if (!id) throw new Error('Login worked, but the response did not include a user ID needed by the booking API.');
      setUserId(String(id)); localStorage.setItem('tixify-user-id', String(id)); setNotice(`Signed in${user.name ? ` as ${user.name}` : ''}.`);
    } catch (e) { setNotice(e.message); } finally { setBusy(false); }
  }
  async function book() {
    if (!userId) { setNotice('Sign in first to create a booking.'); return; }
    if (!chosen.length) { setNotice('Choose at least one available seat.'); return; }
    setBusy(true); setNotice('');
    try {
      const created = await api.createBooking({ userId: Number(userId), showId: show.id, seatIds: chosen.map(Number) });
      setNotice(`Booking confirmed${created?.id ? ` · booking #${created.id}` : ''}.`); await chooseShow(show);
    } catch (e) { setNotice(e.message); } finally { setBusy(false); }
  }

  return <div className="app-shell">
    <header className="topbar"><a className="brand" href="#top"><span className="brand-mark"><Ticket size={19} /></span>tixify<span className="brand-dot">.</span></a><nav><a href="#movies">Explore</a><a href="#how">How it works</a></nav><div className="top-actions"><span className="location"><MapPin size={15} /> Your city</span><a className="outline-btn" href="#account">Sign in</a></div></header>
    <main id="top">
      <section className="hero"><div className="hero-content"><span className="eyebrow"><span className="live-dot" /> YOUR NEXT GREAT NIGHT OUT</span><h1>The big screen<br />is calling<span className="accent">.</span></h1><p>Find your movie. Pick your seats. Make a night of it.</p><a className="primary-btn" href="#movies">Explore movies <ArrowRight size={17} /></a><div className="hero-note"><ShieldCheck size={15} /> Simple booking, straight from the source</div></div><div className="hero-art"><div className="halo" /><img src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=85" alt="Cinema seats and movie screen"/><div className="hero-caption"><span>THE MAGIC OF</span><b>movie night</b></div><div className="floating-ticket"><Ticket size={17} /><span>YOUR SEAT<br /><b>IS WAITING</b></span></div></div><div className="hero-index">01 <span>/ 03</span></div></section>
      <section id="movies" className="section movies-section"><div className="section-heading"><div><span className="eyebrow">CURATED FOR YOU</span><h2>Now showing<span className="accent">.</span></h2><p>Pick a story. We’ll find you a seat.</p></div><form className="search" onSubmit={(e) => { e.preventDefault(); loadMovies(query); }}><Search size={17} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search movies"/><button aria-label="Search"><ArrowRight size={17}/></button></form></div>
        {error && <div className="alert"><b>Can’t load the movie list.</b><span>{error}</span><small>API: {API_BASE_URL}</small></div>}
        {loading ? <div className="loading"><LoaderCircle className="spin" /> Connecting to Tixify…</div> : movies.length ? <div className="movie-grid">{movies.map((movie, index) => <article className="movie-card" key={movie.id}><button className="poster-button" onClick={() => openMovie(movie)}><img src={imageFor(movie, index)} alt={`${movie.title} poster`} onError={(e) => { e.currentTarget.src = `https://images.unsplash.com/${sampleArt[index % sampleArt.length]}?auto=format&fit=crop&w=900&q=80`; }}/><span className="poster-overlay"><span>BOOK TICKETS <ArrowRight size={15}/></span></span><span className="rating">★ {movie.rating ?? 'NEW'}</span></button><div className="movie-info"><h3>{movie.title}</h3><span>{movie.genre || 'Movie'} <i>·</i> {movie.language || 'Various'}</span></div></article>)}</div> : !error && <div className="empty"><Film size={24}/><b>No movies found</b><span>Try another title or check back soon.</span></div>}
      </section>
      <section id="how" className="steps"><div className="steps-heading"><span className="eyebrow">YOUR NIGHT, SORTED</span><h2>Three steps to<br/>the opening scene.</h2></div><div className="step"><span>01</span><Clapperboard/><h3>Find your film</h3><p>Browse what’s on and choose your next favorite.</p></div><div className="step"><span>02</span><CalendarDays/><h3>Pick a show</h3><p>Choose a date and showtime that works for you.</p></div><div className="step"><span>03</span><Ticket/><h3>Take your seat</h3><p>Select seats and confirm your booking.</p></div></section>
      <section id="account" className="account"><div><span className="eyebrow">READY WHEN YOU ARE</span><h2>Make it a<br/><em>movie night.</em></h2><p>{registerMode ? 'Create a Tixify account to book tickets.' : 'Sign in with your Tixify account to book tickets.'}</p></div><form className="account-form" onSubmit={(e) => { e.preventDefault(); login(); }}>{registerMode && <><label>Name<input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name"/></label><label>Phone<input required value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone number"/></label></>}<label>Email<input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com"/></label><label>Password<input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Your password"/></label><button disabled={busy} className="primary-btn">{busy ? 'Please wait…' : registerMode ? 'Create account' : 'Sign in'} <ArrowRight size={16}/></button><button type="button" className="text-btn" onClick={() => { setRegisterMode(!registerMode); setNotice(''); }}>{registerMode ? 'Already registered? Sign in' : 'New to Tixify? Create an account'}</button>{notice && <span className="form-note">{notice}</span>}</form></section>
    </main>
    <footer><a className="brand" href="#top"><span className="brand-mark"><Ticket size={16}/></span>tixify<span className="brand-dot">.</span></a><span>Good stories deserve a great seat.</span><span>© Tixify</span></footer>

    {selected && <div className="modal-backdrop" onMouseDown={(e) => { if (e.target === e.currentTarget) setSelected(null); }}><section className="booking-modal"><button className="close" onClick={() => setSelected(null)} aria-label="Close"><X/></button><span className="eyebrow">BOOK YOUR NIGHT</span><h2>{selected.title}</h2><p className="modal-sub">{selected.genre || 'Movie'} <i>·</i> {selected.language || 'Various'} <i>·</i> {selected.durationMinutes ? `${selected.durationMinutes} min` : 'Tixify'}</p><h3>Choose a showtime</h3>{todayShows.length ? <div className="show-list">{todayShows.map((item) => <button key={item.id} onClick={() => chooseShow(item)} className={show?.id === item.id ? 'show-chip selected' : 'show-chip'}><CalendarDays size={15}/><span>{item.showDate || 'Date TBA'}<b>{item.startTime || 'Time TBA'}</b></span></button>)}</div> : <p className="muted">No upcoming showtimes are listed for this movie.</p>}{show && <><h3 className="seat-heading">Available seats <small>Choose one or more</small></h3>{seats.length ? <div className="seat-grid">{seats.map((seat) => <button key={seat.id} title={`${seat.seatNumber || seat.row + seat.col} · ${seat.seatType || 'REGULAR'}`} onClick={() => setChosen((prev) => prev.includes(seat.id) ? prev.filter((id) => id !== seat.id) : [...prev, seat.id])} className={`seat ${chosen.includes(seat.id) ? 'chosen' : ''}`}>{seat.seatNumber || `${seat.row || ''}${seat.col || ''}`}</button>)}</div> : <p className="muted">No available seats returned for this show.</p>}<button disabled={busy || !chosen.length} onClick={book} className="primary-btn book-btn">{busy ? 'Booking…' : `Confirm ${chosen.length ? `${chosen.length} seat${chosen.length > 1 ? 's' : ''}` : 'booking'}`} <ArrowRight size={16}/></button></>}{notice && <p className="modal-notice">{notice}</p>}</section></div>}
  </div>;
}
