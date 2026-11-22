const exercises = [
  {
    id: "chest-press",
    img: "img/chest-press.png",
    name: "Sediaci tlak na hrudník (páka)",
    group: "Hrudník",
    setup: "Páková stroj na hrudník",
    how: [
      "Nastavte sedadlo tak, aby držadlá boli v úrovni stredu hrudníka.",
      "Lopatky dozadu a dole, chodidlá na zemi.",
      "Tlačte dopredu bez zamknutia lakťov.",
      "Spúšťajte 2 až 3 sekundy, pri tlaku vydychujte."
    ],
    dont: [
      "Zdvíhanie ramien k ušiam.",
      "Odlepovanie chrbta od opierky.",
      "Odskakovanie na spodku pohybu.",
      "Úplné zamknutie lakťov."
    ],
    care: ["Ramená a lakte.", "Zastavte 1 až 2 opakovania pred zlyhaním."]
  },
  {
    id: "seated-fly",
    img: "img/chest-fly.png",
    name: "Sediaci rozťahovanie hrudníka (pec deck)",
    group: "Hrudník",
    setup: "Pec deck",
    how: [
      "Ramená vo výške hrudníka, lakte mierne pokrčené.",
      "Privádzajte ramená k sebe v oblúku a 1 sekundu stisnite.",
      "Pomaly rozťahujte, kým necítite ťah v hrudníku."
    ],
    dont: [
      "Tlačenie ako pri tlaku na hrudník.",
      "Rozťahovanie príliš ďaleko za telo.",
      "Kývanie váhou."
    ],
    care: ["Predné rameno. Ak štípe, skráťte rozsah."]
  },
  {
    id: "incline-chest",
    img: "img/incline-chest-press.png",
    name: "Sediaci tlak na šikmú lavičku (stroj)",
    group: "Hrudník",
    setup: "Stroj na šikmý tlak",
    how: [
      "Chrbát opretý, lopatky stiahnuté dozadu.",
      "Tlačte hore a mierne dopredu, zamerajte sa na horný hrudník.",
      "Spúšťajte pod kontrolou."
    ],
    dont: [
      "Prehýbanie spodnej časti chrbta.",
      "Vysúvanie hlavy dopredu.",
      "Ponáhľanie sa pri spúšťaní."
    ],
    care: ["Ramená. Ak držadlá sedia príliš vysoko, posuňte sedadlo o jeden stupeň nižšie."]
  },
  {
    id: "lat-pulldown",
    img: "img/lat-pulldown.png",
    name: "Kladkové stiahnutie (lat pulldown)",
    group: "Chrbát",
    setup: "Kladka s tyčou na stiahnutie",
    how: [
      "Úchop o niečo širší ako ramená, stehná zaistite pod podložkou.",
      "Hrudník vzpriamený, stiahnite tyč k hornej časti hrudníka.",
      "Lakte tlačte dole a dozadu, potom pomaly späť do plného natiahnutia."
    ],
    dont: [
      "Odkláňanie sa dozadu a kývanie.",
      "Sťahovanie tyče za hlavu.",
      "Zdvíhanie ramien."
    ],
    care: ["Ramená a zápästia. Myslite na „lakte do zadných vreciek“."]
  },
  {
    id: "v-bar-row",
    img: "img/seated-row.png",
    name: "Kladkový veslár s V-držadlom",
    group: "Chrbát",
    setup: "Kladkový veslár s V-držadlom",
    how: [
      "Sedíte vzpriamene, kolená mierne pokrčené.",
      "Ťahajte držadlo k spodným rebrám, lakte blízko tela.",
      "1 sekundu stisnite lopatky, potom plne natiahnite."
    ],
    dont: [
      "Zaokrúhľovanie chrbta.",
      "Kolísanie trupu dopredu a dozadu.",
      "Ťahanie iba bicepsom."
    ],
    care: ["Spodok chrbta. Udržujte napnuté brucho."]
  },
  {
    id: "neutral-row",
    img: "img/neutral-row.png",
    name: "Sediaci veslár s neutrálnym úchopom (páka)",
    group: "Chrbát",
    setup: "Pákový veslár",
    how: [
      "Hrudník pri opierke, dlane smerujú k sebe.",
      "Ťahajte držadlá k bokom a stisnite lopatky.",
      "Pomaly sa vráťte."
    ],
    dont: [
      "Odlepovanie hrudníka od opierky.",
      "Zdvíhanie ramien.",
      "Spúšťanie závažia s treskom."
    ],
    care: ["Uvoľnený krk a zadné ramená. Váhu pridávajte po malých krokoch."]
  },
  {
    id: "t-bar-row",
    img: "img/t-bar-row.png",
    name: "Ležmo T-bar veslovanie (páka)",
    group: "Chrbát",
    setup: "Ležmo T-bar veslovanie na opierke",
    how: [
      "Hrudník na podložke, uchopte držadlá.",
      "Ťahajte lakte hore a dozadu k bokom.",
      "Stisnite, potom spúšťajte 2 sekundy."
    ],
    dont: [
      "Zdvíhanie hrudníka.",
      "Trhanie závažím.",
      "Príliš ťažká váha. Vaších 20 kg je správna úroveň; postupujte pomaly."
    ],
    care: ["Spodok chrbta a krk. Hlava v neutrálnej polohe."]
  },
  {
    id: "hammer-curl",
    img: "img/hammer-curl.png",
    name: "Kladkový hammer curl",
    group: "Ruky",
    setup: "Kladka s lanom alebo neutrálnym úchopom",
    how: [
      "Lakte pevne pri bokoch.",
      "Ohýbajte po úroveň ramien a 1 sekundu stisnite.",
      "Pomaly spúšťajte."
    ],
    dont: [
      "Kývanie trupom.",
      "Posúvanie lakťov dopredu.",
      "Rýchle spúšťanie závažia bez kontroly."
    ],
    care: ["Lakte. Lepšia je ľahká váha s čistou technikou."]
  },
  {
    id: "preacher-curl",
    img: "img/preacher-curl-machine.png",
    name: "Biceps na lavici Scott (páka)",
    group: "Ruky",
    setup: "Lavica Scott",
    how: [
      "Podpazušie na hornej hrane lavice.",
      "Ohýbajte a stisnite.",
      "Spúšťajte 3 sekundy takmer do plného natiahnutia."
    ],
    dont: [
      "Zdvíhanie lakťov z lavice.",
      "Prehýbanie lakťov na spodku.",
      "Odskakovanie závažia."
    ],
    care: ["Šľacha bicepsu. Pri ťažkej váhe zastavte spúšťanie pár stupňov pred zamknutím."]
  },
  {
    id: "triceps-pushdown",
    img: "img/triceps-pushdown.png",
    name: "Kladkový tricepsový zdvih nadol",
    group: "Ruky",
    setup: "Kladka s lanom alebo rovnou tyčou",
    how: [
      "Lakte pevne pri bokoch.",
      "Tlačte držadlo dole do napnutých rúk a stisnite.",
      "Vráťte sa do uhla asi 90 stupňov."
    ],
    dont: [
      "Nakláňanie sa nad tyčou.",
      "Roztváranie lakťov do strán.",
      "Pohyb tela namiesto svalov."
    ],
    care: ["Lakte. Použite lano alebo rovnú tyč."]
  },
  {
    id: "rear-delt",
    img: "img/rear-delt-fly.png",
    name: "Zadný delt (reverse fly stroj)",
    group: "Ramená",
    setup: "Zadný delt alebo reverzný pec deck",
    how: [
      "Hrudník na podložke, ramená do strán vo výške ramien.",
      "Mierne stiahnite lopatky.",
      "Pohyb držte pomalý a kontrolovaný."
    ],
    dont: [
      "Silné zapojenie trapézov.",
      "Kývanie tela.",
      "Ťažká váha."
    ],
    care: ["Veľmi ľahká váha a vysoká kontrola. Pomáha držaniu tela."]
  },
  {
    id: "lateral-raise",
    img: "img/lateral-raise.png",
    name: "Bočné zdvihy (páka)",
    group: "Ramená",
    setup: "Stroj na bočné zdvihy",
    how: [
      "Zdvíhajte ramená do strán po úroveň ramien, lakte držte mierne pokrčené.",
      "Spúšťajte pomaly."
    ],
    dont: [
      "Pokrčovanie ramien.",
      "Kývanie tela.",
      "Zdvíhanie nad úroveň ramien."
    ],
    care: ["Krk a horné trapézy uvoľnené. Striktná technika je lepšia ako ťažká váha."]
  },
  {
    id: "shoulder-press",
    img: "img/shoulder-press.png",
    name: "Tlak na ramená (stroj)",
    group: "Ramená",
    setup: "Stroj na tlak na ramená",
    how: [
      "Nastavte sedadlo tak, aby držadlá začínali v úrovni ramien.",
      "Tlačte hore bez zamknutia lakťov.",
      "Spúšťajte pod kontrolou."
    ],
    dont: [
      "Prehýbanie spodnej časti chrbta.",
      "Pokrčovanie ramien.",
      "Spúšťanie pod úroveň ramien."
    ],
    care: ["Ramená. Tlačte mierne dopredu, nie priamo dozadu."]
  },
  {
    id: "leg-press",
    img: "img/leg-press.png",
    name: "Široký leg press (sánky)",
    group: "Nohy",
    setup: "Leg press na sánkach",
    how: [
      "Chodidlá na šírku, špičky mierne von.",
      "Spúšťajte, kým kolená nie sú asi v 90 stupňoch, v smere špičiek.",
      "Tlačte celým chodidlom. Bedrá a spodok chrbta zostávajú na sedadle."
    ],
    dont: [
      "Zdvíhanie bokov alebo zaokrúhľovanie chrbta.",
      "Zamykanie kolien hore.",
      "Vtláčanie kolien dovnútra.",
      "Odskakovanie na spodku."
    ],
    care: ["Kolená a spodok chrbta. Kontrolujte spodnú polohu."]
  },
  {
    id: "leg-raise",
    img: "img/leg-extension.png",
    name: "Sediaci extenzor predných stehien",
    group: "Nohy",
    setup: "Sediaci extenzor stehien (predná strana)",
    how: [
      "Chrbát opretý, natiahnite nohy takmer rovno.",
      "1 sekundu stisnite štvorhlavé svaly.",
      "Pomaly spúšťajte."
    ],
    dont: [
      "Kývanie.",
      "Silné zamykanie kolien.",
      "Príliš ťažká váha."
    ],
    care: ["Kolená. Pri bolesti kolena znížte váhu alebo rozsah."]
  },
  {
    id: "leg-curl",
    img: "img/leg-curl.png",
    name: "Sediaci ohyb zadnej strany stehien",
    group: "Nohy",
    setup: "Sediaci stroj na ohyb zadnej strany stehien",
    how: [
      "Podložka na stehná tesne pri nohách.",
      "Ťahajte päty dole a dozadu, stisnite zadnú stranu stehien.",
      "Pomaly sa vráťte."
    ],
    dont: [
      "Zdvíhanie bokov zo sedadla.",
      "Trhanie závažia.",
      "Príliš ťažká váha."
    ],
    care: ["Zadná strana stehien. Na začiatku sa môže objaviť pálenie, preto začnite ľahkou váhou."]
  },
  {
    id: "calf-raise",
    img: "img/calf-raise.png",
    name: "Stroj na lýtka (zdvihy)",
    group: "Nohy",
    setup: "Sediaci alebo stojaci stroj na lýtka",
    how: [
      "Dole plné natiahnutie.",
      "Hore 1 sekunda pauza.",
      "Pomaly spúšťajte."
    ],
    dont: [
      "Odskakovanie.",
      "Pokrčovanie kolien a podvádzanie pohybu."
    ],
    care: ["Achillova šľacha. Váhu zvyšujte pomaly."]
  },
  {
    id: "crunch",
    img: "img/ab-crunch.png",
    name: "Stroj na brušné svaly (crunch)",
    group: "Brucho",
    setup: "Stroj na brušné svaly",
    how: [
      "Stiahnite rebrá k panve.",
      "Vydychujte pri zdvihu a 1 sekundu stisnite.",
      "Pomaly sa vráťte. Cieľ: 30 čistých opakovaní."
    ],
    dont: [
      "Ťahanie rukami alebo bedrami.",
      "Používanie zotrvačnosti.",
      "Zadržiavanie dychu."
    ],
    care: ["Krk v neutrálnej polohe. Pridajte váhu, až keď sú všetkých 30 opakovaní čistých."]
  }
];

