import * as React from 'react';
import MemoryGameContainer from '../containers/MemoryGameContainer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AppNavigator = (props) => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="MemoryGame" component={MemoryGameContainer} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator