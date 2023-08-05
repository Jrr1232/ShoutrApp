function inputCharacter (elem) { // eslint-disable-line no-unused-vars
  elem.value = elem.value.toUpperCase();
  const characterCount = elem.value.length;
  document.querySelector("#character-count").innerHTML = characterCount;
}
