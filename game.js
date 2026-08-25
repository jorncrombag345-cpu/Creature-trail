/* =========================================================
   CREATU REN TRAIL V2
   STAP 2 — CREATURE SYSTEM
   ========================================================= */

const CREATURES = [

    {
        id: "flamora",
        name: "Flamora",
        type: "Fire",
        rarity: "Common",
        emoji: "🔥",
        color: "orange",
        description: "Een kleine vurige Creature die graag warme plekken bezoekt.",
        baseXP: 25
    },

    {
        id: "aquari",
        name: "Aquari",
        type: "Water",
        rarity: "Common",
        emoji: "💧",
        color: "blue",
        description: "Een rustige water-Creature die vlak bij rivieren verschijnt.",
        baseXP: 25
    },

    {
        id: "leafin",
        name: "Leafin",
        type: "Nature",
        rarity: "Common",
        emoji: "🌿",
        color: "green",
        description: "Een nieuwsgierige Creature die zich verstopt tussen bladeren.",
        baseXP: 25
    },

    {
        id: "sparko",
        name: "Sparko",
        type: "Electric",
        rarity: "Rare",
        emoji: "⚡",
        color: "yellow",
        description: "Een energieke Creature die bliksemsnel door de wereld beweegt.",
        baseXP: 50
    },

    {
        id: "frostel",
        name: "Frostel",
        type: "Ice",
        rarity: "Rare",
        emoji: "❄️",
        color: "cyan",
        description: "Een ijzige Creature die het liefst in koude gebieden leeft.",
        baseXP: 50
    },

    {
        id: "rockon",
        name: "Rockon",
        type: "Earth",
        rarity: "Common",
        emoji: "🪨",
        color: "brown",
        description: "Een sterke Creature met een lichaam zo hard als steen.",
        baseXP: 25
    },

    {
        id: "mystia",
        name: "Mystia",
        type: "Mystic",
        rarity: "Epic",
        emoji: "🔮",
        color: "purple",
        description: "Een mysterieuze Creature die maar zelden wordt gezien.",
        baseXP: 100
    },

    {
        id: "shadowa",
        name: "Shadowa",
        type: "Dark",
        rarity: "Epic",
        emoji: "🌑",
        color: "dark",
        description: "Een stille Creature die vooral 's nachts verschijnt.",
        baseXP: 100
    },

    {
        id: "solari",
        name: "Solari",
        type: "Light",
        rarity: "Rare",
        emoji: "☀️",
        color: "gold",
        description: "Een zonnige Creature die energie krijgt van daglicht.",
        baseXP: 50
    },

    {
        id: "stormix",
        name: "Stormix",
        type: "Electric",
        rarity: "Epic",
        emoji: "🌪️",
        color: "purple",
        description: "Een krachtige Creature die stormen kan oproepen.",
        baseXP: 100
    },

    {
        id: "berryn",
        name: "Berryn",
        type: "Nature",
        rarity: "Common",
        emoji: "🍓",
        color: "red",
        description: "Een vrolijke Creature die dol is op bessen.",
        baseXP: 25
    },

    {
        id: "magmox",
        name: "Magmox",
        type: "Fire",
        rarity: "Rare",
        emoji: "🌋",
        color: "red",
        description: "Een hete Creature die in vulkanische gebieden leeft.",
        baseXP: 50
    },

    {
        id: "lunari",
        name: "Lunari",
        type: "Mystic",
        rarity: "Legendary",
        emoji: "🌙",
        color: "purple",
        description: "Een legendarische Creature die alleen onder speciale omstandigheden verschijnt.",
        baseXP: 500
    },

    {
        id: "thundra",
        name: "Thundra",
        type: "Electric",
        rarity: "Legendary",
        emoji: "⚡",
        color: "gold",
        description: "Een legendarische storm-Creature met enorme energie.",
        baseXP: 500
    },

    {
        id: "florion",
        name: "Florion",
        type: "Nature",
        rarity: "Epic",
        emoji: "🌸",
        color: "pink",
        description: "Een zeldzame bloem-Creature die prachtige bloemen laat groeien.",
        baseXP: 100
    },

    {
        id: "aquash",
        name: "Aquash",
        type: "Water",
        rarity: "Epic",
        emoji: "🐚",
        color: "blue",
        description: "Een mysterieuze Creature uit diepe wateren.",
        baseXP: 100
    },

    {
        id: "emberoo",
        name: "Emberoo",
        type: "Fire",
        rarity: "Rare",
        emoji: "🦊",
        color: "orange",
        description: "Een snelle vuur-Creature met een gloeiende staart.",
        baseXP: 50
    },

    {
        id: "crystali",
        name: "Crystali",
        type: "Ice",
        rarity: "Epic",
        emoji: "💎",
        color: "cyan",
        description: "Een kristallen Creature die licht kan weerkaatsen.",
        baseXP: 100
    },

    {
        id: "nocty",
        name: "Nocty",
        type: "Dark",
        rarity: "Rare",
        emoji: "🦇",
        color: "dark",
        description: "Een nachtelijke Creature die bijna geruisloos vliegt.",
        baseXP: 50
    },

    {
        id: "aurora",
        name: "Aurora",
        type: "Light",
        rarity: "Legendary",
        emoji: "🌈",
        color: "rainbow",
        description: "Een extreem zeldzame Creature die tijdens bijzondere gebeurtenissen verschijnt.",
        baseXP: 500
    }

];


