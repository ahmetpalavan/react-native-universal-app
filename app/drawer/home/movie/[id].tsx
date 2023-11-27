import { View, Text } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import DetailsPage from '@/components/DetailsPage';
import { MediaType } from '@/interfaces/apiresults';

const Page = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  console.log("🚀 ~ file: [id].tsx:9 ~ Page ~ id:", id)
  return <DetailsPage id={id} mediaType={MediaType.Movie} />;
};

export default Page;
