(function () {
  const lessons = [
    ["0001-0dte-asset-pricing-from-zero.html", "ภาพรวม paper: 0DTE price บอกอะไร"],
    ["0002-asset-pricing-question.html", "Asset pricing ถามอะไร"],
    ["0003-physical-vs-risk-neutral.html", "Physical vs risk-neutral distribution"],
    ["0004-pricing-kernel-intuition.html", "Pricing kernel แบบไม่ใช้สูตร"],
    ["0005-option-returns-and-upside-risk.html", "Call/put returns และ upside risk"],
    ["0006-variance-risk-premium.html", "Variance risk premium ของ 0DTE"],
    ["0007-equity-premium-and-predictability.html", "Equity premium และ predictability"],
    ["0008-ssd-bounds-and-mispricing.html", "SSD bounds และ mispricing"],
    ["0009-final-synthesis-after-2022.html", "สรุป evidence, limitation, after 2022"]
  ];
  const course = {
    title: "0DTE Asset Pricing",
    contents: "../../topics/0dte/0dte-asset-pricing.html"
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
