import { useEffect } from 'react';
import Head from 'next/head';
import Layout from 'containers/layout/layout';
import HeroBlock from 'containers/banner/hero-block';
import Products from 'containers/products';
import Categories from 'containers/categories';
import { getProducts } from 'helpers/get-products';
import { getCategories } from 'helpers/get-categories';
import { useRefScroll } from 'helpers/use-ref-scroll';
import { useSearch } from 'contexts/search/use-search';

export default function Home({ products, categories }) {
  const { elRef, scroll } = useRefScroll({
    percentOfElement: 0,
    percentOfContainer: 0,
    offsetPX: -100,
  });
  const { searchTerm } = useSearch();

  useEffect(() => {
    if (searchTerm) return scroll();
  }, [searchTerm]);

  return (
    <Layout>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="Description" content="SBM online order." />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <title>SBM online order</title>
      </Head>

      <HeroBlock />
      <Categories items={categories} />
      <Products items={products} ref={elRef} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const products = await getProducts();
  const categories = await getCategories();
  return {
    props: {
      products,
      categories
    },
  };
}
