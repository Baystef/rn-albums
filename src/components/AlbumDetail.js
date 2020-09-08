import React from 'react';
import { Text, StyleSheet, View, Image, Linking } from 'react-native';
import { Card } from './Card';
import { CardSection } from './CardSection';
import { Button } from './Button';

const AlbumDetail = ({
  album: { title, artist, image, thumbnail_image, url },
}) => {
  return (
    <Card>
      <CardSection>
        <View style={styles.thumbNailContainerStyle}>
          <Image
            style={styles.thumbNailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={styles.headerContentStyle}>
          <Text style={styles.headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={styles.imageStyle} source={{ uri: image }} />
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
          Buy Now
          </Button>
      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 18,
  },
  thumbNailStyle: {
    height: 50,
    width: 50,
  },
  thumbNailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
  },
});

export { AlbumDetail };
