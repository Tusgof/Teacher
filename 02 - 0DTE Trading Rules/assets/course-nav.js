(function () {
  const courses = [
    {
      marker: "01%20-%200DTE%20on%20SPY",
      title: "The Market for 0DTE options",
      contents: "../../topics/0dte/the-market-for-0dte-options.html",
      lessons: [
        ["0001-how-to-learn-this-paper-from-zero.html", "Paper นี้กำลังถามอะไร"],
        ["0002-0dte-from-zero-before-the-paper.html", "0DTE จากศูนย์"],
        ["0003-delta-and-gamma-without-formulas.html", "Delta และ Gamma"],
        ["0004-positive-net-gamma-and-counter-cyclical-hedging.html", "Positive Net Gamma"],
        ["0005-volume-inventory-and-hedging-flow.html", "Volume, Inventory, Hedging Flow"],
        ["0006-volatility-measurement-and-main-result.html", "Volatility และผลหลัก"],
        ["0007-identification-with-expiration-calendar.html", "Identification"],
        ["0008-measuring-net-delta-and-net-gamma.html", "Measuring Net Delta/Gamma"],
        ["0009-intraday-evidence-and-e-mini-futures.html", "Intraday Evidence"],
        ["0010-where-positive-gamma-comes-from.html", "Source of Positive Gamma"],
        ["0011-how-to-read-regression-tables.html", "Regression Tables"],
        ["0012-final-synthesis-and-research-hypotheses.html", "Final Synthesis"]
      ]
    },
    {
      marker: "02%20-%200DTE%20Trading%20Rules",
      title: "0DTE Trading Rules",
      contents: "../../topics/0dte/0dte-trading-rules.html",
      lessons: [
        ["0001-how-to-learn-0dte-trading-rules.html", "Paper นี้กำลังถามอะไร"],
        ["0002-payoff-pnl-and-return.html", "Payoff, PNL, Return"],
        ["0003-variance-risk-premium-without-formulas.html", "Variance Risk Premium"],
        ["0004-strategy-templates-and-payoff-shapes.html", "Strategy Templates"],
        ["0005-unconditional-results-are-not-a-broad-edge.html", "Unconditional Results"],
        ["0006-frictions-and-tail-risk.html", "Frictions and Tail Risk"],
        ["0007-what-drives-strategy-pnl.html", "What Drives Strategy PNL"],
        ["0008-conditional-rules-and-vix-regimes.html", "Conditional Rules"],
        ["0009-strict-out-of-sample-protocol.html", "Strict OOS Protocol"],
        ["0010-why-directional-classification-beats-return-prediction.html", "Classification vs Return Prediction"],
        ["0011-oos-performance-and-baskets.html", "OOS Performance"],
        ["0012-final-synthesis-and-research-hypotheses.html", "Final Synthesis"]
      ]
    }
  ];

  const path = window.location.pathname;
  const file = decodeURIComponent(path.substring(path.lastIndexOf("/") + 1));
  const course = courses.find((candidate) => path.includes(candidate.marker));
  if (!course) return;

  const index = course.lessons.findIndex(([href]) => href === file);
  if (index === -1) return;

  const main = document.querySelector("main");
  if (!main) return;

  const current = course.lessons[index];
  const previous = course.lessons[index - 1];
  const next = course.lessons[index + 1];

  function makeLink(href, label, className) {
    if (!href) {
      return `<span class="${className} disabled">${label}</span>`;
    }
    return `<a class="${className}" href="${href}">${label}</a>`;
  }

  function render(position) {
    const selectId = `lesson-jump-${position}`;
    const options = course.lessons
      .map(([href, title], lessonIndex) => {
        const selected = lessonIndex === index ? " selected" : "";
        const number = String(lessonIndex + 1).padStart(2, "0");
        return `<option value="${href}"${selected}>${number}. ${title}</option>`;
      })
      .join("");

    return `
      <nav class="course-nav course-nav-${position}" aria-label="Course navigation">
        <div class="course-nav-meta">
          <span>${course.title}</span>
          <strong>บท ${index + 1} / ${course.lessons.length}: ${current[1]}</strong>
        </div>
        <div class="course-nav-actions">
          <a href="../../index.html">Library</a>
          <a href="../../topics/0dte/index.html">0DTE</a>
          <a href="${course.contents}">สารบัญ</a>
        </div>
        <div class="course-nav-row">
          ${makeLink(previous && previous[0], "ก่อนหน้า", "course-step")}
          <label for="${selectId}">เลือกบท</label>
          <select id="${selectId}" class="lesson-jump">
            ${options}
          </select>
          ${makeLink(next && next[0], "ถัดไป", "course-step")}
        </div>
      </nav>
    `;
  }

  main.insertAdjacentHTML("afterbegin", render("top"));
  main.insertAdjacentHTML("beforeend", render("bottom"));

  document.querySelectorAll(".lesson-jump").forEach((select) => {
    select.addEventListener("change", (event) => {
      window.location.href = event.target.value;
    });
  });
})();
