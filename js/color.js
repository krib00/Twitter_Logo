function colorSwitch(primary) {
  const root = document.documentElement; // Reference the :root element
  root.style.setProperty('--twitterC', primary);
  bezier(primary);
}

function credit() {
  swal("Credits", "Made by: Kristijan Boben\nProfessor: Boštjan Vouk\nMade with: Html, CSS, JavaScript\nGithub: Click here!", "info");
}
