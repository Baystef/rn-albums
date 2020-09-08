import React, {useState, useEffect} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {AlbumDetail} from './AlbumDetail';
import albumApi from '../api/album';

const AlbumList = () => {
  const [albums, setAlbums] = useState([]);

  const {textStyle, viewStyle} = styles;

  useEffect(() => {
    async function fetchData() {
      const {data} = await albumApi.get('music_albums');
      setAlbums(data);
    }
    fetchData();
  }, []);

  const renderAlbums = () => {
    return albums.map((album) => (
      <AlbumDetail key={album.title} album={album} />
    ));
  };

  return <ScrollView style={viewStyle}>{renderAlbums()}</ScrollView>;
};

const styles = StyleSheet.create({
  textStyle: {},
  viewStyle: {},
});

export { AlbumList };
