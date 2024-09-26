import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const CustomTextInput = ({placeholder, secureTextEntry = false}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#A4A4A4"
      secureTextEntry={secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '90%',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#3A3A58',
    color: 'white',
    marginBottom: 15,
    fontSize: 16,
  },
});

export default CustomTextInput;