const sessions = [
  {
    day: "Pondelok",
    label: "Gym A",
    title: "Celé telo: dôraz na hrudník a chrbát, ťažký leg press",
    time: "17:00 - 18:30",
    type: "gym",
    img: "img/session-a-machine.png",
    items: [
      { ex: "chest-press", sets: "3 × 14", weight: "36-42 kg" },
      { ex: "lat-pulldown", sets: "3 × 14", weight: "39 kg" },
      { ex: "leg-press", sets: "3 × 14", weight: "70 kg" },
      { ex: "neutral-row", sets: "3 × 14", weight: "51 kg" },
      { ex: "lateral-raise", sets: "3 × 12", weight: "10 kg" },
      { ex: "triceps-pushdown", sets: "3 × 12", weight: "ľahko, zistite", new: true },
      { ex: "hammer-curl", sets: "3 × 14", weight: "13-15 kg", opt: true },
      { ex: "crunch", sets: "3 × 30", weight: "45 kg", opt: true }
    ],
    tip: "Ťažký deň na nohy aj hrudník. Pri tlaku na hrudník použite plný odpočinok 90 s."
  },
  {
    day: "Utorok",
    label: "Gym B",
    title: "Celé telo: dôraz na chrbát a zadnú stranu stehien, ľahšie nohy",
    time: "17:00 - 18:30",
    type: "gym",
    img: "img/session-b-back.png",
    items: [
      { ex: "t-bar-row", sets: "3 × 12", weight: "20 kg" },
      { ex: "incline-chest", sets: "3 × 14", weight: "36-41 kg" },
      { ex: "leg-curl", sets: "3 × 14", weight: "ľahko, zistite", new: true },
      { ex: "leg-raise", sets: "3 × 14", weight: "40 kg" },
      { ex: "rear-delt", sets: "3 × 14", weight: "ľahko, zistite", new: true },
      { ex: "preacher-curl", sets: "3 × 10", weight: "10 kg" },
      { ex: "calf-raise", sets: "3 × 15", weight: "ľahko, zistite", new: true, opt: true },
      { ex: "crunch", sets: "3 × 30", weight: "45 kg", opt: true }
    ],
    tip: "Myslite na „ťahanie lakťov“, nie na „ťahanie rukami“. Nohy držte ľahké: v pondelok bol ťažký leg press."
  },
  {
    day: "Streda",
    label: "Gym C",
    title: "Celé telo: dôraz na nohy a ramená, ťažký leg press",
    time: "17:00 - 18:30",
    type: "gym",
    img: "img/session-c-legs.png",
    items: [
      { ex: "leg-press", sets: "3 × 14", weight: "70 kg (+5 kg, keď je to ľahké)" },
      { ex: "shoulder-press", sets: "3 × 12", weight: "ľahko, zistite", new: true },
      { ex: "seated-fly", sets: "3 × 14", weight: "41-45 kg" },
      { ex: "lat-pulldown", sets: "3 × 14", weight: "39 kg" },
      { ex: "leg-curl", sets: "3 × 14", weight: "ako v utorok" },
      { ex: "triceps-pushdown", sets: "3 × 12", weight: "ako v pondelok" },
      { ex: "calf-raise", sets: "3 × 15", weight: "ľahko, zistite", opt: true },
      { ex: "crunch", sets: "3 × 30", weight: "45 kg", opt: true }
    ],
    tip: "Druhý ťažký leg press týždňa. Po saune si 2 minúty sadnite, potom vstávajte pomaly."
  },
  {
    day: "Štvrtok",
    label: "Gym D",
    title: "Celé telo: dôraz na ruky a mix, ľahšie nohy",
    time: "17:00 - 18:30",
    type: "gym",
    img: "img/session-d-cables.png",
    items: [
      { ex: "chest-press", sets: "3 × 12", weight: "36-42 kg" },
      { ex: "v-bar-row", sets: "3 × 14", weight: "39 kg" },
      { ex: "leg-press", sets: "2 × 14", weight: "60-65 kg (ľahšie)" },
      { ex: "leg-curl", sets: "3 × 14", weight: "ako v utorok" },
      { ex: "lateral-raise", sets: "3 × 12", weight: "10 kg" },
      { ex: "triceps-pushdown", sets: "3 × 12", weight: "ako v pondelok" },
      { ex: "hammer-curl", sets: "3 × 14", weight: "13-15 kg" },
      { ex: "crunch", sets: "3 × 30", weight: "45 kg", opt: true }
    ],
    tip: "Štvrtý tréning za sebou: pracujte na 90 % a nohy držte ľahké. Zajtra je plávanie."
  },
  {
    day: "Piatok",
    label: "Plávanie",
    title: "Ľahké regeneračné plávanie",
    time: "17:30 - 18:30",
    type: "swim",
    img: "img/session-swim.png",
    items: [],
    tip: "30 až 40 min: 8 až 10 × 50 m s 30 s prestávkou. Striedajte kraul a prsia. Mali by ste vedieť hovoriť krátkymi vetami. Alkohol: maximálne 1 až 2 poháre, s jedlom a vodou."
  },
  {
    day: "Sobota",
    label: "Voľno",
    title: "Regenerácia",
    time: "-",
    type: "rest",
    img: "img/session-rest.png",
    items: [],
    tip: "20 až 30 min prechádzka a ľahké strečingy. 8 hodín spánku. Sauna je v poriadku, ak ste predchádzajúci večer nepili alkohol."
  },
  {
    day: "Nedeľa",
    label: "Beh",
    title: "8 km beh (každý 2. týždeň) alebo úplný odpočinok",
    time: "17:00",
    type: "run",
    img: "img/session-run.png",
    items: [],
    tip: "Týždne s behom: 1, 3 a 5. Pokojné tempo, prechádzkové prestávky sú v poriadku. V týždňoch 2, 4 a 6 odpočívajte, alebo idite 40 min na prechádzku."
  }
];

