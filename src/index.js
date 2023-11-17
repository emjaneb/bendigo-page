document.querySelector(".learnMore").addEventListener("click", function () {
  let name = prompt("What is your name?");
  name = name.trim();
  if (name !== null) {
    if (name.length === 0) {
      alert("Please try entering your name again.");
    } else {
      let email = prompt("Thanks " + name + "! What is your email?");
      email = email.toLowerCase().trim();
      if (email !== null) {
        if (email.length === 0) {
          alert("Please try entering your email again.");
        } else {
          alert("Thanks " + name + "! We will be in touch soon!");
        }
      } else {
        alert("Please try entering your details again.");
      }
    }
  } else {
    alert("Please try entering your details again.");
  }
});
