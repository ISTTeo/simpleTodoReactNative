import React from 'react';
import { Button,StyleSheet, Text, View } from 'react-native';
import todosData from "./todosData"
import TodoItem from "./TodoItem"
export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      count:0,
      todos:todosData
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }

  render() {
    const todoItems = this.state.todos.map( item =>
      <TodoItem key={item.id} text={item.text}/>

    )

    return (
      <View style={styles.container}>
      <Text>Hello World!</Text>
      <Text>This many clicks: {this.state.count}</Text>
      <Button
        onPress = {this.handleClick}
        title="Click"
        color="#841584"
        accessibilityLabel="ClickClickClick"
      />
      {todoItems}
      </View>
    )
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
