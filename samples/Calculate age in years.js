/**
 * Return the difference between a birthdate and an optional "now" date, in years
 * 
 * @param {Date} birthDate
 * @param {Date} nowDate
 * @return  {Number}
 */
function getAge(birthDate, nowDate) {
  var birth=birthDate;
  var now=nowDate|| new Date();
  var dif=now-birth;
  var s=365;
  if(birthDate.getMonth()===1&&nowDate.getMonth()===1&&birthDate.getDate()){
    s=366;
  }
    var val=Math.floor((dif)/1000/60/60/24/s);
    else alert(val);
  
  }


getAge(new Date('1980/01/01')) === 33 // assuming today's date is 2013/08/01
getAge(new Date('1913/01/01'), new Date('2013/01/01')) === 100
getAge(new Date('2008/02/29'), new Date('2032/03/01')) === 24
getAge(new Date('2008/01/01'), new Date('2000/01/01')) === -8