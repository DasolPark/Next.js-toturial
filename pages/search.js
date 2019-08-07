import React from 'react';
import Layout from '../components/Layout';

const Search = ({ url }) => {
  return (
    <Layout>
      Your search term is: "{url.query.keyword}"
    </Layout>
  )
}

export default Search;