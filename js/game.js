const startBtn = document.getElementById("startBtn");
const gameArea = document.getElementById("gameArea");

startBtn.onclick = startGame;

function startGame(){

    let html = "<h2>랜덤 장수 10명</h2>";

    generals.forEach(g => {

        html += `
        <div style="border:1px solid #999;padding:10px;margin:10px;">
            <h3>${g.name}</h3>
            <p>${g.camp}</p>
            <p>${g.type}</p>
            <p>⚔ ${g.force}</p>
            <p>🧠 ${g.intel}</p>
            <p>${g.skill}</p>
        </div>
        `;

    });

    gameArea.innerHTML = html;

}
