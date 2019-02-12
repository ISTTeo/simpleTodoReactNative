import React, {Component} from 'react'
import { Text, View} from 'react-native'
import {Button} from 'react-native-elements'
function TodoItem(props) {
  return(
    <View>

      <Text> {props.item.text} </Text>
      <Button
      title="DEL"
      onPress={() => props.handleClick(props.item.id)}
      />

    </View>

  )
}

export default TodoItem
