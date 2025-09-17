const form = document.getElementById("contactForm");
const nom = document.getElementById("nom");
const email = document.getElementById("email");
const telephone = document.getElementById("telephone");
const typeD = document.getElementById("typeD");
const sujet = document.getElementById("sujet");
const ville = document.getElementById("ville");
const pays = document.getElementById("pays");
const message = document.getElementById("message");

function setError(element, message) {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error-message");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
}

function setSuccess(element) {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error-message");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
}

const validateForm = () => {
  let noError = true;

  if (nom.value.trim() === "") {
    setError(nom, "Veuillez entrer votre nom.");
    noError = false;
  } else setSuccess(nom);

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email.value.trim())) {
    setError(email, "Veuillez entrer un email valide.");
    noError = false;
  } else setSuccess(email);

  const phoneRegex = /^[0-9]{8,}$/;
  if (!phoneRegex.test(telephone.value.trim())) {
    setError(
      telephone,
      "Veuillez entrer un numéro de téléphone valide (8 chiffres minimum)."
    );
    noError = false;
  } else setSuccess(telephone);

  if (typeD.value === "") {
    setError(typeD, "Veuillez sélectionner un type de demande.");
    noError = false;
  } else setSuccess(typeD);

  if (sujet.value.trim() === "") {
    setError(sujet, "Veuillez entrer un sujet.");
    noError = false;
  } else setSuccess(sujet);

  if (ville.value.trim() === "") {
    setError(ville, "Veuillez entrer votre ville.");
    noError = false;
  } else setSuccess(ville);

  if (pays.value.trim() === "") {
    setError(pays, "Veuillez entrer votre pays.");
    noError = false;
  } else setSuccess(pays);

  if (message.value.trim().length < 10) {
    setError(message, "Votre message doit contenir au moins 10 caractères.");
    noError = false;
  } else setSuccess(message);

  return noError;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (validateForm()) {
    alert("Envío exitoso!");
    form.reset();
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }
});
