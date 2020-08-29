import React,{Component} from 'react';
import {Text,View,StyleSheet,RefreshControl,ToastAndroid,ScrollView,SafeAreaView} from 'react-native';
import { API_KEY } from '../utils/WeatherAPIKey';
import Weather from './weather';
import {Loading} from './LoadingComponent'
import {Button} from 'react-native-elements'
export default class Main extends Component{
    constructor(props){
        super(props)
      
      this.state = {
      isLoading: true,
      temperature: 0,
      weatherCondition: null,
      error: null,
      name: null,
      feels:null,
      refreshing:false,
      lat:0,
      long:0
    };
    }
    componentDidMount() {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.fetchWeather(position.coords.latitude, position.coords.longitude);
          this.setState({lat:position.coords.latitude,long:position.coords.longitude})
        },
        error => {
          this.setState({
            error: 'Error Getting Weather Condtions'
          });
        }
      );
    }
  
    fetchWeather(lat, lon) {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
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
    onRefresh = ()=>{
      this.setState=({
        refreshing:true
      })
      this.componentDidMount()
    };
    render() {
      const { isLoading, weatherCondition, temperature ,name,feels} = this.state;
      return (
        <>
          {isLoading ? (
            <Loading />
          ) : (
        <ScrollView 
       
        refreshControl={<RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />}>
        <View style={styles.container} >
        
            <Weather weather={weatherCondition} temperature={temperature}  name={name} feels={feels}/>
          
          
        </View>
        
         </ScrollView>
         )}
         </>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      
     
    },
    loadingContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFFDE4'
    },
    loadingText: {
      fontSize: 30
    }
  });