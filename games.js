/* LearnMate — C Arcade (play-to-learn games, no quizzes)
   Loaded after script.js; reuses its dialog, progress store and toast. */
(() => {
  "use strict";
  const BEST_KEY = "learnmate-arcade-best-v1";
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const shuffle = (a) => { const r = [...a]; for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; } return r; };
  const loadBest = () => { try { const v = JSON.parse(localStorage.getItem(BEST_KEY) || "{}"); return v && typeof v === "object" ? v : {}; } catch { return {}; } };
  function saveBest(id, score) {
    const b = loadBest(); b[id] = Math.max(score, b[id] || 0);
    try { localStorage.setItem(BEST_KEY, JSON.stringify(b)); } catch { /* storage unavailable */ }
    refreshBadges(); return b[id];
  }
  function refreshBadges() {
    const b = loadBest(); let played = 0;
    Object.keys(GAMES).forEach((id) => {
      const el = document.querySelector(`[data-arcade-best="${id}"]`); if (!el) return;
      const has = typeof b[id] === "number"; if (has) played++;
      el.textContent = has ? `Best: ${b[id]}/${GAMES[id].max}` : "Not played yet";
    });
    const s = document.getElementById("arcadeSummary"); if (s) s.textContent = `${played} of ${Object.keys(GAMES).length} played`;
  }

  let runToken = 0, keyHandler = null;
  const open = (title) => { keyHandler = null; lessonCategory.textContent = `C ARCADE · ${title.toUpperCase()}`; if (!lessonDialog.open) lessonDialog.showModal(); };
  const header = (label, step, total, score) => `<div class="game-progress"><span>${label} ${Math.min(step + 1, total)} of ${total}</span><strong>Score: ${score}</strong></div><div class="game-progress-track"><span style="width:${(step / total) * 100}%"></span></div>`;
  const feedback = (el, good, text) => { el.className = `game-feedback ${good ? "good" : "bad"}`; el.textContent = text; };

  function finish(id, score, note) {
    const g = GAMES[id], best = saveBest(id, score);
    const prev = progress["c-language:gamePlayed"] || {};
    progress["c-language:gamePlayed"] = { ...prev, played: true, bestScore: Math.max(score, prev.bestScore || 0) };
    saveProgress();
    lessonContent.innerHTML = `<div class="lesson-body game-score-panel"><div class="game-art" style="margin:0 auto 16px">🏆</div>
      <h2 id="lessonTitle">${esc(g.title)} complete!</h2><div class="game-score-number">${score}/${g.max}</div>
      <p>${esc(note)}</p><p class="lesson-intro">Your best: ${best}/${g.max}</p>
      <div class="game-actions" style="justify-content:center"><button class="button" type="button" id="arcAgain">Play again</button>
      <button class="button button-outline" type="button" id="arcClose">Back to games</button></div></div>`;
    document.getElementById("arcAgain").addEventListener("click", () => GAMES[id].run());
    document.getElementById("arcClose").addEventListener("click", () => { lessonDialog.close(); document.getElementById("c-arcade")?.scrollIntoView({ behavior: "smooth" }); });
  }

  /* ===== 1. TYPE CATCHER — real-time: send each falling value to its data type ===== */
  const BINS = ["int", "float", "char", "char[]"];
  const CATCH = [
    { v: "42", t: "int", tip: "a whole number with no decimal point." },
    { v: "-7", t: "int", tip: "negative whole numbers are still int." },
    { v: "100", t: "int", tip: "no decimal point, so it is an int." },
    { v: "3.14", t: "float", tip: "the decimal point makes it a floating-point value." },
    { v: "0.5", t: "float", tip: "anything with a decimal point is float (or double)." },
    { v: "9.99", t: "float", tip: "prices and measurements with decimals are float." },
    { v: "'A'", t: "char", tip: "single quotes around one character make a char." },
    { v: "'z'", t: "char", tip: "single quotes mean exactly one character." },
    { v: "'7'", t: "char", tip: "the quotes make it the character '7', not the number 7." },
    { v: '"Hello"', t: "char[]", tip: "double quotes make a string, stored as a char array ending in '\\0'." },
    { v: '"C"', t: "char[]", tip: "double quotes make a string even for one letter. 'C' would be a char." },
    { v: '"42"', t: "char[]", tip: "digits inside double quotes are text, not an int." }
  ];
  function runCatcher() {
    const token = ++runToken; open("Type Catcher");
    const items = shuffle(CATCH).slice(0, 10); let i = 0, score = 0, lives = 3, y = 0, raf = 0, last = 0, live = false;
    lessonContent.innerHTML = `<div class="lesson-body"><div class="game-progress"><span id="cLives"></span><strong id="cScore"></strong></div>
      <h2 id="lessonTitle">Catch it in the right type</h2>
      <p class="lesson-intro">A value is falling. Send it to the data type it belongs to before it lands. Keys 1 to 4 work too.</p>
      <div class="catch-stage" id="cStage"><div class="catch-item" id="cItem"></div></div>
      <div class="catch-bins">${BINS.map((b, k) => `<button type="button" class="catch-bin" data-bin="${b}"><kbd>${k + 1}</kbd><code>${b}</code></button>`).join("")}</div>
      <div class="game-feedback" id="arcFb" role="status" aria-live="polite">Get ready…</div></div>`;
    const stage = document.getElementById("cStage"), el = document.getElementById("cItem"), fb = document.getElementById("arcFb");
    const hud = () => { document.getElementById("cLives").textContent = `Lives: ${"♥".repeat(lives)}${"♡".repeat(3 - lives)}`; document.getElementById("cScore").textContent = `Value ${Math.min(i + 1, items.length)}/${items.length} · Score: ${score}`; };
    function spawn() {
      if (token !== runToken) return;
      if (lives <= 0 || i >= items.length) return finish("catcher", score, lives <= 0 ? "You ran out of lives. Replay and watch for quotes and decimal points." : "Run complete. Quotes and decimal points tell you the type at a glance.");
      el.textContent = items[i].v; el.className = "catch-item"; el.style.left = `${5 + Math.random() * 60}%`; y = 0; el.style.transform = "translateY(0)";
      live = true; last = performance.now(); hud(); raf = requestAnimationFrame(tick);
    }
    function tick(t) {
      if (token !== runToken || !live) return;
      y += (70 + i * 9) * ((t - last) / 1000); last = t; el.style.transform = `translateY(${y}px)`;
      if (y >= stage.clientHeight - 46) resolve(null); else raf = requestAnimationFrame(tick);
    }
    function resolve(choice) {
      if (!live) return; live = false; cancelAnimationFrame(raf);
      const it = items[i], ok = choice === it.t; if (ok) score += 10; else lives--;
      el.classList.add(ok ? "hit" : "miss");
      feedback(fb, ok, `${ok ? "+10! " : choice ? `Not ${choice}. ` : "Too slow. "}${it.v} is ${it.t}: ${it.tip}`);
      i++; hud(); setTimeout(spawn, 1500);
    }
    lessonContent.querySelectorAll("[data-bin]").forEach((b) => b.addEventListener("click", () => resolve(b.dataset.bin)));
    keyHandler = (e) => { const k = Number(e.key); if (k >= 1 && k <= 4) resolve(BINS[k - 1]); };
    setTimeout(spawn, 900);
  }

  /* ===== 2. POINTER HOPPER — move p through an int array and write through it ===== */
  const PLEVELS = [
    { gems: [2, 5], start: 0, par: 5, tip: "p++ moves to the next int, and *p = 0 writes through the pointer." },
    { gems: [1, 4, 7], start: 0, par: 6, tip: "p += 3 jumps three ints at once. Notice the address grows by 12." },
    { gems: [7, 4, 1], start: 7, par: 5, tip: "Subtracting moves the pointer backwards through the array." }
  ];
  const OPS = { inc: ["p++", 1], dec: ["p--", -1], add: ["p += 3", 3], sub: ["p -= 3", -3] };
  function runPointer() {
    const token = ++runToken; open("Pointer Hopper"); let L = 0, score = 0;
    (function level() {
      if (token !== runToken) return;
      if (L >= PLEVELS.length) return finish("pointer", score, "Pointers are just addresses. Adding 1 moves by one whole element, and * reaches the value there.");
      const lv = PLEVELS[L], vals = Array(8).fill(0); lv.gems.forEach((g) => { vals[g] = 7; });
      let p = lv.start, steps = 0, done = false, msg = null; const log = [];
      const addr = (n) => "0x" + (0x1000 + 4 * n).toString(16);
      function draw() {
        lessonContent.innerHTML = `<div class="lesson-body">${header("Level", L, PLEVELS.length, score)}
          <h2 id="lessonTitle">Collect every 💎</h2>
          <p class="lesson-intro"><code>int arr[8]</code> is in memory and <code>p</code> points into it. Move <code>p</code>, then write <code>*p = 0;</code> to pick up a gem. Par: ${lv.par} statements.</p>
          <div class="ptr-row">${vals.map((v, n) => `<div class="ptr-col"><div class="ptr-mark">${n === p ? "▼ p" : ""}</div><div class="ptr-cell ${n === p ? "here" : ""}"><small>${addr(n)}</small><b>${v ? "💎" : "·"}</b><small>arr[${n}]=${v}</small></div></div>`).join("")}</div>
          <p class="lesson-intro">p = <code>${addr(p)}</code> &nbsp;·&nbsp; statements used: <b>${steps}</b></p>
          <div class="game-actions">${Object.entries(OPS).map(([k, [t]]) => `<button class="button button-outline" type="button" data-op="${k}" ${done ? "disabled" : ""}><code>${t};</code></button>`).join("")}<button class="button" type="button" data-op="grab" ${done ? "disabled" : ""}><code>*p = 0;</code></button></div>
          <pre class="code-example ptr-log" id="ptrLog">${esc(log.join("\n") || "// your program appears here")}</pre>
          <div class="game-feedback hidden" id="arcFb" role="status" aria-live="polite"></div>
          <div class="game-actions"><button class="button button-outline ${done ? "hidden" : ""}" type="button" id="ptrReset">Restart level</button><button class="button ${done ? "" : "hidden"}" type="button" id="arcNext">${L === PLEVELS.length - 1 ? "See results" : "Next level"} →</button></div></div>`;
        if (msg) feedback(document.getElementById("arcFb"), msg.good, msg.text);
        const lg = document.getElementById("ptrLog"); lg.scrollTop = lg.scrollHeight;
        lessonContent.querySelectorAll("[data-op]").forEach((b) => b.addEventListener("click", () => {
          const op = b.dataset.op; steps++; msg = null;
          if (op === "grab") { if (vals[p]) { vals[p] = 0; log.push(`*p = 0;     // picked up arr[${p}]`); } else log.push("*p = 0;     // nothing here, wasted"); }
          else {
            const [t, d] = OPS[op], n = p + d;
            if (n < 0 || n > 7) { log.push(`${t};  // ✗ outside arr!`); msg = { good: false, text: "That points outside the array. In real C this is undefined behaviour and can crash. Stay inside arr[0] to arr[7]." }; }
            else { p = n; log.push(`${t};  // p = ${addr(p)}`); }
          }
          if (!vals.some(Boolean)) { done = true; const pts = steps <= lv.par ? 20 : 10; score += pts; msg = { good: true, text: `+${pts} points! ${steps <= lv.par ? "At or under par." : `Par was ${lv.par}, can you do it faster?`} ${lv.tip}` }; }
          draw();
        }));
        document.getElementById("ptrReset").addEventListener("click", level);
        document.getElementById("arcNext").addEventListener("click", () => { L++; level(); });
      }
      draw();
    })();
  }

  /* ===== 3. LOOP ROBOT — edit the loop, run it, watch the robot ===== */
  const RLEVELS = [
    { mode: 1, flag: 8, coins: [], title: "Walk to the flag", goal: "Get the robot onto the flag at cell 8.", tip: "The body runs once per pass, so the loop count sets the distance." },
    { mode: 2, flag: 9, coins: [3, 6, 9], title: "Collect the coins", goal: "Land on every coin and finish on the flag. Pick the step size and the count.", tip: "Each pass moves S cells then collects, so S and N together decide where you land." },
    { mode: 3, flag: 5, coins: [], title: "Mind the off-by-one", goal: "Reach the flag at cell 5. How many times must the loop run?", tip: "i < 5 from 0 and i <= 5 from 1 both run 5 times. Counting passes carefully is a core C skill." }
  ];
  function runRobot() {
    const token = ++runToken; open("Loop Robot"); let L = 0, score = 0;
    (function level() {
      if (token !== runToken) return;
      if (L >= RLEVELS.length) return finish("robot", score, "Loops repeat a block. Change the start, condition or count and the number of passes changes with it.");
      const lv = RLEVELS[L]; let tries = 0, solved = false, running = false, pos = 0, got = new Set();
      const num = (id, v, max = 9) => `<input type="number" id="${id}" min="0" max="${max}" value="${v}" aria-label="${id}">`;
      const code = lv.mode === 1 ? `for (int i = 0; i < ${num("rN", 1)}; i++) {\n    move(1);\n}`
        : lv.mode === 2 ? `for (int i = 0; i < ${num("rN", 1)}; i++) {\n    move(${num("rS", 1)});\n    collect();\n}`
        : `for (int i = ${num("rA", 0, 3)}; i <select id="rOp" aria-label="operator"><option value="lt">&lt;</option><option value="le">&lt;=</option></select> ${num("rN", 1)}; i++) {\n    move(1);\n}`;
      const cell = (n) => `<div class="tcell"><small>${n}</small>${n === pos ? "🤖" : n === lv.flag ? "🏁" : lv.coins.includes(n) && !got.has(n) ? "🪙" : ""}</div>`;
      lessonContent.innerHTML = `<div class="lesson-body">${header("Level", L, RLEVELS.length, score)}
        <h2 id="lessonTitle">${lv.title}</h2><p class="lesson-intro">${lv.goal}</p>
        <div class="track" id="rTrack"></div><pre class="code-live" id="rCode">${code}</pre>
        <div class="game-feedback hidden" id="arcFb" role="status" aria-live="polite"></div>
        <div class="game-actions"><button class="button" type="button" id="rRun">▶ Run program</button><button class="button hidden" type="button" id="arcNext">${L === RLEVELS.length - 1 ? "See results" : "Next level"} →</button></div></div>`;
      const trackEl = document.getElementById("rTrack"), fb = document.getElementById("arcFb"), runBtn = document.getElementById("rRun");
      const draw = () => { trackEl.innerHTML = Array.from({ length: 10 }, (_, n) => cell(n)).join(""); }; draw();
      const val = (id) => Number(document.getElementById(id)?.value);
      runBtn.addEventListener("click", () => {
        if (running || solved) return; running = true; tries++; pos = 0; got = new Set(); draw();
        const n = val("rN"); let count = n;
        if (lv.mode === 3) { const le = document.getElementById("rOp").value === "le"; count = 0; for (let i = val("rA"); (le ? i <= n : i < n) && count < 20; i++) count++; }
        const step = lv.mode === 2 ? val("rS") : 1, times = `${count} time${count === 1 ? "" : "s"}`; let k = 0;
        fb.className = "game-feedback hidden";
        const next = () => {
          if (token !== runToken) return;
          if (k >= count) return end();
          k++; pos += step;
          if (pos > 9) { running = false; pos = 0; draw(); return feedback(fb, false, `The robot ran off the track. Your loop ran too far (${k} passes of ${step} cell${step === 1 ? "" : "s"}). Lower a number and try again.`); }
          if (lv.mode === 2 && lv.coins.includes(pos)) got.add(pos);
          draw(); setTimeout(next, 400);
        };
        const end = () => {
          running = false; const atFlag = pos === lv.flag, coins = lv.coins.every((c) => got.has(c));
          if (atFlag && coins) { solved = true; const pts = tries === 1 ? 20 : 10; score += pts; feedback(fb, true, `+${pts} points! The loop ran ${times}. ${lv.tip}`); document.getElementById("arcNext").classList.remove("hidden"); runBtn.disabled = true; }
          else feedback(fb, false, `The loop ran ${times} and the robot stopped on cell ${pos}${atFlag ? " but missed some coins" : `, not the flag on ${lv.flag}`}. Change the numbers and run again.`);
        };
        setTimeout(next, 300);
      });
      document.getElementById("arcNext").addEventListener("click", () => { L++; level(); });
    })();
  }

  const GAMES = {
    catcher: { title: "Type Catcher", max: 100, run: runCatcher },
    pointer: { title: "Pointer Hopper", max: 60, run: runPointer },
    robot: { title: "Loop Robot", max: 60, run: runRobot }
  };
  document.querySelectorAll("[data-arcade]").forEach((b) => b.addEventListener("click", () => GAMES[b.dataset.arcade]?.run()));
  document.addEventListener("keydown", (e) => { if (keyHandler) keyHandler(e); });
  lessonDialog.addEventListener("close", () => { runToken++; keyHandler = null; });
  refreshBadges();
})();
