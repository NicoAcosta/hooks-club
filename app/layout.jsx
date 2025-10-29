import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { Funnel_Display, Funnel_Sans } from 'next/font/google'
import 'nextra-theme-docs/style.css'

const funnelDisplay = Funnel_Display({ weight: ['400', '500', '600', '700'], subsets: ['latin'] })
const funnelSans = Funnel_Sans({ weight: ['400', '500', '600', '700'], subsets: ['latin'] })
 
export const metadata = {
  title: 'Uniswap v4 Hooks',
  description: 'Documentation for Uniswap v4 Hooks',
  icons: {
    icon: '/favicon.svg',
  },
}
 
const navbar = (
  <Navbar
    logo={<><b className={funnelDisplay.className} style={{ fontSize: '2rem', color: '#f50db4' }} >hooks</b><b className={funnelDisplay.className} style={{ fontSize: '2rem' }} >.club</b></>}
  />
)
const footer = (
  <Footer>
    🦄 🤍
  </Footer>
)
 
export default async function RootLayout({ children }) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body className={funnelSans.className}>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/NicoAcosta/hooks-club/tree/master/"
          footer={footer}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}