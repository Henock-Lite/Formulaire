const input = document.querySelectorAll("input");

function nom(value) {}

function prenom(value) {}

function password(value) {}

function email(value) {}

function genreMen(value) {}

function genreFemme(value) {}

function date(value) {}

function enregistrer(value) {}


function Button(){}

input.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "nom":
        nom(e.target.value);
        break;

      case "prenom":
        prenom(e.target.value);
        break;

      case "password":
        password(e.target.value);
        break;

      case "email":
        email(e.target.value);
        break;

      case "genreMen":
        genreMen(e.target.value);
        break;

      case "genreFemme":
        genreFemme(e.target.value);
        break;

      case "date":
        date(e.target.id);
        break;
    }
  });
});
