module.exports = function RetornaDataHora(){
    
       const dNow = new Date();
       const localdate = dNow.getFullYear() + '-' 
       + (dNow.getMonth()+1) + '-' 
       + dNow.getDay() + ' ' 
       + dNow.getHours() + ':' 
       + dNow.getMinutes() + ':'
       + dNow.getSeconds();

       return localdate;
   
};