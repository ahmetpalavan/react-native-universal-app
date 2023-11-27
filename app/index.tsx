import { Redirect } from 'expo-router';
import React from 'react';

const Page = () => {
  return <Redirect href={'/drawer/home/'} />;
};

export default Page;
