// Markets definition
const markets = [
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
  { code: "SOL", name: "Solana", symbol: "S", color: "#a06cff" }
];

// App States
let category = "All";
let query = "";
let loggedIn = false;
let currentUser = null;
let bet = null;
let coin = coins[0];
let amount = "";

// Load initial user state
function init() {
  const savedUser = localStorage.getItem("foursight_current_user");
  if (savedUser) {
    try {
      currentUser = JSON.parse(savedUser);
      loggedIn = true;
    } catch (e) {
      console.error(e);
    }
  }
  
  // Set default currency label in top up modal
  updateTopupCoinUI();
  
  renderHeader();
  renderCategories();
  renderMarkets();
  renderTicker();
  setupEventListeners();
}

// Save user details
function saveUser(user) {
  if (!user) {
    localStorage.removeItem("foursight_current_user");
    return;
  }
  localStorage.setItem("foursight_current_user", JSON.stringify(user));
  
  const allUsersRaw = localStorage.getItem("foursight_users") || "{}";
  try {
    const allUsers = JSON.parse(allUsersRaw);
    allUsers[user.email.toLowerCase()] = user;
    localStorage.setItem("foursight_users", JSON.stringify(allUsers));
  } catch (e) {
    console.error(e);
  }
}

// Renders header login / profile state
function renderHeader() {
  const container = document.getElementById("nav-actions-container");
  if (!container) return;

  if (loggedIn && currentUser) {
    container.innerHTML = `
      <button class="icon-button" id="header-search-trigger" aria-label="Search markets">⌕</button>
      <button class="topup-mini" id="header-topup-trigger">＋ Top up</button>
      <div class="nav-profile-container">
        <span class="balance-badge">
          <strong>${(currentUser.balances["BNB"] || 0).toFixed(4)}</strong> BNB
        </span>
        <button class="primary small" id="header-logout-btn">Log out</button>
      </div>
    `;
    
    // Set listeners for dynamic elements
    document.getElementById("header-logout-btn").addEventListener("click", handleLogout);
    document.getElementById("header-topup-trigger").addEventListener("click", () => {
      openTopupModal();
    });
  } else {
    container.innerHTML = `
      <button class="icon-button" id="header-search-trigger" aria-label="Search markets">⌕</button>
      <button class="topup-mini" id="header-topup-trigger">＋ Top up</button>
      <button class="primary small" id="header-login-btn">Log in</button>
    `;
    
    document.getElementById("header-login-btn").addEventListener("click", () => {
      openLoginModal();
    });
    document.getElementById("header-topup-trigger").addEventListener("click", () => {
      openTopupModal();
    });
  }
  
  document.getElementById("header-search-trigger").addEventListener("click", () => {
    document.getElementById("market-search").focus();
  });
}

// Render tabs categories
function renderCategories() {
  const container = document.getElementById("category-tabs-container");
  if (!container) return;

  const tabsList = loggedIn ? ["All", "My Positions", "World Cup", "Sports", "Politics", "Crypto"] : ["All", "World Cup", "Sports", "Politics", "Crypto"];
  
  container.innerHTML = tabsList.map(t => {
    return `<button class="${category === t ? "active" : ""}" data-category="${t}">${t}</button>`;
  }).join("");

  // Add click listeners to tabs
  container.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", (e) => {
      category = e.target.getAttribute("data-category");
      renderCategories();
      renderMarkets();
    });
  });
}

