import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useQuery, gql} from '@apollo/client';

export const HELLO_WORLD = gql`
  query hello {
    hello {
      hello
    }
  }
`;

function Hello() {
  const {loading, error, data} = useQuery(HELLO_WORLD);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error :(</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>hello {data.hello.hello}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Hello;
