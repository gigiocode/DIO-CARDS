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
    actions:{
        button: documento.getElementById("next-duel"),
    },
};

const pathImages = ".scr/assets/icons/";

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
        LoseOf:[6, 7, 8, 0, 1, 2],
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

function init (){
    
}

init();