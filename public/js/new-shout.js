function inputCharacter (elem) { // eslint-disable-line no-unused-vars
  elem.value = elem.value.toUpperCase();
  const characterCount = elem.value.length;
  document.querySelector("#character-count").innerHTML = characterCount;
}

const postNewShout = async (event) => {
  event.preventDefault();

  const text = document.querySelector("#new-shout").value.trim();

  if (text) {
    const response = await fetch("/api/shouts", {
      method: "POST",
      body: JSON.stringify({
        user_id: 4,
        text
      }),
      headers: { "Content-Type": "application/json" }
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to post new Shout");
    }
  }
};

document
  .querySelector(".new-shout-form")
  .addEventListener("submit", postNewShout);
