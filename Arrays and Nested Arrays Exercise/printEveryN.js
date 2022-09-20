function printEveryN(string, num) {

    let newArray = []
    for (let i = 0; i < string.length; i += num) {
        newArray.push(string[i]);
    }

    return newArray;
}

console.log(printEveryN)
printEveryN(['5',
        '20',
        '31',
        '4',
        '20'
    ],
    2
)
printEveryN(['dsa',
        'asd',
        'test',
        'tset'
    ],
    2
)