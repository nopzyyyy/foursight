// Markets definition
const markets = [
  {
    id: 1,
    category: "World Cup",
    tag: "WORLD CUP",
    time: "Dec 20",
    title: "World Cup Winner: Will France win the tournament?",
    totalPoolUSD: 4000000000,
    totalPoolBNB: 6896551.72,
    yesPct: 38,
    noPct: 62,
    sparklinePath: "M10,25 Q35,15 70,28 T130,12 T190,26 T250,8 T310,14 T350,6",
    accent: "#ffc400"
  },
  {
    id: 2,
    category: "World Cup",
    tag: "WORLD CUP",
    time: "Dec 20",
    title: "World Cup Winner: Will England win the tournament?",
    totalPoolUSD: 4000000000,
    totalPoolBNB: 6896551.72,
    yesPct: 21,
    noPct: 79,
    sparklinePath: "M10,12 Q45,22 90,8 T170,25 T250,28 T310,20 T350,32",
    accent: "#ffc400"
  },
  {
    id: 3,
    category: "Crypto",
    tag: "LIVE 5M",
    time: "Active",
    title: "Will BTC go Up in the next 5 minutes?",
    totalPoolUSD: 12400000,
    totalPoolBNB: 21379.31,
    yesPct: 51,
    noPct: 49,
    sparklinePath: "M10,20 Q45,18 90,25 T170,15 T250,28 T310,12 T350,16",
    accent: "#ffc400"
  },
  {
    id: 4,
    category: "World Cup",
    tag: "WORLD CUP",
    time: "Dec 20",
    title: "World Cup Golden Boot: Will Kylian Mbappe win?",
    totalPoolUSD: 54000000,
    totalPoolBNB: 93103.45,
    yesPct: 50,
    noPct: 50,
    sparklinePath: "M10,28 Q40,15 80,22 T150,12 T220,26 T290,18 T350,24",
    accent: "#ffc400"
  },
  {
    id: 5,
    category: "World Cup",
    tag: "WORLD CUP",
    time: "Dec 20",
    title: "World Cup Golden Boot: Will Lionel Messi win?",
    totalPoolUSD: 54000000,
    totalPoolBNB: 93103.45,
    yesPct: 42,
    noPct: 58,
    sparklinePath: "M10,15 Q40,30 80,12 T140,25 T200,10 T260,28 T320,15 T350,22",
    accent: "#ffc400"
  },
  {
    id: 6,
    category: "World Cup",
    tag: "LIVE",
    time: "2H - 90'",
    title: "Will Argentina defeat Switzerland in the World Cup?",
    totalPoolUSD: 43000000,
    totalPoolBNB: 74137.93,
    yesPct: 79,
    noPct: 21,
    sparklinePath: "M10,20 Q45,10 90,25 T170,12 T250,28 T310,14 T350,18",
    accent: "#ffc400"
  },
  {
    id: 7,
    category: "Sports",
    tag: "LIVE",
    time: "Mid 6th",
    title: "MLB: Will the Padres defeat the Blue Jays?",
    totalPoolUSD: 915000,
    totalPoolBNB: 1577.58,
    yesPct: 62,
    noPct: 38,
    sparklinePath: "M10,25 Q35,15 70,28 T130,12 T190,26 T250,8 T310,14 T350,6",
    accent: "#ffc400"
  },
  {
    id: 8,
    category: "Culture",
    tag: "ESPORTS",
    time: "Tomorrow 4:00 AM",
    title: "LoL Worlds: Will Bilibili Gaming defeat Hanwha Life Esports?",
    totalPoolUSD: 233000,
    totalPoolBNB: 401.72,
    yesPct: 62,
    noPct: 38,
    sparklinePath: "M10,12 Q45,22 90,8 T170,25 T250,10 T310,20 T350,14",
    accent: "#ffc400"
  },
  {
    id: 9,
    category: "Sports",
    tag: "UFC",
    time: "6:00 PM",
    title: "UFC: Will Max Holloway defeat Conor McGregor?",
    totalPoolUSD: 15000000,
    totalPoolBNB: 25862.07,
    yesPct: 71,
    noPct: 29,
    sparklinePath: "M10,18 Q35,28 75,10 T145,22 T215,14 T285,28 T350,20",
    accent: "#ffc400"
  },
  {
    id: 10,
    category: "Politics",
    tag: "UK POLITICS",
    time: "Settled",
    title: "Clacton by-election: Will Nigel Farage win?",
    totalPoolUSD: 2000000,
    totalPoolBNB: 3448.28,
    yesPct: 92,
    noPct: 8,
    sparklinePath: "M10,20 Q50,22 100,18 T200,20 T300,19 T350,20",
    accent: "#ffc400"
  },
  {
    id: 11,
    category: "Politics",
    tag: "UK POLITICS",
    time: "Settled",
    title: "Clacton by-election: Will Count Binface win?",
    totalPoolUSD: 2000000,
    totalPoolBNB: 3448.28,
    yesPct: 7,
    noPct: 93,
    sparklinePath: "M10,12 Q45,22 90,8 T170,25 T250,28 T310,20 T350,32",
    accent: "#ffc400"
  },
  {
    id: 12,
    category: "Culture",
    tag: "JUSTICE",
    time: "Active",
    title: "Will Tyler Robinson be convicted of homicide?",
    totalPoolUSD: 209000,
    totalPoolBNB: 360.34,
    yesPct: 47,
    noPct: 53,
    sparklinePath: "M10,20 Q45,18 90,25 T170,15 T250,28 T310,12 T350,16",
    accent: "#ffc400"
  },
  {
    id: 13,
    category: "Politics",
    tag: "GEOPOLITICS",
    time: "July 31",
    title: "Will Strait of Hormuz shipping traffic return to normal by July 31?",
    totalPoolUSD: 16000000,
    totalPoolBNB: 27586.21,
    yesPct: 5,
    noPct: 95,
    sparklinePath: "M10,28 Q40,15 80,22 T150,12 T220,26 T290,18 T350,24",
    accent: "#ffc400"
  },
  {
    id: 14,
    category: "Politics",
    tag: "GEOPOLITICS",
    time: "Dec 31",
    title: "Will a US-Iran Final Nuclear Deal be reached by December 31?",
    totalPoolUSD: 9000000,
    totalPoolBNB: 15517.24,
    yesPct: 35,
    noPct: 65,
    sparklinePath: "M10,15 Q40,30 80,12 T140,25 T200,10 T260,28 T320,15 T350,22",
    accent: "#ffc400"
  },
  {
    id: 15,
    category: "Politics",
    tag: "GEOPOLITICS",
    time: "Sept 30",
    title: "Will a US-Iran Final Nuclear Deal be reached by September 30?",
    totalPoolUSD: 9000000,
    totalPoolBNB: 15517.24,
    yesPct: 16,
    noPct: 84,
    sparklinePath: "M10,12 Q45,22 90,8 T170,25 T250,10 T310,20 T350,14",
    accent: "#ffc400"
  },
  {
    id: 16,
    category: "Sports",
    tag: "TENNIS",
    time: "Jul 12",
    title: "Wimbledon 2026: Will Jannik Sinner win the Men's Singles?",
    totalPoolUSD: 18000000,
    totalPoolBNB: 31034.48,
    yesPct: 82,
    noPct: 18,
    sparklinePath: "M10,25 Q35,15 70,28 T130,12 T190,26 T250,8 T310,14 T350,6",
    accent: "#ffc400"
  },
  {
    id: 17,
    category: "Sports",
    tag: "TENNIS",
    time: "Jul 12",
    title: "Wimbledon 2026: Will Alexander Zverev win the Men's Singles?",
    totalPoolUSD: 18000000,
    totalPoolBNB: 31034.48,
    yesPct: 19,
    noPct: 81,
    sparklinePath: "M10,12 Q45,22 90,8 T170,25 T250,28 T310,20 T350,32",
    accent: "#ffc400"
  },
  {
    id: 18,
    category: "World Cup",
    tag: "WORLD CUP",
    time: "Dec 15",
    title: "World Cup: Will France reach the Final?",
    totalPoolUSD: 12000000,
    totalPoolBNB: 20689.66,
    yesPct: 60,
    noPct: 40,
    sparklinePath: "M10,20 Q45,18 90,25 T170,15 T250,28 T310,12 T350,16",
    accent: "#ffc400"
  },
  {
    id: 19,
    category: "World Cup",
    tag: "WORLD CUP",
    time: "Dec 15",
    title: "World Cup: Will England reach the Final?",
    totalPoolUSD: 12000000,
    totalPoolBNB: 20689.66,
    yesPct: 55,
    noPct: 45,
    sparklinePath: "M10,28 Q40,15 80,22 T150,12 T220,26 T290,18 T350,24",
    accent: "#ffc400"
  },
  {
    id: 20,
    category: "Sports",
    tag: "NBA",
    time: "Oct 20",
    title: "NBA: Will LeBron James' next team be the Cleveland Cavaliers?",
    totalPoolUSD: 18000000,
    totalPoolBNB: 31034.48,
    yesPct: 45,
    noPct: 55,
    sparklinePath: "M10,15 Q40,30 80,12 T140,25 T200,10 T260,28 T320,15 T350,22",
    accent: "#ffc400"
  },
  {
    id: 21,
    category: "Sports",
    tag: "NBA",
    time: "Oct 20",
    title: "NBA: Will LeBron James' next team be the Miami Heat?",
    totalPoolUSD: 18000000,
    totalPoolBNB: 31034.48,
    yesPct: 23,
    noPct: 77,
    sparklinePath: "M10,12 Q45,22 90,8 T170,25 T250,10 T310,20 T350,14",
    accent: "#ffc400"
  },
  {
    id: 22,
    category: "Politics",
    tag: "US ELECTIONS",
    time: "July 27",
    title: "Maine Democratic Senate nominee: Will it be Troy Jackson on July 27?",
    totalPoolUSD: 441000,
    totalPoolBNB: 760.34,
    yesPct: 71,
    noPct: 29,
    sparklinePath: "M10,25 Q35,15 70,28 T130,12 T190,26 T250,8 T310,14 T350,6",
    accent: "#ffc400"
  },
  {
    id: 23,
    category: "Politics",
    tag: "US ELECTIONS",
    time: "July 27",
    title: "Maine Democratic Senate nominee: Will it be Shenna Bellows on July 27?",
    totalPoolUSD: 441000,
    totalPoolBNB: 760.34,
    yesPct: 21,
    noPct: 79,
    sparklinePath: "M10,12 Q45,22 90,8 T170,25 T250,28 T310,20 T350,32",
    accent: "#ffc400"
  },
  {
    id: 24,
    category: "Politics",
    tag: "US ELECTIONS",
    time: "Nov 3",
    title: "Maine Senate Election Winner: Will a Democrat win?",
    totalPoolUSD: 977000,
    totalPoolBNB: 1684.48,
    yesPct: 63,
    noPct: 37,
    sparklinePath: "M10,20 Q45,18 90,25 T170,15 T250,28 T310,12 T350,16",
    accent: "#ffc400"
  },
  {
    id: 25,
    category: "Politics",
    tag: "GEOPOLITICS",
    time: "Aug 15",
    title: "Will Iran announce withdrawal from MOU negotiations by August 15?",
    totalPoolUSD: 4000000,
    totalPoolBNB: 6896.55,
    yesPct: 28,
    noPct: 72,
    sparklinePath: "M10,28 Q40,15 80,22 T150,12 T220,26 T290,18 T350,24",
    accent: "#ffc400"
  },
  {
    id: 26,
    category: "Politics",
    tag: "GEOPOLITICS",
    time: "July 31",
    title: "Will Iran announce withdrawal from MOU negotiations by July 31?",
    totalPoolUSD: 4000000,
    totalPoolBNB: 6896.55,
    yesPct: 20,
    noPct: 80,
    sparklinePath: "M10,15 Q40,30 80,12 T140,25 T200,10 T260,28 T320,15 T350,22",
    accent: "#ffc400"
  },
  {
    id: 27,
    category: "Politics",
    tag: "GEOPOLITICS",
    time: "Dec 31",
    title: "Will the US announce a blockade on Iran by December 31?",
    totalPoolUSD: 2000000,
    totalPoolBNB: 3448.28,
    yesPct: 60,
    noPct: 40,
    sparklinePath: "M10,20 Q45,10 90,25 T170,12 T250,28 T310,14 T350,18",
    accent: "#ffc400"
  },
  {
    id: 28,
    category: "Politics",
    tag: "GEOPOLITICS",
    time: "Aug 31",
    title: "Will the US announce a blockade on Iran by August 31?",
    totalPoolUSD: 2000000,
    totalPoolBNB: 3448.28,
    yesPct: 53,
    noPct: 47,
    sparklinePath: "M10,12 Q45,22 90,8 T170,25 T250,10 T310,20 T350,14",
    accent: "#ffc400"
  },
  {
    id: 29,
    category: "Politics",
    tag: "GEOPOLITICS",
    time: "July 31",
    title: "Will the next round of US-Iran peace talks happen by July 31?",
    totalPoolUSD: 6000000,
    totalPoolBNB: 10344.83,
    yesPct: 37,
    noPct: 63,
    sparklinePath: "M10,25 Q35,15 70,28 T130,12 T190,26 T250,8 T310,14 T350,6",
    accent: "#ffc400"
  },
  {
    id: 30,
    category: "Politics",
    tag: "GEOPOLITICS",
    time: "July 17",
    title: "Will the next round of US-Iran peace talks happen by July 17?",
    totalPoolUSD: 6000000,
    totalPoolBNB: 10344.83,
    yesPct: 9,
    noPct: 91,
    sparklinePath: "M10,12 Q45,22 90,8 T170,25 T250,28 T310,20 T350,32",
    accent: "#ffc400"
  },
  {
    id: 31,
    category: "Politics",
    tag: "EU POLITICS",
    time: "Apr 2027",
    title: "Next French Presidential Election: Will Marine Le Pen win?",
    totalPoolUSD: 112000000,
    totalPoolBNB: 193103.45,
    yesPct: 28,
    noPct: 72,
    sparklinePath: "M10,20 Q45,18 90,25 T170,15 T250,28 T310,12 T350,16",
    accent: "#ffc400"
  },
  {
    id: 32,
    category: "Politics",
    tag: "EU POLITICS",
    time: "Apr 2027",
    title: "Next French Presidential Election: Will Édouard Philippe win?",
    totalPoolUSD: 112000000,
    totalPoolBNB: 193103.45,
    yesPct: 28,
    noPct: 72,
    sparklinePath: "M10,28 Q40,15 80,22 T150,12 T220,26 T290,18 T350,24",
    accent: "#ffc400"
  },
  {
    id: 33,
    category: "Politics",
    tag: "GEOPOLITICS",
    time: "Jun 30 2027",
    title: "Will Vladimir Putin be out as President of Russia by June 30, 2027?",
    totalPoolUSD: 17000000,
    totalPoolBNB: 293103.34,
    yesPct: 17,
    noPct: 83,
    sparklinePath: "M10,15 Q40,30 80,12 T140,25 T200,10 T260,28 T320,15 T350,22",
    accent: "#ffc400"
  },
  {
    id: 34,
    category: "Politics",
    tag: "GEOPOLITICS",
    time: "Dec 31 2026",
    title: "Will Vladimir Putin be out as President of Russia by December 31, 2026?",
    totalPoolUSD: 17000000,
    totalPoolBNB: 29310.34,
    yesPct: 9,
    noPct: 91,
    sparklinePath: "M10,12 Q45,22 90,8 T170,25 T250,10 T310,20 T350,14",
    accent: "#ffc400"
  },
  {
    id: 35,
    category: "Politics",
    tag: "ECONOMY",
    time: "Jul 29",
    title: "Fed July Decision: Will there be no change to interest rates?",
    totalPoolUSD: 50000000,
    totalPoolBNB: 86206.90,
    yesPct: 78,
    noPct: 22,
    sparklinePath: "M10,25 Q35,15 70,28 T130,12 T190,26 T250,8 T310,14 T350,6",
    accent: "#ffc400"
  },
  {
    id: 36,
    category: "Politics",
    tag: "ECONOMY",
    time: "Jul 29",
    title: "Fed July Decision: Will there be a 25 bps interest rate increase?",
    totalPoolUSD: 50000000,
    totalPoolBNB: 86206.90,
    yesPct: 21,
    noPct: 79,
    sparklinePath: "M10,12 Q45,22 90,8 T170,25 T250,28 T310,20 T350,32",
    accent: "#ffc400"
  },
  {
    id: 37,
    category: "Politics",
    tag: "US ELECTIONS",
    time: "Jul 2028",
    title: "Will J.D. Vance be the Republican Presidential Nominee in 2028?",
    totalPoolUSD: 672000000,
    totalPoolBNB: 1158620.69,
    yesPct: 41,
    noPct: 59,
    sparklinePath: "M10,20 Q45,18 90,25 T170,15 T250,28 T310,12 T350,16",
    accent: "#ffc400"
  },
  {
    id: 38,
    category: "Politics",
    tag: "US ELECTIONS",
    time: "Jul 2028",
    title: "Will Marco Rubio be the Republican Presidential Nominee in 2028?",
    totalPoolUSD: 672000000,
    totalPoolBNB: 1158620.69,
    yesPct: 26,
    noPct: 74,
    sparklinePath: "M10,28 Q40,15 80,22 T150,12 T220,26 T290,18 T350,24",
    accent: "#ffc400"
  },
  {
    id: 39,
    category: "Politics",
    tag: "US ELECTIONS",
    time: "Nov 2028",
    title: "2028 US Election: Will J.D. Vance win the presidency?",
    totalPoolUSD: 656000000,
    totalPoolBNB: 1131034.48,
    yesPct: 20,
    noPct: 80,
    sparklinePath: "M10,15 Q40,30 80,12 T140,25 T200,10 T260,28 T320,15 T350,22",
    accent: "#ffc400"
  },
  {
    id: 40,
    category: "Politics",
    tag: "GEOPOLITICS",
    time: "Active",
    title: "Will Abiy Ahmed remain or be elected as the next Prime Minister of Ethiopia?",
    totalPoolUSD: 177000000,
    totalPoolBNB: 305172.41,
    yesPct: 97,
    noPct: 3,
    sparklinePath: "M10,20 Q45,10 90,25 T170,12 T250,28 T310,14 T350,18",
    accent: "#ffc400"
  },
  {
    id: 41,
    category: "Sports",
    tag: "MLB",
    time: "12:05 PM",
    title: "MLB: Will the Pirates defeat the Brewers?",
    totalPoolUSD: 2000000,
    totalPoolBNB: 3448.28,
    yesPct: 100,
    noPct: 0,
    sparklinePath: "M10,25 Q35,15 70,28 T130,12 T190,26 T250,8 T310,14 T350,6",
    accent: "#ffc400"
  },
  {
    id: 42,
    category: "World Cup",
    tag: "WORLD CUP",
    time: "Dec 20",
    title: "World Cup Golden Ball: Will Kylian Mbappé win?",
    totalPoolUSD: 6000000,
    totalPoolBNB: 10344.83,
    yesPct: 43,
    noPct: 57,
    sparklinePath: "M10,12 Q45,22 90,8 T170,25 T250,10 T310,20 T350,14",
    accent: "#ffc400"
  },
  {
    id: 43,
    category: "World Cup",
    tag: "WORLD CUP",
    time: "Dec 20",
    title: "World Cup Golden Ball: Will Lionel Messi win?",
    totalPoolUSD: 6000000,
    totalPoolBNB: 10344.83,
    yesPct: 34,
    noPct: 66,
    sparklinePath: "M10,18 Q35,28 75,10 T145,22 T215,14 T285,28 T350,20",
    accent: "#ffc400"
  },
  {
    id: 44,
    category: "Politics",
    tag: "US ELECTIONS",
    time: "Aug 2028",
    title: "Will Gavin Newsom be the Democratic Presidential Nominee in 2028?",
    totalPoolUSD: 1000000000,
    totalPoolBNB: 1724137.93,
    yesPct: 19,
    noPct: 81,
    sparklinePath: "M10,20 Q50,22 100,18 T200,20 T300,19 T350,20",
    accent: "#ffc400"
  },
  {
    id: 45,
    category: "Politics",
    tag: "US ELECTIONS",
    time: "Aug 2028",
    title: "Will Alexandria Ocasio-Cortez be the Democratic Presidential Nominee in 2028?",
    totalPoolUSD: 1000000000,
    totalPoolBNB: 1724137.93,
    yesPct: 14,
    noPct: 86,
    sparklinePath: "M10,12 Q45,22 90,8 T170,25 T250,28 T310,20 T350,32",
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

  const tabsList = loggedIn ? ["All", "My Positions", "World Cup", "Sports", "Politics", "Crypto", "Culture"] : ["All", "World Cup", "Sports", "Politics", "Crypto", "Culture"];
  
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
