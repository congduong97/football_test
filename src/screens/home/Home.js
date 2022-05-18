import {View, FlatList, Platform, UIManager, LayoutAnimation} from 'react-native';
import React, {useState, useEffect} from 'react';
import {styles} from './styles';
import Header from '../../components/header/Header';
import ScrollHeader from '../../components/scroll-header/ScrollHeader';
import Tag from '../../components/tag/Tag';
import Schedule from '../../components/schedule/Schedule';

const DATA = [
  {label: 'Th 7 14/05'},
  {label: 'CN 15/05'},
  {label: 'Hôm qua'},
  {label: 'Hôm nay'},
  {label: 'Ngày mai'},
  {label: 'Th 5 19/05'},
  {label: 'Th 20/05'},
];

const STATUS = [
  {
    label: 'Tất cả',
  },
  {label: 'Đang diễn ra'},
  {label: 'Đã kết thúc'},
];

const MATCHS = [
  {
    tournament: 'Premier League',
    icon:require('../../assets/images/home/premier.png'),
    matchs: [
      {
        time: '2:00',
        date: '17/05/2022',
        team1: {
          name: 'Newcastle United',
          icon: require('../../assets/images/home/newcastle.png'),
          score: 2,
        },
        team2: {
          name: 'Arsenal',
          icon: require('../../assets/images/home/arsenal.png'),
          score: 2,
        },
      },
      {
        time: '4:00',
        date: '17/05/2022',
        team1: {
          name: 'Newcastle United',
          icon: require('../../assets/images/home/newcastle.png'),
          score: 2,
        },
        team2: {
          name: 'Arsenal',
          icon: require('../../assets/images/home/arsenal.png'),
          score: 2,
        },
      },
    ],
  },
  {
    tournament: 'Premier League',
    icon:require('../../assets/images/home/premier.png'),
    matchs: [
      {
        time: '2:00',
        date: '17/05/2022',
        team1: {
          name: 'Newcastle United',
          icon: require('../../assets/images/home/newcastle.png'),
          score: 2,
        },
        team2: {
          name: 'Arsenal',
          icon: require('../../assets/images/home/arsenal.png'),
          score: 2,
        },
      },
      {
        time: '4:00',
        date: '17/05/2022',
        team1: {
          name: 'Newcastle United',
          icon: require('../../assets/images/home/mu.jpeg'),
          score: 2,
        },
        team2: {
          name: 'Arsenal',
          icon: require('../../assets/images/home/liverpool.png'),
          score: 2,
        },
      },
    ],
  },
  {
    tournament: 'Premier League',
    icon:require('../../assets/images/home/premier.png'),
    matchs: [
      {
        time: '2:00',
        date: '17/05/2022',
        team1: {
          name: 'Newcastle United',
          icon: require('../../assets/images/home/newcastle.png'),
          score: 2,
        },
        team2: {
          name: 'Arsenal',
          icon: require('../../assets/images/home/arsenal.png'),
          score: 2,
        },
      },
      {
        time: '4:00',
        date: '17/05/2022',
        team1: {
          name: 'Newcastle United',
          icon: require('../../assets/images/home/newcastle.png'),
          score: 2,
        },
        team2: {
          name: 'Arsenal',
          icon: require('../../assets/images/home/liverpool.png'),
          score: 2,
        },
      },
    ],
  },
];

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export default function Home() {
  const [time, setTime] = useState(0);
  const [status, setStatus] = useState(0);
  const [data, setData] = useState(MATCHS)

  useEffect(() => {
    setStatus(0);
    return () => {};
  }, [time]);

  useEffect(() => {
    if(status === 0){
      setData(MATCHS)
    }
    if(status === 1){
      setData(MATCHS.filter((item,index) => index !== 0))
    }
    if(status === 2){
      setData(MATCHS.filter((item,index) => index !== 1 ))
    }
    return () => {};
  }, [status]);

  const renderItem = ({item}) => {
    return <Schedule data={item}/>
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollHeader
        data={DATA}
        onChange={index => {
          setTime(index);
        }}
      />
      <View style={styles.status}>
        {STATUS.map((item, index) => (
          <Tag
            key={`${index}`}
            onPress={() => {
              setStatus(index);
            }}
            active={index === status}
            label={item.label}
          />
        ))}
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${index}`}
        extraData={data}
      />
    </View>
  );
}
