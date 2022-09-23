function editElement(ref, match, replacer) {
    let element = ref.textContent;
    let matcher = new RegExp(match, 'g');
    let edited = element.replace(matcher, replacer)
    ref.textContent = edited;
}