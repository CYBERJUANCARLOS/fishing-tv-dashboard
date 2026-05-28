var fishingData = [
  {
    titel: "ANGEL TABELLE",
    text: "1. CHRISTIAN GLOMB | 14 FISCHE<br>2. MARTIN TUMULKA | 12 FISCHE<br>3. OLI | 11 FISCHE"
  },
  {
    titel: "WETTERLAGE",
    text: "TOP TEMPERATUR: 20ºC | 15:00<br>GEZEITEN: HOCH: 14:00 | NIEDRIG: 19:00"
  },
  {
    titel: "BESTE ZEITE",
    text: "HECHT (LUCIO) 28/05 - 05:00 & 18:00<br>BARSCH (PERCA EUROPEA) 28/05 - 18:00 & 21:00<br>ZANDER (LUCIO PERCA) 28/05 - 11:00 & 19:00-20:00"
  }
];

var tickerData = [
  "HECHT (LUCIO) 28/05 - 05:00 & 18:00",
  "BARSCH (PERCA EUROPEA) 28/05 - 18:00 & 21:00",
  "ZANDER (LUCIO PERCA) 28/05 - 11:00 & 19:00-20:00",
  "MEIESTE FISCHE GEFANGEN: CHRISTIAN 14 FISCHE",
  "SPORT NEWS SPÄTER",
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
