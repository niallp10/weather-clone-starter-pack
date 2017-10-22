window.onload=function(){
  var weatherImage=document.getElementById("weatherImage")
  var weatherDescription=document.getElementById("weatherDescription")
  var weatherMain=document.getElementById("weatherMain")
  var weatherHumidity=document.getElementById("weatherHumidity")
  var weatherTemperature=document.getElementById("weatherTemperature")
  var userinput = document.getElementById("cityInput")
  var button = document.getElementById("button");

  function popupbox2(){
    console.log("error");
    var city = document.getElementById("cityInput").value

    var xhr = new XMLHttpRequest();
    var api_url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&APIID=c1876669c9f30f8ad2fa17e20eb7ce7d";
    xhr.open("GET",api_url,true);
    xhr.onload = function (e){
      if (xhr.readyState === 4){
        if (xhr.status === 200){
          console.log('responseText: ',xhr.responseText)
          var data = JSON.parse(xhr.responseText);
          console.log('data: ', data);
       } else {
         console.log(xhr.statusText);
         console.error(xhr.statusText);
       }
     }
    };
    xhr.onerror = function (e){
      console.error(xhr.statusText);
    };
  xhr.send(null);
  }
button.addEventListener("click",popupbox2);

}
