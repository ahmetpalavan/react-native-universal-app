import React from 'react';
import { MediaType } from '@/interfaces/apiresults';
import { useQuery } from '@tanstack/react-query';
import { getMovieDetails } from '@/services/api';
import { Main } from '@/tamagui.config';
import { H1, Image, Paragraph, ScrollView, Text, YStack } from 'tamagui';
import { ImageBackground } from 'react-native';
import Animated from 'react-native-reanimated';

interface DetailsPageProps {
  id: string;
  mediaType: MediaType;
}

const DetailsPage = ({ id, mediaType }: DetailsPageProps) => {
  const movieQuery = useQuery({
    queryKey: ['movie', id],
    queryFn: () => getMovieDetails(+id, mediaType),
  });
  console.log('🚀 ~ file: DetailsPage.tsx:19 ~ DetailsPage ~ movieQuery:', movieQuery.data);
  return (
    <Main>
      <ScrollView>
        <ImageBackground
          source={{
            uri: `https://image.tmdb.org/t/p/w500${movieQuery.data?.backdrop_path}`,
          }}>
          <Animated.Image
            borderRadius={10}
            source={{ uri: `https://image.tmdb.org/t/p/w500${movieQuery.data?.poster_path}` }}
            style={{ width: 200, height: 300, margin: 10 }}
            sharedTransitionTag={`${mediaType === 'movie' ? 'movie' : 'movie'}-${id}-poster`}
          />
        </ImageBackground>
        <YStack
          animation={'lazy'}
          enterStyle={{
            opacity: 0,
            y: 10,
          }}
          p={20}>
          <H1
            size={'$9'}
            color={'black'}
            style={{
              display: 'flex',
              alignItems: 'center',
            }}>
            {movieQuery.data?.title || movieQuery.data?.name}
            <Text fontSize={16}> ({new Date(movieQuery.data?.release_date!).getFullYear()})</Text>
          </H1>
          <Paragraph color={'red'} theme={'alt1'}>
            {movieQuery.data?.tagline}
          </Paragraph>
          <Text fontSize={16} color={'black'}>
            {movieQuery.data?.overview}
          </Text>
        </YStack>
      </ScrollView>
    </Main>
  );
};

export default DetailsPage;
