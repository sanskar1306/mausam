import React,{Component} from 'react';
import {Text,View,StyleSheet} from 'react-native';
import { API_KEY } from '../utils/WeatherAPIKey';
import Weather from './weather';

const x={
    temperature: 0,
    weatherCondition: null,
    error: null,
    name: null,
    feels:null
}
export default class Data extends Component{
    constructor(props){
        super(props)
      
      this.state = {
      isLoading: true,
      temperature: 0,
      weatherCondition: null,
      error: null,
      name: null,
      feels:null
    };
    }
    componentDidMount(){
        this.fetchWeather()
    }
    fetchWeather() {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=Jalgaon&APPID=${API_KEY}&units=metric`
      )
        .then(res => res.json())
        .then(json => {
           console.log(json);
          this.setState({
            temperature: json.main.temp,
            weatherCondition: json.weather[0].main,
            isLoading: false,
            name: json.name,
            feels:json.main.feels_like
          });
        });
    }
  
    render() {
      const { isLoading, weatherCondition, temperature ,name,feels} = this.state;
      x={
        temperature: temperature,
        weatherCondition: weatherCondition,
        name: name,
        feels:feels
      }
      return (
        x
      );
    }
  }
  
  