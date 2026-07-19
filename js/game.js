// ======================================
// Three Kingdoms Arena
// game.js
// Version 0.1.1
// ======================================

const startBtn = document.getElementById("startBtn");
const gameArea = document.getElementById("gameArea");

let myTeam = [];
let currentGenerals = [];

// 게임 시작 버튼
startBtn.addEventListener("click", startGame);

// --------------------
// 게임 시작
// --------------------
function startGame(){

    myTeam = [];

    currentGenerals = shuffle([...generals]).slice(0,10);

    drawCards();

}

// --------------------
// 카드 출력
// --------------------

function drawCards(){

    let html = "";

    html += "<h2>우리 팀을 선택하세요 (5명)</h2>";

    html += "<p>선택 : "+myTeam.length+" / 5</p>";

    html += "<div class='cardContainer'>";

    currentGenerals.forEach(g=>{

        const selected = myTeam.includes(g.id);

        html += `
        <div class="generalCard">

            <h3>${g.name}</h3>

            <p>${g.camp}</p>

            <p>${g.type}</p>

            <p>${g.rarity}</p>

            <hr>

            <p>⚔ 무력 ${g.force}</p>

            <p>🧠 지력 ${g.intel}</p>

            <p>🛡 통솔 ${g.leadership}</p>

            <p>🏛 정치 ${g.politics}</p>

            <p>😊 매력 ${g.charm}</p>

            <hr>

            <p><b>${g.skill}</b></p>

            <button
                onclick="selectGeneral(${g.id})"
                ${selected ? "disabled":""}
            >
                ${selected ? "선택완료":"선택"}
            </button>

        </div>
        `;

    });

    html += "</div>";

    gameArea.innerHTML = html;

}

// --------------------
// 장수 선택
