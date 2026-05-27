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
  "🎣 Beste Angelzeit heute: 19:00–22:00",
  "📍 Erst die flachen Schilfkanten testen",
  "🐟 Zielfisch: Hecht und Barsch",
  "🌦️ Windrichtung vor Spotwechsel prüfen"
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
