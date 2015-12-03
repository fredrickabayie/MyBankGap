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


$(function () {
   $(".viewLocation").click(function () {
       var url, response, index, li = "";

       url = "http://cs.ashesi.edu.gh/~csashesi/class2016/fredrick-abayie/mobileweb/mybank/php/mybank.php?cmd=view_locations";

       response = sendRequest(url);

       if (response.result === 1) {
            for (index in response.locations) {
                li += '<li class="collection-item avatar">';
                li += '<img src="images/yuna.jpg" alt="" class="circle">';
                li += '<span class="title">'+response.locations[index].area_name+'</span>';
                li += '<p>'+response.locations[index].latitude+', '+response.locations[index].longitude+'<br>';
                li += 'Type, Bank</p>';
                li += '<a href="https://www.google.com.gh/maps/@5.7549425,-0.2022392,15z?hl=en" class="secondary-content">';
                li += '<i class="material-icons">location_on</i>';
                li += '</a></li>';
            }
           $("#view").html(li);
       }
       //<li class="collection-item avatar">
       //    <img src="images/yuna.jpg" alt="" class="circle">
       //    <span class="title">Area</span>
       //    <p>Lon, Lat <br>
       //Type, Bank
       //</p>
       //<a href="#!" class="secondary-content">
       //    <i class="material-icons">location_on</i>
       //    </a>
       //    </li>
   });
});


$(document).ready(function() {
    $('select').material_select();
});