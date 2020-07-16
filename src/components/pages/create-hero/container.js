import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import styles from './styles';
import {Input, Button} from '../../atoms';

export default function CreateHero(props) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({
    name: '',
    description: '',
  });

  const createNewHero = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <Input
          style={styles.input}
          label="Name"
          placeholder="Hero name"
          value={name}
          onChangeText={setName}
          error={errors.name}
        />

        <Input
          style={styles.input}
          label="Description"
          placeholder="Hero description"
          value={description}
          onChangeText={setDescription}
          error={errors.description}
        />

        <Button
          style={styles.button}
          label="Create Hero"
          loading
          onPress={createNewHero}
        />
      </View>
    </SafeAreaView>
  );
}
