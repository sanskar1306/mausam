import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { weatherConditions } from '../utils/WeatherConditions';
import {Tile,Card} from 'react-native-elements'
import {Im} from '../assets/png/002-weather.png'
const Weather = ({ weather, temperature,name ,feels}) => {
    if (weather != null) {
    return (
      
      <View
        style={[
          styles.weatherContainer,
          { backgroundColor: weatherConditions[weather].color }
        ]}
      >
        <Image source={require('../assets/png/004-weather.png')} style={styles.backgroundImage} />
        <View style={styles.city1}><MaterialCommunityIcons
            size={40}
            name="map-marker"
            color={'#fff'}
          /><Text style={styles.city}>{name}</Text></View>
        
        <View style={styles.headerContainer}>
          <MaterialCommunityIcons
            size={72}
            name={weatherConditions[weather].icon}
            color={'#fff'}
          />
          <Text style={styles.tempText}>{temperature}˚C</Text>
          
        </View>
       {/* <View style={{   flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',}}><Text style={styles.feel}>Feels like {feels}˚C</Text></View>  */}
        <View style={styles.bodyContainer}>
          <Text style={styles.title}>{weatherConditions[weather].title}</Text>
          <Text style={styles.subtitle}>
            {weatherConditions[weather].subtitle}
          </Text>
        </View>
        
      </View>
    );
  } else {
    return (
      <View>
        <Text>Oh no, something went wrong</Text>
      </View>
    )
  };
};

Weather.propTypes = {
  temperature: PropTypes.number.isRequired,
  weather: PropTypes.string
};

const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1,
    
    
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    marginRight:20
  },
  tempText: {
    fontSize: 72,
    color: '#fff'
  },
  bodyContainer: {
    flex: 4,
    marginTop:400,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 40
  },
  title: {
    fontSize: 60,
    color: '#fff'
  },
  subtitle: {
    fontSize: 24,
    color: '#fff'
  },
  city:{
    fontSize: 30,
    color: '#fff'

  }
  ,city1:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
   
    marginTop:30
   
  }
  ,feel:{
    fontSize:20,
    color:'#fff',
  },
  backgroundImage: {
    flex: 1,
    position:"absolute",
    resizeMode: 'contain', // or 'stretch'
    height:400,
    width:400,
    marginTop:180,
    
    
  }
});

export default Weather;
