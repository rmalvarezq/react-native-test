import React from 'react';
import { StyleSheet, View, ScrollView, Image } from 'react-native';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {images.map((image, index) => (
          <Image key={index} style={styles.image} source={{ uri: image }} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    width: 200,
    height: 200,
    marginRight: 10,
  },
});

export default ImageGallery;
