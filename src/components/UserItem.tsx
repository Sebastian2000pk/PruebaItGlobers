import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

type Props = {
  name: string;
  email: string;
  avatar: string;
}

const UserItem = ({name, email, avatar}: Props) => {

  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>{name}</Text>
      <Text style={styles.textEmail}>{email}</Text>
      <Image source={{ uri: avatar }} style={styles.image}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: '45%',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#f0f4f7',
    paddingVertical: 25,
    paddingHorizontal: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  textHeader: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  textEmail: {
    fontSize: 13,
    marginBottom: 10,
  }
});

export default UserItem;