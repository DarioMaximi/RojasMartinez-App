import React, { useState } from "react"
import { StyleSheet, Text, View, Button, FlatList } from "react-native"
import Modal from "./src/Modal"
import AddItem from "./src/AddItem"

export default function App() {
  const [textItem, setTextItem] = useState("")
  const [list, setList] = useState ([])
  const [itemSelected, setItemSelected]= useState("")
  const [modalVisible, setModalVisible] = useState(false)

  const onHandleChangeItem = text => {
    setTextItem(text)
  }

  const addItem = () => {
    setList(prevGame => [...prevGame, textItem])
    setTextItem("")
  }

  const handleModal = (item) => {
    setItemSelected(item)
    setModalVisible(true)
  }

  const handleDelete = (item) => {
    setList(prevGames => prevGames.filter(element => element !== item))
    setModalVisible(!modalVisible)
  }

  const renderItem = ({item}) => (
    <View style={styles.renderItemStyle}>
      <Text>{item}</Text>
      <Button title='Edit' onPress={() => handleModal(item)}/>
    </View>
  )

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Listado de Partidos</Text>
        <AddItem
        onChange={onHandleChangeItem}
        textValue={textItem}
        onAddItem={addItem} 
        />
        </View>
        <View style={styles.listContiner}>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={item => item}
        />
        </View>
      <Modal
      itemSelected={itemSelected}
      actionDeleteItem={() => handleDelete(itemSelected)}
      isVisible={modalVisible}
      onDismissModal={setModalVisible}
      />
    </View>
  )
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightyellow"
  },
  titleContainer:{
    height: 200,
    paddingHorizontal: 30,
    paddingTop: 80,
  },
  title:{
    marginBottom: 30,
    color: "brown",
    fontSize: 30,
  },
  listContiner: {
    marginHorizontal: 30,
    flex: 2,
    marginTop: 40,
  },
  renderItemStyle: {
    height: 60,
    marginBottom: 25,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
    shadowColor: "yellow",
    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    elevation: 3,
  },
});
