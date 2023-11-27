import React from 'react';
import { Result, RootObject } from '@/interfaces/apiresults';
import { Link } from 'expo-router';
import { Card, Image, Paragraph, Text, YStack } from 'tamagui';
import Animated from 'react-native-reanimated';

interface MovieCardProps {
  movie: Result;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <Link asChild href={`/drawer/home/movie/${movie.id}`}>
      <Card
        elevate
        width={150}
        height={260}
        scale={0.9}
        hoverStyle={{
          scale: 0.925,
        }}
        pressStyle={{
          scale: 0.9,
        }}>
        <Card.Header padding={0}>
          <Animated.Image
            source={{
              uri: `https://image.tmdb.org/t/p/w200${movie.poster_path}`,
            }}
            alt={movie.title}
            width={150}
            height={200}
            sharedTransitionTag={`${movie.media_type === 'movie' ? 'movie' : 'movie'}-${
              movie.id
            }-poster`}
          />
        </Card.Header>
        <Card.Footer p={8}>
          <YStack>
            <Text fontSize={12} color={'#fff'} style={{ height: 50, overflow: 'hidden' }}>
              {movie.title || movie.name}
            </Text>

            <Paragraph theme={'alt1'}>
              {new Date(movie.release_date! || movie.first_air_date!).getFullYear()}
            </Paragraph>
          </YStack>
        </Card.Footer>
      </Card>
    </Link>
  );
};

export default MovieCard;