const timeline = [
  { wk: "Týždeň 1", dates: "23.-29. 11.", focus: "Naučte sa A, B, C, D. Nové stroje začnite ľahko. 3 opakovania v zálohe. V nedeľu beh." },
  { wk: "Týždeň 2", dates: "30. 11.-6. 12.", focus: "Pridajte 1-2 opakovania alebo váhu pri kľúčových cvikoch. 2 opakovania v zálohe. V nedeľu voľno." },
  { wk: "Týždeň 3", dates: "7.-13. 12.", focus: "Ťažší týždeň. Rest-pause pri poslednej sérii tlaku na hrudník. V nedeľu beh." },
  { wk: "Týždeň 4", dates: "14.-20. 12.", focus: "Udržte alebo pridajte. Overte, či sú kalórie správne. V nedeľu voľno." },
  { wk: "Týždeň 5", dates: "21.-27. 12.", focus: "Sviatočný týždeň. Minimálne tréningy sú v poriadku. V nedeľu beh." },
  { wk: "Týždeň 6", dates: "28. 12.-3. 1.", focus: "Deload: 2 série na cvik, -10 % váhy, bez zlyhania.", deload: true }
];

const rotation = [
  { day: "Pondelok", lunch: "Hovädzie kung pao s ryžou (500 g)", dinner: "Zeleninová omeleta so zemiakmi" },
  { day: "Utorok", lunch: "Poke bowl: ryža, losos alebo tuniak, edamame, uhorka, avokádo", dinner: "Kuracie prsia, ryža a brokolica" },
  { day: "Streda", lunch: "Vietnamské ryžové rezance s kuracím mäsom a zeleninou", dinner: "Pečený losos, zemiaky a šalát" },
  { day: "Štvrtok", lunch: "Kuracie kung pao s ryžou", dinner: "Morčacie alebo hovädzie mleté mäso s ryžovými rezancami a zeleninou" },
  { day: "Piatok", lunch: "Poke bowl alebo tuniakový ryžový šalát", dinner: "Ryba alebo kura, šalát a zemiaky" },
  { day: "Sobota", lunch: "Hovädzie s ryžovými rezancami a zeleninou", dinner: "Omeleta alebo kura s ryžou a zeleninou" },
  { day: "Nedeľa", lunch: "Pečené kura alebo stehno, zemiaky a zelenina", dinner: "Ľahká večera: vajcia, tvaroh, šalát, ražný chlieb" }
];

