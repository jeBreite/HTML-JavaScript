//funktio paikan varaamiseksi kun painetaan "Varaa" -nappia
function varaaPaikka() {
  //tyhjentää tulostuskentän, jotta aiempi ilmoitus poistuu
  document.getElementById("tulostus").innerHTML = "";
  //hakee käyttäjän syöttämän arvon
  let paikka = document.getElementById("paikka").value;
  //ehtolause, jolla ilmoitetään käyttäjälle mikäli annettu arvo on suurempi kuin sallittu
  if (paikka > 80) {
    document.getElementById("tulostus").innerHTML =
      "Haaveilemme teatterimme laajennuksesta, mutta tällä hetkellä paikkoja on vain 80. Tarkista antamasi paikkanumero!";
  }
  //ehtolause ilmoitukseen jos paikka on jo varattu
  if (
    document.getElementById("p" + paikka).style.backgroundColor ==
    "rgb(255, 51, 0)"
  ) {
    document.getElementById("tulostus").innerHTML = "Paikka on jo varattu!";
  }
  //haetaan taulukon solun id:n perusteella varattava solu ja muutetaan sen taustaväri punaiseksi
  document.getElementById("p" + paikka).style.backgroundColor =
    "rgb(255, 51, 0)";
  //tyhjennetään syöttökenttä
  document.getElementById("paikka").value = "";
}
