import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SafeAreaView, View} from 'react-native';
import styles from './styles';
import {Input, Button} from '../../atoms';
import {selectLoading} from '../../../redux/heroes/selectors';
import * as heroesActions from '../../../redux/heroes/actions';

export default function CreateHero(props) {
  const dispatch = useDispatch();

  const loading = useSelector(selectLoading);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({
    name: '',
    description: '',
  });

  const createNewHero = () => {
    dispatch(heroesActions.setLoading(true));
  };

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
          loading={loading}
          onPress={createNewHero}
        />
      </View>
    </SafeAreaView>
  );
}
