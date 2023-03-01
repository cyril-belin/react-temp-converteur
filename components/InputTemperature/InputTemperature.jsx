import { View, Text, TextInput } from 'react-native'
import { s } from "./InputTemperature.style"

export default function InputTemperature({defaultValue, onChangeText, unit }) {
  return (
  <View style={s.container}>
  <TextInput
     style={ s.input } 
     placeholder='Tappe une Temperature' 
     keyboardType='numeric'
     maxLength={4}
     defaultValue ={defaultValue}
     onChangeText ={onChangeText}
     />
      <Text style={s.unit}>{unit}</Text>
    </View>
  );
}