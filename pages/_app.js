import '../styles/globals.css';
import Transition from '../components/Transition';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head';
function MyApp({ Component, pageProps }) {
        const router = useRouter();
        return (
                <Layout>
                        {/* <Head>
                                
                                <link rel="icon" href="/logo.png" />
                                
                                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                                <meta name="description" content="Your website description" />
                        </Head> */}
                        <AnimatePresence mode="wait">
                                <motion.div key={router.route} className="h-full">
                                        <Transition />
                                        <Component {...pageProps} />
                                </motion.div>
                        </AnimatePresence>
                </Layout>
        );
}

export default MyApp;
