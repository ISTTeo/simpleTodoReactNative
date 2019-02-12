import React from 'react';
import {  Text, View, TextInput } from 'react-native'

function TodoForm(props) {

  return (
    <View>
      <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onSubmitEditing = {(text) => props.formFunction(text)}
      />
    </View>
  )
}

export default TodoForm
