const listStudents = [
  {
    urlAvatar: "https://lms.ithillel.ua/uploads/images/885d3b77fc0d39a12aad31af709b9bd6.jpg",
    userName: "Антон",
    userSurname: "Чебикін",
    numberOfHomeworks: 7,
    scores: 698,
  },
  {
    urlAvatar: "https://lms.ithillel.ua/uploads/images/e6ef3cc070c3d4c97a46f984b94e3436.jpg",
    userName: "Mukhatasov",
    userSurname: "Borys",
    numberOfHomeworks: 7,
    scores: 697,
  },
  {
    urlAvatar: "https://lms.ithillel.ua/uploads/images/d1b3870e354c2d9668b8cd64e63bbf37.jpg",
    userName: "Kushniruk",
    userSurname: "Oleksandra",
    numberOfHomeworks: 7,
    scores: 687,
  },
  {
    urlAvatar: "https://lms.ithillel.ua/uploads/images/7e0475ff04937622a8aa27a8d38be520.jpg",
    userName: "Odintsov",
    userSurname: "Oleksandr",
    numberOfHomeworks: 7,
    scores: 680,
  },
  {
    urlAvatar: "https://lms.ithillel.ua/uploads/images/0fd3a6a4e07969f0dcb87452a6ba2d5f.jpg",
    userName: "Vashchenko",
    userSurname: "David",
    numberOfHomeworks: 7,
    scores: 765,
  },
  {
    urlAvatar: "https://lms.ithillel.ua/uploads/images/5d6a97aefe779d59786a11f9063d1ff0.jpg",
    userName: "Oleksandr",
    userSurname: "Yaremenko",
    numberOfHomeworks: 7,
    scores: 657,
  },
  {
    urlAvatar: "https://lms.ithillel.ua/uploads/images/b86e405b95a95b5011f856ad81f4c6a5.jpg",
    userName: "Антон",
    userSurname: "Сквирский",
    numberOfHomeworks: 7,
    scores: 648,
  }
]

listStudents.forEach(function (element) {
  document.getElementById("table").insertAdjacentHTML(
    "beforeEnd",
    `
    <tr>
    <td><img src=${element.urlAvatar} alt=""></td>
    <td>  
      <div>${element.userName}</div>
      <div>${element.userSurname}</div>
    </td>
    <td>
      <div>${element.numberOfHomeworks}</div>
      <div>${element.scores}</div>
    </td>
  </tr> 
    `
  );
});
