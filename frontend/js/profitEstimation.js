function calculateProfit(crop, yieldVal) {
    if (crop === "Wheat") return yieldVal * 2000;
    if (crop === "Groundnut") return yieldVal * 3000;
    return yieldVal * 1800;
}