const exerciseMap = Object.fromEntries(exercises.map((e) => [e.id, e]));

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [key, value] of Object.entries(attrs)) {
    if (key === "class") node.className = value;
    else if (key === "text") node.textContent = value;
    else node.setAttribute(key, value);
  }
  for (const child of children) node.append(child);
  return node;
}

function renderWeek() {
  const grid = document.getElementById("week-grid");
  const sessionsByDay = new Map();
  for (const s of sessions) {
    if (!sessionsByDay.has(s.day)) sessionsByDay.set(s.day, []);
    sessionsByDay.get(s.day).push(s);
  }

  for (const daySessions of sessionsByDay.values()) {
    const s = daySessions[0];
    const alternatives = daySessions.length > 1;
    const labels = daySessions.map((session) => session.label).join(" / ");
    const title = daySessions.map((session) => session.title).join(" / ");
    const meta = alternatives
      ? `Striedajú sa podľa týždňa · ${s.time}`
      : s.type === "gym" ? `${s.items.length} cvikov · ${s.time}` : s.time;
    grid.append(
      el("div", { class: `day ${s.type}` }, [
        el("img", { class: "thumb", src: s.img, alt: `${labels}: ${title}`, loading: "lazy" }),
        el("div", { class: "dname", text: s.day }),
        el("div", { class: "dtitle", text: labels }),
        el("div", { class: "dmeta", text: title }),
        el("div", { class: "dmeta", text: meta })
      ])
    );
  }
}

