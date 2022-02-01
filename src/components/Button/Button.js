import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

const Button2 = () => {
  const [show, setShow] = useState(false);

  return (
    <View>
      <Text>{show ? 'Exibindo' : 'Não exibindo'}</Text>
      <Button
        onPress={() => {
          setShow(!show);
        }}
        title="Clique aqui"
      />
    </View>
  );
};

export default Button2;
