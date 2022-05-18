import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';

export default function Schedule({data}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={data.icon} resizeMode="cover" style={styles.image} />
        <Text style={styles.headerTitle}>{data.tournament}</Text>
      </View>
      {data.matchs.map(item => (
        <View style={styles.contentContainer}>
          <View style={styles.leftContent}>
            <Text style={styles.time}>{item.time}</Text>
            <Text style={styles.status}>{item.date}</Text>
          </View>
          <View style={styles.rightContent}>
            <View style={styles.row}>
              <Image
                source={item.team1.icon}
                resizeMode="cover"
                style={styles.image}
              />
              <View style={[styles.row, styles.result]}>
                <Text style={styles.time}>{item.team1.name}</Text>
                <Text style={styles.time}>{item.team1.score}</Text>
              </View>
            </View>
            <View style={styles.row}>
              <Image
                source={item.team2.icon}
                resizeMode="cover"
                style={styles.image}
              />
              <View style={[styles.row, styles.result]}>
                <Text style={styles.time}>{item.team2.name}</Text>
                <Text style={styles.time}>{item.team2.score}</Text>
              </View>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}