// Render markets cards list
function renderMarkets() {
  const container = document.getElementById("market-grid-container");
  if (!container) return;

  if (category === "My Positions") {
    if (!currentUser || !currentUser.positions || currentUser.positions.length === 0) {
      container.innerHTML = `<div class="empty glass" style="grid-column: 1/-1;">You don't have any active positions yet. Explore markets to place a position!</div>`;
      return;
    }

    container.innerHTML = currentUser.positions.map(pos => {
      const market = markets.find(m => m.id === pos.marketId);
      return `
        <article class="market-card glass position-card">
          <div class="card-top">
            <span class="category-badge">position</span>
            <span class="time-badge">${pos.timestamp}</span>
          </div>
          <h3>${pos.marketTitle}</h3>
          <div class="position-details">
            <div class="pos-row"><span>Outcome backed</span><strong>${pos.side}</strong></div>
            <div class="pos-row"><span>Average Price</span><span>${pos.pct}% chance</span></div>
            <div class="pos-row"><span>Risk amount</span><strong>${pos.amount.toFixed(3)} BNB</strong></div>
            <div class="pos-row"><span>Potential payout</span><strong style="color: var(--lime);">${pos.payout.toFixed(4)} BNB</strong></div>
          </div>
          <footer style="margin-top: auto; border-top: 1px solid rgba(255,196,0,0.13); padding-top: 12px; display: flex; justify-content: space-between; align-items: center;">
            <span style="color: var(--green); font-weight: 700; font-size: 12px;">Active Position</span>
            <span style="color: #737b82; font-size: 11px;">ID: ${pos.id}</span>
          </footer>
        </article>
      `;
    }).join("");
    return;
  }

  // Filter regular markets
  const visible = markets.filter(m => {
    const isCategoryMatch = (category === "All" || m.category === category);
    const isSearchMatch = (m.title + m.category).toLowerCase().includes(query.toLowerCase());
    return isCategoryMatch && isSearchMatch;
  });

  if (visible.length === 0) {
    container.innerHTML = `<div class="empty glass" style="grid-column: 1/-1;">No markets found. Try another search.</div>`;
    return;
  }

  container.innerHTML = visible.map(m => {
    return `
      <article class="market-card glass" data-id="${m.id}">
        <div class="card-top">
          <span class="category-badge">${m.category}</span>
          <span class="time-badge">${m.tag} / ${m.time}</span>
        </div>
        
        <h3>${m.title}</h3>
        
        <div class="pool-header">
          <span>Total Pool</span>
          <span>~$${m.totalPoolUSD.toLocaleString()}</span>
        </div>
        
        <div class="bnb-pool-box">
          <svg class="trend-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.94" />
          </svg>
          <span class="bnb-val">${m.totalPoolBNB.toFixed(3)} <b class="bnb-symbol">BNB</b></span>
        </div>
        
        <div class="percentage-header">
          <span class="yes-lbl"><span class="dot">●</span> YES ${m.yesPct.toFixed(1)}%</span>
          <span class="no-lbl">${m.noPct.toFixed(1)}% NO <span class="dot">●</span></span>
        </div>
        
        <div class="split-bar">
          <div class="yes-bar" style="width: ${m.yesPct}%"></div>
          <div class="no-bar" style="width: ${m.noPct}%"></div>
        </div>
        
        <div class="sparkline-container">
          <svg class="sparkline-svg" viewBox="0 0 360 40">
            <path d="${m.sparklinePath}" fill="none" stroke="#ffc400" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        
        <div class="action-buttons">
          <button class="btn-yes" data-side="YES" data-pct="${m.yesPct}">YES</button>
          <button class="btn-no" data-side="NO" data-pct="${m.noPct}">NO</button>
        </div>
      </article>
    `;
  }).join("");

  // Card button listeners
  container.querySelectorAll("article").forEach(card => {
    const marketId = parseInt(card.getAttribute("data-id"));
    const market = markets.find(m => m.id === marketId);
    
    card.querySelector(".btn-yes").addEventListener("click", () => {
      openBetModal(market, "YES", market.yesPct);
    });
    card.querySelector(".btn-no").addEventListener("click", () => {
      openBetModal(market, "NO", market.noPct);
    });
  });
}

// Render dynamic stock ticker
function renderTicker() {
  const container = document.getElementById("ticker-track-container");
  if (!container) return;

  const data = [
    ['BTC','$64,213','+0.59%'],
    ['ETH','$1,819','+1.84%'],
    ['SOL','$77.91','+0.25%'],
    ['BNB','$580.35','+0.92%'],
    ['XRP','$1.12','+1.45%']
  ];

  // Repeat twice for infinite scroll wrap
  const doubled = [...data, ...data];
  container.innerHTML = doubled.map((x, i) => {
    return `<div key="${i}"><b>${x[0]}</b><span>${x[1]}</span><em>↗ ${x[2]}</em></div>`;
  }).join("");
}

