var fishingData = [
  {
    titel: "AKTUELLES",
    text: "TOMEK HAT MOTOR KAPPUT GEMACHT | GLOMBI HATS REPARIERT<br>JETZ FISH HQ AUF DEIN HANDY AUF https://bit.ly/FHQL"
  },
  {
    titel: "WETTERLAGE",
    text: "TOP TEMPERATUR: 22ºC | 15:00<br>WASSER TEMPERATUR: 13º-15ºC<br>GEZEITEN: HOCH: 14:43 | NIEDRIG: 19:41"
  },
  {
    titel: "BESTE ZEITE",
    text: "HECHT (LUCIO) 29/05 - 07:00 & 21:00<br>BARSCH (PERCA EUROPEA) 29/05 - 17:00 & 19:00<br>ZANDER (LUCIO PERCA) 29/05 - 13:00"
  }
];

var tickerData = [
  "HECHT (LUCIO) 29/05 - 07:00 & 21:00",
  "BARSCH (PERCA EUROPEA) 29/05 - 17:00 & 19:00",
  "ZANDER (LUCIO PERCA) 29/05 - 13:00",
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
