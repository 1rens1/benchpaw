import 'styles/globals.scss';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import Navbar from 'components/Navbar';
import { useState } from 'react';

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <DefaultSeo defaultTitle="benchpaw" titleTemplate="%s | benchpaw" />
            <Navbar />
            <Component {...pageProps} />
        </>
    );
};

export default App;
