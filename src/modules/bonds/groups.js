'use strict';

class  Group{

    constructor(category,issuer,maturityDays,index){
       this.category=category;
       this.issuer=issuer;
       this.maturityDays=maturityDays;
       this.index=index;
   }

   getHash(){
       var maturityMMYYYY = this._getDaysAsMMYYY(this.maturityDays);
       return `${this.category}${this.issuer}${maturityMMYYYY}${this.index}$`;
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

module.exports = Group;