function renderSession(index) {
  const s = sessions[index];
  const panel = document.getElementById("session-panel");
  panel.replaceChildren();

  panel.append(
    el("div", { class: "panel-head" }, [
      el("h3", { text: `${s.day} · ${s.label}: ${s.title}` }),
      el("span", { class: "time", text: s.time })
    ]),
    el("img", { class: "session-img", src: s.img, alt: `Náhľad: ${s.label}`, loading: "lazy" })
  );

  if (s.items.length) {
    const rows = s.items.map((item) => {
      const ex = exerciseMap[item.ex];
      const tags = [];
      if (item.new) tags.push(el("span", { class: "tag new", text: "nový" }));
      if (item.opt) tags.push(el("span", { class: "tag opt", text: "voliteľné" }));
      return el("tr", {}, [
        el("td", {}, [
          el("div", { class: "ex-cell" }, [
            el("img", { class: "ex-thumb", src: ex.img, alt: "", loading: "lazy" }),
            el("strong", { text: ex.name }),
            ...tags
          ])
        ]),
        el("td", { class: "num", text: item.sets }),
        el("td", { class: "num", text: item.weight })
      ]);
    });
    panel.append(
      el("table", { class: "session-table" }, [
        el("thead", {}, [
          el("tr", {}, [
            el("th", { text: "Cvik" }),
            el("th", { text: "Série × opakovania" }),
            el("th", { text: "Štartovacia váha" })
          ])
        ]),
        el("tbody", {}, rows)
      ])
    );
  }

  panel.append(
    el("div", { class: "tips" }, [
      el("div", {}, [el("strong", { text: "Tip trénera" }), el("span", { text: s.tip })]),
      el("div", {}, [
        el("strong", { text: "Pravidlo zlého dňa" }),
        el("span", { text: "Unavení alebo v strese? Urobte minimum: cviky 1 až 6, 2 série každý, rovnaká váha alebo o 10 % menej." })
      ])
    ])
  );
}

