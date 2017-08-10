/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  RefreshControl,
  ScrollView,
  SegmentedControlIOS,
  View
} from 'react-native';

export default class RnScrollView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      selectedIndex:0
    };
  }

  _onRefresh() {
    this.setState({refreshing: true});
    setTimeout(()=>{
      this.setState({refreshing: false});
    },1000);
  }

  render() {
    return (
      <ScrollView 
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            title="pull to refresh..."
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)}
          />
        }
      contentContainerStyle={styles.container}>

      <SegmentedControlIOS
        style={{ width:'80%'}}
        values={['One', 'Two']}
        selectedIndex={this.state.selectedIndex}
        onChange={(event) => {
          this.setState({selectedIndex: event.nativeEvent.selectedSegmentIndex});
        }}
      />
        <Text style={styles.welcome}>
          Welcome to React Native! -> {this.state.selectedIndex}
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('RnScrollView', () => RnScrollView);
