import Navbar from 'components/Navbar';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import 'styles/globals.scss';

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <DefaultSeo
                defaultTitle="benchpaw"
                titleTemplate="%s | benchpaw"
                description="games for your brains"
            />
            <Navbar />
            <Component {...pageProps} />
        </>
    );
};

export default App;