function renderSessionTabs() {
  const tabs = document.getElementById("session-tabs");
  sessions.forEach((s, i) => {
    const btn = el("button", {
      class: "tab",
      role: "tab",
      type: "button",
      "aria-selected": "false",
      text: `${s.day} · ${s.label}`
    });
    btn.addEventListener("click", () => selectSession(i));
    tabs.append(btn);
  });
  selectSession(0);
}

function selectSession(index) {
  document.querySelectorAll("#session-tabs .tab").forEach((btn, i) => {
    btn.setAttribute("aria-selected", String(i === index));
  });
  renderSession(index);
}

function renderExercises(query = "", group = "Všetky") {
  const grid = document.getElementById("exercise-grid");
  grid.replaceChildren();
  const q = query.trim().toLowerCase();

  const matches = exercises.filter((e) => {
    const inGroup = group === "Všetky" || e.group === group;
    const inText = !q || e.name.toLowerCase().includes(q) || e.setup.toLowerCase().includes(q);
    return inGroup && inText;
  });

  if (!matches.length) {
    grid.append(el("p", { class: "empty", text: "Žiadny cvik nezodpovedá hľadaniu." }));
    return;
  }

  for (const e of matches) {
    grid.append(
      el("details", { class: "exercise" }, [
        el("summary", {}, [
          el("img", { class: "ex-thumb", src: e.img, alt: `Ukážka: ${e.name}`, loading: "lazy" }),
          el("div", {}, [
            el("div", { class: "ename", text: e.name }),
            el("div", { class: "emeta", text: `${e.group} · ${e.setup}` })
          ]),
          el("span", { class: "chevron", "aria-hidden": "true", text: "▾" })
        ]),
        el("div", { class: "body" }, [
          el("div", { class: "label do", text: "Ako trénovať" }),
          el("ul", {}, e.how.map((t) => el("li", { text: t }))),
          el("div", { class: "label dont", text: "Ako NETRÉNOVAŤ" }),
          el("ul", {}, e.dont.map((t) => el("li", { text: t }))),
          el("div", { class: "label care", text: "Na čo dávať pozor" }),
          el("ul", {}, e.care.map((t) => el("li", { text: t })))
        ])
      ])
    );
  }
}

