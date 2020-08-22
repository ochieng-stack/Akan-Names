function getAkanName(){
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", " Yaa", "Afua", "Ama" ];
var myBirthday = document.getElementsById("myBirthDate").value;
var dateofBirth = new Date(myBirthday);
var myGender = document.getElementsByName("gender");
var dayofTheWeek = dateOfBirth.getDay();
}

function calculateDayValue() {
    CC = parseInt(document.getElementById("century").value);
    YY = parseInt(document.getElementById("year").value);
    year = document.getElementById("year").value;
    CC = parseInt(year.substring(0, 2));
    YY = parseInt(year.substring(2, 4));
    MM = parseInt(document.getElementById("month").value);
    DD = parseInt(document.getElementById("date").value);
    d = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;
    console.log(d);
    return (Math.floor(d));
}
