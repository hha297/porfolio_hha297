import '../styles/globals.css';
import Transition from '../components/Transition';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';
function MyApp({ Component, pageProps }) {
        const router = useRouter();
        return (
                <Layout>
                        <Head>
                                <link rel="icon" href="/logo.png" />

                                <meta name="Portforlio" content="My personal portforlio" />
                        </Head>
                        <AnimatePresence mode="wait">
                                <motion.div key={router.route} className="h-full">
                                        <Transition />
                                        <Toaster />
                                        <Component {...pageProps} />
                                </motion.div>
                        </AnimatePresence>
                </Layout>
        );
}

export default MyApp;
