"use client";

import { useEffect, useMemo, useState } from "react";

type Market = {
  id: number;
  category: string;
  tag: string;
  time: string;
  title: string;
  totalPoolUSD: number;
  totalPoolBNB: number;
  yesPct: number;
  noPct: number;
  sparklinePath: string;
  accent: string;
};

const markets: Market[] = [
  {
    id: 1,
    category: "Sports",
    tag: "LIVE",
    time: "64'",
    title: "Will England defeat Norway in the World Cup Quarter-Finals?",
    totalPoolUSD: 213,
    totalPoolBNB: 0.343,
    yesPct: 23,
    noPct: 77,
    sparklinePath: "M10,25 Q35,10 70,22 T130,12 T190,26 T250,15 T310,22 T350,18",
    accent: "#ffc400"
  },
  {
    id: 2,
    category: "Politics",
    tag: "TODAY",
    time: "9:00 PM",
    title: "Will the US-Iran Nuclear Deal be signed in 2026?",
    totalPoolUSD: 1420,
    totalPoolBNB: 2.28,
    yesPct: 38,
    noPct: 62,
    sparklinePath: "M10,15 Q40,30 80,12 T140,25 T200,10 T260,28 T320,15 T350,22",
    accent: "#ffc400"
  },
  {
    id: 3,
    category: "Crypto",
    tag: "LIVE",
    time: "Active",
    title: "Will Bitcoin reach $108 000 this week?",
    totalPoolUSD: 5240,
    totalPoolBNB: 8.42,
    yesPct: 50,
    noPct: 50,
    sparklinePath: "M10,20 Q45,18 90,25 T170,15 T250,28 T310,12 T350,16",
    accent: "#ffc400"
  },
  {
    id: 4,
    category: "Crypto",
    tag: "FUTURES",
    time: "Jul 19",
    title: "Will Ethereum gas fee average stay under 15 Gwei?",
    totalPoolUSD: 870,
    totalPoolBNB: 1.40,
    yesPct: 65,
    noPct: 35,
    sparklinePath: "M10,28 Q40,15 80,22 T150,12 T220,26 T290,18 T350,24",
    accent: "#ffc400"
  },
  {
    id: 5,
    category: "Culture",
    tag: "TRENDING",
    time: "Dec 31",
    title: "Will GTA 6 exceed a 95 Metacritic score?",
    totalPoolUSD: 3100,
    totalPoolBNB: 4.98,
    yesPct: 73,
    noPct: 27,
    sparklinePath: "M10,12 Q45,22 90,8 T170,25 T250,10 T310,20 T350,14",
    accent: "#ffc400"
  },
  {
    id: 6,
    category: "Sports",
    tag: "UFC 329",
    time: "6:00 PM",
    title: "Will Conor McGregor win his UFC 329 comeback fight?",
    totalPoolUSD: 1890,
    totalPoolBNB: 3.04,
    yesPct: 27,
    noPct: 73,
    sparklinePath: "M10,18 Q35,28 75,10 T145,22 T215,14 T285,28 T350,20",
    accent: "#ffc400"
  }
];

const coins = [
  { code: "BNB", name: "BNB", symbol: "B", color: "#f3ba2f" },
  { code: "USDC", name: "USD Coin", symbol: "$", color: "#2775ca" },
  { code: "BTC", name: "Bitcoin", symbol: "₿", color: "#f7931a" },
  { code: "ETH", name: "Ethereum", symbol: "◆", color: "#8c8cff" },
  { code: "USDT", name: "Tether", symbol: "₮", color: "#26a17b" },
  { code: "SOL", name: "Solana", symbol: "S", color: "#a06cff" },
];

type Position = {
  id: string;
  marketId: number;
  marketTitle: string;
  side: string;
  amount: number;
  pct: number;
  payout: number;
  timestamp: string;
};

type User = {
  email: string;
  password?: string;
  balances: Record<string, number>;
  positions: Position[];
};

