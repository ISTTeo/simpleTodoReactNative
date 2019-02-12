import React from 'react';
import { Button,StyleSheet, Text, View } from 'react-native';
import todosData from "./todosData"
import TodoItem from "./TodoItem"
export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos:todosData
    }
  }


  render() {
    const todoItems = this.state.todos.map( item =>
      <TodoItem key={item.id} text={item.text}/>
    )

    return (
      <View style={styles.container}>
      <Text>This many todos: {todoItems.length}</Text>

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
