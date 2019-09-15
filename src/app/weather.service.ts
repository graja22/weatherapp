import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

let serviceUrl: String = 'https://api.openweathermap.org/data/2.5/weather';
let apiKey: String = 'bda76fb5dcb6b375157f2cf1e31b8c0d' ;



@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http : HttpClient) { }

  load(city: String) {
    return this.http.get(serviceUrl + '?q=' + city + '&APPID=' + apiKey);
  }
  getIconUrl(icon: String) {
    return 'http://openweathermap.org/img/w/' + icon + ".png"
  }

}
