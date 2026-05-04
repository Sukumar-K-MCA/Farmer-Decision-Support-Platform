function calculateYield(crop, land) {
    if (crop === "Wheat") return land * 20;
    if (crop === "Groundnut") return land * 15;
    return land * 25;
}