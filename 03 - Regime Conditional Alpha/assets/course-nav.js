(function () {
  const lessons = [
    ["0001-regime-conditional-alpha-from-zero.html", "ภาพรวม paper: edge อยู่ริมขอบ"],
    ["0002-what-is-spy-0dte-debit-spread.html", "SPY 0DTE debit spread จากศูนย์"],
    ["0003-opening-range-breakout.html", "Opening Range Breakout คืออะไร"],
    ["0004-filter-stack-day-vix-events.html", "ทำไมต้องกรองวัน VIX และข่าว"],
    ["0005-breakeven-ev-and-confidence-interval.html", "Breakeven, EV, confidence interval"],
    ["0006-strike-gap-selection.html", "Strike gap และการเลือก strike"],
    ["0007-slippage-sizing-and-retail-risk.html", "Slippage, sizing, บัญชีเล็ก"],
    ["0008-final-synthesis-limitations.html", "สรุป claim, evidence, limitation"]
  ];
  const course = {
    title: "Regime-Conditional Alpha in SPY 0DTE ORB",
    contents: "../../topics/0dte/regime-conditional-alpha.html"
  };
  const file = decodeURIComponent(window.location.pathname.split("/").pop());
  const index = lessons.findIndex(([href]) => href === file);
  if (index < 0) return;
  const previous = lessons[index - 1];
  const next = lessons[index + 1];
  const main = document.querySelector("main");
  if (!main) return;
  const step = (lesson, label) => lesson ? `<a class="course-step" href="${lesson[0]}">${label}</a>` : `<span class="course-step disabled">${label}</span>`;
  const render = (position) => `
    <nav class="course-nav course-nav-${position}" aria-label="Course navigation">
      <div class="course-nav-meta">
        <span>${course.title}</span>
        <strong>บท ${index + 1} / ${lessons.length}: ${lessons[index][1]}</strong>
      </div>
      <div class="course-nav-actions">
        <a href="../../index.html">Library</a>
        <a href="../../topics/0dte/index.html">0DTE</a>
        <a href="${course.contents}">สารบัญ</a>
      </div>
      <div class="course-nav-row">
        ${step(previous, "ก่อนหน้า")}
        <label for="lesson-jump-${position}">เลือกบท</label>
        <select id="lesson-jump-${position}" class="lesson-jump">
          ${lessons.map(([href, title], i) => `<option value="${href}"${i === index ? " selected" : ""}>${String(i + 1).padStart(2, "0")}. ${title}</option>`).join("")}
        </select>
        ${step(next, "ถัดไป")}
      </div>
    </nav>`;
  main.insertAdjacentHTML("afterbegin", render("top"));
  main.insertAdjacentHTML("beforeend", render("bottom"));
  document.querySelectorAll(".lesson-jump").forEach((select) => {
    select.addEventListener("change", (event) => {
      window.location.href = event.target.value;
    });
  });
})();
