import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { RoundedButton} from '../components/RoundedButton';

export const Timing = ({onChangeTime}) => {
  return (
    <>
    <View style={styles.timingButton}>
      <RoundedButton size={75} title="5" onPress={() => onChangeTime(5)} />
     </View> 
    <View style={styles.timingButton}>
    <RoundedButton size={75} title="15" onPress={() => onChangeTime(15)} />
    </View>
    <View style={styles.timingButton}>
      <RoundedButton size={75} title="30" onPress={() => onChangeTime(30)} />
      </View>
    <View style={styles.timingButton}>
      <RoundedButton size={75} title="45" onPress={() => onChangeTime(45)} />
    </View>
    <View style={styles.timingButton}>
      <RoundedButton size={75} title="60" onPress={() => onChangeTime(59.99)} />
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  }
})
