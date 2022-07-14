class Form {
  constructor() {
    this.heading = createElement("h1");
    this.inputBox = createInput("Enter Your Name");
    this.registerButton = createButton("Register Yourself Please!");
    this.greeting = createElement("h1");
    this.resetButton = createButton("Reset");
  }

  displayForm() {
    this.heading.html("Welcome to my Car Racing Game");
    this.heading.position(displayWidth - 600, displayHeight - 700);
    this.inputBox.position(displayWidth - 450, displayHeight - 600);
    this.registerButton.position(displayWidth - 450, displayHeight - 500);
    this.resetButton.position(displayWidth + 20, displayHeight - 100);
    this.registerButton.mousePressed(() => {
      this.registerButton.hide();
      player.playerName = this.inputBox.value();
      this.inputBox.hide();
      this.greeting.position(displayWidth - 450, displayHeight - 400);
      this.greeting.html("Greetings " + player.playerName);
      playerCount = playerCount + 1;
      player.playerPosition = playerCount;
      player.writePlayerCount(playerCount);
      player.createPlayerField();
    });
    this.resetButton.mousePressed(() => {
      game.writeGameState(0);
      player.writePlayerCount(0);
      var ref = database.ref("players");
      ref.remove();
    });
  }
}