// Modals Trigger Helper (Web3 Spinner Loader)
function triggerModal(type, targetAction) {
  const wrap = document.getElementById("modal-wrap");
  const loader = document.getElementById("modal-loader");
  const textDisplay = document.getElementById("loader-text-display");

  const loaderText = {
    auth: "Verifying secure credentials...",
    topup: "Connecting to BNB Chain Node...",
    bet: "Calculating liquidity pool depths..."
  };

  textDisplay.innerText = loaderText[type] || "Loading details...";
  
  // Hide all modals content first
  document.getElementById("auth-modal").style.display = "none";
  document.getElementById("topup-modal").style.display = "none";
  document.getElementById("bet-modal").style.display = "none";

  // Show wrap and loader
  wrap.style.display = "grid";
  loader.style.display = "block";

  setTimeout(() => {
    loader.style.display = "none";
    targetAction();
  }, 550);
}

// Modal open functions
function openLoginModal() {
  triggerModal("auth", () => {
    document.getElementById("auth-modal").style.display = "block";
    setAuthMode("login");
  });
}

function openTopupModal() {
  triggerModal("topup", () => {
    document.getElementById("topup-modal").style.display = "block";
    
    // Render coin selection grid
    const grid = document.getElementById("topup-coin-grid");
    grid.innerHTML = coins.map(c => {
      const isSelected = coin.code === c.code;
      return `
        <button class="${isSelected ? "selected" : ""}" data-code="${c.code}">
          <span style="background: ${c.color}">${c.symbol}</span>
          <b>${c.code}</b>
          <small>${c.name}</small>
          <i>${isSelected ? "✓" : ""}</i>
        </button>
      `;
    }).join("");

    // Set grid listeners
    grid.querySelectorAll("button").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const code = btn.getAttribute("data-code");
        coin = coins.find(c => c.code === code);
        setErrorDisplay("topup", false);
        openTopupModal(); // re-draw
      });
    });
  });
}

function openBetModal(market, side, pct) {
  triggerModal("bet", () => {
    bet = { market, side, pct };
    amount = "";
    
    document.getElementById("bet-title-display").innerText = market.title;
    document.getElementById("bet-side-display").innerText = side;
    document.getElementById("bet-price-display").innerText = `${pct.toFixed(1)}% chance`;
    
    const input = document.getElementById("bet-amount-input");
    input.value = "";
    
    // Redraw quick buttons
    const quickContainer = document.getElementById("bet-quick-buttons");
    const quicks = [0.05, 0.1, 0.25, 0.5];
    quickContainer.innerHTML = quicks.map(q => {
      return `<button data-val="${q}">+${q} BNB</button>`;
    }).join("");

    quickContainer.querySelectorAll("button").forEach(btn => {
      btn.addEventListener("click", () => {
        amount = btn.getAttribute("data-val");
        input.value = amount;
        updateBetPayouts();
      });
    });

    updateBetPayouts();
    setErrorDisplay("bet", false);
    document.getElementById("bet-modal").style.display = "block";
    input.focus();
  });
}

// Math Payout helpers
function updateBetPayouts() {
  const amtVal = parseFloat(amount) || 0;
  const payVal = bet ? amtVal / (bet.pct / 100) : 0;
  
  document.getElementById("bet-payout-display").innerText = `${payVal.toFixed(4)} BNB`;
  document.getElementById("bet-profit-display").innerText = `${Math.max(0, payVal - amtVal).toFixed(4)} BNB`;
  
  const submitBtn = document.getElementById("bet-confirm-submit");
  submitBtn.disabled = (amtVal <= 0);
}

// Error UI helpers
function setErrorDisplay(modalType, isShow, msgText = "") {
  const errDiv = document.getElementById(`${modalType}-error-display`);
  const errMsg = document.getElementById(`${modalType}-error-message`);
  if (!errDiv) return;

  if (isShow) {
    errDiv.style.display = "flex";
    if (errMsg) errMsg.innerText = msgText;
  } else {
    errDiv.style.display = "none";
  }
}

