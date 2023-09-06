import { StyleSheet, TextInput, View, Button } from "react-native"
import React from "react"

const AddItem = ({ onChange, textValue, onAddItem }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Agrega tu partido dirigido"
        style={styles.addItemInput}
        onChangeText={onChange}
        value={textValue}
      />
      <Button style={styles.buttonStyle} title="Add" onPress={onAddItem} />
    </View>
  )
}

export default AddItem

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addItemInput: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 10,
    width: "80%",
    height: 45,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  buttonStyle: {
    borderRadius: 14,
    Color: "green",

  },
})