/* =========================================================
   GAME DATA
   ========================================================= */

let playerData = JSON.parse(
    localStorage.getItem("creaturenPlayer")
) || {

    xp: 0,

    level: 1,

    caught: [],

    coins: 100

};


/* =========================================================
   OPSLAAN
   ========================================================= */

function savePlayer() {

    localStorage.setItem(
        "creaturenPlayer",
        JSON.stringify(playerData)
    );

}


/* =========================================================
   XP
   ========================================================= */

function addXP(amount) {

    playerData.xp += amount;

    checkLevel();

    savePlayer();

    updatePlayerUI();

}


/* =========================================================
   LEVEL SYSTEM
   ========================================================= */

function getRequiredXP(level) {

    return level * 250;

}


function checkLevel() {

    let required =
        getRequiredXP(playerData.level);

    while(playerData.xp >= required) {

        playerData.xp -= required;

        playerData.level++;

        required =
            getRequiredXP(playerData.level);

        showGameMessage(
            "🎉 LEVEL UP! Je bent nu level " +
            playerData.level + "!"
        );

    }

}


/* =========================================================
   CREATURE SPAWN
   ========================================================= */

function getSpawnCreature() {

    const random =
        Math.random();

    let available;


    if(random < 0.65) {

        available =
            CREATURES.filter(
                c => c.rarity === "Common"
            );

    }

    else if(random < 0.90) {

        available =
            CREATURES.filter(
                c => c.rarity === "Rare"
            );

    }

    else if(random < 0.985) {

        available =
            CREATURES.filter(
                c => c.rarity === "Epic"
            );

    }

    else {

        available =
            CREATURES.filter(
                c => c.rarity === "Legendary"
            );

    }


    return available[
        Math.floor(
            Math.random() *
            available.length
        )
    ];

}


/* =========================================================
   CREATURE SPAWNEN
   ========================================================= */

function spawnCreature() {

    const map =
        document.querySelector(".map");

    if(!map) return;


    const creature =
        getSpawnCreature();


    const element =
        document.createElement("button");


    element.className =
        "spawned-creature";


    element.dataset.creatureId =
        creature.id;


    element.innerHTML = `

        <span class="creature-emoji">
            ${creature.emoji}
        </span>

        <span class="creature-rarity">
            ${creature.rarity}
        </span>

    `;


    const left =
        8 + Math.random() * 84;

    const top =
        10 + Math.random() * 72;


    element.style.left =
        left + "%";

    element.style.top =
        top + "%";


    element.onclick =
        () => openCreatureEncounter(
            creature,
            element
        );


    map.appendChild(element);


    setTimeout(() => {

        if(element.isConnected) {

            element.remove();

        }

    }, 45000);

}


/* =========================================================
   MEERDERE CREATUREN
   ========================================================= */

function spawnMultipleCreatures(amount = 5) {

    for(
        let i = 0;
        i < amount;
        i++
    ) {

        setTimeout(
            spawnCreature,
            i * 500
        );

    }

}


/* =========================================================
   ENCOUNTER
   ========================================================= */

let currentEncounter = null;


function openCreatureEncounter(
    creature,
    element
) {

    currentEncounter = {

        creature,
        element

    };


    const modal =
        document.getElementById(
            "creatureEncounter"
        );


    if(!modal) {

        createEncounterModal();

    }


    updateEncounterModal();

}


/* =========================================================
   ENCOUNTER MODAL MAKEN
   ========================================================= */

function createEncounterModal() {

    const modal =
        document.createElement("div");


    modal.id =
        "creatureEncounter";


    modal.className =
        "creature-encounter";


    modal.innerHTML = `

        <div class="encounter-card">

            <button
                class="encounter-close"
                onclick="closeEncounter()">
                ×
            </button>

            <div
                id="encounterCreature">
            </div>

            <h2 id="encounterName">
            </h2>

            <div
                id="encounterInfo">
            </div>

            <p
                id="encounterDescription">
            </p>

            <button
                class="catch-now-button"
                onclick="catchCurrentCreature()">

                🎯 VANG CREATURE

            </button>

        </div>

    `;


    document.body.appendChild(modal);


    addEncounterStyles();

}


