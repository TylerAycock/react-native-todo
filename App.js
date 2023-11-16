import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useState } from 'react';
import Header from './components/Header';
import TodoItem from './components/TodoItem';

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


  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content} >
        {/* to-do form */}
        <View>
          <View style={styles.list} >
            {/* list */}
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
