import React from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import ProfileCard from './components/ProfileCard';

function Main() : React.JSX.Element {
    return(
        <View style={styles.container}>
            <ProfileCard />
        </View>

);
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    }
})


export default Main