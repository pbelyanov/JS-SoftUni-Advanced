function sortBy2Criteria(string) {
    string.sort();
    string.sort((a, b) => a.length - b.length);
    console.log(string.join('\n'))
}
sortBy2Criteria(['alpha',
    'beta',
    'gamma'
]);
sortBy2Criteria(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George'
]);
sortBy2Criteria(['test',
    'Deny',
    'omen',
    'Default'
]);