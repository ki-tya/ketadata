<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>KETADATA // FONT TESTER</title>
  <style>
    :root{
      --bg:#000;
      --ui:rgba(255,255,255,.06);
      --line:rgba(255,255,255,.14);
      --line2:rgba(255,255,255,.22);
      --ink:#fff;
      --muted:rgba(255,255,255,.65);

      --font: Arial, Helvetica, sans-serif;
      --size: 96px;
      --weight: 700;
      --italic: 0;
      --fill: #ffffff;
      --stroke: #000000;
      --strokeW: 0px;
      --ls: -0.02em;
      --lh: 1.0;
      --shadow: 0px;
      --shadowColor: rgba(255,255,255,.30);
      --shadowX: 0px;
      --shadowY: 0px;

      --pad: 16px;
      --r: 0px;
    }

    *{ box-sizing:border-box; }
    html,body{ height:100%; }
    body{
      margin:0;
      background:var(--bg);
      color:var(--ink);
      overflow:hidden;
      font-family: Arial, Helvetica, sans-serif;
    }

    /* Fullscreen editor */
    #stage{
      position:fixed;
      inset:0;
      display:flex;
      align-items:center;
      justify-content:center;
      padding: clamp(18px, 4vw, 56px);
    }

    #text{
      width:100%;
      max-width: 1600px;
      outline:none;
      color: var(--fill);
      font-family: var(--font);
      font-size: var(--size);
      font-weight: var(--weight);
      font-style: calc(var(--italic) * 1) == 1 ? italic : normal; /* fallback, overridden below */
      letter-spacing: var(--ls);
      line-height: var(--lh);
      white-space: pre-wrap;
      word-break: break-word;

      /* Outline */
      -webkit-text-stroke-color: var(--stroke);
      -webkit-text-stroke-width: var(--strokeW);

      /* Shadow */
      text-shadow: var(--shadowX) var(--shadowY) var(--shadow) var(--shadowColor);
    }

    /* Safari/Chrome won’t accept calc in font-style; we toggle via class */
    #text.italic { font-style: italic; }
    #text:not(.italic) { font-style: normal; }

    /* HUD */
    #hud{
      position:fixed;
      top:12px; left:12px;
      width: min(520px, calc(100vw - 24px));
      z-index:20;
      border:1px solid var(--line);
      background: rgba(255,255,255,.04);
      border-radius: var(--r);
      backdrop-filter: blur(6px);
    }

    #hud header{
      padding: 10px 12px;
      border-bottom:1px solid rgba(255,255,255,.10);
      display:flex;
      align-items:baseline;
      justify-content:space-between;
      gap:12px;
    }

    #hud header .t{
      font-size:12px;
      letter-spacing:.14em;
      text-transform:uppercase;
      font-weight:700;
      color:rgba(255,255,255,.92);
    }
    #hud header .h{
      font-size:11px;
      color:var(--muted);
      letter-spacing:.02em;
      text-align:right;
    }

    #controls{
      padding:12px;
      display:grid;
      grid-template-columns: 1fr 1fr;
      gap:10px;
    }

    .row{ grid-column: 1 / -1; display:flex; gap:8px; flex-wrap:wrap; }
    .field{ border:1px solid rgba(255,255,255,.10); padding:10px; background: rgba(255,255,255,.02); }
    label{
      display:block;
      font-size:11px;
      color:rgba(255,255,255,.70);
      margin-bottom:6px;
      letter-spacing:.03em;
      text-transform:lowercase;
    }
    select, input[type="text"], input[type="number"]{
      width:100%;
      border:1px solid rgba(255,255,255,.14);
      background: rgba(0,0,0,.35);
      color: rgba(255,255,255,.92);
      padding:8px 10px;
      font-size:12px;
      outline:none;
    }
    input[type="range"]{ width:100%; }
    input[type="color"]{
      width:100%;
      height: 36px;
      border:1px solid rgba(255,255,255,.14);
      background: transparent;
      padding: 0;
    }
    .btn{
      appearance:none;
      border:1px solid rgba(255,255,255,.14);
      background: rgba(255,255,255,.04);
      color: rgba(255,255,255,.92);
      padding:8px 10px;
      font-size:12px;
      cursor:pointer;
      text-transform:lowercase;
    }
    .btn:hover{ border-color: rgba(255,255,255,.22); }

    #dock{
      position:fixed;
      right:12px; top:12px;
      display:flex;
      gap:8px;
      z-index:30;
    }

    /* Tiny legend */
    #legend{
      position:fixed;
      left:12px; bottom:12px;
      border:1px solid rgba(255,255,255,.12);
      background: rgba(255,255,255,.02);
      color: rgba(255,255,255,.70);
      padding:8px 10px;
      font-size:11px;
      z-index:20;
      border-radius: var(--r);
      pointer-events:none;
    }

    /* Hide HUD */
    body.hud-off #hud, body.hud-off #legend { display:none; }

    /* Mobile friendliness */
    @media (max-width: 720px){
      #controls{ grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>
  <div id="stage">
    <div id="text" contenteditable="true" spellcheck="false">
TYPE HERE
FONT TESTER
BOLD / ITALIC / OUTLINE
KETADATA
    </div>
  </div>

  <div id="dock">
    <button class="btn" id="toggleHud">hud</button>
    <button class="btn" id="reset">reset</button>
    <button class="btn" id="copyCss">copy css</button>
    <button class="btn" id="snap">screenshot</button>
  </div>

  <div id="hud">
    <header>
      <div class="t">FONT TESTER</div>
      <div class="h">h = hide hud · cmd/ctrl+i = invert bg · cmd/ctrl+s = screenshot</div>
    </header>

    <div id="controls">
      <div class="field" style="grid-column:1/-1">
        <label>font family (local + loaded)</label>
        <select id="fontSelect"></select>
      </div>

      <div class="field" style="grid-column:1/-1">
        <label>load a google font by name (no api key)</label>
        <div class="row" style="gap:8px">
          <input id="googleName" type="text" placeholder="e.g. Space Grotesk" style="flex:1; min-width: 220px;">
          <button class="btn" id="loadGoogle">load</button>
        </div>
        <div style="margin-top:6px; font-size:11px; color:rgba(255,255,255,.60); line-height:1.3">
          This injects a Google Fonts CSS2 link. Use exact family names. After loading, pick it in the dropdown.
        </div>
      </div>

      <div class="field">
        <label>size (px)</label>
        <input id="size" type="range" min="10" max="220" value="96">
      </div>

      <div class="field">
        <label>weight</label>
        <input id="weight" type="range" min="100" max="900" step="100" value="700">
      </div>

      <div class="field">
        <label>italic</label>
        <button class="btn" id="italic">toggle</button>
      </div>

      <div class="field">
        <label>letter spacing (em)</label>
        <input id="ls" type="range" min="-0.20" max="0.20" step="0.01" value="-0.02">
      </div>

      <div class="field">
        <label>line height</label>
        <input id="lh" type="range" min="0.70" max="1.60" step="0.01" value="1.00">
      </div>

      <div class="field">
        <label>fill color</label>
        <input id="fill" type="color" value="#ffffff">
      </div>

      <div class="field">
        <label>outline color</label>
        <input id="stroke" type="color" value="#000000">
      </div>

      <div class="field">
        <label>outline width (px)</label>
        <input id="strokeW" type="range" min="0" max="16" step="0.5" value="0">
      </div>

      <div class="field">
        <label>shadow blur (px)</label>
        <input id="shadow" type="range" min="0" max="80" step="1" value="0">
      </div>

      <div class="field">
        <label>shadow color</label>
        <input id="shadowColor" type="color" value="#ffffff">
      </div>

      <div class="field">
        <label>shadow x (px)</label>
        <input id="shadowX" type="range" min="-60" max="60" step="1" value="0">
      </div>

      <div class="field">
        <label>shadow y (px)</label>
        <input id="shadowY" type="range" min="-60" max="60" step="1" value="0">
      </div>

      <div class="field" style="grid-column:1/-1">
        <label>background</label>
        <div class="row">
          <button class="btn" id="bgBlack">black</button>
          <button class="btn" id="bgWhite">white</button>
          <button class="btn" id="bgInvert">invert</button>
        </div>
      </div>
    </div>
  </div>

  <div id="legend">
    Keys: <b>H</b> toggle HUD · <b>CMD/CTRL+I</b> invert bg · <b>CMD/CTRL+S</b> screenshot · <b>ESC</b> blur focus
  </div>

  <script>
    // --- Elements
    const text = document.getElementById('text');
    const fontSelect = document.getElementById('fontSelect');
    const googleName = document.getElementById('googleName');
    const loadGoogle = document.getElementById('loadGoogle');

    const size = document.getElementById('size');
    const weight = document.getElementById('weight');
    const italicBtn = document.getElementById('italic');
    const fill = document.getElementById('fill');
    const stroke = document.getElementById('stroke');
    const strokeW = document.getElementById('strokeW');
    const ls = document.getElementById('ls');
    const lh = document.getElementById('lh');

    const shadow = document.getElementById('shadow');
    const shadowColor = document.getElementById('shadowColor');
    const shadowX = document.getElementById('shadowX');
    const shadowY = document.getElementById('shadowY');

    const toggleHud = document.getElementById('toggleHud');
    const resetBtn = document.getElementById('reset');
    const copyCss = document.getElementById('copyCss');
    const snap = document.getElementById('snap');

    const bgBlack = document.getElementById('bgBlack');
    const bgWhite = document.getElementById('bgWhite');
    const bgInvert = document.getElementById('bgInvert');

    // --- Font lists (local + "weird-ish" common stacks)
    const LOCAL_FONTS = [
      { label: "Arial (system)", value: "Arial, Helvetica, sans-serif" },
      { label: "Helvetica Neue", value: "\"Helvetica Neue\", Helvetica, Arial, sans-serif" },
      { label: "System UI", value: "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif" },
      { label: "Times New Roman", value: "\"Times New Roman\", Times, serif" },
      { label: "Georgia", value: "Georgia, serif" },
      { label: "Courier New", value: "\"Courier New\", Courier, monospace" },
      { label: "Consolas", value: "Consolas, \"Courier New\", monospace" },
      { label: "Monaco", value: "Monaco, Consolas, monospace" },
      { label: "Comic Sans (illegal)", value: "\"Comic Sans MS\", \"Comic Sans\", cursive" },
      { label: "Impact", value: "Impact, Haettenschweiler, \"Arial Narrow Bold\", sans-serif" },
      { label: "Papyrus (chaos)", value: "Papyrus, fantasy" }
    ];

    // Curated Google Fonts (no API key needed; just names)
    const GOOGLE_CURATED = [
      "Space Grotesk", "IBM Plex Mono", "IBM Plex Sans", "Inter",
      "JetBrains Mono", "Roboto Mono", "DM Mono",
      "Archivo", "Archivo Black", "Bebas Neue",
      "Cinzel", "Cormorant", "Alegreya",
      "VT323", "Share Tech Mono", "Orbitron",
      "Rubik Mono One", "Black Ops One",
      "Unbounded", "Syne", "Sora",
      "Noto Sans", "Noto Serif", "Noto Sans Mono"
    ];

    function addOption(label, value){
      const o = document.createElement('option');
      o.textContent = label;
      o.value = value;
      fontSelect.appendChild(o);
    }

    function initFontSelect(){
      fontSelect.innerHTML = "";
      addOption("— LOCAL SYSTEM FONTS —", "");
      for (const f of LOCAL_FONTS) addOption(f.label, f.value);

      addOption("— GOOGLE (LOAD FIRST) —", "");
      for (const name of GOOGLE_CURATED) addOption(name + " (Google)", `"${name}", Arial, sans-serif`);
    }

    initFontSelect();

    // --- State
    const DEFAULT = {
      font: "Arial, Helvetica, sans-serif",
      size: 96,
      weight: 700,
      italic: false,
      fill: "#ffffff",
      stroke: "#000000",
      strokeW: 0,
      ls: -0.02,
      lh: 1.0,
      shadow: 0,
      shadowColor: "#ffffff",
      shadowX: 0,
      shadowY: 0,
      bg: "#000000"
    };

    let state = structuredClone(DEFAULT);

    function setRootVar(k, v){
      document.documentElement.style.setProperty(k, v);
    }

    function apply(){
      setRootVar("--font", state.font);
      setRootVar("--size", state.size + "px");
      setRootVar("--weight", String(state.weight));
      setRootVar("--fill", state.fill);
      setRootVar("--stroke", state.stroke);
      setRootVar("--strokeW", state.strokeW + "px");
      setRootVar("--ls", state.ls + "em");
      setRootVar("--lh", String(state.lh));
      setRootVar("--shadow", state.shadow + "px");
      setRootVar("--shadowColor", hexToRgba(state.shadowColor, 0.30));
      setRootVar("--shadowX", state.shadowX + "px");
      setRootVar("--shadowY", state.shadowY + "px");

      document.body.style.background = state.bg;

      if (state.italic) text.classList.add("italic");
      else text.classList.remove("italic");
    }

    function hexToRgba(hex, a){
      // expects #rrggbb
      const h = hex.replace("#","");
      const r = parseInt(h.slice(0,2),16);
      const g = parseInt(h.slice(2,4),16);
      const b = parseInt(h.slice(4,6),16);
      return `rgba(${r},${g},${b},${a})`;
    }

    // --- Controls wiring
    fontSelect.addEventListener("change", () => {
      if (!fontSelect.value) return;
      state.font = fontSelect.value;
      apply();
    });

    size.addEventListener("input", () => { state.size = Number(size.value); apply(); });
    weight.addEventListener("input", () => { state.weight = Number(weight.value); apply(); });

    italicBtn.addEventListener("click", () => { state.italic = !state.italic; apply(); });

    fill.addEventListener("input", () => { state.fill = fill.value; apply(); });
    stroke.addEventListener("input", () => { state.stroke = stroke.value; apply(); });
    strokeW.addEventListener("input", () => { state.strokeW = Number(strokeW.value); apply(); });

    ls.addEventListener("input", () => { state.ls = Number(ls.value); apply(); });
    lh.addEventListener("input", () => { state.lh = Number(lh.value); apply(); });

    shadow.addEventListener("input", () => { state.shadow = Number(shadow.value); apply(); });
    shadowColor.addEventListener("input", () => { state.shadowColor = shadowColor.value; apply(); });
    shadowX.addEventListener("input", () => { state.shadowX = Number(shadowX.value); apply(); });
    shadowY.addEventListener("input", () => { state.shadowY = Number(shadowY.value); apply(); });

    bgBlack.addEventListener("click", () => { state.bg = "#000000"; apply(); });
    bgWhite.addEventListener("click", () => { state.bg = "#ffffff"; apply(); });
    bgInvert.addEventListener("click", () => invertBg());

    function invertBg(){
      state.bg = (state.bg.toLowerCase() === "#000000") ? "#ffffff" : "#000000";
      // If bg turns white and fill is white, swap fill to black (avoid invisible text)
      if (state.bg === "#ffffff" && state.fill.toLowerCase() === "#ffffff") {
        state.fill = "#000000";
        fill.value = "#000000";
      }
      if (state.bg === "#000000" && state.fill.toLowerCase() === "#000000") {
        state.fill = "#ffffff";
        fill.value = "#ffffff";
      }
      apply();
    }

    // Load Google Font by name (CSS2 endpoint)
    function loadGoogleFont(name){
      const family = name.trim();
      if (!family) return;

      const id = "gf_" + family.toLowerCase().replace(/[^a-z0-9]+/g,"_");
      if (document.getElementById(id)) return; // already loaded

      const link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";

      // Load a broad range of weights + italics (Google Fonts supports this for many families)
      // If a specific family doesn't support italics, it will just ignore.
      const q = encodeURIComponent(family).replace(/%20/g, "+");
      link.href = `https://fonts.googleapis.com/css2?family=${q}:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap`;
      document.head.appendChild(link);

      // Add to dropdown as a loaded font option (top of google section)
      const opt = document.createElement("option");
      opt.textContent = family + " (Google/loaded)";
      opt.value = `"${family}", Arial, sans-serif`;
      fontSelect.appendChild(opt);

      // Select it
      fontSelect.value = opt.value;
      state.font = opt.value;
      apply();
    }

    loadGoogle.addEventListener("click", () => loadGoogleFont(googleName.value));
    googleName.addEventListener("keydown", (e) => {
      if (e.key === "Enter") loadGoogleFont(googleName.value);
    });

    // HUD toggle
    toggleHud.addEventListener("click", () => document.body.classList.toggle("hud-off"));

    // Reset
    resetBtn.addEventListener("click", () => {
      state = structuredClone(DEFAULT);
      size.value = String(DEFAULT.size);
      weight.value = String(DEFAULT.weight);
      fill.value = DEFAULT.fill;
      stroke.value = DEFAULT.stroke;
      strokeW.value = String(DEFAULT.strokeW);
      ls.value = String(DEFAULT.ls);
      lh.value = String(DEFAULT.lh);
      shadow.value = String(DEFAULT.shadow);
      shadowColor.value = "#ffffff";
      shadowX.value = String(DEFAULT.shadowX);
      shadowY.value = String(DEFAULT.shadowY);
      fontSelect.value = "";
      apply();
    });

    // Copy CSS snippet
    copyCss.addEventListener("click", async () => {
      const css = [
        `font-family: ${state.font};`,
        `font-size: ${state.size}px;`,
        `font-weight: ${state.weight};`,
        `font-style: ${state.italic ? "italic" : "normal"};`,
        `color: ${state.fill};`,
        `-webkit-text-stroke: ${state.strokeW}px ${state.stroke};`,
        `letter-spacing: ${state.ls}em;`,
        `line-height: ${state.lh};`,
        `text-shadow: ${state.shadowX}px ${state.shadowY}px ${state.shadow}px ${hexToRgba(state.shadowColor, 0.30)};`
      ].join("\n");

      try{
        await navigator.clipboard.writeText(css);
        flash("copied css");
      }catch(_){
        flash("clipboard blocked");
      }
    });

    // Screenshot (simple)
    snap.addEventListener("click", () => screenshot());
    function screenshot(){
      // html screenshot without canvas libs is limited; we do a “print to pdf / screenshot in browser”
      // But we still provide a fast path: open print dialog (user can save)
      window.print();
      flash("print dialog opened");
    }

    // Minimal flash indicator
    let flashTimer = null;
    function flash(msg){
      const el = document.createElement("div");
      el.style.position = "fixed";
      el.style.left = "12px";
      el.style.top = "12px";
      el.style.zIndex = "999";
      el.style.border = "1px solid rgba(255,255,255,.18)";
      el.style.background = "rgba(0,0,0,.65)";
      el.style.color = "rgba(255,255,255,.92)";
      el.style.padding = "8px 10px";
      el.style.fontSize = "11px";
      el.style.letterSpacing = ".10em";
      el.style.textTransform = "uppercase";
      el.style.pointerEvents = "none";
      el.textContent = msg;
      document.body.appendChild(el);
      clearTimeout(flashTimer);
      flashTimer = setTimeout(() => el.remove(), 650);
    }

    // Key commands
    window.addEventListener("keydown", (e) => {
      const k = e.key.toLowerCase();

      if (k === "h") document.body.classList.toggle("hud-off");
      if (k === "escape") text.blur();

      // Cmd/Ctrl + I invert background
      if ((e.metaKey || e.ctrlKey) && k === "i"){
        e.preventDefault();
        invertBg();
      }

      // Cmd/Ctrl + S screenshot
      if ((e.metaKey || e.ctrlKey) && k === "s"){
        e.preventDefault();
        screenshot();
      }
    });

    // Apply defaults
    apply();

    // Autofocus text area
    setTimeout(() => text.focus(), 50);
  </script>
</body>
</html>
