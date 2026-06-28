(function () {
  const lessons = [
  [
    "0001-system-map-and-safety-frame.html",
    "ภาพรวมระบบ: จากศูนย์ถึง live trading"
  ],
  [
    "0002-underlying-instrument-and-contract-choice.html",
    "SPY, SPXW, 0DTE และตัวเลือก instrument"
  ],
  [
    "0003-options-payoff-greeks-and-time-decay.html",
    "Payoff, Greeks และ time decay ที่ต้องรู้"
  ],
  [
    "0004-strategy-template-universe.html",
    "จักรวาล strategy templates ของ 0DTE"
  ],
  [
    "0005-edge-hypotheses-from-the-wiki.html",
    "Edge hypotheses จาก LLM Wiki"
  ],
  [
    "0006-orb-directional-system-blueprint.html",
    "Blueprint: ระบบ ORB directional บน SPY 0DTE"
  ],
  [
    "0007-regime-filters-event-calendar-and-liquidity.html",
    "Regime filters, event calendar, liquidity"
  ],
  [
    "0008-data-architecture-and-schema.html",
    "Data architecture และ schema ที่ต้องมี"
  ],
  [
    "0009-backtest-engine-design.html",
    "Backtest engine: event-driven ไม่ใช่ spreadsheet ง่าย ๆ"
  ],
  [
    "0010-implementable-pnl-costs-and-slippage.html",
    "Implementable PNL, costs, slippage"
  ],
  [
    "0011-metrics-acceptance-gates-and-tail-risk.html",
    "Metrics, acceptance gates, tail risk"
  ],
  [
    "0012-position-sizing-and-risk-limits.html",
    "Position sizing และ risk limits"
  ],
  [
    "0013-strike-selection-and-order-construction.html",
    "Strike selection และ order construction"
  ],
  [
    "0014-features-targets-and-conditional-models.html",
    "Features, targets, conditional models"
  ],
  [
    "0015-walk-forward-oos-and-overfitting-control.html",
    "Walk-forward, OOS, overfitting control"
  ],
  [
    "0016-monte-carlo-stress-and-ruin-risk.html",
    "Monte Carlo, stress test, ruin risk"
  ],
  [
    "0017-live-trading-infrastructure-and-paper-trading.html",
    "Live infrastructure และ paper trading"
  ],
  [
    "0018-trading-plan-journal-and-governance.html",
    "Trading plan, journal, governance"
  ]
];
  const course = { title: "SPY 0DTE Trading System From Zero To Live", contents: "../../topics/0dte/spy-0dte-trading-system.html" };
  const file = decodeURIComponent(window.location.pathname.split("/").pop());
  const index = lessons.findIndex(([href]) => href === file);
  if (index < 0) return;
  const main = document.querySelector("main");
  if (!main) return;
  const step = (item, label) => item ? `<a class="course-step" href="${item[0]}">${label}</a>` : `<span class="course-step disabled">${label}</span>`;
  const render = (pos) => `
    <nav class="course-nav course-nav-${pos}" aria-label="Course navigation">
      <div class="course-nav-meta"><span>${course.title}</span><strong>บท ${index + 1} / ${lessons.length}: ${lessons[index][1]}</strong></div>
      <div class="course-nav-actions"><a href="../../index.html">Library</a><a href="../../topics/0dte/index.html">0DTE</a><a href="${course.contents}">สารบัญ</a><a href="../reference/system-checklist.html">Checklist</a></div>
      <div class="course-nav-row">${step(lessons[index - 1], "ก่อนหน้า")}<label for="lesson-jump-${pos}">เลือกบท</label><select id="lesson-jump-${pos}" class="lesson-jump">${lessons.map(([href, title], i) => `<option value="${href}"${i === index ? " selected" : ""}>${String(i + 1).padStart(2, "0")}. ${title}</option>`).join("")}</select>${step(lessons[index + 1], "ถัดไป")}</div>
    </nav>`;
  main.insertAdjacentHTML("afterbegin", render("top"));
  main.insertAdjacentHTML("beforeend", render("bottom"));
  document.querySelectorAll(".lesson-jump").forEach((select) => select.addEventListener("change", (event) => { window.location.href = event.target.value; }));
})();