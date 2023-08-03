function type(elem) {
    elem.value = elem.value.toUpperCase();
    document.querySelector('#character-count').innerHTML = elem.value.length;
}
