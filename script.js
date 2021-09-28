function validatePart(element) {
  if (element.length < 3) {
    return false;
  } else {
    let acceptedSymbols = /^[а-яё -]*$/i.test(element);
    return acceptedSymbols;
  }
}

function validate() {

  var user = document.getElementById("FIO").value.trim();

  if (user.split(/[ ]+/).length != 3) {
    document.querySelector("p").classList.remove("d-none");
    document.getElementById("formContainer").classList.add("d-none");
  } else {
    user = user.split(/[ ]+/);
    user.every(validatePart);

    if (user.every(validatePart)) {
      document.querySelector("p").classList.add("d-none");
      document.getElementById("formContainer").classList.remove("d-none");

      document.forms["ValForm"]["Surname"].value = document.getElementById("modalSurname").textContent = user[0];
      document.forms["ValForm"]["Name"].value = document.getElementById("modalName").textContent = user[1];
      document.forms["ValForm"]["SecondName"].value = document.getElementById("modalSecondName").textContent = user[2];

    } else {
      document.querySelector("p").classList.remove("d-none");
      document.getElementById("formContainer").classList.add("d-none");
    }
  }
}