function renderFilters() {
  const groups = ["Všetky", ...new Set(exercises.map((e) => e.group))];
  const wrap = document.getElementById("exercise-filters");
  groups.forEach((g, i) => {
    const btn = el("button", {
      class: "filter",
      type: "button",
      "aria-pressed": String(i === 0),
      text: g
    });
    btn.addEventListener("click", () => {
      wrap.querySelectorAll(".filter").forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
      renderExercises(document.getElementById("exercise-search").value, g);
    });
    wrap.append(btn);
  });
}

function renderRotation() {
  const wrap = document.getElementById("rotation");
  for (const r of rotation) {
    wrap.append(
      el("div", { class: "card" }, [
        el("strong", { text: r.day }),
        el("div", { text: `Obed: ${r.lunch}` }),
        el("div", { text: `Večera: ${r.dinner}` })
      ])
    );
  }
}

function renderTimeline() {
  const wrap = document.getElementById("timeline");
  for (const t of timeline) {
    wrap.append(
      el("div", { class: `week-item${t.deload ? " deload" : ""}` }, [
        el("div", { class: "wk", text: t.wk }),
        el("div", { class: "dates", text: t.dates }),
        el("div", { class: "focus", text: t.focus })
      ])
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderWeek();
  renderSessionTabs();
  renderFilters();
  renderExercises();
  renderRotation();
  renderTimeline();

  document.getElementById("exercise-search").addEventListener("input", (event) => {
    const active = document.querySelector("#exercise-filters .filter[aria-pressed='true']");
    renderExercises(event.target.value, active ? active.textContent : "Všetky");
  });
});
