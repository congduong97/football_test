import {TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {COLOR} from '../../utils';

const Tag = ({label, active, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {backgroundColor: active ? COLOR.grey : COLOR.transparent},
      ]}
      activeOpacity={0.9}>
      <Text
        style={[styles.title, {color: active ? COLOR.white : COLOR.grey_1}]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Tag;
