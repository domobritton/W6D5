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
    this.state = {
      weather: null

    };
    this.error = '';
    this.getWeather = this.getWeather.bind(this);
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.getWeather);
  }

  getWeather(location) {
    let url = 'http://api.openweathermap.org/data/2.5/weather?';
    const params = {
      lat: location.coords.latitude,
      lon: location.coords.longitude
    };
    url += toQueryString(params);
    const api = 'c1b7fb84ee830c68f338f676ec318450';
    url += `&APPID=${api}`;

    const xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = () => {
        if (xmlhttp.readyState === XMLHttpRequest.DONE) {
           if (xmlhttp.status === 200) {
            const data = JSON.parse(xmlhttp.responseText);
            this.setState({weather: data});
           }
           else if (xmlhttp.status === 400) {
              this.error = 'There was an error 400';
           }
           else {
              this.error = 'something else other than 200 was returned';
           }
        }
    };

    xmlhttp.open('GET', url, true);
    xmlhttp.send();
  }

  render() {
    let content = <div></div>;
    if (this.state.weather) {
      console.log(this.state.weather);
      const weather = this.state.weather;
      const temp = (weather.main.temp - 273.15) * 1.8 + 32;
      const code = weather.weather[0].id;
      const klass = `owf owf-${code} owf-3x`;
      const conditions = weather.weather[0].description;
      content =   <div>
                    <h4>Weather</h4>
                    <span><i className={klass}></i></span>
                    <p>{weather.name}</p>
                    <p>{temp.toFixed(1)}degrees</p>
                    <p>{conditions}</p>
                    <p>{this.error}</p>
                  </div>;
    }
    return (
      <div className = 'weatherDiv'>
        {content}
      </div>
    );
  }
}



export default Weather;
