import { Component, ViewChild } from '@angular/core';
import { SearchbarComponent } from '../../UI/searchbar/searchbar.component';
import { WeatherService } from 'src/app/services/weather.service';
import { Weather } from 'src/app/models/weather.model';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})


export class DashboardComponent {
  @ViewChild(SearchbarComponent) searchBarComponent!: SearchbarComponent;
  weatherData: Weather | null = null;
  errorMessage: string | null = null; 
  

  toggleForm: FormGroup;
  unitControl: FormControl;

  //Placeholder for search bar
  searchBarPlaceholder = 'Check the weather in your city';


  constructor(private formBuilder: FormBuilder, private weatherService: WeatherService) { 
    this.unitControl = new FormControl(1); // 1 - Celsius  2 - Fahrenheit
    this.toggleForm = this.formBuilder.group({
      unit: this.unitControl
    });
  }

  
  handleSearch(searchText: string): void {
    this.weatherService.getWeather(searchText).subscribe(
      data => {
        this.errorMessage = null;
        this.weatherData = data;
        console.log('Weather data:', this.weatherData);
      },
      error => {
        // console.error('Error fetching weather data:', error);
        this.weatherData = null;
        this.errorMessage = 'Please check your city name and try again.'; 
      }
    );
  }

  

  getTemperature(tempC: number, tempF: number): number {
    return this.unitControl.value === 1 ? tempC : tempF;
  }
}