export default function Home() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [loginOpen, setLoginOpen] = useState(false);
  const [topupOpen, setTopupOpen] = useState(false);
  const [bet, setBet] = useState<{ market: Market; side: string; pct: number } | null>(null);
  const [amount, setAmount] = useState("");
  const [coin, setCoin] = useState(coins[0]);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  // Real local login system state
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");
  const [authEmail, setAuthEmail] = useState("");
  const [authPassword, setAuthPassword] = useState("");
  const [authError, setAuthError] = useState("");
  
  const [topupAmount, setTopupAmount] = useState("");
  const [topupSuccess, setTopupSuccess] = useState(false);

  // Loading effects states
  const [modalLoading, setModalLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");

  // Load current user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("foursight_current_user");
    if (savedUser) {
      try {
        const parsed = JSON.parse(savedUser);
        setCurrentUser(parsed);
        setLoggedIn(true);
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const categories = useMemo(() => {
    return loggedIn ? ["All", "My Positions", "World Cup", "Sports", "Politics", "Crypto"] : ["All", "World Cup", "Sports", "Politics", "Crypto"];
  }, [loggedIn]);

  const visible = useMemo(() => {
    if (category === "My Positions") return [];
    return markets.filter(m =>
      (category === "All" || m.category === category) &&
      (m.title + m.category).toLowerCase().includes(query.toLowerCase())
    );
  }, [category, query]);

  const amt = Number(amount) || 0;
  const payout = bet ? amt / (bet.pct / 100) : 0;

  function closeModals() {
    setLoginOpen(false);
    setTopupOpen(false);
    setBet(null);
    setError(false);
    setErrorMessage("");
    setAuthEmail("");
    setAuthPassword("");
    setAuthError("");
    setTopupAmount("");
    setTopupSuccess(false);
    setModalLoading(false);
  }

  // Trigger loading effect when opening modals
  function triggerModalLoad(type: "auth" | "topup" | "bet", action: () => void) {
    const textMap = {
      auth: "Verifying secure credentials...",
      topup: "Connecting to BNB Chain Node...",
      bet: "Calculating liquidity pool depths..."
    };
    setLoadingText(textMap[type]);
    setModalLoading(true);
    action();
    setTimeout(() => {
      setModalLoading(false);
    }, 550);
  }

  // Save user changes to localStorage
  function saveUser(user: User | null) {
    if (!user) {
      localStorage.removeItem("foursight_current_user");
      return;
    }
    localStorage.setItem("foursight_current_user", JSON.stringify(user));
    
    // Also save in all users database
    const allUsersRaw = localStorage.getItem("foursight_users") || "{}";
    try {
      const allUsers = JSON.parse(allUsersRaw);
      allUsers[user.email.toLowerCase()] = user;
      localStorage.setItem("foursight_users", JSON.stringify(allUsers));
    } catch (e) {
      console.error(e);
    }
  }

  function handleLogin() {
    setAuthError("");
    if (!authEmail || !authPassword) {
      setAuthError("Please fill in all fields.");
      return;
    }
    const allUsersRaw = localStorage.getItem("foursight_users") || "{}";
    try {
      const allUsers = JSON.parse(allUsersRaw);
      const user = allUsers[authEmail.toLowerCase()];
      if (!user || user.password !== authPassword) {
        setAuthError("Invalid email or password.");
        return;
      }
      setCurrentUser(user);
      setLoggedIn(true);
      localStorage.setItem("foursight_current_user", JSON.stringify(user));
      closeModals();
    } catch (e) {
      setAuthError("Failed to sign in. Please try again.");
    }
  }

  function handleSignup() {
    setAuthError("");
    if (!authEmail || !authPassword) {
      setAuthError("Please fill in all fields.");
      return;
    }
    if (authPassword.length < 6) {
      setAuthError("Password must be at least 6 characters.");
      return;
    }
    const allUsersRaw = localStorage.getItem("foursight_users") || "{}";
    try {
      const allUsers = JSON.parse(allUsersRaw);
      if (allUsers[authEmail.toLowerCase()]) {
        setAuthError("An account with this email already exists.");
        return;
      }
      
      // Initialize with exactly 0.00 balance
      const newUser: User = {
        email: authEmail,
        password: authPassword,
        balances: {
          BNB: 0.00,
          USDC: 0.00,
          BTC: 0.00,
          ETH: 0.00,
          SOL: 0.00,
          USDT: 0.00,
        },
        positions: [],
      };
      
      allUsers[authEmail.toLowerCase()] = newUser;
      localStorage.setItem("foursight_users", JSON.stringify(allUsers));
      
      setCurrentUser(newUser);
      setLoggedIn(true);
      localStorage.setItem("foursight_current_user", JSON.stringify(newUser));
      closeModals();
    } catch (e) {
      setAuthError("Failed to sign up. Please try again.");
    }
  }

  function handleLogout() {
    setCurrentUser(null);
    setLoggedIn(false);
    localStorage.removeItem("foursight_current_user");
    setCategory("All");
  }

  // Handle wallet "login" simulation to feel real but starting with 0.00 BNB
  function handleWalletConnect() {
    const mockEmail = "wallet_user@foursight.xyz";
    const allUsersRaw = localStorage.getItem("foursight_users") || "{}";
    try {
      const allUsers = JSON.parse(allUsersRaw);
      let user = allUsers[mockEmail];
      if (!user) {
        user = {
          email: mockEmail,
          balances: {
            BNB: 0.00,
            USDC: 0.00,
            BTC: 0.00,
            ETH: 0.00,
            SOL: 0.00,
            USDT: 0.00,
          },
          positions: [],
        };
        allUsers[mockEmail] = user;
        localStorage.setItem("foursight_users", JSON.stringify(allUsers));
      }
      setCurrentUser(user);
      setLoggedIn(true);
      localStorage.setItem("foursight_current_user", JSON.stringify(user));
      closeModals();
    } catch (e) {
      console.error(e);
    }
  }

  function handleTopup() {
    setError(false);
    setErrorMessage("");
    setTopupSuccess(false);
    const amtVal = Number(topupAmount);
    if (!amtVal || amtVal <= 0) {
      setError(true);
      setErrorMessage("Please enter a valid amount.");
      return;
    }
    if (!currentUser) {
      triggerModalLoad("auth", () => {
        setAuthMode("login");
        setLoginOpen(true);
      });
      return;
    }
    
    const updatedUser: User = {
      ...currentUser,
      balances: {
        ...currentUser.balances,
        [coin.code]: (currentUser.balances[coin.code] || 0) + amtVal
      }
    };
    setCurrentUser(updatedUser);
    saveUser(updatedUser);
    setTopupSuccess(true);
    setTopupAmount("");
    setTimeout(() => {
      setTopupSuccess(false);
      closeModals();
    }, 1200);
  }

  function handleConfirmPosition() {
    setError(false);
    setErrorMessage("");
    const amtVal = Number(amount);
    if (!amtVal || amtVal <= 0 || !bet) return;
    
    if (!currentUser) {
      triggerModalLoad("auth", () => {
        setAuthMode("login");
        setLoginOpen(true);
      });
      return;
    }
    
    // Main currency is BNB
    const currentBNB = currentUser.balances["BNB"] || 0;
    if (currentBNB < amtVal) {
      setError(true);
      setErrorMessage("Insufficient BNB balance. Please top up your account.");
      return;
    }
    
    const newPosition: Position = {
      id: Math.random().toString(36).substring(2, 9).toUpperCase(),
      marketId: bet.market.id,
      marketTitle: bet.market.title,
      side: bet.side,
      amount: amtVal,
      pct: bet.pct,
      payout: payout,
      timestamp: new Date().toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
    };
    
    const updatedUser: User = {
      ...currentUser,
      balances: {
        ...currentUser.balances,
        BNB: currentBNB - amtVal,
      },
      positions: [newPosition, ...currentUser.positions],
    };
    
    setCurrentUser(updatedUser);
    saveUser(updatedUser);
    setAmount("");
    closeModals();
    setCategory("My Positions");
  }

  return (
    <main>
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <img className="page-watermark watermark-left" src="/foursight-emblem.png" alt="" />
      <img className="page-watermark watermark-right" src="/foursight-logo-alt.png" alt="" />
      
      <header className="nav glass">
        <a className="brand" href="#top"><img className="brand-emblem" src="/foursight-emblem.png" alt=""/><img className="brand-wordmark" src="/foursight-wordmark.png" alt="Foursight"/><em>LIVE</em></a>
        <nav><a href="#markets">Markets</a><a href="#how">How it works</a><a href="#activity">Activity</a></nav>
        <div className="nav-actions">
          <button className="icon-button" aria-label="Search markets" onClick={() => document.getElementById("market-search")?.focus()}>⌕</button>
          <button className="topup-mini" onClick={() => triggerModalLoad("topup", () => { setCoin(coins.find(c => c.code === "BNB") || coins[0]); setTopupOpen(true); setError(false); })}>＋ Top up</button>
          {loggedIn && currentUser ? (
            <div className="nav-profile-container">
              <span className="balance-badge">
                <strong>{(currentUser.balances["BNB"] || 0).toFixed(4)}</strong> BNB
              </span>
              <button className="primary small" onClick={handleLogout}>Log out</button>
            </div>
          ) : (
            <button className="primary small" onClick={() => triggerModalLoad("auth", () => { setAuthMode("login"); setLoginOpen(true); })}>Log in</button>
          )}
        </div>
      </header>

      <section className="hero" id="top">
        <img className="hero-emblem" src="/foursight-emblem.png" alt=""/>
        <div className="eyebrow"><i /> LIVE PREDICTION MARKETS <span>•</span> TRADE ON CONVICTION</div>
        <h1>Don’t just bet.<br/><span className="gold">BET</span> <span className="rotator"><b>Trusted</b><b>Instant</b><b>Private</b></span></h1>
        <p>Trade outcomes privately. No frontruns. No copycats. Only pure conviction — wrapped in a clean, premium market experience.</p>
        <div className="hero-actions"><a className="primary" href="#markets">Explore markets <span>→</span></a><button className="secondary" onClick={() => triggerModalLoad("topup", () => { setCoin(coins.find(c => c.code === "BNB") || coins[0]); setTopupOpen(true); })}>Top up balance</button></div>
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
          {category === "My Positions" ? (
            !currentUser || currentUser.positions.length === 0 ? (
              <div className="empty glass" style={{ gridColumn: "1/-1" }}>You don't have any active positions yet. Explore markets to place a position!</div>
            ) : (
              currentUser.positions.map(pos => {
                const market = markets.find(m => m.id === pos.marketId);
                return (
                  <article className="market-card glass position-card" key={pos.id}>
                    <div className="card-top">
                      <span className="category-badge">position</span>
                      <span className="time-badge">{pos.timestamp}</span>
                    </div>
                    <h3>{pos.marketTitle}</h3>
                    <div className="position-details">
                      <div className="pos-row"><span>Outcome backed</span><strong>{pos.side}</strong></div>
                      <div className="pos-row"><span>Average Price</span><span>{pos.pct}¢</span></div>
                      <div className="pos-row"><span>Risk amount</span><strong>{pos.amount.toFixed(3)} BNB</strong></div>
                      <div className="pos-row"><span>Potential payout</span><strong style={{ color: "var(--lime)" }}>{pos.payout.toFixed(4)} BNB</strong></div>
                    </div>
                    <footer style={{ marginTop: "auto", borderTop: "1px solid rgba(255,196,0,0.13)", paddingTop: "12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ color: "var(--green)", fontWeight: 700, fontSize: "12px" }}>Active Position</span>
                      <span style={{ color: "#737b82", fontSize: "11px" }}>ID: {pos.id}</span>
                    </footer>
                  </article>
                );
              })
            )
          ) : (
            visible.map(m => (
              <article className="market-card glass" key={m.id}>
                <div className="card-top">
                  <span className="category-badge">{m.category}</span>
                  <span className="time-badge">{m.tag} / {m.time}</span>
                </div>
                
                <h3>{m.title}</h3>
                
                <div className="pool-header">
                  <span>Total Pool</span>
                  <span>~${m.totalPoolUSD.toLocaleString()}</span>
                </div>
                
                <div className="bnb-pool-box">
                  <svg className="trend-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.94" />
                  </svg>
                  <span className="bnb-val">{m.totalPoolBNB.toFixed(3)} <b className="bnb-symbol">BNB</b></span>
                </div>
                
                <div className="percentage-header">
                  <span className="yes-lbl"><span className="dot">●</span> YES {m.yesPct.toFixed(1)}%</span>
                  <span className="no-lbl">{m.noPct.toFixed(1)}% NO <span className="dot">●</span></span>
                </div>
                
                <div className="split-bar">
                  <div className="yes-bar" style={{ width: `${m.yesPct}%` }} />
                  <div className="no-bar" style={{ width: `${m.noPct}%` }} />
                </div>
                
                <div className="sparkline-container">
                  <svg className="sparkline-svg" viewBox="0 0 360 40">
                    <path d={m.sparklinePath} fill="none" stroke="#ffc400" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                
                <div className="action-buttons">
                  <button className="btn-yes" onClick={() => triggerModalLoad("bet", () => setBet({ market: m, side: "YES", pct: m.yesPct }))}>YES</button>
                  <button className="btn-no" onClick={() => triggerModalLoad("bet", () => setBet({ market: m, side: "NO", pct: m.noPct }))}>NO</button>
                </div>
              </article>
            ))
          )}
        </div>
        {category !== "My Positions" && visible.length === 0 && <div className="empty glass">No markets found. Try another search.</div>}
      </section>

      <section className="how" id="how">
        <div><span className="kicker">BUILT FOR CLARITY</span><h2>From opinion to position<br/>in three simple steps.</h2><p>Foursight turns real-world events into clean, transparent markets. Trade global events with instant settlement.</p></div>
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

      <footer className="footer"><a className="brand" href="#top"><img className="brand-emblem" src="/foursight-emblem.png" alt=""/><img className="brand-wordmark" src="/foursight-wordmark.png" alt="Foursight"/></a><p>Markets for what matters next.</p><div><a href="#markets">Markets</a><a href="#how">How it works</a><a href="#">Terms</a><a href="#">Privacy</a></div><small>© 2026 Foursight. All rights reserved. Trade responsibly.</small></footer>

      {(loginOpen || topupOpen || bet) && <div className="modal-wrap" onMouseDown={e => e.target === e.currentTarget && closeModals()}>
        {modalLoading ? (
          <div className="modal glass" style={{ width: "min(380px, 100%)", borderRadius: "24px", padding: "0" }}>
            <div className="modal-loader">
              <div className="spinner-gold"></div>
              <div className="loader-text">{loadingText}</div>
            </div>
          </div>
        ) : (
          <>
            {loginOpen && <div className="modal glass" role="dialog" aria-modal="true" aria-labelledby="login-title">
              <button className="close" onClick={closeModals}>×</button>
              <span className="modal-mark"><img src="/foursight-emblem.png" alt=""/></span>
              <h2 id="login-title">{authMode === "login" ? "Sign in to Foursight" : "Create your account"}</h2>
              <p>{authMode === "login" ? "Enter your credentials to access your portfolio." : "Sign up now and start trading prediction markets."}</p>
              
              {authError && <div className="error-message-text" style={{ color: "#ff8e94", fontSize: "12px", marginTop: "12px", textAlign: "center" }}>{authError}</div>}
              
              <label>Email address
                <input type="email" value={authEmail} onChange={e => setAuthEmail(e.target.value)} placeholder="you@example.com" />
              </label>
              <label>Password
                <input type="password" value={authPassword} onChange={e => setAuthPassword(e.target.value)} placeholder="••••••••" />
              </label>
              
              {authMode === "login" ? (
                <>
                  <button className="primary full" onClick={handleLogin}>Log In</button>
                  <div className="or"><span></span>or<span></span></div>
                  <button className="wallet-button" onClick={handleWalletConnect}><span>◉</span> Continue with Web3 Wallet <b>→</b></button>
                  <p style={{ fontSize: "11px", textAlign: "center", marginTop: "14px", color: "var(--muted)" }}>
                    Don't have an account? <span onClick={() => { setAuthMode("signup"); setAuthError(""); }} style={{ color: "var(--lime)", cursor: "pointer", fontWeight: 700 }}>Sign up</span>
                  </p>
                </>
              ) : (
                <>
                  <button className="primary full" onClick={handleSignup}>Sign Up</button>
                  <p style={{ fontSize: "11px", textAlign: "center", marginTop: "14px", color: "var(--muted)" }}>
                    Already have an account? <span onClick={() => { setAuthMode("login"); setAuthError(""); }} style={{ color: "var(--lime)", cursor: "pointer", fontWeight: 700 }}>Log in</span>
                  </p>
                </>
              )}
              
              <small>By continuing, you agree to our Terms of Service & Privacy Policy.</small>
            </div>}

            {topupOpen && <div className="modal topup-modal glass" role="dialog" aria-modal="true" aria-labelledby="topup-title">
              <button className="close" onClick={closeModals}>×</button>
              <div className="modal-head">
                <span className="modal-icon">↙</span>
                <div>
                  <h2 id="topup-title">Top up balance</h2>
                  <p>Select a currency to deposit funds into your account.</p>
                </div>
              </div>
              <div className="coin-grid">{coins.map(c => <button key={c.code} className={coin.code === c.code ? "selected" : ""} onClick={() => {setCoin(c); setError(false); setErrorMessage(""); }}><span style={{background:c.color}}>{c.symbol}</span><b>{c.code}</b><small>{c.name}</small><i>{coin.code === c.code ? "✓" : ""}</i></button>)}</div>
              <label>Amount ({coin.code})
                <div className="amount-input">
                  <input inputMode="decimal" value={topupAmount} onChange={e => setTopupAmount(e.target.value.replace(/[^0-9.]/g,''))} placeholder="0.00"/>
                  <span>{coin.code}</span>
                </div>
              </label>
              
              {error && <div className="error" role="alert"><b>!</b><span><strong>Error</strong>{errorMessage || "Invalid deposit amount."}</span></div>}
              {topupSuccess && <div style={{ color: "var(--green)", fontSize: "12px", margin: "10px 0", textAlign: "center", fontWeight: 700 }}>✓ Deposit request successful! Adding funds...</div>}
              
              <button className="primary full" disabled={topupSuccess} onClick={handleTopup}>Deposit Funds <span>→</span></button>
              <small>Deposits are processed securely on-chain.</small>
            </div>}

            {bet && <div className="modal bet-modal glass" role="dialog" aria-modal="true" aria-labelledby="bet-title">
              <button className="close" onClick={closeModals}>×</button>
              <div className="modal-head">
                <span className="modal-icon">↗</span>
                <div>
                  <span className="kicker">PLACE POSITION</span>
                  <h2 id="bet-title">{bet.market.title}</h2>
                </div>
              </div>
              <div className="selection"><span>You’re backing</span><b>{bet.side}</b><strong>{bet.pct}% chance</strong></div>
              <label>Amount (BNB)
                <div className="amount-input">
                  <input autoFocus value={amount} onChange={e => setAmount(e.target.value.replace(/[^0-9.]/g,''))} inputMode="decimal" placeholder="0.00"/>
                  <span>BNB</span>
                </div>
              </label>
              <div className="quick">{[0.05, 0.1, 0.25, 0.5].map(n => <button key={n} onClick={() => setAmount(String(n))}>+{n} BNB</button>)}</div>
              <div className="payout"><span>Estimated payout<b>{payout.toFixed(4)} BNB</b></span><span>Potential profit<b className="green">{Math.max(0,payout-amt).toFixed(4)} BNB</b></span></div>
              
              {error && <div className="error" role="alert"><b>!</b><span><strong>Insufficient balance</strong>{errorMessage}</span></div>}
              
              <button className="primary full" disabled={!amt} onClick={handleConfirmPosition}>Confirm Position <span>→</span></button>
              <small>Positions are secured by smart contracts.</small>
            </div>}
          </>
        )}
      </div>}
    </main>
  );
}
