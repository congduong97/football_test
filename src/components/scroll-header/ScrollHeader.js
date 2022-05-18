import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import {styles} from './styles';
import {COLOR} from '../../utils';

export const ITEM_WIDTH = 80;

const ScrollHeader = ({data, onChange}) => {
  const [active, setActive] = useState(3);
  const scroll = useRef();
  useEffect(() => {
    return () => {};
  }, []);
  const onPress = index => () => {
    if (index < active) {
      scroll.current.scrollTo({
        x: ITEM_WIDTH * (index - 2),
        y: 0,
        animated: true,
      });
    } else if (index > 2) {
      scroll.current.scrollTo({
        x: ITEM_WIDTH * (active - 1),
        y: 0,
        animated: true,
      });
    }
    setActive(index);
    onChange && onChange(index)
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scroll}
        horizontal={true}
        contentOffset={{x: ITEM_WIDTH, y: 0}}
        showsHorizontalScrollIndicator={false}>
        {data?.map((item, index) => {
          return (
            <TouchableOpacity
              key={`${index}`}
              onPress={onPress(index)}
              style={styles.item}
              activeOpacity={0.9}>
              <Text
                style={[
                  styles.label,
                  active === index && {color: COLOR.active},
                ]}>
                {item.label}
              </Text>
              {active === index && <View style={styles.indicator} />}
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default ScrollHeader;
