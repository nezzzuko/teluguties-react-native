import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  BackHandler
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LottieView from 'lottie-react-native';

const {width, height} = Dimensions.get('window');

const Success = ({ navigation }) => {
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    // Start the timeout when the component mounts
    const timeoutId = setTimeout(() => {
      navigation.replace("Layout"); // Navigate to the Layout screen
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.main}>
        <View style={styles.header}>
          {/* <TouchableOpacity>
            <Icon name="chevron-left" size={30} color="white" />
          </TouchableOpacity> */}
          <View style={styles.headertext}>
            <Text style={styles.headertextmain}>Phone Verification</Text>
          </View>
        </View>

        <View style={styles.verifiedcontainer}>
          <View>
            <Animated.View style={styles.lottiecontainer}><LottieView source={require('../../assets/animations/verified.json')} autoPlay loop resizeMode='cover' style={styles.lottie}/></Animated.View>
            <Text style={styles.verifiedtext}>Phone Number Verified</Text>
            <View style={styles.textcontainer}>
              <Text style={styles.text}>
                You will redirected to the main page
              </Text>
              <Text style={styles.text}>in a few moments</Text>
            </View>
          </View>
        </View>

        <View style={styles.footerbody}>
          <View style={styles.footer}>
            <Text style={styles.footertext}>
              please review the terms and conditions before you proceed.
            </Text>
            <Text style={styles.footertext}>24/7 Customer service</Text>
            <Text style={styles.footertext}>www.mandinstudios.com</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Success;

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  main: {
    flex: 1,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#BE7356',
    paddingVertical: width / 20,
  },
  headertext: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headertextmain: {
    color: 'white',
  },
  verifiedcontainer: {
    alignItems: 'center',
    flex:1,
    justifyContent:'center',
  },
  lottiecontainer: {
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  lottie: {
    height: width / 3,
    width: width / 10,
  },
  verifiedtext: {
    color: '#BE7356',
    fontSize: 25,
    fontWeight: '500',
    textAlign: 'center'
  },
  textcontainer: {
    alignItems: 'center',
  },
  text: {
    color: '#BE7356',
  },

  footerbody: {
    position: 'absolute',
    bottom: width / 40,
    left: 0,
    right: 0,
  },
  footer: {},
  footertext: {
    textAlign: 'center',
    color: 'black',
  },
});
