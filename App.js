import React from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';

const App: () => React$Node = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.postContainer}>
        <Text style={styles.postTitle}>Estudando React Native!</Text>
        <Text style={styles.postDescription}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. 
        </Text>
      </View>

      <View style={styles.postContainer}>
        <Text style={styles.postTitle}>Estudando React Native!</Text>
        <Text style={styles.postDescription}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. 
        </Text>
      </View>

      <View style={styles.postContainer}>
        <Text style={styles.postTitle}>Estudando React Native!</Text>
        <Text style={styles.postDescription}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. 
        </Text>
      </View>

      <View style={styles.postContainer}>
        <Text style={styles.postTitle}>Estudando React Native!</Text>
        <Text style={styles.postDescription}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. 
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  postContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    margin: 20,
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 3,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  postDescription: {
    color: '#666',
  },
});

export default App;
