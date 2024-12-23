import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native';
import { AuthProvider } from './AuthContext';
import Constants from 'expo-constants';

import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import RecoverScreen from './RecoverScreen';
import DashboardScreen from './DashboardScreen';
import AddRecordScreen from './AddRecordScreen';
import SearchRecordsScreen from './SearchRecordsScreen';
import SettingsScreen from './SettingsScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  const { navigation } = props;

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <DrawerContentScrollView contentContainerStyle={styles.drawerContent}>
      <View style={styles.drawerHeader}>
        <Text style={styles.drawerHeaderText}>E-TIKET</Text>
      </View>
      <View style={styles.drawerItems}>
        <DrawerItem label="Dashboard" icon={() => <Ionicons name="home" size={24} color="black" />} onPress={() => navigateToScreen('Dashboard')} />
        <DrawerItem label="Add Record" icon={() => <Ionicons name="add-circle" size={24} color="black" />} onPress={() => navigateToScreen('AddRecord')} />
        <DrawerItem label="Search Records" icon={() => <Ionicons name="search-circle" size={24} color="black" />} onPress={() => navigateToScreen('SearchRecords')} />
        <DrawerItem label="Settings" icon={() => <Ionicons name="settings" size={24} color="black" />} onPress={() => navigateToScreen('Settings')} />
      </View>
      <View style={styles.drawerFooter}>
        <DrawerItem label="Logout" icon={() => <Ionicons name="log-out" size={24} color="black" />} onPress={() => navigateToScreen('Login')} />
      </View>
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Dashboard" component={DashboardScreen} options={{ title: 'Dashboard' }} />
      <Drawer.Screen name="AddRecord" component={AddRecordScreen} options={{ title: 'Add Record' }} />
      <Drawer.Screen name="SearchRecords" component={SearchRecordsScreen} options={{ title: 'Search Records' }} />
      <Drawer.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings' }} />
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Recover" component={RecoverScreen} options={{ title: 'Recover Password' }} />
          <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

const styles = StyleSheet.create({
  drawerContent: { flexGrow: 1 },
  drawerHeader: { backgroundColor: '#f5f5f5', paddingVertical: 15, paddingHorizontal: 10, marginBottom: 10 },
  drawerHeaderText: { fontSize: 18, fontWeight: 'bold' },
  drawerItems: { flex: 1 },
  drawerFooter: { borderTopWidth: 1, borderTopColor: '#ddd', paddingVertical: 10, paddingHorizontal: 15 },
});

export default App;
