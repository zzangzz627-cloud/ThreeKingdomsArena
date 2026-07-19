// ======================================
// Three Kingdoms Arena
// game.js
// Version : v0.1 Alpha
// ======================================

// 게임 시작 버튼
const startBtn = document.getElementById("startBtn");

// 게임 화면
const gameArea = document.getElementById("gameArea");

// 게임 시작
startBtn.addEventListener("click", startGame);

// --------------------------
// 게임 시작
// --------------------------
function startGame(){

    // 장수 10명을 랜덤으로 섞는다.
    const randomGenerals = shuffle([...generals]).slice(0,10);

    drawGeneralCards(randomGenerals);

}

// --------------------------
// 카드 출력
// --------------------------
function drawGeneralCards(list){

    let html = "";

    html += "<h2>장수를 선택하세요 (5명)</h2>";

    html += "<div class='cardContainer'>";

    list.forEach(general=>{

        html += `
        <div class="generalCard">

            <h3>${general.name}</h3>

            <p>${general.type}</p>

            <p>⭐⭐ ${general.rarity}</p>

            <p>⚔ 무력 : ${general.force}</p>

            <p>🧠 지력 : ${general.intel}</p>

            <p>✨ ${general.skill}</p>

            <button onclick="selectGeneral(${general.id})">
                선택
            </button>

        </div>
        `;

    });

    html += "</div>";

    gameArea.innerHTML = html;

}

// --------------------------
// 장수 선택
// --------------------------

const myTeam = [];

function selectGeneral(id){

    if(myTeam.includes(id)){

        alert("이미 선택한 장수입니다.");

        return;

    }

    myTeam.push(id);

    alert("선택 완료!");

    if(myTeam.length===5){

        finishSelect();

    }

}

// --------------------------
// 선택 완료
// --------------------------

function finishSelect(){

    gameArea.innerHTML=`

    <h2>우리 팀 완성!</h2>

    <p>선택한 장수 : ${myTeam.length}명</p>

    <p>다음 버전에서는 AI 팀 생성 및 전투가 시작됩니다.</p>

    `;

}

// --------------------------
// 배열 섞기
// --------------------------

function shuffle(array){

    for(let i=array.length-1;i>0;i--){

        const j=Math.floor(Math.random()*(i+1));

        [array[i],array[j]]=[array[j],array[i]];

    }

    return array;

}
