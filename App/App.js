import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import AudioControls from './components/AudioControls';

const playlist = [
  {
    key: 'audio1',
    title: 'Ghen',
    author: 'Min, Erik',
    url: 'https://firebasestorage.googleapis.com/v0/b/dung-d839f.appspot.com/o/baihat%2FGhen-Khac-Hung-ERIK-MIN.mp3?alt=media&token=2fd9b2f5-e7b4-4d54-a2c3-81badcebc9ce',
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/dung-d839f.appspot.com/o/hinhanh%2Fghen.jpg?alt=media&token=e9e7b3f1-03de-4d06-b601-6862db314bb7'
  },
  {
    key: 'audio2',
    title: 'Đừng yêu nữa em mệt rồi',
    author: 'Min',
    url: 'https://firebasestorage.googleapis.com/v0/b/dung-d839f.appspot.com/o/baihat%2FDung-Yeu-Nua-Em-Met-Roi-MIN.mp3?alt=media&token=4591cc10-b3cf-4501-8e3b-199c72072ca2',
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/dung-d839f.appspot.com/o/hinhanh%2Fmin.jpg?alt=media&token=8f3483cc-94de-4304-ad7b-13b2d01899d4'
  },
  {
    key: 'audio3',
    title: 'Em gì ơi',
    author: 'Jack-K-ICM',
    url: 'https://firebasestorage.googleapis.com/v0/b/dung-d839f.appspot.com/o/baihat%2FEm-Gi-Oi-Jack-K-ICM.mp3?alt=media&token=5813dd01-0a2d-4892-9cf3-88e18ba84b38',
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/dung-d839f.appspot.com/o/hinhanh%2Fa.jpg?alt=media&token=52cfb1f7-2f2c-4278-8333-e4a4c0db73b2'
  },
  {
    key: 'audio4',
    title: 'My love',
    author: 'Westlife',
    url: 'https://firebasestorage.googleapis.com/v0/b/dung-d839f.appspot.com/o/baihat%2FMy-Love-Westlife.mp3?alt=media&token=2866511c-e962-492d-9a46-9bf266cfa9e6',
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/dung-d839f.appspot.com/o/hinhanh%2F220px-7MyLove1.jpg?alt=media&token=04c378c2-8bfc-4740-8a0d-ba124c6ea120'
  },
];

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AudioControls
          initialTrack={0}
          playlist={playlist}

          //Thumbnail
          thumbnailSize={{ width: 200, height: 200 }}

          //Buttons
          activeButtonColor={'white'}
          inactiveButtonColor={'#888'}

          //Slider
          sliderMinimumTrackTintColor={'#888'}
          sliderMaximumTrackTintColor={'white'}
          sliderThumbTintColor={'white'}
          sliderTimeStyle={{ fontSize: 18, color: 'white' }}

          //Title and author
          titleStyle={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}
          authorStyle={{ fontSize: 16, color: 'white' }}

          hasButtonForForward
          timeForFoward={5}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
