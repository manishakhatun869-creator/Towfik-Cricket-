(() => {
  'use strict';

  const matches = [
    {
      id: 'ind-aus', status: 'live', category: 'international', format: 'ODI',
      series: 'ODI CHAMPIONSHIP · MATCH 18', shortSeries: 'ODI CHAMPIONSHIP',
      homeCode: 'IND', homeTeam: 'India', homeScore: '241/5', homeOvers: '37.4 ov',
      awayCode: 'AUS', awayTeam: 'Australia', awayScore: '287/8', awayOvers: '50 ov',
      result: 'India need 47 runs from 74 balls', venue: 'Rajiv Gandhi Intl. Stadium, Hyderabad',
      time: 'LIVE', fixtureDay: 'today', crR: '6.39', requiredRate: '3.81',
      featuredNote: 'Five wickets in hand · Target 288',
      batters: ['V. Kohli 74* (68)', 'S. Iyer 32* (20)'],
      scorecard: [
        ['R. Sharma', '64', '50', '7', '2', '128.0'],
        ['V. Kohli', '74*', '68', '8', '1', '108.8'],
        ['S. Iyer', '32*', '20', '3', '1', '160.0'],
        ['K. Rahul', '18', '24', '1', '0', '75.0'],
        ['Extras', '12', '', '', '', '']
      ]
    },
    {
      id: 'ban-sl', status: 'live', category: 'international', format: 'T20I',
      series: 'T20 INTERNATIONAL · 2ND T20I', shortSeries: 'T20 INTERNATIONAL',
      homeCode: 'BAN', homeTeam: 'Bangladesh', homeScore: '118/3', homeOvers: '15.2 ov',
      awayCode: 'SL', awayTeam: 'Sri Lanka', awayScore: '157/6', awayOvers: '20 ov',
      result: 'Bangladesh need 40 runs from 28 balls', venue: 'Sher-e-Bangla Stadium, Dhaka',
      time: 'LIVE', fixtureDay: 'today', crR: '7.69', requiredRate: '8.57',
      batters: ['L. Das 61* (42)', 'T. Hridoy 33* (18)'],
      scorecard: [
        ['L. Das', '61*', '42', '6', '2', '145.2'],
        ['T. Hridoy', '33*', '18', '3', '2', '183.3'],
        ['N. Shanto', '14', '16', '1', '0', '87.5'],
        ['Extras', '10', '', '', '', '']
      ]
    },
    {
      id: 'eng-pak', status: 'upcoming', category: 'international', format: 'T20I',
      series: 'T20 INTERNATIONAL · 1ST T20I', shortSeries: 'T20 INTERNATIONAL',
      homeCode: 'ENG', homeTeam: 'England', awayCode: 'PAK', awayTeam: 'Pakistan',
      result: 'First ball at 7:30 PM local time', venue: 'National Stadium, Karachi',
      time: '7:30 PM', fixtureDay: 'today', dayLabel: 'TODAY', dateNumber: '01', monthLabel: 'OCT',
      matchTag: '1st T20I'
    },
    {
      id: 'sa-nz', status: 'upcoming', category: 'international', format: 'ODI',
      series: 'ODI CHAMPIONSHIP · 1ST ODI', shortSeries: 'ODI CHAMPIONSHIP',
      homeCode: 'SA', homeTeam: 'South Africa', awayCode: 'NZ', awayTeam: 'New Zealand',
      result: 'First ball at 2:00 PM local time', venue: 'Basin Reserve, Wellington',
      time: '2:00 PM', fixtureDay: 'tomorrow', dayLabel: 'TOMORROW', dateNumber: '02', monthLabel: 'OCT',
      matchTag: '1st ODI'
    },
    {
      id: 'wi-afg', status: 'upcoming', category: 'international', format: 'TEST',
      series: 'TEST SERIES · 1ST TEST', shortSeries: 'TEST SERIES',
      homeCode: 'WI', homeTeam: 'West Indies', awayCode: 'AFG', awayTeam: 'Afghanistan',
      result: 'First ball at 10:00 AM local time', venue: 'Sir Vivian Richards Stadium, Antigua',
      time: '10:00 AM', fixtureDay: 'fri', dayLabel: 'FRIDAY', dateNumber: '03', monthLabel: 'OCT',
      matchTag: '1st Test'
    },
    {
      id: 'ban-eng', status: 'upcoming', category: 'international', format: 'ODI',
      series: 'WOMEN’S ODI SERIES · 2ND ODI', shortSeries: 'WOMEN’S ODI SERIES',
      homeCode: 'BAN', homeTeam: 'Bangladesh Women', awayCode: 'ENG', awayTeam: 'England Women',
      result: 'First ball at 11:00 AM local time', venue: 'Sylhet International Cricket Stadium',
      time: '11:00 AM', fixtureDay: 'sat', dayLabel: 'SATURDAY', dateNumber: '04', monthLabel: 'OCT',
      matchTag: '2nd ODI'
    }
  ];

  const competitions = [
    { id: 'asia-cup', name: 'Asia Cup', subtitle: 'Men · Super Four', type: 'INTERNATIONAL', format: 'ODI', matches: '11 matches', teams: '6 teams', progress: '64% complete', tone: 'dark', live: true },
    { id: 'test-championship', name: 'World Test Championship', subtitle: '2025 – 2027 cycle', type: 'TEST CRICKET', format: 'TEST', matches: '69 matches', teams: '9 teams', progress: 'Round 4 of 6', tone: 'light' },
    { id: 't20-tour', name: 'T20 International Tour', subtitle: 'Men · 2026 season', type: 'INTERNATIONAL', format: 'T20I', matches: '42 matches', teams: '12 teams', progress: '18 matches played', tone: 'light' },
    { id: 'womens-cup', name: 'Women’s Cricket Cup', subtitle: 'Women · 2026 season', type: 'WOMEN’S CRICKET', format: 'ODI', matches: '24 matches', teams: '8 teams', progress: 'Group stage', tone: 'light' },
    { id: 'global-leagues', name: 'Global T20 Leagues', subtitle: 'The season, all in one place', type: 'FRANCHISE CRICKET', format: 'T20', matches: '6 competitions', teams: 'Worldwide', progress: 'In season', tone: 'light' }
  ];

  const rankingData = {
    ODI: [
      { code: 'IND', team: 'India', rating: 122, trend: '+2', direction: 'up' },
      { code: 'AUS', team: 'Australia', rating: 118, trend: '+1', direction: 'up' },
      { code: 'SA', team: 'South Africa', rating: 109, trend: '−1', direction: 'down' },
      { code: 'PAK', team: 'Pakistan', rating: 102, trend: '+1', direction: 'up' },
      { code: 'NZ', team: 'New Zealand', rating: 100, trend: '−1', direction: 'down' },
      { code: 'ENG', team: 'England', rating: 97, trend: '—', direction: 'flat' }
    ],
    T20I: [
      { code: 'IND', team: 'India', rating: 268, trend: '+1', direction: 'up' },
      { code: 'AUS', team: 'Australia', rating: 265, trend: '−1', direction: 'down' },
      { code: 'ENG', team: 'England', rating: 253, trend: '+2', direction: 'up' },
      { code: 'WI', team: 'West Indies', rating: 252, trend: '+1', direction: 'up' },
      { code: 'NZ', team: 'New Zealand', rating: 247, trend: '−1', direction: 'down' },
      { code: 'PAK', team: 'Pakistan', rating: 244, trend: '—', direction: 'flat' }
    ],
    TEST: [
      { code: 'AUS', team: 'Australia', rating: 124, trend: '+1', direction: 'up' },
      { code: 'SA', team: 'South Africa', rating: 115, trend: '+2', direction: 'up' },
      { code: 'IND', team: 'India', rating: 113, trend: '−1', direction: 'down' },
      { code: 'ENG', team: 'England', rating: 106, trend: '+1', direction: 'up' },
      { code: 'NZ', team: 'New Zealand', rating: 102, trend: '−2', direction: 'down' },
      { code: 'PAK', team: 'Pakistan', rating: 89, trend: '—', direction: 'flat' }
    ]
  };

  const insightSets = {
    ODI: {
      figures: [{ label: 'Runs this week', value: '2.8k', change: '+12% vs last week' }, { label: 'Boundaries hit', value: '318', change: 'Across 14 matches' }, { label: 'Best partnership', value: '164', change: 'A. Markram · T. Bavuma' }],
      chart: [['India', 81], ['Australia', 69], ['South Africa', 61], ['Pakistan', 48], ['England', 39]],
      leaders: [['VK', 'Virat Kohli', 'India · Batter', '74.2', 'AVG'], ['SM', 'Steve Smith', 'Australia · Batter', '67.8', 'AVG'], ['BM', 'Babar Azam', 'Pakistan · Batter', '64.1', 'AVG']]
    },
    T20I: {
      figures: [{ label: 'Runs this week', value: '4.1k', change: '+8% vs last week' }, { label: 'Sixes hit', value: '206', change: 'Across 22 matches' }, { label: 'Best strike rate', value: '194.8', change: 'G. Maxwell · Australia' }],
      chart: [['India', 88], ['England', 75], ['West Indies', 66], ['Australia', 57], ['New Zealand', 42]],
      leaders: [['SA', 'Suryakumar Yadav', 'India · Batter', '171.3', 'SR'], ['JC', 'Jos Buttler', 'England · Batter', '160.5', 'SR'], ['NP', 'Nicholas Pooran', 'West Indies · Batter', '158.7', 'SR']]
    }
  };

  const icons = {
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    arrowUp: '<path d="M7 17 17 7M8 7h9v9"/>',
    calendar: '<rect x="3.5" y="5" width="17" height="15.5" rx="2.5"/><path d="M7.5 3.5v3M16.5 3.5v3M3.5 9.5h17"/>',
    clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5v4.7l3 1.8"/>',
    pin: '<path d="M20 10.2c0 5.1-8 11-8 11s-8-5.9-8-11a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.3"/>',
    bookmark: '<path d="M6 4.5A1.5 1.5 0 0 1 7.5 3h9A1.5 1.5 0 0 1 18 4.5V21l-6-3.7L6 21V4.5Z"/>',
    bell: '<path d="M18 9a6 6 0 0 0-12 0c0 7-2.5 7.5-2.5 9h17C20.5 16.5 18 16 18 9ZM10 21h4"/>',
    target: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1"/>',
    trophy: '<path d="M8 4h8v4.5a4 4 0 0 1-8 0V4Z"/><path d="M8 6H4.5v2a4 4 0 0 0 4 4M16 6h3.5v2a4 4 0 0 1-4 4M12 12.5V17m-4 3h8m-7-3h6v3H9z"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5m0-8h.01"/>',
    close: '<path d="m6 6 12 12M18 6 6 18"/>',
    share: '<path d="M12 15V3m-4 4 4-4 4 4"/><path d="M5 13v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    chart: '<path d="M4 19.5h16M6.5 16V11m5 5V5m5 11V8"/>',
    search: '<circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 4.5 4.5"/>',
    sparkle: '<path d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3Z"/>'
  };

  const getIcon = (name, className = '') => `<svg class="${className}" viewBox="0 0 24 24" aria-hidden="true">${icons[name] || ''}</svg>`;
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));
  const escapeHTML = (value = '') => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));

  const readList = (key) => {
    try {
      const value = JSON.parse(localStorage.getItem(key) || '[]');
      return Array.isArray(value) ? value : [];
    } catch (_) { return []; }
  };
  const saveList = (key, values) => {
    try { localStorage.setItem(key, JSON.stringify(Array.from(values))); } catch (_) { /* storage can be unavailable in private browsing */ }
  };

  const state = {
    page: 'overview',
    feedFilter: 'all',
    fixtureDay: 'all',
    fixtureFormat: 'all',
    rankingFormat: 'ODI',
    insightFormat: 'ODI',
    modalMatch: null,
    modalTab: 'summary',
    bookmarks: new Set(readList('towfik-bookmarks')),
    reminders: new Set(readList('towfik-reminders')),
    follows: new Set(readList('towfik-follows'))
  };

  function dateLabel() {
    try {
      return new Intl.DateTimeFormat('en', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }).format(new Date()).toUpperCase();
    } catch (_) { return 'TODAY · MATCHDAY'; }
  }

  function teamMark(code, extraClass = '') {
    return `<span class="team-mark team-mark--${escapeHTML(String(code || 'default').toLowerCase())} ${extraClass}" aria-hidden="true">${escapeHTML(code || 'TC')}</span>`;
  }

  function scoreMarkup(score) {
    if (!score) return '<strong>—</strong>';
    const parts = String(score).match(/^(.+?)\/(\d+)$/);
    if (!parts) return `<strong>${escapeHTML(score)}</strong>`;
    return `<strong>${escapeHTML(parts[1])}<span>/${escapeHTML(parts[2])}</span></strong>`;
  }

  function heading(title, subtitle, eyebrow = 'THE SCOREBOARD') {
    return `
      <section class="page-heading">
        <div class="heading-copy">
          <div class="eyebrow"><span class="eyebrow-dot"></span><span>${escapeHTML(eyebrow)}</span><span class="eyebrow-divider"></span><span>${dateLabel()}</span></div>
          <h1>${escapeHTML(title)}<span class="heading-period">.</span></h1>
          <p>${escapeHTML(subtitle)}</p>
        </div>
        <div class="page-heading-actions">
          <button class="button button-quiet" type="button" data-action="share">${getIcon('share')}<span>Share</span></button>
          <button class="button button-primary" type="button" data-page="fixtures">${getIcon('calendar')}<span>View fixtures</span></button>
        </div>
      </section>`;
  }

  function sampleNote() {
    return `<div class="sample-note">${getIcon('info')}<span>Preview build · Scores, fixtures and rankings are illustrative sample data. Connect a cricket data feed to show live information.</span></div>`;
  }

  function renderFeature() {
    const match = matches[0];
    return `
      <article class="feature-card" aria-label="Featured live match">
        <div class="feature-top">
          <div class="feature-badges"><span class="live-kicker"><i></i> LIVE NOW</span><span class="sample-kicker">SAMPLE FEED</span></div>
          <span class="feature-meta">2ND ODI <span aria-hidden="true">·</span> HYDERABAD</span>
        </div>
        <div class="feature-series">${escapeHTML(match.series)}</div>
        <div class="feature-matchup">
          <div class="feature-team">
            ${teamMark(match.homeCode)}
            <div class="team-identity"><strong>${escapeHTML(match.homeTeam)}</strong><span>Batting · 2nd innings</span></div>
            <div class="feature-score">${scoreMarkup(match.homeScore)}<small>${escapeHTML(match.homeOvers)}</small></div>
          </div>
          <div class="match-divider"><span>VS</span></div>
          <div class="feature-team feature-team--right">
            ${teamMark(match.awayCode)}
            <div class="team-identity"><strong>${escapeHTML(match.awayTeam)}</strong><span>1st innings · ${escapeHTML(match.awayOvers)}</span></div>
            <div class="feature-score">${scoreMarkup(match.awayScore)}<small>${escapeHTML(match.awayOvers)}</small></div>
          </div>
        </div>
        <div class="feature-state">
          <div class="feature-state-copy"><strong>${escapeHTML(match.result)}</strong><span>${escapeHTML(match.featuredNote)}</span></div>
          <div class="chase-progress" aria-label="Run chase progress">
            <div class="chase-progress-top"><span>CHASE PROGRESS</span><strong>84%</strong></div>
            <div class="progress-track"><span></span></div>
          </div>
        </div>
        <div class="feature-bottom">
          <div class="feature-batter-info">
            <div class="batter-label"><span>At the crease</span><span>${escapeHTML(match.batters.join('  ·  '))}</span></div>
            <div class="over-summary" aria-label="Last six balls"><span>LAST OVER</span><b class="ball-chip">1</b><b class="ball-chip ball-chip--boundary">4</b><b class="ball-chip">0</b><b class="ball-chip ball-chip--boundary">6</b><b class="ball-chip ball-chip--wicket">W</b><b class="ball-chip">2</b></div>
          </div>
          <button class="feature-open" type="button" data-open-match="${match.id}">Open match centre <span aria-hidden="true">↗</span></button>
        </div>
      </article>`;
  }

  function renderMatchCard(match) {
    const isLive = match.status === 'live';
    const isSaved = state.bookmarks.has(match.id);
    const homeScore = isLive ? `<span class="mini-score">${escapeHTML(match.homeScore)}<small>${escapeHTML(match.homeOvers)}</small></span>` : `<span class="mini-score">${escapeHTML(match.time)}<small>local</small></span>`;
    const awayScore = isLive ? `<span class="mini-score">${escapeHTML(match.awayScore)}<small>${escapeHTML(match.awayOvers)}</small></span>` : `<span class="mini-score">${escapeHTML(match.matchTag || match.format)}<small>format</small></span>`;
    return `
      <article class="match-card" data-match-card="${match.id}">
        <div class="match-card-top">
          <span class="match-status ${isLive ? 'match-status--live' : ''}">${isLive ? '<i></i> LIVE' : 'UP NEXT'}</span>
          <span class="match-card-meta">${escapeHTML(match.shortSeries)} <span aria-hidden="true">·</span> ${escapeHTML(match.format)}</span>
          <button class="bookmark-button ${isSaved ? 'is-saved' : ''}" type="button" data-action="bookmark" data-id="${match.id}" aria-label="${isSaved ? 'Remove from saved matches' : 'Save match'}" aria-pressed="${isSaved}">${getIcon('bookmark')}</button>
        </div>
        <button class="match-card-main" type="button" data-open-match="${match.id}" aria-label="Open ${escapeHTML(match.homeTeam)} versus ${escapeHTML(match.awayTeam)} match centre">
          <span class="match-side">${teamMark(match.homeCode)}<span class="mini-team"><strong>${escapeHTML(match.homeTeam)}</strong><small>${isLive ? 'Batting' : match.dayLabel || 'Coming up'}</small></span>${homeScore}</span>
          <span class="match-versus">VS</span>
          <span class="match-side match-side--right">${teamMark(match.awayCode)}<span class="mini-team"><strong>${escapeHTML(match.awayTeam)}</strong><small>${isLive ? '1st innings' : match.matchTag || match.format}</small></span>${awayScore}</span>
        </button>
        <div class="match-card-bottom"><span>${isLive ? `<strong>${escapeHTML(match.result)}</strong>` : escapeHTML(match.result)}</span><span class="ground">${getIcon('pin')}${escapeHTML(match.venue.split(',')[0])}</span></div>
      </article>`;
  }

  function renderFeedFilters() {
    const items = [
      ['all', 'All matches', matches.length],
      ['live', 'Live now', matches.filter((match) => match.status === 'live').length],
      ['upcoming', 'Upcoming', matches.filter((match) => match.status === 'upcoming').length]
    ];
    return `<div class="filter-row" role="group" aria-label="Filter matches">${items.map(([id, label, count]) => `<button class="filter-chip ${state.feedFilter === id ? 'is-active' : ''}" type="button" data-feed-filter="${id}" aria-pressed="${state.feedFilter === id}">${label}<small>${count}</small></button>`).join('')}</div>`;
  }

  function renderSeriesSnapshot() {
    const teams = rankingData.ODI.slice(0, 3);
    return `
      <section class="rail-card" aria-labelledby="series-snapshot-title">
        <div class="series-card-top"><span class="rail-label">SERIES SNAPSHOT · SAMPLE</span><h3 id="series-snapshot-title">ODI Championship</h3><p>Points table · 2026 season</p></div>
        <div class="table-mini">
          <div class="table-mini-row table-mini-head"><span>#</span><span>TEAM</span><span>PTS</span><span>NRR</span></div>
          ${teams.map((team, index) => `<div class="table-mini-row"><span>${index + 1}</span><span class="table-mini-team">${teamMark(team.code)}${escapeHTML(team.team)}</span><strong>${[26, 24, 22][index]}</strong><strong>${['+1.82', '+1.14', '+0.88'][index]}</strong></div>`).join('')}
        </div>
        <div class="rail-card-footer"><span>Table shown for UI preview</span><button class="section-link" type="button" data-page="rankings">Full table <span aria-hidden="true">›</span></button></div>
      </section>`;
  }

  function renderUpcomingRail() {
    const upcoming = matches.filter((match) => match.status === 'upcoming').slice(0, 2);
    return `
      <section class="rail-card upcoming-card" aria-labelledby="upcoming-title">
        <div class="rail-card-header"><div><span class="rail-label">DON’T MISS A BALL</span><h3 id="upcoming-title">Coming up</h3></div><span class="rail-icon">${getIcon('calendar')}</span></div>
        ${upcoming.map((match) => {
          const set = state.reminders.has(match.id);
          return `<div class="upcoming-item"><span class="upcoming-date"><strong>${escapeHTML(match.dateNumber)}</strong><small>${escapeHTML(match.monthLabel)}</small></span><div class="upcoming-copy"><strong>${escapeHTML(match.homeCode)} <span aria-hidden="true">v</span> ${escapeHTML(match.awayCode)}</strong><span>${escapeHTML(match.time)} · ${escapeHTML(match.format)} · ${escapeHTML(match.dayLabel)}</span></div><button class="reminder-button ${set ? 'is-set' : ''}" type="button" data-action="reminder" data-id="${match.id}" aria-label="${set ? 'Remove match reminder' : 'Set match reminder'}" aria-pressed="${set}">${getIcon(set ? 'check' : 'bell')}</button></div>`;
        }).join('')}
        <div class="rail-card-footer"><span>Times shown in local time</span><button class="section-link" type="button" data-page="fixtures">Full calendar <span aria-hidden="true">›</span></button></div>
      </section>`;
  }

  function renderEditorialCard() {
    return `<section class="editorial-card"><span class="rail-label">A BETTER MATCHDAY</span><h3>Your cricket, all in one place.</h3><p>Fixtures · form · the little details.</p><button type="button" class="editorial-link" data-page="insights">Explore player insights <span aria-hidden="true">↗</span></button></section>`;
  }

  function renderOverview() {
    const filtered = matches.filter((match) => state.feedFilter === 'all' || match.status === state.feedFilter).filter((match) => match.id !== 'ind-aus');
    const shown = filtered.length ? filtered.slice(0, 3).map(renderMatchCard).join('') : '<div class="empty-state"><strong>No matches in this filter</strong><span>Try another matchday view.</span></div>';
    return `
      ${heading('Welcome back, Towfik', 'The scores, fixtures and stories you care about — all in one place.', 'YOUR PERSONAL SCOREBOARD')}
      <div class="overview-grid">
        <div class="main-column">
          ${renderFeature()}
          <section class="section-block" aria-labelledby="matches-title">
            <div class="section-heading"><div class="section-heading-copy"><h2 id="matches-title">Matches for you</h2><p>Across the international game · Sample schedule</p></div><button class="section-link" type="button" data-page="live">All live scores <span aria-hidden="true">›</span></button></div>
            ${renderFeedFilters()}
            <div class="match-list">${shown}</div>
          </section>
        </div>
        <aside class="right-rail" aria-label="Cricket overview">
          ${renderSeriesSnapshot()}
          ${renderUpcomingRail()}
          ${renderEditorialCard()}
        </aside>
      </div>
      ${sampleNote()}`;
  }

  function renderLivePage() {
    const live = matches.filter((match) => match.status === 'live');
    return `
      ${heading('Live scores', 'Every live match, one calm place to follow the action.', 'LIVE DESK · SAMPLE FEED')}
      <div class="page-stack">
        ${renderFeature()}
        <section class="page-panel"><div class="panel-header"><div><h2>All matches in play</h2><p>${live.length} matches · Preview scores</p></div><span class="rail-icon">${getIcon('target')}</span></div><div class="panel-content"><div class="match-list">${live.map(renderMatchCard).join('')}</div></div></section>
      </div>
      ${sampleNote()}`;
  }

  const fixtureDays = [
    ['all', 'All dates', ''], ['today', 'Today', '01'], ['tomorrow', 'Tomorrow', '02'], ['fri', 'Friday', '03'], ['sat', 'Saturday', '04']
  ];

  function renderDateSelector() {
    return `<div class="date-selector" role="group" aria-label="Filter by date">${fixtureDays.map(([id, label, day]) => `<button type="button" class="date-option ${state.fixtureDay === id ? 'is-active' : ''}" data-fixture-day="${id}" aria-pressed="${state.fixtureDay === id}"><span>${escapeHTML(label)}</span><strong>${day || 'All'}</strong></button>`).join('')}</div>`;
  }

  function renderScheduleRow(match) {
    const saved = state.reminders.has(match.id);
    return `
      <div class="schedule-row">
        <div class="schedule-time">${escapeHTML(match.time)}<small>${escapeHTML(match.format)} · ${escapeHTML(match.matchTag || 'Match')}</small></div>
        <button class="schedule-teams" type="button" data-open-match="${match.id}" aria-label="Open ${escapeHTML(match.homeTeam)} versus ${escapeHTML(match.awayTeam)} preview">
          <span class="schedule-team">${teamMark(match.homeCode)}<strong>${escapeHTML(match.homeTeam)}</strong></span><span class="schedule-versus">VS</span><span class="schedule-team schedule-team--right"><strong>${escapeHTML(match.awayTeam)}</strong>${teamMark(match.awayCode)}</span>
        </button>
        <div class="schedule-info"><div class="schedule-ground"><strong>${escapeHTML(match.venue.split(',')[0])}</strong><span>${escapeHTML(match.dayLabel || 'Today')} · ${escapeHTML(match.shortSeries)}</span></div><button class="reminder-button ${saved ? 'is-set' : ''}" type="button" data-action="reminder" data-id="${match.id}" aria-label="${saved ? 'Remove match reminder' : 'Set match reminder'}" aria-pressed="${saved}">${getIcon(saved ? 'check' : 'bell')}</button></div>
      </div>`;
  }

  function renderFixtures() {
    let upcoming = matches.filter((match) => match.status === 'upcoming');
    if (state.fixtureDay !== 'all') upcoming = upcoming.filter((match) => match.fixtureDay === state.fixtureDay);
    if (state.fixtureFormat !== 'all') upcoming = upcoming.filter((match) => match.format === state.fixtureFormat);
    const dayNameById = { today: 'Today · Thursday, October 1', tomorrow: 'Tomorrow · Friday, October 2', fri: 'Friday · October 3', sat: 'Saturday · October 4' };
    const dayOrder = ['today', 'tomorrow', 'fri', 'sat'];
    const sections = state.fixtureDay === 'all' ? dayOrder.map((day) => [day, upcoming.filter((match) => match.fixtureDay === day)]).filter(([, list]) => list.length) : [[state.fixtureDay, upcoming]];
    const schedule = sections.map(([day, list]) => `<div class="schedule-day">${escapeHTML(dayNameById[day] || 'Matchday')}</div>${list.map(renderScheduleRow).join('')}`).join('');
    return `
      ${heading('Fixtures', 'Plan ahead, set a reminder and never miss first ball.', 'THE MATCH CALENDAR')}
      <section class="page-panel">
        <div class="panel-header"><div><h2>Upcoming matches</h2><p>International cricket · Times shown in local time</p></div><button class="button button-quiet" type="button" data-action="share">${getIcon('share')}<span>Share calendar</span></button></div>
        <div class="panel-content">
          ${renderDateSelector()}
          <div class="format-row"><span class="format-label">Match format</span><div class="filter-row" role="group" aria-label="Filter by format">${[['all', 'All'], ['ODI', 'ODI'], ['T20I', 'T20'], ['TEST', 'Test']].map(([id, label]) => `<button class="filter-chip ${state.fixtureFormat === id ? 'is-active' : ''}" type="button" data-fixture-format="${id}" aria-pressed="${state.fixtureFormat === id}">${label}</button>`).join('')}</div></div>
          <div class="schedule-list">${schedule || '<div class="empty-state"><strong>No fixtures found</strong><span>Choose another date or format to see more cricket.</span></div>'}</div>
        </div>
      </section>
      ${sampleNote()}`;
  }

  function renderCompetitionCard(competition) {
    const followed = state.follows.has(competition.id);
    return `
      <article class="competition-card ${competition.tone === 'dark' ? 'competition-card--dark' : ''}">
        <div class="competition-card-top"><span class="competition-kind">${escapeHTML(competition.type)}</span>${competition.live ? '<span class="competition-live"><i></i> IN PLAY</span>' : ''}</div>
        <h3>${escapeHTML(competition.name)}</h3><p>${escapeHTML(competition.subtitle)}</p>
        <div class="competition-footer"><div class="competition-stats"><span><strong>${escapeHTML(competition.matches)}</strong></span><span>${escapeHTML(competition.teams)}</span></div><button class="follow-button ${followed ? 'is-following' : ''}" type="button" data-action="follow" data-id="${competition.id}" aria-pressed="${followed}">${getIcon(followed ? 'check' : 'plus')}<span>${followed ? 'Following' : 'Follow'}</span></button></div>
      </article>`;
  }

  function renderCompetitions() {
    return `
      ${heading('Competitions', 'Keep your favourite tournaments close, from first fixture to final.', 'YOUR CRICKET, YOUR WAY')}
      <section class="page-stack">
        <div class="section-heading"><div class="section-heading-copy"><h2>On the world stage</h2><p>International series and competitions in one view.</p></div><span class="format-label">2026 SEASON · SAMPLE</span></div>
        <div class="competition-grid">${competitions.map(renderCompetitionCard).join('')}</div>
      </section>
      ${sampleNote()}`;
  }

  function renderRankingsTable() {
    const rows = rankingData[state.rankingFormat] || rankingData.ODI;
    return `<table class="ranking-table"><thead><tr><th>Rank</th><th>Team</th><th>Trend</th><th>Rating</th></tr></thead><tbody>${rows.map((team, index) => `<tr><td><span class="rank-number">${String(index + 1).padStart(2, '0')}</span></td><td><span class="ranking-team">${teamMark(team.code)}${escapeHTML(team.team)}</span></td><td><span class="rank-trend ${team.direction === 'down' ? 'rank-trend--down' : ''}">${team.direction === 'up' ? '↑' : team.direction === 'down' ? '↓' : '·'} ${escapeHTML(team.trend)}</span></td><td class="rating-value">${team.rating}</td></tr>`).join('')}</tbody></table>`;
  }

  function renderRankings() {
    return `
      ${heading('World rankings', 'A snapshot of the teams setting the pace across formats.', 'THE INTERNATIONAL GAME')}
      <div class="rankings-layout">
        <section class="page-panel"><div class="panel-header"><div><h2>Team rankings</h2><p>International teams · Sample ratings</p></div><div class="segmented-control" role="group" aria-label="Ranking format">${[['ODI', 'ODI'], ['T20I', 'T20I'], ['TEST', 'Tests']].map(([id, label]) => `<button type="button" class="${state.rankingFormat === id ? 'is-active' : ''}" data-ranking-format="${id}" aria-pressed="${state.rankingFormat === id}">${label}</button>`).join('')}</div></div><div class="panel-content">${renderRankingsTable()}</div></section>
        <aside class="rankings-aside"><section class="ranking-feature"><span class="rail-label">THE NO. 1 SPOT · ODI</span><h3>India hold their place at the top.</h3><p>Consistency across formats keeps the race for number one close.</p><div class="rank-feature-stat"><strong>122</strong><span>rating points</span></div></section><section class="rank-note-card"><strong>How rankings work</strong><p>Ratings balance results, opposition strength and match recency. Figures here are illustrative sample data for the preview.</p></section></aside>
      </div>
      ${sampleNote()}`;
  }

  function renderInsightFigures() {
    const data = insightSets[state.insightFormat] || insightSets.ODI;
    return `
      <div class="stat-strip">${data.figures.map((item) => `<article class="stat-card"><span>${escapeHTML(item.label)}</span><strong>${escapeHTML(item.value)}</strong><small>${escapeHTML(item.change)}</small></article>`).join('')}</div>
      <section class="page-panel"><div class="panel-header"><div><h2>Runs scored by team</h2><p>Across sample international matches</p></div><div class="segmented-control" role="group" aria-label="Player insights format">${[['ODI', 'ODI'], ['T20I', 'T20']].map(([id, label]) => `<button type="button" class="${state.insightFormat === id ? 'is-active' : ''}" data-insight-format="${id}" aria-pressed="${state.insightFormat === id}">${label}</button>`).join('')}</div></div><div class="panel-content"><div class="bar-chart">${data.chart.map(([team, value]) => `<div class="chart-row"><span>${escapeHTML(team)}</span><div class="chart-track"><span style="width:${value}%"></span></div><strong>${value}%</strong></div>`).join('')}</div></div></section>`;
  }

  function renderInsights() {
    const data = insightSets[state.insightFormat] || insightSets.ODI;
    return `
      ${heading('Player insights', 'Small details, big moments. See form take shape across the game.', 'FORM & PERFORMANCE')}
      <div class="insights-grid">
        <div class="page-stack">${renderInsightFigures()}</div>
        <section class="page-panel"><div class="panel-header"><div><h2>Form watch</h2><p>Standout numbers · Sample stats</p></div><span class="rail-icon">${getIcon('sparkle')}</span></div><div class="panel-content"><div class="player-table">${data.leaders.map(([initials, name, detail, value, stat]) => `<div class="player-row"><span class="player-avatar">${escapeHTML(initials)}</span><span class="player-copy"><strong>${escapeHTML(name)}</strong><span>${escapeHTML(detail)}</span></span><span class="player-value">${escapeHTML(value)}<small>${escapeHTML(stat)}</small></span></div>`).join('')}</div><button class="button button-quiet" type="button" data-page="rankings" style="width:100%;margin-top:13px;">Explore team rankings ${getIcon('arrow')}</button></div></section>
      </div>
      ${sampleNote()}`;
  }

  function renderPage() {
    const appView = $('#appView');
    if (!appView) return;
    const pages = {
      overview: renderOverview,
      live: renderLivePage,
      fixtures: renderFixtures,
      competitions: renderCompetitions,
      rankings: renderRankings,
      insights: renderInsights
    };
    appView.innerHTML = (pages[state.page] || renderOverview)();
    $$('.nav-item, .mobile-nav-item').forEach((item) => {
      const active = item.dataset.page === state.page;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-current', active ? 'page' : 'false');
    });
  }

  function setPage(page) {
    const valid = ['overview', 'live', 'fixtures', 'competitions', 'rankings', 'insights'];
    if (!valid.includes(page)) return;
    state.page = page;
    closeSidebar();
    closeSearch();
    renderPage();
    if (window.matchMedia('(max-width: 760px)').matches) window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function showToast(title, message) {
    const region = $('#toastRegion');
    if (!region) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span class="toast-icon">${getIcon('check')}</span><span class="toast-copy"><strong>${escapeHTML(title)}</strong><span>${escapeHTML(message)}</span></span><button type="button" class="toast-dismiss" aria-label="Dismiss notification">×</button>`;
    region.appendChild(toast);
    window.setTimeout(() => toast.remove(), 4200);
  }

  function openMatch(id) {
    const match = matches.find((item) => item.id === id);
    if (!match) return;
    state.modalMatch = match;
    state.modalTab = 'summary';
    closeSearch();
    renderModal();
  }

  function renderModalContent(match) {
    if (state.modalTab === 'scorecard') {
      const rows = match.scorecard || [
        [match.homeTeam.split(' ')[0], '42', '36', '4', '1', '116.7'],
        [match.homeTeam.split(' ')[1] || 'Player', '31*', '22', '3', '1', '140.9'],
        ['Extras', '8', '', '', '', '']
      ];
      return `<table class="modal-score-table"><thead><tr><th>Batter</th><th>R</th><th>B</th><th>4s</th><th>6s</th><th>SR</th></tr></thead><tbody>${rows.map((row) => `<tr>${row.map((value, index) => `<td>${index === 0 ? `<strong>${escapeHTML(value)}</strong>` : escapeHTML(value)}</td>`).join('')}</tr>`).join('')}</tbody></table><p class="modal-footnote">Sample scorecard for visual preview only. Official ball-by-ball data is not connected.</p>`;
    }
    if (state.modalTab === 'commentary') {
      const events = [
        ['37.4', '2', 'Good running between the wickets. Two more added to the chase.'],
        ['37.3', 'W', 'A wicket in the deep — the fielding side finds a breakthrough.'],
        ['37.2', '0', 'A tidy delivery on a testing line. No run.'],
        ['37.1', '6', 'Launched high over long-on! A huge strike to start the over.']
      ];
      return `<div class="commentary-list">${events.map(([over, ball, text]) => `<div class="commentary-item"><span class="commentary-over">${over} ov</span><span class="commentary-ball ${ball === '6' || ball === '4' ? 'commentary-ball--boundary' : ball === 'W' ? 'commentary-ball--wicket' : ''}">${ball}</span><span class="commentary-copy"><strong>${ball === 'W' ? 'WICKET' : ball === '6' ? 'SIX' : ball === '4' ? 'FOUR' : 'IN PLAY'} · SAMPLE COMMENTARY</strong><span>${escapeHTML(text)}</span></span></div>`).join('')}</div><p class="modal-footnote">Commentary is illustrative, not a live feed.</p>`;
    }
    if (match.status === 'upcoming') {
      return `<div class="modal-summary-grid"><article class="modal-info-card"><h4>BE THERE FOR FIRST BALL</h4><p>${escapeHTML(match.result)} at <strong>${escapeHTML(match.venue)}</strong>.</p><p style="margin-top:9px;">Add a reminder and we’ll keep the fixture on your matchday list.</p><button type="button" class="button button-lime" data-action="reminder" data-id="${match.id}" style="margin-top:13px;">${getIcon(state.reminders.has(match.id) ? 'check' : 'bell')}<span>${state.reminders.has(match.id) ? 'Reminder set' : 'Set reminder'}</span></button></article><article class="modal-info-card"><h4>ABOUT THIS MATCH</h4><p><strong>${escapeHTML(match.series)}</strong><br>${escapeHTML(match.format)} · ${escapeHTML(match.dayLabel || 'Matchday')} · local time</p><p style="margin-top:9px;">Team news and scorecards will appear here when a live cricket feed is connected.</p></article></div><div class="modal-stat-grid"><div class="modal-stat"><span>FORMAT</span><strong>${escapeHTML(match.format)}</strong></div><div class="modal-stat"><span>START</span><strong>${escapeHTML(match.time)}</strong></div><div class="modal-stat"><span>STATUS</span><strong>UP NEXT</strong></div></div><p class="modal-footnote">This is a sample match preview. No live fixture API is connected yet.</p>`;
    }
    return `<div class="modal-summary-grid"><article class="modal-info-card"><h4>MATCH SITUATION</h4><p><strong>${escapeHTML(match.result)}</strong></p><p style="margin-top:7px;">${escapeHTML(match.venue)} · ${escapeHTML(match.format)} · Sample match data</p></article><article class="modal-info-card"><h4>AT THE CREASE</h4><p><strong>${escapeHTML((match.batters || ['Batters to be confirmed']).join(' · '))}</strong></p><p style="margin-top:7px;">Partnership building as the innings moves into its next phase.</p></article></div><div class="modal-stat-grid"><div class="modal-stat"><span>RUN RATE</span><strong>${escapeHTML(match.crR || '7.69')}</strong></div><div class="modal-stat"><span>REQUIRED</span><strong>${escapeHTML(match.requiredRate || '8.57')}</strong></div><div class="modal-stat"><span>FORMAT</span><strong>${escapeHTML(match.format)}</strong></div></div><p class="modal-footnote">Sample match centre for UI preview. Scores and commentary are not connected to a live data provider.</p>`;
  }

  function renderModal() {
    const match = state.modalMatch;
    const root = $('#modalRoot');
    if (!match || !root) return;
    const homeValue = match.status === 'live' ? escapeHTML(match.homeOvers) : 'First ball · local time';
    const awayValue = match.status === 'live' ? escapeHTML(match.awayOvers) : `${escapeHTML(match.matchTag || match.format)} · away`;
    root.innerHTML = `
      <div class="modal-backdrop" data-close-modal>
        <section class="match-modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
          <header class="modal-header"><div class="modal-heading-copy"><span>${match.status === 'live' ? 'SAMPLE MATCH CENTRE' : 'MATCH PREVIEW'}</span><strong id="modalTitle">${escapeHTML(match.homeTeam)} vs ${escapeHTML(match.awayTeam)}</strong></div><button class="modal-close" type="button" data-action="close-modal" aria-label="Close match centre">${getIcon('close')}</button></header>
          <div class="modal-score-hero"><div class="feature-series">${escapeHTML(match.series)}</div><div class="modal-score-teams"><div class="modal-score-team">${teamMark(match.homeCode)}<div class="modal-score-team-copy"><strong>${escapeHTML(match.homeTeam)}</strong><span>${homeValue}</span><div class="modal-score-number">${match.status === 'live' ? escapeHTML(match.homeScore) : escapeHTML(match.time)}</div></div></div><span class="modal-score-vs">VS</span><div class="modal-score-team modal-score-team--right">${teamMark(match.awayCode)}<div class="modal-score-team-copy"><strong>${escapeHTML(match.awayTeam)}</strong><span>${awayValue}</span><div class="modal-score-number">${match.status === 'live' ? escapeHTML(match.awayScore) : escapeHTML(match.matchTag || match.format)}</div></div></div></div><div class="modal-match-result"><span>${match.status === 'live' ? '<strong>LIVE · </strong>' : ''}${escapeHTML(match.result)}</span><span>${escapeHTML(match.venue.split(',')[0])}</span></div></div>
          <div class="modal-tabs" role="tablist" aria-label="Match centre sections">${[['summary', 'Summary'], ['scorecard', 'Scorecard'], ['commentary', 'Commentary']].map(([id, label]) => `<button class="modal-tab ${state.modalTab === id ? 'is-active' : ''}" type="button" role="tab" aria-selected="${state.modalTab === id}" data-modal-tab="${id}">${label}</button>`).join('')}</div>
          <div class="modal-content" role="tabpanel">${renderModalContent(match)}</div>
        </section>
      </div>`;
    document.body.classList.add('modal-open');
    window.setTimeout(() => $('.modal-close', root)?.focus(), 0);
  }

  function closeModal() {
    state.modalMatch = null;
    const root = $('#modalRoot');
    if (root) root.innerHTML = '';
    document.body.classList.remove('modal-open');
  }

  function closeSidebar() {
    $('#appShell')?.classList.remove('sidebar-open');
  }

  function closeSearch() {
    const popover = $('#searchPopover');
    const input = $('#globalSearch');
    if (popover) { popover.hidden = true; popover.innerHTML = ''; }
    if (input) input.setAttribute('aria-expanded', 'false');
  }

  function toggleSet(setName, id, storageKey) {
    const set = state[setName];
    if (set.has(id)) set.delete(id); else set.add(id);
    saveList(storageKey, set);
    renderPage();
    if (state.modalMatch && state.modalMatch.id === id) renderModal();
    return set.has(id);
  }

  async function shareApp() {
    const shareData = { title: 'Towfik Cricket Score', text: 'A premium home for cricket scores, fixtures and insights.', url: window.location.href };
    try {
      if (navigator.share) await navigator.share(shareData);
      else if (navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href);
        showToast('Link copied', 'Share Towfik Cricket Score with your cricket crew.');
      } else showToast('Towfik Cricket Score', 'You can copy this page link from your browser.');
    } catch (error) {
      if (error && error.name !== 'AbortError') showToast('Share unavailable', 'Copy the page link from your browser to share this preview.');
    }
  }

  function handleAction(action, id) {
    if (action === 'close-modal') closeModal();
    if (action === 'notifications') showToast('You’re all caught up', 'Match alerts will be available when a live score feed is connected.');
    if (action === 'profile') showToast('Welcome, Towfik', 'Profile controls are part of the full app experience.');
    if (action === 'premium') showToast('The club', 'Premium membership can be connected to your app account.');
    if (action === 'share') shareApp();
    if (action === 'mobile-menu') $('#appShell')?.classList.add('sidebar-open');
    if (action === 'reminder') {
      const set = toggleSet('reminders', id, 'towfik-reminders');
      const match = matches.find((item) => item.id === id);
      showToast(set ? 'Reminder added' : 'Reminder removed', `${match ? `${match.homeCode} vs ${match.awayCode}` : 'Match'} · Preview reminders are stored on this device.`);
    }
    if (action === 'bookmark') {
      const set = toggleSet('bookmarks', id, 'towfik-bookmarks');
      showToast(set ? 'Match saved' : 'Match removed', 'Your saved matches stay on this device in the preview.');
    }
    if (action === 'follow') {
      const set = toggleSet('follows', id, 'towfik-follows');
      const competition = competitions.find((item) => item.id === id);
      showToast(set ? 'Following competition' : 'Unfollowed competition', competition ? competition.name : 'Your competition list has been updated.');
    }
  }

  function renderSearchResults(query) {
    const popover = $('#searchPopover');
    const input = $('#globalSearch');
    if (!popover || !input) return;
    const clean = query.trim().toLowerCase();
    if (!clean) { closeSearch(); return; }
    const foundMatches = matches.filter((match) => `${match.homeTeam} ${match.awayTeam} ${match.shortSeries} ${match.format} ${match.venue}`.toLowerCase().includes(clean)).slice(0, 5);
    const players = [
      { name: 'Virat Kohli', meta: 'India · Batter', search: 'virat kohli india batter' },
      { name: 'Babar Azam', meta: 'Pakistan · Batter', search: 'babar azam pakistan batter' },
      { name: 'Shubman Gill', meta: 'India · Batter', search: 'shubman gill india batter' },
      { name: 'Jos Buttler', meta: 'England · Batter', search: 'jos buttler england batter' }
    ].filter((player) => player.search.includes(clean)).slice(0, 2);
    if (!foundMatches.length && !players.length) {
      popover.innerHTML = `<div class="search-popover-label">NO RESULTS</div><div class="search-empty">Try a team like India, a format like ODI, or a player name.</div>`;
    } else {
      const matchHtml = foundMatches.map((match) => `<button class="search-result" type="button" data-open-match="${match.id}">${teamMark(match.homeCode)}<span class="search-result-copy"><strong>${escapeHTML(match.homeTeam)} vs ${escapeHTML(match.awayTeam)}</strong><span>${escapeHTML(match.shortSeries)} · ${match.status === 'live' ? 'Live sample' : escapeHTML(match.time)}</span></span><span class="search-result-state">${match.status === 'live' ? 'LIVE' : 'FIXTURE'}</span></button>`).join('');
      const playerHtml = players.map((player) => `<button class="search-result" type="button" data-action="search-insights">${teamMark('TC')}<span class="search-result-copy"><strong>${escapeHTML(player.name)}</strong><span>${escapeHTML(player.meta)} · sample profile</span></span><span class="search-result-state">PLAYER</span></button>`).join('');
      popover.innerHTML = `${foundMatches.length ? '<div class="search-popover-label">MATCHES</div>' : ''}${matchHtml}${players.length ? '<div class="search-popover-label">PLAYERS</div>' : ''}${playerHtml}`;
    }
    popover.hidden = false;
    input.setAttribute('aria-expanded', 'true');
  }

  document.addEventListener('click', (event) => {
    const pageButton = event.target.closest('[data-page]');
    if (pageButton) {
      event.preventDefault();
      setPage(pageButton.dataset.page);
      return;
    }

    const openButton = event.target.closest('[data-open-match]');
    if (openButton) {
      event.preventDefault();
      openMatch(openButton.dataset.openMatch);
      return;
    }

    if (event.target.closest('[data-close-modal]') && event.target.matches('.modal-backdrop')) {
      closeModal();
      return;
    }

    const actionButton = event.target.closest('[data-action]');
    if (actionButton) {
      const action = actionButton.dataset.action;
      if (action === 'search-insights') {
        closeSearch();
        setPage('insights');
        showToast('Player insights', 'Search results use sample player profiles in this preview.');
        return;
      }
      handleAction(action, actionButton.dataset.id);
      if (actionButton.classList.contains('toast-dismiss')) actionButton.closest('.toast')?.remove();
      return;
    }

    const filter = event.target.closest('[data-feed-filter]');
    if (filter) { state.feedFilter = filter.dataset.feedFilter; renderPage(); return; }

    const fixtureDay = event.target.closest('[data-fixture-day]');
    if (fixtureDay) { state.fixtureDay = fixtureDay.dataset.fixtureDay; renderPage(); return; }

    const fixtureFormat = event.target.closest('[data-fixture-format]');
    if (fixtureFormat) { state.fixtureFormat = fixtureFormat.dataset.fixtureFormat; renderPage(); return; }

    const rankingFormat = event.target.closest('[data-ranking-format]');
    if (rankingFormat) { state.rankingFormat = rankingFormat.dataset.rankingFormat; renderPage(); return; }

    const insightFormat = event.target.closest('[data-insight-format]');
    if (insightFormat) { state.insightFormat = insightFormat.dataset.insightFormat; renderPage(); return; }

    const modalTab = event.target.closest('[data-modal-tab]');
    if (modalTab && state.modalMatch) { state.modalTab = modalTab.dataset.modalTab; renderModal(); return; }

    if (!event.target.closest('#searchWrap')) closeSearch();
    if (!event.target.closest('#sidebar') && !event.target.closest('#mobileMenu')) closeSidebar();
  });

  document.addEventListener('input', (event) => {
    if (event.target.id === 'globalSearch') renderSearchResults(event.target.value);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeModal();
      closeSidebar();
      closeSearch();
      return;
    }
    if (event.key === '/' && !event.metaKey && !event.ctrlKey && !event.altKey && !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
      event.preventDefault();
      $('#globalSearch')?.focus();
    }
    if ((event.key === 'Enter' || event.key === ' ') && event.target.matches('.sidebar-scrim')) closeSidebar();
  });

  $('#mobileMenu')?.addEventListener('click', () => $('#appShell')?.classList.add('sidebar-open'));
  $('#sidebarClose')?.addEventListener('click', closeSidebar);
  $('#sidebarScrim')?.addEventListener('click', closeSidebar);
  $('#globalSearch')?.addEventListener('focus', (event) => {
    if (event.target.value.trim()) renderSearchResults(event.target.value);
  });

  renderPage();
})();
