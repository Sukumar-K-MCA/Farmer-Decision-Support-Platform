function predict() {
    let soil = document.getElementById("soil").value;
    let season = document.getElementById("season").value;
    let rainfall = parseInt(document.getElementById("rainfall").value);
    let land = parseFloat(document.getElementById("land").value);

    let crop = recommendCrop(soil, season, rainfall);
    let yieldVal = calculateYield(crop, land);
    let profit = calculateProfit(crop, yieldVal);

    document.getElementById("result").innerText =
        `Crop: ${crop} | Yield: ${yieldVal} | Profit: ₹${profit}`;
}