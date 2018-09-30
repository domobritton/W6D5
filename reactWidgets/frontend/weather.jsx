import React from 'react';

const toQueryString = (obj) => {
  const parts = [];
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      parts.push(`${encodeURIComponent(i)}=${encodeURIComponent(obj[i])}`);
    }
  }
  return parts.join('&');
};

class Weather extends React.Component {

  constructor(props) {
    super(props);
    this.getWeather = this.getWeather.bind(this);
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.getWeather);
  }

  getWeather(position) {
    let url = 'http://api.openweathermap.org/data/2.5/weather?';
    const params = {
      lat: location.coords.latitude,
      long: location.coords.longiutude
    };
    url += toQueryString(params);
    const api = 'c1b7fb84ee830c68f338f676ec318450';
    url += `&APPID=${api}`;

    // const xmlhttp = new XMLHttpRequest();
    //
    // xmlhttp.onreadystatechange = () => {
    //     if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
    //        if (xmlhttp.status == 200) {
    //            document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
    //        }
    //        else if (xmlhttp.status == 400) {
    //           alert('There was an error 400');
    //        }
    //        else {
    //            alert('something else other than 200 was returned');
    //        }
    //     }
    // };
    //
    // xmlhttp.open("GET", "ajax_info.txt", true);
    // xmlhttp.send();
  }
}



export default Weather;
