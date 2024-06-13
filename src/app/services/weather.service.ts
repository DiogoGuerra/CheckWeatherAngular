import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey: string = 'd082497bfb6047c994c155849241206'; // MY Weather API key (TRIAL Ends on 26/Jun/2024)
  private apiUrl: string = 'https://api.weatherapi.com/v1';

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<any> {
    const url = `${this.apiUrl}/current.json?key=${this.apiKey}&q=${city}`;
    return this.http.get<any>(url);
  }
}
