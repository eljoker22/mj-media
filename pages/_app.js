import '../styles/globals.css'
import Layout from '../component/Layout'
import { Provider } from 'react-redux'
import {store} from '../state/store';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return(
      <>
        {/* SEO META TAGS */}
        <Head>
          <title>MJ Media - لبيع خدمات منصات التواصل الأجنماعى</title>
          <meta
              name="description"
              content="زيادة متابعيك وجمهورك على وسائل التواصل الأجتماعى!
              روج لحسابك الاجتماعي و احصل على أقصى نمو على حسابات وسائل التواصل الاجتماعي الخاصة بك عن طريق زيادة متابعيك وإنشاء الحملات الأعلانية على فيس بوك وانستجرام و جوجل."
          />
          <link rel="canonical" href="https://mj-media.vercel.app/" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          {/* facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://mj-media.vercel.app/" />
          <meta
              property="og:title"
              content="MJ Media"
          />
          <meta
              property="og:description"
              content="لبيع خدمات منصات التواصل الأجنماعى"
          />
          <meta 
              property="og:image"
              content="https://res.cloudinary.com/jokermo/image/upload/v1642886046/phil_desforges_Hxp_x_D_Xs_O_Ss_unsplash_3bb82b709b.jpg"
          />
          {/* twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://mj-media.vercel.app/" />
          <meta
              property="twitter:title"
              content="MJ Media"
          />
          <meta
              property="twitter:description"
              content="لبيع خدمات منصات التواصل الأجنماعى"
          />
          <meta 
              property="twitter:image"
              content="https://res.cloudinary.com/jokermo/image/upload/v1642886046/phil_desforges_Hxp_x_D_Xs_O_Ss_unsplash_3bb82b709b.jpg"
          />
        </Head>

      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
      </>
      )
}

export default MyApp
