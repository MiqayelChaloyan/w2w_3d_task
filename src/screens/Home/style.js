import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    video: {
        width: windowWidth - 20,
        height: windowHeight - 150,
        marginVertical: 70,
        marginHorizontal: 10,
        borderRadius: 15
    },
    btn: {
        width: 200,
        height: 60,
        marginHorizontal: 100,
        paddingHorizontal: 15,
        paddingVertical: 20,
        backgroundColor: '#2ECDCD',
        borderRadius: 50,
        marginTop: 40
    },
    btnText: {
        color: 'white',
        textAlign: 'center',
    },
});

export default styles;