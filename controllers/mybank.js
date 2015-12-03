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

       var longitude, latitude, bank, area, type, url, response;

       longitude = encodeURI(document.getElementById("longitudeVal").value);
       latitude = encodeURI(document.getElementById("latitudeVal").value);
       bank = encodeURI(document.getElementById("selected-bank").textContent);
       area = encodeURI(document.getElementById("areaName").value);
       type = encodeURI(document.getElementById("selected-type").textContent);

       url = "http://cs.ashesi.edu.gh/~csashesi/class2016/fredrick-abayie/mobileweb/mybank/php/mybank.php" +
           "?cmd=add_location&bankName="+bank+"&longitude="+longitude+"&latitude="+latitude+"&areaName="+area+"" +
           "&type="+type;

       console.log(url);

       response = sendRequest(url);
       if (response.result === 1) {
           //alert(""+response.status);
           document.getElementById("notification").textContent = response.status;
       } else {
           //alert(""+response.status);
           document.getElementById("notification").textContent = response.status;
       }
   });
});