import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native';

function ProfileCard() : React.JSX.Element {
    return(
        <View style={styles.card}>
          
            <Image source={require('../../assets/banner.jpg')} style={styles.bannerImg}/>
            <Image source={require('../../assets/profilePhoto.jpeg')} style={styles.profPhoto}/>
            <Text style={styles.nameTxt}>Johnny Bravo</Text>
            <Text style={styles.subtitleTxt}>Whoo, mama!</Text>
            <Text style={styles.introTxt}>Hey there, pretty mama! The name's Johnny Bravo.!!</Text>

            <View style={styles.iconContainer}>
                <Image source={require('../../assets/fb.png')} style={styles.iconStyle}/>
                <Image source={require('../../assets/insta.png')} style={styles.iconStyle}/>
                <Image source={require('../../assets/linkedin.png')} style={styles.iconStyle}/>
                <Image source={require('../../assets/twitter.png')} style={styles.iconStyle}/>
            </View>
        </View>
      
    );
}

const styles = StyleSheet.create({
    card: {
        height: 500,
        width: '80%',
        elevation: 20,
        borderRadius: 20,
        alignItems: 'center',
        backgroundColor: 'white',
    },

    bannerImg: {
        borderTopLeftRadius : 20,
        borderTopRightRadius: 20,
        height: 180,
        resizeMode: 'cover',
        width: '100%',
    },

    profPhoto: {
        height: 140,
        width: 140,
        borderRadius: 140/2,
        position: 'absolute',
        top: 110,
        borderWidth: 7,
        borderColor: 'white',
        resizeMode: 'cover',    
    },

    nameTxt: {
        marginTop: 50,
        fontSize: 30,
        fontWeight: '600',
        fontFamily: 'Pacifico',
        color: '#2E7D32',
    },

    subtitleTxt: {
        fontSize: 25,
        fontWeight: '400',
        fontFamily: 'Pacifico',
        color: '#A1887F',
    },

    introTxt: {
        fontSize: 22,
        fontFamily: 'sans-serif',
        fontWeight: '400',
        color: '#4E4E4E',
    },

    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 30,
        marginTop: 50,
    },

    iconStyle: {
        height: 30,
        width: 30,
        borderRadius: 30/2,
        resizeMode: 'cover',

    },
})

export default ProfileCard