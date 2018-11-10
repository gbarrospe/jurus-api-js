'use strict';

class  GerencialGroup{

    constructor(tipo,emissor,vencimentoDC,indexador){
       this.tipo=tipo;
       this.emissor=emissor;
       this.vencimentoDC=vencimentoDC;
       this.indexador=indexador;
   }

   getHash(){
        var vencMMYYYY = this._getDaysAsMMYYY(this.vencimentoDC) 

       return `${this.tipo}${this.emissor}${vencMMYYYY}${this.indexador}$` 
   }

   _getDaysAsMMYYY(days){
        var date = new Date();
        date.setDate(date.getDate() + days);
        var yy = date.getFullYear();
        var mm = date.getMonth()+1;
        var mmyyyy = `${mm}/${yy}`;
        return mmyyyy;
   }


}

module.exports = GerencialGroup;