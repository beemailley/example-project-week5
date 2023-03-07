import React from 'react';
import data from './data.json';
import { Header } from 'components/Header';
import { NewsList } from 'components/NewsList';

// console.log(data);

export const App = () => {
  return (
    <section>
      <Header title="Hello World" />
      <NewsList articlesList={data} />
    </section>
  );
}
