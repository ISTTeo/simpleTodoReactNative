import React, {Component} from 'react'
import { Text, View} from 'react-native'
import {Button, CheckBox} from 'react-native-elements'
function TodoItem(props) {
  if(props.item.completed) {
    return(
      <View>
        <CheckBox
          checked={props.item.completed}
          onPress={() => props.handleChange(props.item.id)}
        />
        <Text> {props.item.text} </Text>
        <Button
          title="DEL"
          onPress={() => props.handleClick(props.item.id)}
        />

      </View>

    )
  }
  else {
    return (
      <View>
        <CheckBox
          checked={props.item.completed}
          onPress={() => props.handleChange(props.item.id)}
        />
        <Text> {props.item.text} </Text>

      </View>
    )
  }

}

export default TodoItem
