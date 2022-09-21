function townsToJSON(input) {
    let result = []
    let keys = input[0].split('|').join('').trim().split('  ');


    for (let i = 1; i < input.length; i++) {
        let info = input[i].split('|').join('').trim().split('  ');
        let obj = {};
        obj.Town = info[0];
        obj.Latitude = Number((Number(info[1])).toFixed(2));
        obj.Longitude = Number((Number(info[2])).toFixed(2));
        result.push(obj);
    }

    let resultJSON = JSON.stringify(result)

    console.log(resultJSON)
}
townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
])