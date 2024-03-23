//konstruktori
function AsuntoMuodostin(kn,os,ht,pa) {
    this.kn = kn;
    this.os = os;
    this.ht = ht;
    this.pa = pa;
    this.laskeNelioHinta = function(){ //metodi
        return this.ht / this.pa;
    }
}
//funktio taulukon läpikäyntiä ja hakua varten
function kayLapiAsunnot(taulukko, indeksi, haku) {
    for (var i = 0; i < taulukko.length; i++) {
        if (taulukko[i][indeksi] === haku) {
            return taulukko[i];
        }
    }
    return -1;
}

