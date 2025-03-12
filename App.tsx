import React, { useState } from 'react';
// import CheckBox from '@react-native-community/checkbox';
import { Modal, TextInput, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View, useColorScheme } from 'react-native';
import { CheckBox } from 'react-native-elements';
import FontAwesome from "react-native-vector-icons/FontAwesome";


type Task = {
  id: number;
  text: string;
  checked: boolean;
};

function App(): React.JSX.Element {
  const [boxes, setBoxes] = useState<Task[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newTaskText, setNewTaskText] = useState('');

  const backgroundStyle = {
    backgroundColor: '#242323',
    flex: 1,
  };

  const addTask = () => {
    if (newTaskText.trim()) {
      const newTask = {
        id: Date.now(),
        text: newTaskText.trim(),
        checked: false,
      };
      setBoxes([...boxes, newTask]);
      setNewTaskText('');
      setModalVisible(false);
    }
  };


  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView style={styles.scroll}>
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
                placeholderTextColor="#0582e7"
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
        <View style={styles.container}>
          {boxes.map((box) => (
            <View key={box.id} style={styles.rec}>
              <View style={styles.Completed}>
                <CheckBox
                  checked={box.checked}
                  onPress={() => {
                    setBoxes(boxes.map(item =>
                      item.id === box.id ? { ...item, checked: !item.checked } : item
                    ));
                  }}
                  style={styles.checkbox}
                />
              </View>
              <Text style={styles.boxText}>{box.text}</Text>
              <View style={styles.delete}>
                <Pressable onPress={() => setBoxes(boxes.filter(item => item.id !== box.id))}>
                  <FontAwesome name="trash" size={35} color="red" />
                </Pressable>
              </View>
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
    backgroundColor: '#0582e7',
    padding: 15,
    height: 56,
    width: 180,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: '#0582e7',
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
    top: -10,
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
    backgroundColor: '#0582e7',
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
    color: '#0582e7',
    marginTop: 10,
    padding: 10,
  },
  cancelButtonText: {
    color: '#0582e7',
    fontSize: 16,
  },
  scroll: {
    flex: 1

  },
  checkbox: {
    alignSelf: "flex-start"

  },
  delete: {
    alignSelf: "flex-end", // Moves to the rightmost side of the flex container
    top: -39,
    right: 30

  },
  Completed: {
    alignSelf: "flex-start", // Moves to the rightmost side of the flex container
    top: 30,
    left: 8,

  }

});

export default App;