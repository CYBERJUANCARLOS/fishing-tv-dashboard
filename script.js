async function loadFishingInfo() {
  const response = await fetch("fishing.json");
  const data = await response.json();

  const container = document.getElementById("fishingInfo");
  container.innerHTML = "";

  data.forEach(item => {
    container.innerHTML += `
      <div class="card">
        <strong>${item.titel}</strong><br><br>
        ${item.text}
      </div>
    `;
  });
}

async function loadTicker() {
  const response = await fetch("ticker.json");
  const data = await response.json();

  const ticker = document.getElementById("tickerContent");
  ticker.innerHTML = "";

  data.forEach(text => {
    ticker.innerHTML += `<div class="tickerItem">${text}</div>`;
  });
}

loadFishingInfo();
loadTicker();

setInterval(() => {
  loadFishingInfo();
  loadTicker();
}, 60000);
