function pieceOfPie(list, start, end) {
    let startIndex = list.indexOf(start);
    let endIndex = list.indexOf(end);
    let newList = list.slice(startIndex, endIndex + 1);
    console.log(newList);
}
pieceOfPie(['Pumpkin Pie',
        'Key Lime Pie',
        'Cherry Pie',
        'Lemon Meringue Pie',
        'Sugar Cream Pie'
    ],
    'Key Lime Pie',
    'Lemon Meringue Pie'
);
pieceOfPie(['Apple Crisp',
        'Mississippi Mud Pie',
        'Pot Pie',
        'Steak and Cheese Pie',
        'Butter Chicken Pie',
        'Smoked Fish Pie'
    ],
    'Pot Pie',
    'Smoked Fish Pie'
);