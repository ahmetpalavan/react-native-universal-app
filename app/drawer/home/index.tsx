import MovieCard from '@/components/MovieCard';
import { getSearchResults, getTrending } from '@/services/api';
import { Container, Main, Subtitle, Title } from '@/tamagui.config';
import { useDebounce } from '@/utils/useDebounce';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { ImageBackground } from 'react-native';
import { Input, ScrollView, Spinner, Text, YStack } from 'tamagui';

const Home = () => {
  const [search, setSearch] = useState<string>('');
  const debouncedSearch = useDebounce(search, 500);
  const trendingQuery = useQuery({
    queryKey: ['trending'],
    queryFn: getTrending,
  });

  const searcQuery = useQuery({
    queryKey: ['search', debouncedSearch],
    queryFn: () => getSearchResults(debouncedSearch),
    enabled: debouncedSearch.length > 0,
  });

  return (
    <Main>
      <ImageBackground
        source={{
          uri: 'https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg',
        }}
        style={{
          width: '100%',
          height: 200,
        }}>
        <Container>
          <YStack>
            <Title
              enterStyle={{
                opacity: 0,
                translateY: 100,
                scale: 0.5,
                y: -10,
              }}
              animation="quick"
              color={'#fff'}>
              Trending
            </Title>
            <Input
              borderWidth={1}
              placeholderTextColor={'#fff'}
              value={search}
              onChangeText={(text) => setSearch(text)}
              placeholder={'Search'}
            />
          </YStack>
        </Container>
      </ImageBackground>
      <Subtitle padding={10} animation={'lazy'}>
        {debouncedSearch.length > 0 ? 'Search Results' : 'Trending'}
      </Subtitle>
      {!trendingQuery.isLoading ||
        (searcQuery.isLoading && <Spinner size="large" color={'green'} />)}
      <ScrollView
        py={40}
        contentContainerStyle={{
          gap: 10,
          paddingLeft: 10,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}>
        {searcQuery.data?.results ? (
          <>{searcQuery.data?.results.map((movie) => <MovieCard key={movie.id} movie={movie} />)}</>
        ) : (
          <>
            {trendingQuery.data?.results &&
              trendingQuery.data?.results.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
          </>
        )}
      </ScrollView>
    </Main>
  );
};

export default Home;
