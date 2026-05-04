function recommendCrop(soil, season, rainfall) {
    if (soil === "Loamy" && season === "Winter" && rainfall > 50) {
        return "Wheat";
    } else if (soil === "Sandy" && season === "Summer") {
        return "Groundnut";
    } else {
        return "Rice";
    }
}