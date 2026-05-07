function recommendCrop(soil, season, rainfall) {
    if (soil === "Loamy" && season === "Winter" && rainfall > 50) {
        return "Wheat";
    } else if (soil === "Sandy" && season === "Summer") {
        return "Groundnut";
    } else {
        return "Rice";
    }
}

const cropForm = document.getElementById("cropForm");
const resultText = document.getElementById("resultText");

cropForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const soil = document.getElementById("soilType").value;
    const season = document.getElementById("season").value;
    const rainfall = parseFloat(document.getElementById("rainfall").value);

    let crop = "";

    // Recommendation Logic
    if (soil === "Black Soil" && rainfall > 100) {
        crop = "Cotton 🌿";
    }
    else if (soil === "Red Soil" && season === "Monsoon") {
        crop = "Groundnut 🥜";
    }
    else if (soil === "Alluvial Soil") {
        crop = "Rice 🌾";
    }
    else if (soil === "Clay Soil") {
        crop = "Sugarcane 🍃";
    }
    else {
        crop = "Maize 🌽";
    }

    resultText.innerHTML = crop;
});