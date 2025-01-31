// const input = document.querySelectorAll("input");
// function error(tag, message, valid) {
//   let container = document.querySelector("." + tag + "-container");
//   let span = document.querySelector("." + tag + "-container > span ");

//   if (!valid) {
//     container.classList.add("error");
//   } else {
//     container.classList.remove("error");
//     span.textContent = message;
//   }
// }

// function nom(value) {
//   if ((value.length > 0 && value.length < 3) || value.length > 20) {
//     error("nom", "Le nom doit faire entre 3 et 20 caractères");
//   } else if(!value.match(/^[a-zA-Z0-9-_.]*$/)){
//   }
//   else {
//     error("nom", "", true);
//   }
// }

// function prenom(value) {}

// function password(value) {}

// function email(value) {}

// function genreMen(value) {}

// function genreFemme(value) {}

// function date(value) {}

// function enregistrer(value) {}

// function Button() {}

// input.forEach((input) => {
//   input.addEventListener("input", (e) => {
//     switch (e.target.id) {
//       case "nom":
//         nom(e.target.value);
//         break;

//       case "prenom":
//         prenom(e.target.value);
//         break;

//       case "password":
//         password(e.target.value);
//         break;

//       case "email":
//         email(e.target.value);
//         break;

//       case "genreMen":
//         genreMen(e.target.value);
//         break;

//       case "genreFemme":
//         genreFemme(e.target.value);
//         break;

//       case "date":
//         date(e.target.id);
//         break;
//       default:
//         break;
//     }
//   });
// });
