import { StyleSheet, Text, TextInput, Button, View } from 'react-native';
import { useState } from 'react';


export default Addtodo = ({ submitHandler }) => {
    const [text, setText] = useState(" ")

    const changeHandler = (val) => {
        // console.log(val)
        setText(val)
    }
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='new todo...'
                onChangeText={changeHandler}
            />
            <Button
                onPress={() => submitHandler(text)}
                title='add to do'
                color='coral'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd"
    }
})