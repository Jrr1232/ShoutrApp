function inputCharacter (elem) { // eslint-disable-line no-unused-vars
  elem.value = elem.value.toUpperCase();
  const characterCount = elem.value.length;
  document.querySelector("#character-count").innerHTML = characterCount;
}

async function createNewShout() { // eslint-disable-line no-unused-vars
  const shoutText = document.querySelector("#new-shout").value;
  const response = await fetch("/api/shout", {
    method: "POST",
    body: JSON.stringify({ user_id, shoutText }),
    headers: { "Content-Type": "application/json" }
  });
}