/* =========================================================
   ENCOUNTER UPDATEN
   ========================================================= */

function updateEncounterModal() {

    if(!currentEncounter) return;


    const creature =
        currentEncounter.creature;


    document.getElementById(
        "encounterCreature"
    ).innerHTML = `

        <div class="big-creature">
            ${creature.emoji}
        </div>

    `;


    document.getElementById(
        "encounterName"
    ).innerText =
        creature.name;


    document.getElementById(
        "encounterInfo"
    ).innerHTML = `

        <span class="type-badge">
            ${creature.type}
        </span>

        <span class="rarity-badge rarity-${creature.rarity.toLowerCase()}">
            ${creature.rarity}
        </span>

        <span class="xp-badge">
            +${creature.baseXP} XP
        </span>

    `;


    document.getElementById(
        "encounterDescription"
    ).innerText =
        creature.description;


    document.getElementById(
        "creatureEncounter"
    ).style.display =
        "flex";

}


/* =========================================================
   CREATURE VANGEN
   ========================================================= */

function catchCurrentCreature() {

    if(!currentEncounter) return;


    const creature =
        currentEncounter.creature;


    const element =
        currentEncounter.element;


    if(element) {

        element.remove();

    }


    const alreadyCaught =
        playerData.caught.some(
            c => c.id === creature.id
        );


    if(alreadyCaught) {

        addXP(
            Math.floor(
                creature.baseXP * 0.4
            )
        );

        playerData.coins += 5;

    }

    else {

        playerData.caught.push({

            id: creature.id,

            name: creature.name,

            caughtAt:
                new Date().toISOString()

        });


        addXP(
            creature.baseXP
        );


        playerData.coins +=
            creature.rarity === "Legendary"
            ? 100
            : creature.rarity === "Epic"
                ? 40
                : creature.rarity === "Rare"
                    ? 20
                    : 10;

    }


    savePlayer();

    updatePlayerUI();


    closeEncounter();


    showGameMessage(

        "🎉 " +
        creature.name +
        " gevangen! +" +
        creature.baseXP +
        " XP"

    );


    setTimeout(
        spawnCreature,
        1800
    );

}


/* =========================================================
   ENCOUNTER SLUITEN
   ========================================================= */

function closeEncounter() {

    const modal =
        document.getElementById(
            "creatureEncounter"
        );


    if(modal) {

        modal.style.display =
            "none";

    }


    currentEncounter =
        null;

}


/* =========================================================
   UI UPDATEN
   ========================================================= */

function updatePlayerUI() {

    const xpElements =
        document.querySelectorAll(
            "[data-player-xp]"
        );


    xpElements.forEach(
        element => {

            element.innerText =
                playerData.xp;

        }
    );


    const levelElements =
        document.querySelectorAll(
            "[data-player-level]"
        );


    levelElements.forEach(
        element => {

            element.innerText =
                playerData.level;

        }
    );


    const coinElements =
        document.querySelectorAll(
            "[data-player-coins]"
        );


    coinElements.forEach(
        element => {

            element.innerText =
                playerData.coins;

        }
    );


    const caughtElements =
        document.querySelectorAll(
            "[data-player-caught]"
        );


    caughtElements.forEach(
        element => {

            element.innerText =
                playerData.caught.length;

        }
    );


    const progress =
        document.querySelector(
            "[data-xp-progress]"
        );


    if(progress) {

        const required =
            getRequiredXP(
                playerData.level
            );


        const percentage =
            Math.min(
                100,
                (
                    playerData.xp /
                    required
                ) * 100
            );


        progress.style.width =
            percentage + "%";

    }

}


/* =========================================================
   GAME MESSAGE
   ========================================================= */

function showGameMessage(message) {

    let box =
        document.getElementById(
            "gameMessage"
        );


    if(!box) {

        box =
            document.createElement("div");

        box.id =
            "gameMessage";

        box.className =
            "game-message";

        document.body.appendChild(box);

    }


    box.innerText =
        message;


    box.classList.add(
        "show"
    );


    setTimeout(() => {

        box.classList.remove(
            "show"
        );

    }, 3000);

}


/* =========================================================
   CREATURE STYLES
   ========================================================= */

