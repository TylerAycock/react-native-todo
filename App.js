import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useState } from 'react';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

export default function App() {

  const [todos, setTodos] = useState([
    { text: 'buy coffee', id: 1 },
    { text: 'create app', id: 2 },
    { text: 'play on the switch', id: 3 }
  ])

  const pressHandler = (id) => {
    // console.log(id)
    setTodos((prevTodos) => {
      return prevTodos.filter(item => item.id !== id)
    })
  }

  submitHandler = (text) => {
    if (text.length > 3) {
      setTodos(prevTodos => [...prevTodos, { text: text, id: Math.random().toString() }])
    } else {
      Alert.alert('OOPS!', 'todos must be over 3 chars long', [
        { text: 'Understood', onPress: () => console.log('alert closed') }
      ])
    }


  }


  return (

    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss()
      console.log('dismissed keyboard')
    }} >
      <View style={styles.container}>
        <Header />
        <View style={styles.content} >
          <AddTodo
            submitHandler={submitHandler}
          />
          <View>
            <View style={styles.list} >
              <FlatList
                keyExtractor={item => item.id}
                data={todos}
                renderItem={({ item }) => {
                  return <TodoItem item={item} pressHandler={pressHandler} />
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20
  }
});
