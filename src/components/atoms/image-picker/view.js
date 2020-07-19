import React from 'react';
import {Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import ImagePicker from 'react-native-image-picker';

export const IMAGE_OPTIONS = {
  maxWidth: 1280,
  maxHeight: 1280,
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

function ImagePickerComponent(props) {
  const {image, onChange, label, style} = props;

  const onSelectImage = () => {
    ImagePicker.showImagePicker(IMAGE_OPTIONS, (response) => {
      if (response.uri) {
        onChange(response);
      }
    });
  };

  const currentImage = image ? {uri: image.uri} : null;

  return (
    <TouchableOpacity
      style={{...styles.container, ...style}}
      onPress={onSelectImage}>
      <Image style={styles.background} source={currentImage} />
      <Text style={styles.label}>{image ? '' : label}</Text>
    </TouchableOpacity>
  );
}

ImagePickerComponent.propTypes = {
  image: PropTypes.string,
  label: PropTypes.string,
  style: PropTypes.object,
  onChange: PropTypes.func,
};

ImagePickerComponent.defaultProps = {
  image: '',
  label: '',
  style: {},
  onChange: () => {},
};

export default ImagePickerComponent;
