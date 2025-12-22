/* KETADATA // FORGE v3
   CSP-safe: external JS file
*/
(() => {
  const STORAGE_KEY = "KETADATA_FORGE_V3_STATE";
  const NOTE_KEY = "KETADATA_SYSTEM_NOTE";

  const CORE = {
    cssPath: "/core/ketadata-core.css",
    jsPath: "/core/ketadata-core.js",
    version: "v1"
  };

  const DEFAULT_MODULES = [
    { key: "REGISTRY", label: "REGISTRY" },
    { key: "DIRECTORY", label: "DIRECTORY" },
    { key: "LEDGER", label: "LEDGER" },
    { key: "GALLERY", label: "GALLERY" },
    { key: "CAPTURE", label: "CAPTURE" },
    { key: "PROMPT_EXPORT", label: "PROMPT_EXPORT" },
    { key: "AUDIT", label: "AUDIT" },
    { key: "VI_DI_SURFACE", label: "VI_DI_SURFACE" }
  ];

  // Seed rooms on first open (you asked for default, not empty)
  const SEED_ROOMS = [
    { id:"lobby", title:"LOBBY", access:"public", url:"/lobby.html", tags:["entry","directory"] },
    { id:"lab", title:"LAB", access:"public", url:"/lab.html", tags:["tools","research"] },
    { id:"studio", title:"STUDIO", access:"public", url:"/studio.html", tags:["production","media"] },
    { id:"observatory", title:"OBSERVATORY", access:"public", url:"/observatory.html", tags:["overview","map"] },
    { id:"vault", title:"VAULT", access:"internal", url:"/vault.html", tags:["archive","storage"] },
    { id:"temple", title:"TEMPLE", access:"public", url:"/temple.html", tags:["ritual","system"] },
    { id:"store", title:"STORE", access:"public", url:"/store.html", tags:["shop","transactions"] }
  ];

  const $ = (id) => document.getElementById(id);

  const roomsCount = $("roomsCount");
  const selectedLabel = $("selectedLabel");
  const stateLabel = $("stateLabel");

  const inId = $("inId");
  const inAccess = $("inAccess");
  const inTitle = $("inTitle");
  const inUrl = $("inUrl");
  const inTags = $("inTags");
  const inNotes = $("inNotes");

  const cards = $("cards");
  const regList = $("regList");
  const out = $("out");
  const outInfo = $("outInfo");
  const roomJson = $("roomJson");
  const search = $("search");

  const btnNew = $("btnNew");
  const btnSave = $("btnSave");
  const btnGenerate = $("btnGenerate");
  const btnCopy = $("btnCopy");
  const btnExportRoom = $("btnExportRoom");
  const btnExportJSON = $("btnExportJSON");
  const importFile = $("importFile");
  const btnReset = $("btnReset");

  const btnAddRoom = $("btnAddRoom");
  const btnApply = $("btnApply");
  const btnSelectPrev = $("btnSelectPrev");
  const btnSelectNext = $("btnSelectNext");
  const btnDelete = $("btnDelete");
  const btnDuplicate = $("btnDuplicate");
  const btnCollapseAll = $("btnCollapseAll");
  const btnExpandAll = $("btnExpandAll");

  const noteIcon = $("noteIcon");
  const sysNote = $("sysNote");
  const sysNoteText = $("sysNoteText");
  const sysNoteClose = $("sysNoteClose");
  const sysNoteHead = $("sysNoteHead");

  function uid(){
    return Math.random().toString(36).slice(2,7) + "-" + Date.now().toString(36);
  }
  function safeId(s){ return (s||"").trim().toLowerCase(); }
  function validId(s){ return /^[a-z0-9_-]+$/.test(s); }
  function parseTags(s){
    return (s||"").split(",").map(x=>x.trim()).filter(Boolean);
  }
  function nowISO(){ return new Date().toISOString(); }

  function downloadText(filename, text){
    const blob = new Blob([text], {type:"text/plain;charset=utf-8"});
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(()=>{ URL.revokeObjectURL(a.href); a.remove(); }, 50);
  }
  function downloadJSON(filename, obj){
    downloadText(filename, JSON.stringify(obj, null, 2));
  }
  async function copyToClipboard(text){
    try{ await navigator.clipboard.writeText(text); }
    catch{
      const ta = document.createElement("textarea");
      ta.value = text; document.body.appendChild(ta);
      ta.select(); try{ document.execCommand("copy"); }catch{}
      ta.remove();
    }
  }

  function escapeHtml(str){
    return String(str||"")
      .replaceAll("&","&amp;")
      .replaceAll("<","&lt;")
      .replaceAll(">","&gt;")
      .replaceAll('"',"&quot;")
      .replaceAll("'","&#039;");
  }

  function defaultRoom(seedId=""){
    const id = seedId && validId(seedId) ? seedId : ("room-" + uid().slice(0,6));
    const title = seedId ? seedId.toUpperCase() : "ROOM";
    return {
      id,
      access: "public",
      title,
      url: "/" + id + ".html",
      tags: [],
      notes: "",
      screenshotDataUrl: "",
      modules: DEFAULT_MODULES.map(m=>({ key:m.key, enabled:false, note:"" })),
      createdAt: nowISO(),
      updatedAt: nowISO()
    };
  }

  function loadState(){
    const raw = localStorage.getItem(STORAGE_KEY);
    if(!raw){
      const seeded = {
        version:"v3",
        core: CORE,
        rooms: SEED_ROOMS.map(r=>{
          const rr = defaultRoom(r.id);
          rr.id = r.id;
          rr.title = r.title;
          rr.access = r.access;
          rr.url = r.url;
          rr.tags = r.tags || [];
          rr.notes = "";
          rr.updatedAt = nowISO();
          rr.createdAt = nowISO();
          return rr;
        }),
        selectedRoomId: "lobby"
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(seeded));
      return seeded;
    }
    try{
      const st = JSON.parse(raw);
      if(!st.core) st.core = CORE;
      if(!Array.isArray(st.rooms)) st.rooms = [];
      if(!("selectedRoomId" in st)) st.selectedRoomId = st.rooms[0]?.id || null;

      // normalize modules
      st.rooms = st.rooms.map(r=>{
        const rr = {...r};
        const map = new Map((rr.modules||[]).map(m=>[m.key,m]));
        rr.modules = DEFAULT_MODULES.map(m=>{
          const ex = map.get(m.key) || {key:m.key, enabled:false, note:""};
          return { key:m.key, enabled:!!ex.enabled, note: ex.note || "" };
        });
        rr.tags = rr.tags || [];
        rr.notes = rr.notes || "";
        rr.url = rr.url || ("/" + rr.id + ".html");
        rr.title = rr.title || (rr.id||"ROOM").toUpperCase();
        rr.access = rr.access || "public";
        rr.screenshotDataUrl = rr.screenshotDataUrl || "";
        rr.updatedAt = rr.updatedAt || nowISO();
        rr.createdAt = rr.createdAt || nowISO();
        return rr;
      });

      return st;
    }catch{
      localStorage.removeItem(STORAGE_KEY);
      return loadState();
    }
  }

  let state = loadState();

  function saveState(){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    refreshStatus();
    stateLabel.textContent = "READY";
  }

  function getSelectedRoom(){
    if(!state.selectedRoomId) return null;
    return state.rooms.find(r=>r.id===state.selectedRoomId) || null;
  }

  function setSelectedRoom(id){
    state.selectedRoomId = id;
    saveState();
    renderAll();
    loadSelectedIntoLeftRail();
    updateRoomJsonPanel();
  }

  function upsertRoom(room){
    const idx = state.rooms.findIndex(r=>r.id===room.id);
    room.updatedAt = nowISO();
    if(idx === -1) state.rooms.push(room);
    else state.rooms[idx] = room;
    saveState();
  }

  function deleteRoom(id){
    const idx = state.rooms.findIndex(r=>r.id===id);
    if(idx === -1) return;
    state.rooms.splice(idx,1);
    if(state.selectedRoomId === id){
      state.selectedRoomId = state.rooms[0]?.id || null;
    }
    saveState();
  }

  function duplicateRoom(id){
    const src = state.rooms.find(r=>r.id===id);
    if(!src) return null;
    const copy = structuredClone(src);
    copy.id = (src.id + "-copy").slice(0, 32);
    if(state.rooms.some(r=>r.id===copy.id)) copy.id = "copy-" + uid().slice(0,8);
    copy.title = src.title + " COPY";
    copy.url = "/" + copy.id + ".html";
    copy.createdAt = nowISO();
    copy.updatedAt = nowISO();
    state.rooms.push(copy);
    state.selectedRoomId = copy.id;
    saveState();
    return copy;
  }

  function moveSelection(delta){
    if(state.rooms.length === 0) return;
    const i = state.rooms.findIndex(r=>r.id===state.selectedRoomId);
    const next = Math.max(0, Math.min(state.rooms.length-1, (i===-1?0:i+delta)));
    setSelectedRoom(state.rooms[next].id);
  }

  function refreshStatus(){
    roomsCount.textContent = String(state.rooms.length);
    selectedLabel.textContent = state.selectedRoomId || "—";
  }

  function loadSelectedIntoLeftRail(){
    const r = getSelectedRoom();
    if(!r){
      inId.value=""; inTitle.value=""; inAccess.value="public";
      inUrl.value=""; inTags.value=""; inNotes.value="";
      return;
    }
    inId.value = r.id;
    inTitle.value = r.title;
    inAccess.value = r.access;
    inUrl.value = r.url || "";
    inTags.value = (r.tags||[]).join(", ");
    inNotes.value = r.notes || "";
  }

  function applyLeftRailToSelected(){
    const r = getSelectedRoom();
    if(!r) return null;

    const nextId = safeId(inId.value);
    if(!nextId || !validId(nextId)){
      alert("Invalid ID. Use only a-z 0-9 _ -");
      return null;
    }
    if(nextId !== r.id && state.rooms.some(x=>x.id===nextId)){
      alert("ID already exists.");
      return null;
    }

    const oldId = r.id;
    r.id = nextId;
    r.access = inAccess.value;
    r.title = (inTitle.value||"").trim() || nextId.toUpperCase();
    r.url = (inUrl.value||"").trim() || ("/" + nextId + ".html");
    r.tags = parseTags(inTags.value);
    r.notes = inNotes.value || "";

    // update selection + any url default
    if(state.selectedRoomId === oldId) state.selectedRoomId = nextId;

    upsertRoom(r);
    return r;
  }

  function validateRoom(r){
    if(!r) return {ok:false,msg:"No selected room."};
    if(!r.id || !validId(r.id)) return {ok:false,msg:"Invalid room ID."};
    if(!r.title || !r.title.trim()) return {ok:false,msg:"Missing title."};
    return {ok:true,msg:"OK"};
  }

  function generateHTML(room){
    const tags = (room.tags||[]).join(",");
    const enabledMods = (room.modules||[]).filter(m=>m.enabled).map(m=>m.key);

    const boot = {
      roomId: room.id,
      title: room.title,
      access: room.access,
      tags: room.tags || [],
      url: room.url || ("/" + room.id + ".html"),
      modules: enabledMods,
      core: state.core || CORE
    };

    const moduleSections = enabledMods.length
      ? enabledMods.map(k=>`<section class="kd-module" data-module="${k}">
  <div class="kd-module__head">${k}</div>
  <div class="kd-module__body">placeholder</div>
</section>`).join("\n\n")
      : `<section class="kd-module" data-module="EMPTY">
  <div class="kd-module__head">NO MODULES SELECTED</div>
  <div class="kd-module__body">Enable modules in the Forge.</div>
</section>`;

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>${escapeHtml(room.title)} // KETADATA</title>

  <!-- CORE IMPORTS -->
  <link rel="stylesheet" href="${escapeHtml((state.core||CORE).cssPath)}">
  <script src="${escapeHtml((state.core||CORE).jsPath)}" defer></script>

  <style>
    body{ margin:0; background:#060606; color:#fff; font-family:Arial, Helvetica, sans-serif; }
    .kd-frame{ min-height:100vh; padding:18px; }
    .kd-meta{ font-family:${JSON.stringify("ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\",\"Courier New\", monospace")}; font-size:12px; opacity:.78; letter-spacing:.08em; }
    .kd-title{ font-family:${JSON.stringify("ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\",\"Courier New\", monospace")}; font-size:22px; letter-spacing:.12em; text-transform:uppercase; margin:10px 0 14px; }
    .kd-module{ border:1px solid rgba(255,255,255,.12); margin:10px 0; }
    .kd-module__head{ padding:10px; border-bottom:1px solid rgba(255,255,255,.12); font-family:${JSON.stringify("ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\",\"Courier New\", monospace")}; letter-spacing:.08em; }
    .kd-module__body{ padding:10px; opacity:.9; }
  </style>
</head>
<body>
  <div class="kd-frame">
    <div class="kd-meta">id:${escapeHtml(room.id)}  // access:${escapeHtml(room.access)}  // tags:${escapeHtml(tags || "—")}</div>
    <div class="kd-title">${escapeHtml(room.title)}</div>

    ${moduleSections}
  </div>

  <script>
    window.KETADATA_BOOT = ${JSON.stringify(boot, null, 2)};
  </script>
</body>
</html>`;
  }

  function setOutput(text){
    out.value = text;
    outInfo.textContent = `generated: ${new Date().toLocaleString()} • ${(text||"").length.toLocaleString()} chars`;
  }

  function updateRoomJsonPanel(){
    const r = getSelectedRoom();
    roomJson.value = r ? JSON.stringify(r, null, 2) : "";
  }

  function renderRegistryList(){
    if(state.rooms.length === 0){
      regList.innerHTML = `<div class="mini">No rooms. Add one.</div>`;
      return;
    }
    const q = (search.value||"").trim().toLowerCase();
    const filtered = state.rooms.filter(r=>{
      if(!q) return true;
      const hay = [r.id,r.title,(r.tags||[]).join(" "),r.access].join(" ").toLowerCase();
      return hay.includes(q);
    });

    regList.innerHTML = filtered.map(r=>{
      const sel = r.id===state.selectedRoomId;
      return `<div style="display:flex;justify-content:space-between;gap:10px;padding:6px;border:1px solid rgba(255,255,255,.08);margin-bottom:6px;background:${sel?'rgba(255,255,255,.05)':'rgba(0,0,0,.18)'};cursor:pointer" data-sel="${r.id}">
        <div style="min-width:0">
          <div style="font-family:${JSON.stringify("ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\",\"Courier New\", monospace")};font-size:11px;letter-spacing:.08em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
            ${sel?"• ":""}${escapeHtml(r.id)} // ${escapeHtml(r.title)}
          </div>
          <div style="font-family:${JSON.stringify("ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\",\"Courier New\", monospace")};font-size:10px;opacity:.55;margin-top:3px;">
            ${escapeHtml(r.access)} • ${(r.tags||[]).slice(0,4).join(", ")}
          </div>
        </div>
      </div>`;
    }).join("");

    regList.querySelectorAll("[data-sel]").forEach(el=>{
      el.addEventListener("click", ()=> setSelectedRoom(el.getAttribute("data-sel")));
    });
  }

  async function fileToDataURL(file){
    return new Promise((res, rej)=>{
      const reader = new FileReader();
      reader.onload = ()=>res(String(reader.result));
      reader.onerror = rej;
      reader.readAsDataURL(file);
    });
  }

  function renderCards(){
    const q = (search.value||"").trim().toLowerCase();
    const list = state.rooms.filter(r=>{
      if(!q) return true;
      const hay = [r.id,r.title,r.access,(r.tags||[]).join(" ")].join(" ").toLowerCase();
      return hay.includes(q);
    });

    if(list.length === 0){
      cards.innerHTML = `<div class="hint">No matching rooms.</div>`;
      return;
    }

    cards.innerHTML = list.map((r, idx)=>{
      const sel = r.id===state.selectedRoomId;
      const tagStr = (r.tags||[]).join(", ") || "—";
      const shot = r.screenshotDataUrl ? `<img alt="screenshot" src="${r.screenshotDataUrl}">` : ``;

      const mods = DEFAULT_MODULES.map(m=>{
        const entry = (r.modules||[]).find(x=>x.key===m.key) || {key:m.key,enabled:false,note:""};
        return `<div class="mod" data-room="${r.id}">
          <div class="modTop">
            <div class="modName">${m.label}</div>
            <label style="margin:0;display:flex;align-items:center;gap:8px;">
              <span class="mini" style="margin:0;">enabled</span>
              <input type="checkbox" ${entry.enabled?"checked":""} data-mod-toggle="${m.key}" style="width:16px;height:16px;">
            </label>
          </div>
          <textarea class="modNote" spellcheck="false" placeholder="notes for ${m.label}…" data-mod-note="${m.key}">${escapeHtml(entry.note||"")}</textarea>
        </div>`;
      }).join("");

      return `<div class="card ${sel?"selected":""}" data-card="${r.id}">
        <div class="cardHead">
          <div class="left">
            <div class="badge">#${idx+1}</div>
            <div class="cardTitle">${escapeHtml(r.title)} <span style="opacity:.45;">// ${escapeHtml(r.id)}</span></div>
          </div>
          <div class="right">
            <div class="iconBtn" data-act="select" title="Select">◎</div>
            <div class="iconBtn" data-act="dup" title="Duplicate">⎘</div>
            <div class="iconBtn danger" data-act="del" title="Delete">×</div>
          </div>
        </div>

        <details open>
          <summary>meta / identification <span class="mini">access:${escapeHtml(r.access)} • tags:${escapeHtml(tagStr)}</span></summary>
          <div class="sectBody">
            <div class="two">
              <div>
                <label style="margin-top:0">ID</label>
                <input data-field="id" value="${escapeHtml(r.id)}" spellcheck="false">
              </div>
              <div>
                <label style="margin-top:0">ACCESS</label>
                <select data-field="access">
                  <option value="public" ${r.access==="public"?"selected":""}>public</option>
                  <option value="internal" ${r.access==="internal"?"selected":""}>internal</option>
                  <option value="private" ${r.access==="private"?"selected":""}>private</option>
                </select>
              </div>
            </div>

            <div class="two" style="margin-top:10px;">
              <div>
                <label style="margin-top:0">TITLE</label>
                <input data-field="title" value="${escapeHtml(r.title)}" spellcheck="false">
              </div>
              <div>
                <label style="margin-top:0">URL</label>
                <input data-field="url" value="${escapeHtml(r.url||"")}" spellcheck="false">
              </div>
            </div>

            <label>TAGS (comma)</label>
            <input data-field="tags" value="${escapeHtml((r.tags||[]).join(", "))}" spellcheck="false">

            <label>NOTES</label>
            <textarea data-field="notes" spellcheck="false">${escapeHtml(r.notes||"")}</textarea>
          </div>
        </details>

        <details open>
          <summary>screenshot <span class="mini">contain (never crop)</span></summary>
          <div class="sectBody">
            <div class="shotBox">
              ${shot}
              <div class="shotOverlay" ${r.screenshotDataUrl ? 'style="display:none;"':''}>UPLOAD SCREENSHOT (stored as data URL)</div>
            </div>
            <div class="shotActions">
              <label class="btn" style="display:inline-flex;align-items:center;gap:8px;">
                UPLOAD
                <input type="file" accept="image/*" data-shot="${r.id}" style="display:none;">
              </label>
              <button class="btn" data-clear-shot="${r.id}">CLEAR</button>
            </div>
          </div>
        </details>

        <details>
          <summary>modules + notes</summary>
          <div class="sectBody">
            <div class="mods">${mods}</div>
          </div>
        </details>
      </div>`;
    }).join("");

    // Bind actions
    cards.querySelectorAll("[data-card]").forEach(cardEl=>{
      const roomId = cardEl.getAttribute("data-card");

      cardEl.querySelectorAll("[data-act]").forEach(btn=>{
        btn.addEventListener("click", (e)=>{
          e.stopPropagation();
          const act = btn.getAttribute("data-act");
          if(act==="select") setSelectedRoom(roomId);
          if(act==="dup"){ duplicateRoom(roomId); renderAll(); loadSelectedIntoLeftRail(); updateRoomJsonPanel(); }
          if(act==="del"){
            if(confirm("Delete room '" + roomId + "' ?")){
              deleteRoom(roomId);
              renderAll(); loadSelectedIntoLeftRail(); updateRoomJsonPanel();
            }
          }
        });
      });

      cardEl.addEventListener("click", ()=>{ if(state.selectedRoomId!==roomId) setSelectedRoom(roomId); });

      // Inline edits (auto-save)
      cardEl.querySelectorAll("[data-field]").forEach(inp=>{
        inp.addEventListener("change", ()=>{
          const r = state.rooms.find(x=>x.id===roomId);
          if(!r) return;
          const field = inp.getAttribute("data-field");
          const val = inp.value;

          if(field==="id"){
            const nextId = safeId(val);
            if(!nextId || !validId(nextId)){ alert("Invalid ID."); inp.value = r.id; return; }
            if(nextId !== r.id && state.rooms.some(x=>x.id===nextId)){ alert("ID exists."); inp.value = r.id; return; }
            const oldId = r.id;
            r.id = nextId;
            if(r.url === "/" + oldId + ".html") r.url = "/" + nextId + ".html";
            if(state.selectedRoomId===oldId) state.selectedRoomId = nextId;
            saveState(); renderAll(); loadSelectedIntoLeftRail(); updateRoomJsonPanel();
            return;
          }

          if(field==="access") r.access = val;
          if(field==="title") r.title = val.trim() || r.id.toUpperCase();
          if(field==="url") r.url = val.trim() || ("/" + r.id + ".html");
          if(field==="tags") r.tags = parseTags(val);
          if(field==="notes") r.notes = val || "";

          upsertRoom(r);
          updateRoomJsonPanel();
        });
      });

      // Screenshot upload
      const fileInput = cardEl.querySelector(`input[type="file"][data-shot="${CSS.escape(roomId)}"]`);
      fileInput?.addEventListener("change", async ()=>{
        const f = fileInput.files?.[0];
        if(!f) return;
        const r = state.rooms.find(x=>x.id===roomId);
        if(!r) return;
        r.screenshotDataUrl = await fileToDataURL(f);
        upsertRoom(r);
        renderAll();
      });

      cardEl.querySelector(`[data-clear-shot="${CSS.escape(roomId)}"]`)?.addEventListener("click", (e)=>{
        e.stopPropagation();
        const r = state.rooms.find(x=>x.id===roomId);
        if(!r) return;
        r.screenshotDataUrl = "";
        upsertRoom(r);
        renderAll();
      });

      // Module toggles + notes
      cardEl.querySelectorAll("[data-mod-toggle]").forEach(chk=>{
        chk.addEventListener("change", ()=>{
          const r = state.rooms.find(x=>x.id===roomId);
          if(!r) return;
          const key = chk.getAttribute("data-mod-toggle");
          const entry = r.modules.find(m=>m.key===key);
          if(entry) entry.enabled = chk.checked;
          upsertRoom(r);
          updateRoomJsonPanel();
        });
      });

      cardEl.querySelectorAll("[data-mod-note]").forEach(ta=>{
        ta.addEventListener("change", ()=>{
          const r = state.rooms.find(x=>x.id===roomId);
          if(!r) return;
          const key = ta.getAttribute("data-mod-note");
          const entry = r.modules.find(m=>m.key===key);
          if(entry) entry.note = ta.value || "";
          upsertRoom(r);
          updateRoomJsonPanel();
        });
      });
    });
  }

  function renderAll(){
    refreshStatus();
    renderRegistryList();
    renderCards();
    updateRoomJsonPanel();
  }

  // System note
  function toggleSystemNote(){
    const open = sysNote.classList.toggle("open");
    noteIcon.classList.toggle("open", open);
    if(open) sysNoteText.focus();
    localStorage.setItem(NOTE_KEY, sysNoteText.value || "");
  }
  noteIcon.addEventListener("click", toggleSystemNote);
  sysNoteClose.addEventListener("click", toggleSystemNote);
  sysNoteText.value = localStorage.getItem(NOTE_KEY) || "";
  sysNoteText.addEventListener("input", ()=> localStorage.setItem(NOTE_KEY, sysNoteText.value || ""));

  // draggable system note
  (() => {
    let dragging=false, sx=0, sy=0, ox=0, oy=0;
    sysNoteHead.addEventListener("mousedown", (e)=>{
      dragging=true;
      sx=e.clientX; sy=e.clientY;
      const rect=sysNote.getBoundingClientRect();
      ox=rect.left; oy=rect.top;
      e.preventDefault();
    });
    window.addEventListener("mousemove", (e)=>{
      if(!dragging) return;
      const dx=e.clientX-sx, dy=e.clientY-sy;
      sysNote.style.left = (ox+dx) + "px";
      sysNote.style.top = (oy+dy) + "px";
      sysNote.style.right = "auto";
    });
    window.addEventListener("mouseup", ()=> dragging=false);
  })();

  // Buttons
  btnNew.addEventListener("click", ()=>{
    const r = defaultRoom();
    state.rooms.push(r);
    state.selectedRoomId = r.id;
    saveState();
    renderAll();
    loadSelectedIntoLeftRail();
    setOutput("No output yet.\n(select a room → Generate)");
  });

  btnAddRoom.addEventListener("click", ()=>{
    stateLabel.textContent = "ADDING…";
    const id = safeId(inId.value);
    if(!id || !validId(id)){ alert("Invalid ID."); stateLabel.textContent="READY"; return; }
    if(state.rooms.some(x=>x.id===id)){ alert("ID already exists."); stateLabel.textContent="READY"; return; }

    const r = defaultRoom(id);
    r.title = (inTitle.value||"").trim() || id.toUpperCase();
    r.access = inAccess.value;
    r.url = (inUrl.value||"").trim() || ("/" + id + ".html");
    r.tags = parseTags(inTags.value);
    r.notes = inNotes.value || "";

    state.rooms.push(r);
    state.selectedRoomId = r.id;
    saveState();
    renderAll();
    loadSelectedIntoLeftRail();
    stateLabel.textContent="READY";
  });

  btnApply.addEventListener("click", ()=>{
    if(!getSelectedRoom()){ alert("No selected room."); return; }
    applyLeftRailToSelected();
    renderAll();
  });

  btnSave.addEventListener("click", ()=>{
    stateLabel.textContent = "SAVING…";
    const r = getSelectedRoom();
    if(!r){
      alert("No selected room. Use ADD ROOM.");
      stateLabel.textContent="READY";
      return;
    }
    applyLeftRailToSelected();
    stateLabel.textContent="READY";
  });

  btnGenerate.addEventListener("click", ()=>{
    stateLabel.textContent = "GENERATING…";
    const r = getSelectedRoom();
    if(!r){ alert("Select a room."); stateLabel.textContent="READY"; return; }
    applyLeftRailToSelected();
    const check = validateRoom(getSelectedRoom());
    if(!check.ok){ alert(check.msg); stateLabel.textContent="READY"; return; }
    setOutput(generateHTML(getSelectedRoom()));
    stateLabel.textContent="READY";
  });

  btnCopy.addEventListener("click", async ()=>{
    const txt = out.value || "";
    if(!txt || txt.startsWith("No output yet")){ alert("Generate output first."); return; }
    await copyToClipboard(txt);
  });

  btnExportRoom.addEventListener("click", ()=>{
    const r = getSelectedRoom();
    if(!r){ alert("Select a room."); return; }
    const txt = out.value || "";
    if(!txt || txt.startsWith("No output yet")){ alert("Generate output first."); return; }
    downloadText(`${r.id}.html`, txt);
    downloadJSON(`${r.id}.room.json`, r);
  });

  btnExportJSON.addEventListener("click", ()=> downloadJSON("ketadata.forge.state.json", state));

  importFile.addEventListener("change", async ()=>{
    const f = importFile.files?.[0];
    if(!f) return;
    const text = await f.text();
    try{
      const obj = JSON.parse(text);
      if(!obj.core) obj.core = CORE;
      if(!Array.isArray(obj.rooms)) obj.rooms = [];
      if(!("selectedRoomId" in obj)) obj.selectedRoomId = obj.rooms[0]?.id || null;
      state = obj;
      saveState();
      renderAll();
      loadSelectedIntoLeftRail();
      setOutput("Imported state.\nSelect a room → Generate.");
    }catch{
      alert("IMPORT FAILED: invalid JSON.");
    }finally{
      importFile.value = "";
    }
  });

  btnReset.addEventListener("click", ()=>{
    if(!confirm("RESET FORGE STATE? Clears local storage.")) return;
    localStorage.removeItem(STORAGE_KEY);
    state = loadState();
    saveState();
    renderAll();
    loadSelectedIntoLeftRail();
    setOutput("Reset complete.");
  });

  btnSelectPrev.addEventListener("click", ()=> moveSelection(-1));
  btnSelectNext.addEventListener("click", ()=> moveSelection(1));

  btnDelete.addEventListener("click", ()=>{
    const r = getSelectedRoom();
    if(!r){ alert("No selected room."); return; }
    if(!confirm("Delete '" + r.id + "' ?")) return;
    deleteRoom(r.id);
    saveState();
    renderAll();
    loadSelectedIntoLeftRail();
  });

  btnDuplicate.addEventListener("click", ()=>{
    const r = getSelectedRoom();
    if(!r){ alert("No selected room."); return; }
    duplicateRoom(r.id);
    saveState();
    renderAll();
    loadSelectedIntoLeftRail();
  });

  btnCollapseAll.addEventListener("click", ()=> document.querySelectorAll(".card details").forEach(d=>d.open=false));
  btnExpandAll.addEventListener("click", ()=> document.querySelectorAll(".card details").forEach(d=>d.open=true));

  search.addEventListener("input", ()=> renderAll());

  // Hotkeys
  document.addEventListener("keydown", (e)=>{
    const tag = (e.target && e.target.tagName) ? e.target.tagName.toLowerCase() : "";
    const typing = (tag==="input" || tag==="textarea" || tag==="select");

    if((e.metaKey || e.ctrlKey) && e.key === ";"){ e.preventDefault(); toggleSystemNote(); return; }
    if((e.metaKey || e.ctrlKey) && (e.key==="s" || e.key==="S")){ e.preventDefault(); btnSave.click(); return; }
    if(typing) return;

    if(e.key==="g" || e.key==="G") btnGenerate.click();
    if(e.key==="c" || e.key==="C") btnCopy.click();
  });

  // Init
  if(state.rooms.length && !state.selectedRoomId) state.selectedRoomId = state.rooms[0].id;
  saveState();
  renderAll();
  loadSelectedIntoLeftRail();
  setOutput("No output yet.\n(select a room → Generate)");

})();

