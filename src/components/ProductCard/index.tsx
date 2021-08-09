import React from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const ProductCard = ({image, name, description, Button}) => {
  return (
    <View style={styles.card}>
      <View style={[styles.content, image && styles.contentUp]}>
        {image && <Image style={styles.image} source={image} />}
        {Button && <Button style={styles.topButton} />}
        <View style={[styles.texts, image && styles.textsUp]}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
      {!Button && (
        <View style={[styles.buttonWrapper, image && styles.buttonWrapperUp]}>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.button}>View</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    height: 350,
    maxWidth: 250,
    paddingHorizontal: 36,
    elevation: 4,
  },
  content: {
    alignItems: 'center',
  },
  contentUp: {
    top: -90,
  },
  image: {},
  topButton: {
    marginVertical: 40,
  },
  texts: {},
  textsUp: {
    top: -10,
  },
  name: {
    fontFamily: 'Roboto-Bold',
    fontSize: 25,
    color: '#4E5B76',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 30,
  },
  description: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: '#A0A9B8',
    textAlign: 'center',
    lineHeight: 20,
  },
  buttonWrapper: {
    alignItems: 'center',
  },
  buttonWrapperUp: {
    top: -40,
  },
  button: {
    fontFamily: 'Roboto-Bold',
    fontSize: 14,
    borderRadius: 20,
    backgroundColor: '#303371',
    color: 'white',
    paddingVertical: 9,
    paddingHorizontal: 30,
  },
});

export default ProductCard;
