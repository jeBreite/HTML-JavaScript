function hetunTarkistus(hetu) {
  //alustetaan taulukko
  let array = [];
  array = hetu;
  //pyöritellään taulukosta vuosiluvut
  let vuosi1 = hetu[4];
  let vuosi2 = hetu[5];
  let vuosi = vuosi1 + vuosi2;
  vuosi = Number(vuosi);
  //ehtolause
  if (vuosi < 95) {
    return true;
  } else {
    return false;
  }
}
