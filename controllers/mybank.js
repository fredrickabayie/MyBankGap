/**
 * Created by fredrickabayie on 02/12/2015.
 */

function sendRequest ( url ) {
    var request, response;
    request = $.ajax({url:url, async:false});
    response = $.parseJSON(request.responseText);
    return response;
}




$( function () {
   $("#addLocation_btn").click(function () {

       var longitude, latitude, bank, area, bankSelect, selectedBank, typeSelect, selectedType, url, response;

       longitude = encodeURI(document.getElementById("longitudeVal").value);
       latitude = encodeURI(document.getElementById("latitudeVal").value);
       bankSelect = document.getElementById("selected-bank");
       selectedBank = encodeURI(bankSelect.options[bankSelect.selectedIndex].text);
       area = encodeURI(document.getElementById("areaName").value);
       typeSelect = document.getElementById("selected-type");
       selectedType = encodeURI(typeSelect.options[typeSelect.selectedIndex].text);

       url = "http://cs.ashesi.edu.gh/~csashesi/class2016/fredrick-abayie/mobileweb/mybank/php/mybank.php" +
           "?cmd=add_location&bankName="+selectedBank+"&longitude="+longitude+"&latitude="+latitude+"&areaName="+area+"" +
           "&type="+selectedType;

       console.log(url);

       response = sendRequest(url);
       if (response.result === 1) {
           alert(""+response.status);
           //document.getElementById("notification").textContent = response.status;
       } else {
           alert(""+response.status);
           //document.getElementById("notification").textContent = response.status;
       }
   });
});

$(document).ready(function() {
    $('select').material_select();
});