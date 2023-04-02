import React from "react"
import Homescreen from "./screens/home"
import Popular from "./screens/popular"
import Recommended from "./screens/recommended"
import {createAppContainer} from "react-navigation"
import {createStackNavigator} from "react-navigation-stack"
import {createMaterialTopTabNavigator} from "react-navigation-tabs"
import {RFValue} from "react-native-responsive-fontsize"
export default function App (){
  return <Homescreen/>
}
const AppTopNavigation=createMaterialTopTabNavigator({
  RecommendedArticles:{
    screen:Recommended,
    navigationOptions:{
      tabBarLabel:"Recommended",
      tabBarOptions:{
        tabStyle:{background:"#fff"},
        labelStyle:{color:"#000"},
        indicatorStyle:{backgroundColor:"#000"}
      }
    }
  },
  PopularArticles:{
    screen:Popular,
    navigationOptions:{
      tabBarLabel:"Popular",
      tabBarOptions:{
        tabStyle:{background:"#fff"},
        labelStyle:{color:"#000"},
        indicatorStyle:{backgroundColor:"#000"}
      }
    }  }
})
const AppStackNavigator=createStackNavigator({
  Home:{
    screen:Homescreen,
    navigationOptions:{
      headerBackTitle:null, 
      headerTintColor:"#fff",
      headerTitle:"Recommended Articles",
      headerStyle:{
        backgroundColor:"#b500f9"
      },
      headerTitleStyle:{
        color:"#fff",
        fontWeight:"bold",
        fontSize:RFValue(18)
      }
    }
  }
  },
  {initialRouteName:"Home"}
);
const AppContainer=createAppContainer(AppStackNavigator)
