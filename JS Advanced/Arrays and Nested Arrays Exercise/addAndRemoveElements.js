function addAndRemoveElements(input) {
    let i = 1;
    let newArray = []
    for (let command of input) {
        if (command === 'add') {
            newArray.push(i)
            i++
        } else {
            newArray.pop();
            i++
        }
    }

    if (newArray.length === 0) {
        console.log('Empty')
    } else {
        console.log(newArray.join('\n'))

    }

}
addAndRemoveElements(['add',
    'add',
    'add',
    'add'
]);
addAndRemoveElements(['add',
    'add',
    'remove',
    'add',
    'add'
]);
addAndRemoveElements(['remove',
    'remove',
    'remove'
]);