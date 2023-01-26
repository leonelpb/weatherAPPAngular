import { Injectable } from '@angular/core';
import {HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RootObject } from 'src/app/modules/weather.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'})


export class WeatherService {

  private API_URL = (environment).openWeather.weatherApiBaseUrl;
  
  constructor(
    private http: HttpClient
  ) { }
  
  
  
  getWeatherData(cityName:string): Observable<RootObject>{
    const params= new HttpParams()
    .set('q', cityName)
    .set('units', 'metric')
    .set('appid', environment.openWeather.key)
    return this.http.get<RootObject>(`${this.API_URL}/weather`, {params});
  }
}
