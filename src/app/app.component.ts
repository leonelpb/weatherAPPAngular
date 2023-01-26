import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RootObject } from './modules/weather.model';
import { WeatherService } from './services/weather.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

 

  constructor(private weatherService: WeatherService ){
  }

  cityName:string='Caracas';
  weatherData?:RootObject;

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  onSubmit(){
    this.getWeatherData(this.cityName);
    return this.cityName = '';
  }

  private getWeatherData(cityName:string){
    this.weatherService.getWeatherData(this.cityName)
.subscribe({
 next: (response:RootObject) => {
   this.weatherData = response;
   console.log(response);
 }
});
  }
  title = 'weatherApp';
}