// Set login mode (login/signup)
function setAuthMode(mode) {
  const title = document.getElementById("auth-title");
  const desc = document.getElementById("auth-description");
  const loginBtns = document.getElementById("auth-login-buttons-container");
  const signupBtns = document.getElementById("auth-signup-buttons-container");
  
  document.getElementById("auth-error-display").style.display = "none";

  if (mode === "login") {
    title.innerText = "Sign in to Foursight";
    desc.innerText = "Enter your credentials to access your portfolio.";
    loginBtns.style.display = "block";
    signupBtns.style.display = "none";
  } else {
    title.innerText = "Create your account";
    desc.innerText = "Sign up now and start trading prediction markets.";
    loginBtns.style.display = "none";
    signupBtns.style.display = "block";
  }
}

function updateTopupCoinUI() {
  document.getElementById("topup-coin-code-label").innerText = coin.code;
  document.getElementById("topup-coin-code-suffix").innerText = coin.code;
}

// Auth click handlers
function handleLogin() {
  const email = document.getElementById("auth-email-input").value;
  const password = document.getElementById("auth-password-input").value;
  const errDisplay = document.getElementById("auth-error-display");

  errDisplay.style.display = "none";
  if (!email || !password) {
    errDisplay.innerText = "Please fill in all fields.";
    errDisplay.style.display = "block";
    return;
  }

  const allUsersRaw = localStorage.getItem("foursight_users") || "{}";
  try {
    const allUsers = JSON.parse(allUsersRaw);
    const user = allUsers[email.toLowerCase()];
    if (!user || user.password !== password) {
      errDisplay.innerText = "Invalid email or password.";
      errDisplay.style.display = "block";
      return;
    }
    
    currentUser = user;
    loggedIn = true;
    localStorage.setItem("foursight_current_user", JSON.stringify(user));
    closeModals();
    renderHeader();
    renderCategories();
    renderMarkets();
  } catch (e) {
    errDisplay.innerText = "Failed to sign in. Please try again.";
    errDisplay.style.display = "block";
  }
}

function handleSignup() {
  const email = document.getElementById("auth-email-input").value;
  const password = document.getElementById("auth-password-input").value;
  const errDisplay = document.getElementById("auth-error-display");

  errDisplay.style.display = "none";
  if (!email || !password) {
    errDisplay.innerText = "Please fill in all fields.";
    errDisplay.style.display = "block";
    return;
  }
  if (password.length < 6) {
    errDisplay.innerText = "Password must be at least 6 characters.";
    errDisplay.style.display = "block";
    return;
  }

  const allUsersRaw = localStorage.getItem("foursight_users") || "{}";
  try {
    const allUsers = JSON.parse(allUsersRaw);
    if (allUsers[email.toLowerCase()]) {
      errDisplay.innerText = "An account with this email already exists.";
      errDisplay.style.display = "block";
      return;
    }
    
    // Initial balances at exactly 0.00
    const newUser = {
      email: email,
      password: password,
      balances: {
        BNB: 0.00,
        USDC: 0.00,
        BTC: 0.00,
        ETH: 0.00,
        SOL: 0.00,
        USDT: 0.00
      },
      positions: []
    };
    
    allUsers[email.toLowerCase()] = newUser;
    localStorage.setItem("foursight_users", JSON.stringify(allUsers));
    
    currentUser = newUser;
    loggedIn = true;
    localStorage.setItem("foursight_current_user", JSON.stringify(newUser));
    closeModals();
    renderHeader();
    renderCategories();
    renderMarkets();
  } catch (e) {
    errDisplay.innerText = "Failed to sign up. Please try again.";
    errDisplay.style.display = "block";
  }
}

function handleLogout() {
  currentUser = null;
  loggedIn = false;
  localStorage.removeItem("foursight_current_user");
  category = "All";
  renderHeader();
  renderCategories();
  renderMarkets();
}

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
          USDT: 0.00
        },
        positions: []
      };
      allUsers[mockEmail] = user;
      localStorage.setItem("foursight_users", JSON.stringify(allUsers));
    }
    currentUser = user;
    loggedIn = true;
    localStorage.setItem("foursight_current_user", JSON.stringify(user));
    closeModals();
    renderHeader();
    renderCategories();
    renderMarkets();
  } catch (e) {
    console.error(e);
  }
}

