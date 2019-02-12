import React, {Component} from 'react'
import { Text, View} from 'react-native'
function TodoItem(props) {
  return(
    <View>
      <Text> {props.text} </Text>
    </View>
  )
}

export default TodoItem
