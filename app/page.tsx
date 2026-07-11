"use client";

import { useMemo, useState } from "react";

type Market = {
  id: number; category: string; tag: string; time: string; title: string;
  home: string; away: string; homePct: number; awayPct: number; volume: string; accent: string;
};

const markets: Market[] = [
  { id: 1, category: "World Cup", tag: "LIVE", time: "64'", title: "Norway vs England", home: "Norway", away: "England", homePct: 23, awayPct: 53, volume: "$28M", accent: "#ef3340" },
  { id: 2, category: "World Cup", tag: "TODAY", time: "9:00 PM", title: "Argentina vs Switzerland", home: "Argentina", away: "Switzerland", homePct: 57, awayPct: 16, volume: "$6M", accent: "#74acdf" },
  { id: 3, category: "World Cup", tag: "FUTURES", time: "Jul 19", title: "2026 World Cup Winner", home: "France", away: "Spain", homePct: 38, awayPct: 21, volume: "$4B", accent: "#4169e1" },
  { id: 4, category: "Politics", tag: "TRENDING", time: "Dec 31", title: "US–Iran final nuclear deal by 2026?", home: "Yes", away: "No", homePct: 38, awayPct: 62, volume: "$9M", accent: "#b68cff" },
  { id: 5, category: "Crypto", tag: "5 MIN", time: "Live", title: "Bitcoin up or down in the next 5m?", home: "Up", away: "Down", homePct: 51, awayPct: 49, volume: "$18M", accent: "#f7931a" },
  { id: 6, category: "Sports", tag: "UFC 329", time: "6:00 PM", title: "Max Holloway vs Conor McGregor", home: "Holloway", away: "McGregor", homePct: 73, awayPct: 27, volume: "$8M", accent: "#f05454" },
];

const categories = ["All", "World Cup", "Sports", "Politics", "Crypto"];
const coins = [
  { code: "BTC", name: "Bitcoin", symbol: "₿", color: "#f7931a" },
  { code: "ETH", name: "Ethereum", symbol: "◆", color: "#8c8cff" },
  { code: "USDT", name: "Tether", symbol: "₮", color: "#26a17b" },
  { code: "USDC", name: "USD Coin", symbol: "$", color: "#2775ca" },
  { code: "SOL", name: "Solana", symbol: "S", color: "#a06cff" },
  { code: "BNB", name: "BNB", symbol: "B", color: "#f3ba2f" },
];

