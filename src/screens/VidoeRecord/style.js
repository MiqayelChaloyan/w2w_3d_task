import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    camera: {
        flex: 1,
        width: windowWidth,
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
      btnGroup: {
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        left: 0,
        bottom: 20,
        right: 0,
        zIndex: 20
      },
      btn: {
        width: 80,
        height: 80,
        marginHorizontal: 10,
        paddingHorizontal: 15,
        paddingVertical: 20,
        backgroundColor: 'red',
        borderRadius: 50,
      },
      btnText: {
        color: 'white',
        textAlign: 'center',
      },
      size: {
        borderLeftWidth: 4,
        borderTopWidth: 4,
        borderRightWidth: 4,
        width: windowWidth - 60,
        height: windowHeight - 50,
        position: 'absolute',
        borderRadius: 11,
        marginHorizontal: 30,
        marginVertical: 50,
        borderColor: '#2ECDCD',
      },
      lineLeft: {
        width: 50,
        height: 4,
        position: 'absolute',
        bottom: 32,
        right: 35,
        borderBottomWidth: 4,
        borderColor: '#2ECDCD',
        borderRadius: 15
      },
      lineRight: {
        width: 50,
        height: 4,
        position: 'absolute',
        bottom: 32,
        left: 35,
        borderBottomWidth: 4,
        borderColor: '#2ECDCD',
        borderRadius: 15
      },
      degree: {
        width: 170,
        height: 170,
        position: 'absolute',
        top: 250,
        right: 120
      }
});

export default styles;