var database;
var form, game, player;
var gameState = 0;
var playerCount = 0;
var allPlayers;
var car1_sprite;
var car2_sprite;
var car1_image;
var car2_image;
var track_image;
var carArray = [];

function preload() {
  car1_image = loadImage("car1.png");
  car2_image = loadImage("car2.png");
  track_image = loadImage("track.jpg");
}

function setup() {
  database = firebase.database();
  createCanvas(displayWidth, displayHeight);
  game = new Game();
  game.readGameState();
  if (gameState == 0) {
    player = new Player();
    player.readPlayerCount();
    form = new Form();
    form.displayForm();
  }
  car1_sprite = createSprite(200, 200, 40, 40);
  car1_sprite.addImage("car1", car1_image);
  car2_sprite = createSprite(400, 200, 40, 40);
  car2_sprite.addImage("car2", car2_image);
  carArray.push(car1_sprite);
  carArray.push(car2_sprite);
}

function draw() {
  background("white");
  if (playerCount == 2) {
    game.writeGameState(1);
  }

  if (gameState == 1) {
    game.startGame();
  }
}
