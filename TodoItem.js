import React, {Component} from 'react'
import { Text, View} from 'react-native'
import {Button} from 'react-native-elements'
function TodoItem(props) {
  return(
    <View>
    <Button title={props.text} />
    </View>
  )
}

export default TodoItem
