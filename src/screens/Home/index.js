import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import { GlobalDataContext } from '../../context';
import styles from './style';


const HomeScreen = ({ navigation }) => {
    const { videoPath } = useContext(GlobalDataContext);

    return (
        <View>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()}>
                <Text style={styles.btnText}>Back Camera</Text>
            </TouchableOpacity>
            {
                videoPath && (
                    <Video source={{ uri: videoPath }} style={styles.video} />
                )
            }
        </View>
    )
}

export default HomeScreen;