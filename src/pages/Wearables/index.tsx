import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {
  Dimensions,
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {AddIcon, ProfilePhotoIcon} from '../../assets/svgs';
import ProductCard from '../../components/ProductCard';

const {width, height} = Dimensions.get('screen');

const WearablesPage = () => {
  const [products, setProducts] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setProducts([
      {
        image: require('../../assets/images/rock-1.png'),
        name: 'Moonstone Keychain',
        description: 'Choosing the Best Gemstone for Your Necklace and Jewelry',
      },
      {
        image: require('../../assets/images/rock-2.png'),
        name: 'Sapphire Keychain',
        description: 'Choosing the Best Gemstone for Your Necklace and Jewelry',
      },
      {
        Button: AddIcon,
        name: 'Add a Wearable',
        description:
          "Don't See One You Like? Choosing the Best Gemstone for Your Necklace and Jewelry",
      },
    ]);
  }, []);

  const onMomentumScrollEnd = e => {
    const contentOffset = e.nativeEvent.contentOffset;
    const viewSize = e.nativeEvent.layoutMeasurement;

    // Divide the horizontal offset by the width of the view to see which page is visible
    const pageNum = Math.floor(contentOffset.x / viewSize.width);
    setCurrentSlide(pageNum);
  };

  return (
    <ImageBackground
      source={require('../../assets/images/background.png')}
      resizeMode="cover"
      style={styles.bg}>
      <View style={styles.topWrapper}>
        <ProfilePhotoIcon />
        <Text style={styles.name}>Lottie Curtis</Text>
        <Text style={styles.badge}>You have {products.length} Products</Text>
      </View>

      <View style={styles.products}>
        <FlatList
          data={products}
          keyExtractor={(_, index) => index.toString()}
          style={styles.list}
          contentContainerStyle={styles.listContent}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={onMomentumScrollEnd}
          renderItem={({item, index}) => {
            return (
              <View style={styles.productWrapper}>
                <ProductCard {...item} />
              </View>
            );
          }}
        />

        <View style={styles.dots}>
          {products.map((product, i) => (
            <View
              style={[styles.dot, currentSlide === i && styles.dotActive]}
            />
          ))}
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  topWrapper: {
    marginTop: '13%',
    alignItems: 'center',
  },
  name: {
    fontFamily: 'Roboto-Bold',
    color: 'white',
    fontSize: 18,
    marginTop: 8,
    marginBottom: 12,
  },
  badge: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 7,
    paddingHorizontal: 18,
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
  },
  products: {
    flex: 1,
  },
  list: {
    flexGrow: 0,
  },
  listContent: {
    paddingTop: 85,
    paddingBottom: 10,
    justifyContent: 'center',
  },
  productWrapper: {
    width: width,
    alignItems: 'center',
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#A0A9B8',
    marginHorizontal: 10,
  },
  dotActive: {
    backgroundColor: '#424A93',
  },
});

export default WearablesPage;