export default function Home() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [loginOpen, setLoginOpen] = useState(false);
  const [topupOpen, setTopupOpen] = useState(false);
  const [bet, setBet] = useState<{ market: Market; side: string; pct: number } | null>(null);
  const [amount, setAmount] = useState("");
  const [coin, setCoin] = useState(coins[0]);
  const [error, setError] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const visible = useMemo(() => markets.filter(m =>
    (category === "All" || m.category === category) &&
    (m.title + m.home + m.away).toLowerCase().includes(query.toLowerCase())
  ), [category, query]);
  const amt = Number(amount) || 0;
  const payout = bet ? amt / (bet.pct / 100) : 0;

  function closeModals() { setLoginOpen(false); setTopupOpen(false); setBet(null); setError(false); }

  return (
    <main>
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <img className="page-watermark watermark-left" src="/foursight-emblem.png" alt="" />
      <img className="page-watermark watermark-right" src="/foursight-logo-alt.png" alt="" />
      <header className="nav glass">
        <a className="brand" href="#top"><img className="brand-emblem" src="/foursight-emblem.png" alt=""/><img className="brand-wordmark" src="/foursight-wordmark.png" alt="Foursight"/><em>BETA</em></a>
        <nav><a href="#markets">Markets</a><a href="#how">How it works</a><a href="#activity">Activity</a></nav>
        <div className="nav-actions">
          <button className="icon-button" aria-label="Search markets" onClick={() => document.getElementById("market-search")?.focus()}>⌕</button>
          <button className="topup-mini" onClick={() => { setTopupOpen(true); setError(false); }}>＋ Top up</button>
          <button className="primary small" onClick={() => setLoginOpen(true)}>{loggedIn ? "Demo account" : "Log in"}</button>
        </div>
      </header>

      <section className="hero" id="top">
        <img className="hero-emblem" src="/foursight-emblem.png" alt=""/>
        <div className="eyebrow"><i /> LIVE PREDICTION MARKETS <span>•</span> DEMO EXPERIENCE</div>
        <h1>Don’t just bet.<br/><span className="gold">BET</span> <span className="rotator"><b>Trusted</b><b>Instant</b><b>Private</b></span></h1>
        <p>Trade outcomes privately. No frontruns. No copycats. Only pure conviction — wrapped in a clean, premium market experience.</p>
        <div className="hero-actions"><a className="primary" href="#markets">Explore markets <span>→</span></a><button className="secondary" onClick={() => setTopupOpen(true)}>Top up balance</button></div>
        <div className="proof"><span className="avatar-stack"><b>J</b><b>K</b><b>A</b></span><strong>14,280</strong> traders active today <i /> <strong>$72.4M</strong> 24h volume</div>
      </section>

      <section className="ticker glass" aria-label="Live market ticker">
        <div className="ticker-track">{[...Array(2)].flatMap((_,loop) => [['BTC','$64,213','+0.59%'],['ETH','$1,819','+1.84%'],['SOL','$77.91','+0.25%'],['BNB','$580.35','+0.92%'],['XRP','$1.12','+1.45%']].map(x => <div key={`${loop}-${x[0]}`}><b>{x[0]}</b><span>{x[1]}</span><em>↗ {x[2]}</em></div>))}</div>
      </section>

      <section className="market-section" id="markets">
        <div className="section-heading"><div><span className="kicker">THE MARKET FLOOR</span><h2>What happens next?</h2></div><div className="live-pill"><i/> LIVE • Updates every second</div></div>
        <div className="market-tools glass">
          <div className="tabs">{categories.map(c => <button key={c} className={category === c ? "active" : ""} onClick={() => setCategory(c)}>{c}</button>)}</div>
          <label className="search"><span>⌕</span><input id="market-search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search markets" /></label>
        </div>
        <div className="market-grid">
          {visible.map(m => <article className="market-card glass" key={m.id}>
            <div className="card-top"><span className="category"><i style={{background:m.accent}} />{m.category}</span><span className={m.tag === "LIVE" ? "tag live" : "tag"}>{m.tag === "LIVE" && <i/>}{m.tag}</span></div>
            <h3>{m.title}</h3>
            <div className="outcomes">
              <button onClick={() => setBet({market:m, side:m.home, pct:m.homePct})}><span>{m.home}</span><b>{m.homePct}¢</b><small>{m.homePct}% chance</small></button>
              <button onClick={() => setBet({market:m, side:m.away, pct:m.awayPct})}><span>{m.away}</span><b>{m.awayPct}¢</b><small>{m.awayPct}% chance</small></button>
            </div>
            <div className="meter"><span style={{width:`${m.homePct}%`, background:m.accent}} /></div>
            <footer><span>◷ {m.time}</span><span>{m.volume} vol.</span><button aria-label={`Save ${m.title}`}>☆</button></footer>
          </article>)}
        </div>
        {visible.length === 0 && <div className="empty glass">No markets found. Try another search.</div>}
      </section>

      <section className="how" id="how">
        <div><span className="kicker">BUILT FOR CLARITY</span><h2>From opinion to position<br/>in three simple steps.</h2><p>Foursight turns real-world events into clean, transparent markets. This preview uses demo balances only.</p></div>
        <div className="steps">
          <article className="glass"><b>01</b><span className="step-icon">◎</span><h3>Choose a market</h3><p>Explore live events and find an outcome you believe in.</p></article>
          <article className="glass"><b>02</b><span className="step-icon">↗</span><h3>Take a position</h3><p>Buy an outcome at the price shown and preview your payout.</p></article>
          <article className="glass"><b>03</b><span className="step-icon">✓</span><h3>Follow the result</h3><p>Track how sentiment moves as the real-world story unfolds.</p></article>
        </div>
      </section>

      <section className="activity glass" id="activity">
        <div><span className="kicker">MARKET PULSE</span><h2>Built for people with a point of view.</h2></div>
        <div className="stats"><span><b>$2.8B</b>Total volume</span><span><b>92K</b>Predictions</span><span><b>182</b>Open markets</span></div>
      </section>

      <footer className="footer"><a className="brand" href="#top"><img className="brand-emblem" src="/foursight-emblem.png" alt=""/><img className="brand-wordmark" src="/foursight-wordmark.png" alt="Foursight"/></a><p>Markets for what matters next.</p><div><a href="#markets">Markets</a><a href="#how">How it works</a><a href="#">Terms</a><a href="#">Privacy</a></div><small>© 2026 Foursight. Interactive product demo — no real-money transactions.</small></footer>

      {(loginOpen || topupOpen || bet) && <div className="modal-wrap" onMouseDown={e => e.target === e.currentTarget && closeModals()}>
        {loginOpen && <div className="modal glass" role="dialog" aria-modal="true" aria-labelledby="login-title">
          <button className="close" onClick={closeModals}>×</button><span className="modal-mark"><img src="/foursight-emblem.png" alt=""/></span><h2 id="login-title">Welcome to Foursight</h2><p>Sign in to track positions and manage your demo portfolio.</p>
          <button className="wallet-button" onClick={() => {setLoggedIn(true); closeModals();}}><span>◉</span> Continue with wallet <b>→</b></button>
          <div className="or"><span/>or<span/></div><label>Email address<input type="email" placeholder="you@example.com" /></label><button className="primary full" onClick={() => {setLoggedIn(true); closeModals();}}>Continue with email</button><small>Demo only. No credentials or wallet connection are stored.</small>
        </div>}
        {topupOpen && <div className="modal topup-modal glass" role="dialog" aria-modal="true" aria-labelledby="topup-title">
          <button className="close" onClick={closeModals}>×</button><div className="modal-head"><span className="modal-icon">↙</span><div><h2 id="topup-title">Top up balance</h2><p>Select a currency and create a demo payment request.</p></div></div>
          <div className="coin-grid">{coins.map(c => <button key={c.code} className={coin.code === c.code ? "selected" : ""} onClick={() => {setCoin(c); setError(false)}}><span style={{background:c.color}}>{c.symbol}</span><b>{c.code}</b><small>{c.name}</small><i>{coin.code === c.code ? "✓" : ""}</i></button>)}</div>
          <label>Amount ({coin.code})<div className="amount-input"><input inputMode="decimal" placeholder="0.00"/><span>{coin.code}</span></div></label>
          {error && <div className="error" role="alert"><b>!</b><span><strong>Server error</strong>Please try again later.</span></div>}
          <button className="primary full" onClick={() => setError(true)}>Create payment link <span>→</span></button><small>Demo interface only. No crypto payment will be created.</small>
        </div>}
        {bet && <div className="modal bet-modal glass" role="dialog" aria-modal="true" aria-labelledby="bet-title">
          <button className="close" onClick={closeModals}>×</button><div className="modal-head"><span className="modal-icon">↗</span><div><span className="kicker">PLACE A DEMO POSITION</span><h2 id="bet-title">{bet.market.title}</h2></div></div>
          <div className="selection"><span>You’re backing</span><b>{bet.side}</b><strong>{bet.pct}¢</strong></div>
          <label>Amount (USDC)<div className="amount-input"><span>$</span><input autoFocus value={amount} onChange={e => setAmount(e.target.value.replace(/[^0-9.]/g,''))} inputMode="decimal" placeholder="0.00"/></div></label>
          <div className="quick">{[10,25,50,100].map(n => <button key={n} onClick={() => setAmount(String(n))}>+${n}</button>)}</div>
          <div className="payout"><span>Estimated payout<b>${payout.toFixed(2)}</b></span><span>Potential profit<b className="green">${Math.max(0,payout-amt).toFixed(2)}</b></span></div>
          <button className="primary full" disabled={!amt} onClick={() => { closeModals(); setLoginOpen(true); }}>Review position <span>→</span></button><small>This is a visual demo. No bet or transaction will be placed.</small>
        </div>}
      </div>}
    </main>
  );
}
