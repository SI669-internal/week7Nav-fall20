import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

class HomeScreen extends React.Component{

  constructor(props) {
    super(props);
  }

  onFocus = () => {
    console.log('HomeScreen received focus', this.props.route);
  }

  componentDidMount() {
    console.log("HomeScreen did mount.");
    this.props.navigation.addListener(
      'focus', this.onFocus
    );
  }


  render() {
    return (
      <View style={styles.container}>

        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          })}
        />
      </View>
    );
  }
}


class DetailsScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("DetailsScreen did mount");
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Details Screen</Text>
        <Text>itemId: {this.props.route.params.itemId}</Text>
        <Text>otherParam: {this.props.route.params.otherParam}</Text>
        <Button title="Go to Home" onPress={() => 
          this.props.navigation.navigate('Home')} />
      </View>
    );
  }
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: "Overview" }}/>
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;