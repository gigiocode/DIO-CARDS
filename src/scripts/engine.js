const state ={
    score:{
        playerScore: 0,
        computerScore: 0,
        scoreBox: document.getElementById("score_points"),
    },
    cardSprites:{
        avatar: document.getElementById("card-image"),
        name: document.getElementById("card-name"),
        type: document.getElementById("card-type"),
    },
    fieldCards:{
        player: document.getElementById("player-field-card"),
        computer: document.getElementById("computer-field-card"),
    },
    playerSides:{
        player1: "player-cards",
        player1Box: document.querySelector("#player-cards"),
        computer: "computer-cards",
        computerBox: document.querySelector("#computer-cards"),
    },
    actions:{
        button: document.getElementById("next-duel"),
    },
};

const playerSides = {
    player1: "player-cards",
    computer: "computer-cards",
}

const pathImages = "./src/assets/icons/";

const cardData = [
    {
        id:0,
        name: "Juggernaut",
        type: "Agility",
        points: "34",
        medal: "gold",
        img: `${pathImages}card-front-agility-1.png`,
        WinOf:[1, 2, 3, 4, 5],
        LoseOf:[6, 7, 8],
    },
    {
        id:1,
        name: "Riki",
        type: "Agility",
        points: "30",
        medal: "silver",
        img: `${pathImages}card-front-agility-2.png`,
        WinOf:[2, 3, 4, 5],
        LoseOf:[6, 7, 8, 0],
    },
    {
        id:2,
        name: "Sniper",
        type: "Agility",
        points: "27",
        medal: "bronze",
        img: `${pathImages}card-front-agility-3.png`,
        WinOf:[3, 4, 5],
        LoseOf:[6, 7, 8, 0, 1],
    },
    {
        id:3,
        name: "Lina",
        type: "Intelligence",
        points: "30",
        medal: "gold",
        img: `${pathImages}card-front-intelligence-1.png`,
        WinOf:[4, 5, 6, 7, 8],
        LoseOf:[0, 1, 2],
    },
    {
        id:4,
        name: "Zeus",
        type: "Intelligence",
        points: "22",
        medal: "silver",
        img: `${pathImages}card-front-intelligence-2.png`,
        WinOf:[5, 6, 7, 8],
        LoseOf:[0, 1, 2, 3],
    },
    {
        id:5,
        name: "Crystal Maiden",
        type: "Intelligence",
        points: "18",
        medal: "bronze",
        img: `${pathImages}card-front-intelligence-3.png`,
        WinOf:[6, 7, 8],
        LoseOf:[0, 1, 2, 3, 4],
    },
    {
        id:6,
        name: "Tiny",
        type: "Strength",
        points: "30",
        medal: "gold",
        img: `${pathImages}card-front-strength-1.png`,
        WinOf:[0, 1, 2, 7, 8],
        LoseOf:[3, 4, 5],
    },
    {
        id:7,
        name: "Dawnbreaker",
        type: "Strength",
        points: "25",
        medal: "gold",
        img: `${pathImages}card-front-strength-2.png`,
        WinOf:[0, 1, 2, 8],
        LoseOf:[3, 4, 5, 6],
    },
    {
        id:8,
        name: "Dragon Knight",
        type: "Strength",
        points: "21",
        medal: "gold",
        img: `${pathImages}card-front-strength-3.png`,
        WinOf:[0, 1, 2],
        LoseOf:[3, 4, 5, 6, 7],
    },
    
];

async function getRandomCardId(){
    const randomIndex = Math.floor(Math.random() * cardData.length);
    return cardData[randomIndex].id
}

async function createCardImage(IdCard, fieldSide){
    const cardImage = document.createElement("img");
    cardImage.setAttribute("height", "100px");
    cardImage.setAttribute("src", "./src/assets/icons/card-back-dota1.png");
    cardImage.setAttribute("data-id", IdCard);
    cardImage.classList.add("card");

    if(fieldSide === playerSides.player1){
        cardImage.addEventListener("click", ()=>{
            setCardsField(cardImage.getAttribute("data-id"));
        });

        cardImage.addEventListener("mouseover", ()=>{
            drawSelectCard(IdCard);
        });
    }

    return cardImage;
}

async function setCardsField(cardId){
    await removeAllCardsImages();

    let computerCardId = await getRandomCardId();

    state.fieldCards.player.style.display = "block";
    state.fieldCards.computer.style.display = "block";

    state.fieldCards.player.src = cardData[cardId].img;
    state.fieldCards.computer.src = cardData[computerCardId].img;

    let duelResults = await checkDuelResults(cardId, computerCardId);

    await updateScore();
    await drawButton(duelResults);
}

async function removeAllCardsImages(){
    let { computerBox, player1Box } = state.playerSides;
    let imgElements = computerBox.querySelectorAll("img")
    imgElements.forEach((img)=>img.remove());

    imgElements = player1Box.querySelectorAll("img")
    imgElements.forEach((img)=>img.remove());
}

async function drawSelectCard(index){
    state.cardSprites.avatar.src = cardData[index].img;
    state.cardSprites.name.innerText = cardData[index].name;
    state.cardSprites.type.innerText = "Attribute: " + cardData[index].type;
}


async function drawCards(cardNumbers, fieldSide){
    for(let i = 0; i<cardNumbers; i++){
        const randomIdCard = await getRandomCardId();
        const cardImage = await createCardImage(randomIdCard, fieldSide);

        document.getElementById(fieldSide).appendChild(cardImage);
    }
}

function init (){
    drawCards(5, playerSides.player1);
    drawCards(5, playerSides.computer);
}

init();