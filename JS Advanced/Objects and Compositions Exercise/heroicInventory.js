function heroicInventory(input) {
    let basicInfo = [];
    let result = {};
    let endResult = [];
    for (let i = 0; i < input.length; i++) {
        let basicDirectory = {}
        basicInfo = input[i].split(' / ');
        basicDirectory.name = basicInfo[0];
        basicDirectory.level = Number(basicInfo[1]);
        let finalWeapon = basicInfo[2] ? basicInfo[2].split(', ') : [];
        basicDirectory.items = finalWeapon;
        result = basicDirectory
        endResult.push(basicDirectory);
    }


    console.log(JSON.stringify(endResult));
}
heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
])