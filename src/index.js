import React, {useState} from 'react';
import {Animated} from 'react-native';
import Lottie from 'lottie-react-native';

import {Container, Button, Text} from './styles';

import checked from './assets/checked.json';

export default function App() {
  const AnimatedButton = Animated.createAnimatedComponent(Button);

  const [width, setWidth] = useState(new Animated.Value(300));
  const [height, setHeight] = useState(new Animated.Value(50));
  const [text, setText] = useState('Confirmar');
  const [animationEnd, setAnimationEnd] = useState(false);

  function handleAnimation() {
    setText('');
    Animated.timing(width, {
      toValue: 0,
      duration: 1000,
    }).start();
    Animated.timing(height, {
      toValue: 0,
      duration: 500,
      delay: 500,
    }).start();
    setTimeout(() => {
      setAnimationEnd(true);
    }, 600);
  }

  return (
    <Container>
      {animationEnd ? <Lottie source={checked} autoPlay loop={false} /> : <></>}
      <AnimatedButton width={width} onPress={handleAnimation}>
        <Text>{text}</Text>
      </AnimatedButton>
    </Container>
  );
}
