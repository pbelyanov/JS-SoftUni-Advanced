function constructionCrew(input) {
    let neededWater = 0;
    if (input.dizziness) {
        neededWater = ((input.weight * 0.1) * input.experience);
        input.levelOfHydrated += neededWater;
        input.dizziness = false;
    }

    console.log(input);
}
constructionCrew({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
})