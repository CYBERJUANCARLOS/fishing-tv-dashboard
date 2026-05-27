var fishingData = [
  {
    titel: "JETZT ANGELN",
    text: "Bester Spot: Schilfkante am See<br>Zielfisch: Hecht / Barsch<br>Beste Zeit: 19:00–22:00<br>Köder: Spinner oder Gummifisch<br>Fangchance: Hoch"
  },
  {
    titel: "WETTERLAGE",
    text: "Bewölkt, leichter Wind. Gute Bedingungen für Hecht in flachen Bereichen."
  },
  {
    titel: "SPOT-TIPP",
    text: "Erst flache Uferzonen testen, danach tiefere Kanten absuchen."
  }
];

var tickerData = [
    "HECHT (LUCIO) 28/05 - 05:00 & 18:00"
  "BARSCH (PERCA EUROPEA) 28/05 - 18:00 & 21:00"
  "ZANDER (LUCIO PERCA) 28/05 - 11:00 & 19:00-20:00"
  "MEIESTE FISCHE GEFANGEN: CHRISTIAN 14 FISCHE"
  "SPORT NEWS SPÄTER"
  "BIER PAUSE NICHT VERGESSEN"
];

function loadFishingInfo() {
  var container = document.getElementById("fishingInfo");
  container.innerHTML = "";

  for (var i = 0; i < fishingData.length; i++) {
    container.innerHTML +=
      '<div class="card">' +
      '<strong>' + fishingData[i].titel + '</strong><br><br>' +
      fishingData[i].text +
      '</div>';
  }
}

function loadTicker() {
  var ticker = document.getElementById("bottomTicker");
  ticker.innerHTML = tickerData.join(" &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; ");
}

loadFishingInfo();
loadTicker();
