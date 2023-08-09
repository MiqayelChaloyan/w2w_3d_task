import React, { useRef, useState, useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, StatusBar, Image } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import { GlobalDataContext } from '../../context';
import degreeURL from '../../assets/images/360-degrees.png'
import styles from './style';


const VidoeRecordScreen = ({ navigation }) => {
  const camera = useRef(null);
  const [cameraPermission, setCameraPermission] = useState();
  const [changeButton, setchangeButton] = useState(true);
  const [degree, setDegree] = useState(true);
  const { setVideoPath } = useContext(GlobalDataContext);

  const devices = useCameraDevices();
  const cameraDevice = devices.back;

  useEffect(() => {
    (async () => {
      const cameraPermissionStatus = await Camera.requestCameraPermission();
      setCameraPermission(cameraPermissionStatus);
    })();
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDegree(false)
    }, 6000);

    return () => clearTimeout(timeoutId);
  }, [])

  const handleRecordVideo = async () => {
    try {
      camera.current.startRecording({
        flash: 'on',
        onRecordingFinished: video => setVideoPath(video.path),
        onRecordingError: error => console.error(error),
      })
      setchangeButton(!changeButton)
    } catch (e) {
      console.log(e)
    }
  };

  const handleStopVideo = async () => {
    try {
      await camera.current.stopRecording();
      setchangeButton(!changeButton);
      navigation.navigate('Home')
    } catch (error) {
      console.error(error);
    }
  };

  const renderRecordingVideo = () => {
    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
        <Camera
          ref={camera}
          style={styles.camera}
          device={cameraDevice}
          isActive
          video
          preset="hd-1280x720"
        />
        <View style={styles.btnGroup}>
          <TouchableOpacity style={styles.btn} onPress={changeButton ? handleRecordVideo : handleStopVideo}>
            <Text style={styles.btnText}>{changeButton ? 'Record Video' : 'Stop Video'}</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  };

  const renderContent = () => {
    if (cameraDevice == null) {
      return <ActivityIndicator size="large" color="#1C6758" />;
    }

    if (cameraPermission !== 'authorized') {
      return null;
    }

    return renderRecordingVideo();
  };

  return (
    <>
      {renderContent()}
      <View style={styles.lineLeft} />
      <View style={styles.lineRight} />
      <View style={styles.size} />
      {degree && <Image source={degreeURL} style={styles.degree} />}
    </>
  );
};

export default VidoeRecordScreen;
