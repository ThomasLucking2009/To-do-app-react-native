import React, { useState } from 'react';
// import CheckBox from '@react-native-community/checkbox';
import { Modal, TextInput, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View, useColorScheme } from 'react-native';
import { CheckBox } from 'react-native-elements';

type Task = {
  id: number;
  text: string;
};

function App(): React.JSX.Element {
  const [boxes, setBoxes] = useState<Task[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newTaskText, setNewTaskText] = useState('');
  const [isSelected, setSelection] = useState(false);

  const backgroundStyle = {
    backgroundColor: '#242323',
    flex: 1,
  };

  const addTask = () => {
    if (newTaskText.trim()) {
      const newTask = {
        id: Date.now(),
        text: newTaskText.trim()
      };
      setBoxes([...boxes, newTask]);
      setNewTaskText('');
      setModalVisible(false);
    }
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView style= {styles.scroll}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalView}>
              <TextInput
                style={styles.input}
                value={newTaskText}
                onChangeText={setNewTaskText}
                placeholder="Enter new task"
                placeholderTextColor="#999"
                autoFocus={true}
              />
              <Pressable 
                style={styles.addButton} 
                onPress={addTask}
              >
                <Text style={styles.addButtonText}>Add Task</Text>
              </Pressable>
              <Pressable 
                style={styles.cancelButton} 
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable 
          style={styles.button} 
          onPress={() => setModalVisible(true)} 
        >
          <Text style={styles.textstyle}>Add Task</Text>
        </Pressable>

        <Pressable 
          style={styles.button2} 
          onPress={() => setBoxes(boxes.slice(0, -1))}
        >
          <Text style={styles.textstyle2}>-</Text>
        </Pressable>

        <View style={styles.container}>
          {boxes.map((box) => (
            <View key={box.id} style={styles.rec}>
            <CheckBox
              checked={isSelected}
              onPress={() => setSelection(!isSelected)}
              style={styles.checkbox}
            />
              <Text style={styles.boxText}>{box.text}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 50,
  },
  textstyle: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: '700',
  },
  button: {
    backgroundColor: '#9c49f5',
    padding: 15,
    height: 56,
    width: 180,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: '#9c49f5',
    marginLeft: 12,
  },
  textstyle2: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    fontWeight: '700',
  },
  button2: {
    backgroundColor: '#9c49f5',
    padding: 15,
    height: 56,
    width: 70,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: '#9c49f5',
    marginLeft: 310,
    marginTop: -56,
  },
  rec: {
    width: 370,
    height: 90,
    backgroundColor: '#44464a',
    borderRadius: 15,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    color: 'white',
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    color: 'black',
    backgroundColor: 'white',
  },
  addButton: {
    backgroundColor: '#9c49f5',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  cancelButton: {
    marginTop: 10,
    padding: 10,
  },
  cancelButtonText: {
    color: '#9c49f5',
    fontSize: 16,
  },
  scroll:{
    flex: 1

  },
  checkbox: {
    alignSelf: "center",
  }
});

export default App;