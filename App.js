import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';

export default function App() {
  const [items, setItems] = useState([
    { id: 1, title: 'Tarea 1', completed: false },
    { id: 2, title: 'Tarea 2', completed: true },
    { id: 3, title: 'Tarea 3', completed: false },
  ]);

  const addItem = () => {
    const newItem = {
      id: items.length + 1,
      title: `Tarea ${items.length + 1}`,
      completed: false,
    };
    setItems([...items, newItem]);
  };

  const deleteItem = (itemId) => {
    setItems(items.filter((item) => item.id !== itemId));
  };

  const toggleComplete = (itemId) => {
    setItems(
      items.map((item) =>
        item.id === itemId ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <TouchableOpacity
        style={styles.completeButton}
        onPress={() => toggleComplete(item.id)}
      >
        <Text style={styles.completeButtonText}>
          {item.completed ? '✓' : ''}
        </Text>
      </TouchableOpacity>
      <Text style={styles.itemText}>{item.title}</Text>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => deleteItem(item.id)}
      >
        <Text style={styles.deleteButtonText}>X</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de tareas</Text>
      <FlatList
        style={styles.list}
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <TouchableOpacity style={styles.addButton} onPress={addItem}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  list: {
    width: '100%',
    paddingHorizontal: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    flex: 1,
    marginLeft: 10,
  },
  completeButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#1e90ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  completeButtonText: {
    color: '#fff',
    fontSize: 20,
  },
  deleteButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#ff4500',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  addButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#32cd32',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 30,
    lineHeight: 30,
  },
});