function addEncounterStyles() {

    if(
        document.getElementById(
            "creatureSystemStyles"
        )
    ) return;


    const style =
        document.createElement("style");


    style.id =
        "creatureSystemStyles";


    style.innerHTML = `

        .spawned-creature {

            position:absolute;

            width:72px;
            height:72px;

            border:none;

            border-radius:50%;

            background:
                linear-gradient(
                    145deg,
                    rgba(255,255,255,.95),
                    rgba(220,230,255,.85)
                );

            box-shadow:
                0 10px 25px
                rgba(0,0,0,.35);

            cursor:pointer;

            display:flex;

            align-items:center;

            justify-content:center;

            z-index:10;

            animation:
                creatureFloat 2s
                ease-in-out
                infinite;

            transition:
                transform .2s;

        }


        .spawned-creature:hover {

            transform:
                scale(1.15);

        }


        .creature-emoji {

            font-size:36px;

        }


        .creature-rarity {

            position:absolute;

            bottom:-8px;

            left:50%;

            transform:
                translateX(-50%);

            padding:
                3px 7px;

            border-radius:7px;

            background:#111827;

            color:white;

            font-size:8px;

            white-space:nowrap;

        }


        @keyframes creatureFloat {

            0%,100% {

                transform:
                    translateY(0);

            }

            50% {

                transform:
                    translateY(-8px);

            }

        }


        .creature-encounter {

            position:fixed;

            inset:0;

            background:
                rgba(3,8,18,.82);

            backdrop-filter:
                blur(10px);

            z-index:9999;

            display:none;

            align-items:center;

            justify-content:center;

            padding:20px;

        }


        .encounter-card {

            width:100%;

            max-width:430px;

            background:
                linear-gradient(
                    160deg,
                    #1b2a42,
                    #0e1829
                );

            border:
                1px solid
                rgba(255,255,255,.12);

            border-radius:28px;

            padding:28px;

            text-align:center;

            box-shadow:
                0 30px 80px
                rgba(0,0,0,.6);

            position:relative;

        }


        .encounter-close {

            position:absolute;

            right:15px;

            top:15px;

            width:38px;

            height:38px;

            border:none;

            border-radius:12px;

            background:
                rgba(255,255,255,.1);

            color:white;

            font-size:22px;

            cursor:pointer;

        }


        .big-creature {

            width:170px;

            height:170px;

            margin:
                15px auto 20px;

            border-radius:50%;

            display:flex;

            align-items:center;

            justify-content:center;

            font-size:90px;

            background:
                radial-gradient(
                    circle,
                    rgba(255,255,255,.25),
                    rgba(80,120,255,.1)
                );

            box-shadow:
                0 0 60px
                rgba(100,140,255,.25);

            animation:
                encounterFloat 2s
                ease-in-out
                infinite;

        }


        @keyframes encounterFloat {

            0%,100% {

                transform:
                    translateY(0)
                    scale(1);

            }

            50% {

                transform:
                    translateY(-10px)
                    scale(1.04);

            }

        }


        .encounter-card h2 {

            font-size:30px;

            margin:
                5px 0 15px;

        }


        .encounter-card p {

            color:#aebbd0;

            line-height:1.6;

        }


        .type-badge,
        .rarity-badge,
        .xp-badge {

            display:inline-block;

            padding:
                6px 10px;

            margin:3px;

            border-radius:9px;

            font-size:12px;

            font-weight:bold;

        }


        .type-badge {

            background:
                #253854;

        }


        .rarity-badge {

            background:
                #4b3d73;

        }


        .rarity-common {

            background:#385342;

        }


        .rarity-rare {

            background:#284c73;

        }


        .rarity-epic {

            background:#603c78;

        }


        .rarity-legendary {

            background:
                linear-gradient(
                    90deg,
                    #8b5e16,
                    #c99628
                );

        }


        .xp-badge {

            background:
                #315b42;

        }


        .catch-now-button {

            width:100%;

            margin-top:18px;

            padding:15px;

            border:none;

            border-radius:14px;

            background:white;

            color:#101827;

            font-weight:bold;

            font-size:16px;

            cursor:pointer;

        }


        .catch-now-button:hover {

            transform:
                translateY(-2px);

        }


        .game-message {

            position:fixed;

            left:50%;

            bottom:100px;

            transform:
                translate(-50%,30px);

            background:
                rgba(15,25,42,.96);

            border:
                1px solid
                rgba(255,255,255,.12);

            padding:
                13px 18px;

            border-radius:14px;

            z-index:10000;

            opacity:0;

            pointer-events:none;

            transition:.3s;

            white-space:nowrap;

            box-shadow:
                0 10px 35px
                rgba(0,0,0,.35);

        }


        .game-message.show {

            opacity:1;

            transform:
                translate(-50%,0);

        }

    `;


    document.head.appendChild(style);

}


/* =========================================================
   GAME START
   ========================================================= */

function initializeCreatureSystem() {

    addEncounterStyles();

    updatePlayerUI();

    spawnMultipleCreatures(5);

}


/* =========================================================
   AUTOMATISCHE SPAWNS
   ========================================================= */

setInterval(() => {

    const map =
        document.querySelector(".map");

    if(!map) return;


    const creatures =
        map.querySelectorAll(
            ".spawned-creature"
        );


    if(creatures.length < 6) {

        spawnCreature();

    }

}, 7000);


/* =========================================================
   START
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializeCreatureSystem();

    }
);
