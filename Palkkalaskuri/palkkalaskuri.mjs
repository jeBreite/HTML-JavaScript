// olio palkka
var palkka = {
  // ominaisuudet
  tunnit: 0,
  tuntipalkka: 0,
  // metodi palkan laskemiseksi
  laskePalkka: function () {
    return "Kokonaispalkka " + this.tunnit * this.tuntipalkka + " €";
  },
};
/*sama muodostimella
function Palkkalaskuri(x,y) {
    this.x = x;
    this.y = y;
    this.laskePalkka = function(){
        return this.x * this.y;
    }
} */