function handleTopup() {
  setErrorDisplay("topup", false);
  const input = document.getElementById("topup-amount-input");
  const amtVal = parseFloat(input.value);
  const successDiv = document.getElementById("topup-success-display");

  if (!amtVal || amtVal <= 0) {
    setErrorDisplay("topup", true, "Please enter a valid amount.");
    return;
  }

  if (!currentUser) {
    closeModals();
    openLoginModal();
    return;
  }

  const updatedUser = {
    ...currentUser,
    balances: {
      ...currentUser.balances,
      [coin.code]: (currentUser.balances[coin.code] || 0) + amtVal
    }
  };

  currentUser = updatedUser;
  saveUser(updatedUser);
  
  input.value = "";
  successDiv.style.display = "block";
  
  setTimeout(() => {
    successDiv.style.display = "none";
    closeModals();
    renderHeader();
    renderCategories();
    renderMarkets();
  }, 1200);
}

function handleConfirmPosition() {
  setErrorDisplay("bet", false);
  const amtVal = parseFloat(amount);
  if (!amtVal || amtVal <= 0 || !bet) return;

  if (!currentUser) {
    closeModals();
    openLoginModal();
    return;
  }

  const currentBNB = currentUser.balances["BNB"] || 0;
  if (currentBNB < amtVal) {
    setErrorDisplay("bet", true, "Insufficient BNB balance. Please top up your account.");
    return;
  }

  const payout = amtVal / (bet.pct / 100);
  const newPosition = {
    id: Math.random().toString(36).substring(2, 9).toUpperCase(),
    marketId: bet.market.id,
    marketTitle: bet.market.title,
    side: bet.side,
    amount: amtVal,
    pct: bet.pct,
    payout: payout,
    timestamp: new Date().toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })
  };

  const updatedUser = {
    ...currentUser,
    balances: {
      ...currentUser.balances,
      BNB: currentBNB - amtVal
    },
    positions: [newPosition, ...(currentUser.positions || [])]
  };

  currentUser = updatedUser;
  saveUser(updatedUser);
  
  amount = "";
  closeModals();
  category = "My Positions";
  renderHeader();
  renderCategories();
  renderMarkets();
}

function closeModals() {
  document.getElementById("modal-wrap").style.display = "none";
  document.getElementById("auth-modal").style.display = "none";
  document.getElementById("topup-modal").style.display = "none";
  document.getElementById("bet-modal").style.display = "none";
  document.getElementById("modal-loader").style.display = "none";
  
  document.getElementById("auth-email-input").value = "";
  document.getElementById("auth-password-input").value = "";
  document.getElementById("topup-amount-input").value = "";
  
  amount = "";
}

// Setup static DOM event listeners
function setupEventListeners() {
  // Hero Top up
  document.getElementById("hero-topup-btn").addEventListener("click", () => {
    openTopupModal();
  });

  // Modal Closures
  document.getElementById("auth-close").addEventListener("click", closeModals);
  document.getElementById("topup-close").addEventListener("click", closeModals);
  document.getElementById("bet-close").addEventListener("click", closeModals);

  // Click outside to close
  document.getElementById("modal-wrap").addEventListener("mousedown", (e) => {
    if (e.target === e.currentTarget) {
      closeModals();
    }
  });

  // Search input change
  document.getElementById("market-search").addEventListener("input", (e) => {
    query = e.target.value;
    renderMarkets();
  });

  // Auth Mode Toggles
  document.getElementById("toggle-to-signup").addEventListener("click", () => setAuthMode("signup"));
  document.getElementById("toggle-to-login").addEventListener("click", () => setAuthMode("login"));

  // Auth Submissions
  document.getElementById("auth-login-submit").addEventListener("click", handleLogin);
  document.getElementById("auth-signup-submit").addEventListener("click", handleSignup);
  document.getElementById("auth-wallet-submit").addEventListener("click", handleWalletConnect);

  // Top Up Submission
  document.getElementById("topup-submit-btn").addEventListener("click", handleTopup);

  // Bet Modal input
  const betInput = document.getElementById("bet-amount-input");
  betInput.addEventListener("input", (e) => {
    amount = e.target.value.replace(/[^0-9.]/g, '');
    betInput.value = amount;
    updateBetPayouts();
  });

  // Bet Confirmation
  document.getElementById("bet-confirm-submit").addEventListener("click", handleConfirmPosition);
}

// Boot initial state
init();
