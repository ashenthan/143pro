import React,{Component} from "react"
import {View, Text, StyleSheet, Image, TouchableOpacity,FlatList} from "react-native"
import {Header, AirbnbRating, Icon, Card} from "react-native-elements"
import {RFValue} from "react-native-responsive-fontsize"
import axios from "axios"
export default class RecommmendedArticleScreen extends Component{
  constructor(props){
    super(props)
    this.state={
      data:[]
    }
  }
  componentDidMount(){
    this.getData
  }
   timeconvert(num){
    var hours = Math.float(num/60)
    var minutes=num%60
    return "${hours}hrs ${minutes}mins"
  }
  getData=()=>{
    const url="http://localhost:5000/recommended-articles"
    axios.get(url)
    .then((async Response)=>{
      this.setState({data:response.data.data})
    })
    .catch((err)=>{
      console.log(err.message)
    })
  }
  keyExtractor=(item,index)=>{
    index.toString()
  }
  renderitems=({item,index})=>{
    return(
      <Card 
         key={`card-${index}`}
         image={{uri:item.poster_link}}
         imageProps={{resizeMode:"cover"}}
         featuredTitle={item.title}
         containerStyle={styles.cardContainer}
         featuredTitletyle={styles.title}
         featuredSubtitle={`${
           item.release_date.split("-")[0]
         }|${this.timeconvert(item.duration)}
         `}
         featuredSubtitleStyle={styles.subtitle}
      ></Card>
    )
  }
  render(){
    const {data}=this.state;
    return(
      <View
      style={styles.container}>
      <FlatList  date={data}
      keyExtractor={this.keyExtractor}
      renderItem={this.renderitems}
      />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  title: {
    color: "#fff",
    alignSelf: "flex-start",
    paddingLeft: RFValue(15),
    fontSize: RFValue(25),
    marginTop: RFValue(65)
  },
  subtitle: {
    fontWeight: "bold",
    alignSelf: "flex-start",
    paddingLeft: RFValue(15),
    fontSize: RFValue(15)
  },
  cardContainer: {
    flex: 1,
    borderRadius: RFValue(10),
    justifyContent: "center",
    height: RFValue(110),
    marginBottom: RFValue(20)
  }
});