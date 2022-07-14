class Player {
  constructor() {
    this.playerName = "";
    this.playerDistance = 0;
    this.playerPosition = 0;
  }

  readPlayerCount() {
    var ref = database.ref("playerCount");
    ref.on("value", function (data) {
      playerCount = data.val();
    });
  }

  writePlayerCount(a) {
    database.ref("/").update({
      playerCount: a,
    });
  }

  createPlayerField() {
    database.ref("players/player" + this.playerPosition).set({
      name: this.playerName,
      distance: this.playerDistance,
    });
  }

  readAllPlayers() {
    var ref = database.ref("players");
    ref.on("value", function (data) {
      allPlayers = data.val();
    });
  }
}
