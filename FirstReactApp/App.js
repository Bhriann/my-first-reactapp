import React, { useState } from 'react';
import { View, Text, Image, FlatList, Switch, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const skills = ['Photoshop 🖌', 'React Native 📱', 'React 💻', 'Unity 👾'];

const projects = [
  { id: '1', title: 'Flappy Bird Clone' },
  { id: '2', title: 'InventoryPro: Inventory Management System' },
  { id: '3', title: '"My ToDo List" App' },
  { id: '4', title: '"Power Up" Game' },
];

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <View style={[styles.container, darkMode ? styles.darkContainer : styles.lightContainer]}>

      {/* Profile Picture */}
      <Image 
        source={require('./assets/ProfilePic.png')} 
        style={[styles.profilePic, { borderColor: darkMode ? '#FFF' : '#000' }]} 
      />

      {/* Name */}
      <Text style={[styles.name, darkMode ? styles.darkText : styles.lightText]}>Bhriann Philip U. Calangi</Text>

      {/* Bio */}
      <Text style={[styles.bio, darkMode ? styles.darkText : styles.lightText]}>
        My name is Bhriann, I am a Filipino artist and BSCS student under GameDev who loves Anime and K-Pop! 
        {"\n\n"}
        Yes, I am a nerd lol
      </Text>

      {/* Skills Section */}
      <Text style={[styles.sectionTitle, darkMode ? styles.darkText : styles.lightText]}>Skills</Text>
      <FlatList
        data={skills}
        keyExtractor={(item, index) => index.toString()}
        scrollEnabled={false} 
        contentContainerStyle={styles.centeredList}  
        renderItem={({ item }) => (
          <Text style={[styles.skillItem, darkMode ? styles.darkText : styles.lightText]}>• {item}</Text>
        )}
      />

      {/* Spacing */}
      <View style={styles.sectionSpacing} />

      {/* Projects Section */}
      <Text style={[styles.sectionTitle, darkMode ? styles.darkText : styles.lightText]}>Projects</Text>
      <FlatList
        data={projects}
        keyExtractor={(item) => item.id}
        scrollEnabled={false} 
        contentContainerStyle={styles.centeredList}  
        renderItem={({ item }) => (
          <Text style={[styles.projectItem, darkMode ? styles.darkText : styles.lightText]}>• {item.title}</Text>
        )}
      />

      {/* Toggle Theme Switch */}
      <View style={styles.switchContainer}>
        <Switch value={darkMode} onValueChange={() => setDarkMode(!darkMode)} />
      </View>

      {/* Contact Section */}
      <Text style={[styles.sectionTitle, darkMode ? styles.darkText : styles.lightText]}>Contact</Text>
      <Text style={[styles.contact, darkMode ? styles.darkText : styles.lightText]}>Email: bhriann2003@gmail.com</Text>

      <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/bhriannphilip/')}>
        <Text style={[styles.contact, styles.underline, darkMode ? styles.darkText : styles.lightText]}>Instagram</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Linking.openURL('https://x.com/bhriannphilip')}>
        <Text style={[styles.contact, styles.underline, darkMode ? styles.darkText : styles.lightText]}>Twitter</Text>
      </TouchableOpacity>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  lightContainer: { backgroundColor: '#fff' },
  darkContainer: { backgroundColor: '#333' },
  
  profilePic: { 
    width: 120, 
    height: 120, 
    borderRadius: 60, 
    borderWidth: 3, 
    borderColor: '#000',
    marginTop: 30, 
    marginBottom: 15, 
  },

  name: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  bio: { fontSize: 16, textAlign: 'center', marginBottom: 20 }, 

  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },

  centeredList: { alignItems: 'center' }, 

  skillItem: { fontSize: 16, textAlign: 'center', marginVertical: 2 },
  projectItem: { fontSize: 16, textAlign: 'center', marginVertical: 5 },

  sectionSpacing: { height: 20 }, 

  switchContainer: { 
    marginVertical: 25,  
    alignSelf: 'center', 
  },

  contact: { fontSize: 16, marginTop: 5 },
  underline: { textDecorationLine: 'underline' },
  
  lightText: { color: '#000' },
  darkText: { color: '#fff' },
});

export default App;




