// skatteberegner
function getSelectValue()
{
    var selectedValue = document.getElementById("list").value;
    console.log(selectedValue);
}
getSelectValue();

function myFunction() {
    var lon = document.getElementById("penge").value;
    var selectedValue = document.getElementById("list").value;
    var name = document.getElementById("navn").value;
    var eNavn = document.getElementById("efternavn").value;
    var penge = document.getElementById("penge").value;

    var result = lon * selectedValue;

    document.getElementById("demo").innerHTML = "du, " + name + " " + eNavn + " skal betale " + result + "KR " + "i skat ud af din løn på, " + penge; ;
}