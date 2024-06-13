import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weather } from '../models/weather.model';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey: string = 'd082497bfb6047c994c155849241206'; // MY Weather API key (TRIAL Ends on 26/Jun/2024)
  private apiUrl: string = 'https://api.weatherapi.com/v1';

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<Weather> {
    return this.http.get<any>(`${this.apiUrl}/forecast.json?key=${this.apiKey}&q=${city}&days=7`); //7-day forecast
  }
}
