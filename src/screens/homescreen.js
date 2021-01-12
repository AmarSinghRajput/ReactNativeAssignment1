import React, {Component} from 'react';
import {
  Alert,
  View,
  SafeAreaView,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
const deviceWidth = Dimensions.get.deviceWidth;
import {FlatList} from 'react-native-gesture-handler';
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      invites: [
        {name: 'HHH', avatarPic: require('../../assets/avatar.jpg')},
        {name: 'Rock', avatarPic: require('../../assets/avatar.jpg')},
        {name: 'Rey', avatarPic: require('../../assets/avatar.jpg')},
        {name: 'Randy', avatarPic: require('../../assets/avatar.jpg')},
        {name: 'JBL', avatarPic: require('../../assets/avatar.jpg')},
        {name: 'Carlito', avatarPic: require('../../assets/avatar.jpg')},
        {name: 'Undertaker', avatarPic: require('../../assets/avatar.jpg')},
        {name: 'Khali', avatarPic: require('../../assets/avatar.jpg')},
      ],
      locations: [
        {name: 'Maxico', avatarPic: require('../../assets/streets.jpg')},
        {name: 'Italy', avatarPic: require('../../assets/location.jpg')},
        {name: 'italy', avatarPic: require('../../assets/italy.jpg')},
      ],
    };
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={homestyles.containerViewStyle}>
          <View
            style={{
              flexDirection: 'row',
              height: 40,
              justifyContent: 'space-between',
            }}>
            <Text style={homestyles.headingStyle}>Travelling to?</Text>
            <Image
              style={{
                alignSelf: 'flex-end',
                marginRight: 24,
                marginTop: 16,
              }}
              source={require('../../assets/searchIcon.png')}
            />
          </View>
          <TextInput style={homestyles.textInputStyle}>
            Enter a name of the city you're travelling to...
          </TextInput>
          <Text style={homestyles.headingStyle}>
            Invites + {console.log(this.state.invites[2].name)}
          </Text>
          <FlatList
            style={homestyles.invitesStyle}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(invites) => invites.name}
            data={this.state.invites}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    flexDirection: 'column',
                  }}>
                  <Image
                    style={{
                      alignSelf: 'center',
                      borderRadius: 30,
                      width: 60,
                      height: 60,
                      marginRight: 10,
                    }}
                    source={item.avatarPic}
                  />
                  <Text style={{alignSelf: 'center', marginRight: 10}}>
                    {item.name}
                  </Text>
                </View>
              );
            }}
          />
          <Text style={homestyles.headingStyle}>Popular Desitnations</Text>
          <FlatList
            style={homestyles.invitesStyle}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(invites) => invites.name}
            data={this.state.locations}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    flexDirection: 'column',
                  }}>
                  <Image
                    style={{
                      alignSelf: 'center',
                      borderRadius: 10,
                      width: 180,
                      height: 300,
                      marginRight: 10,
                    }}
                    source={item.avatarPic}
                  />
                  <Text style={{alignSelf: 'center', marginRight: 10}}>
                    {item.name}
                  </Text>
                </View>
              );
            }}
          />
          <Text style={homestyles.headingStyle}>Travelers near you!</Text>
          <FlatList
            style={homestyles.invitesStyle}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(invites) => invites.name}
            data={this.state.invites}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    flexDirection: 'column',
                  }}>
                  <Image
                    style={{
                      alignSelf: 'center',
                      borderRadius: 30,
                      width: 60,
                      height: 60,
                      marginRight: 10,
                    }}
                    source={item.avatarPic}
                  />
                  <Text style={{alignSelf: 'center', marginRight: 10}}>
                    {item.name}
                  </Text>
                </View>
              );
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const homestyles = StyleSheet.create({
  containerViewStyle: {
    flex: 1,
  },
  textInputStyle: {
    marginTop: 12,
    marginLeft: 12,
    marginRight: 12,
    height: 60,
    fontSize: 12,
    paddingHorizontal: 8,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  innerViewStyle: {
    flexDirection: 'row',
    marginLeft: 24,
    marginRight: 24,
    marginTop: 40,
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 80,
  },
  touchableStyles: {
    borderRadius: 5,
    alignSelf: 'center',
    backgroundColor: 'blue',
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
    // flexDirection: 'column',
    marginTop: 16,
    marginLeft: 16,
  },
  headingStyle: {
    fontFamily: 'Roboto-Bold',
    marginLeft: 24,
    marginTop: 8,
    fontSize: 20,
  },
  invitesStyle: {
    marginTop: 24,
    marginLeft: 24,
    marginRight: 24,
    alignContent: 'stretch',
    position: 'relative',
    flexGrow: 0,
    // backgroundColor: 'yellow',
  },
});
export default HomeScreen;
