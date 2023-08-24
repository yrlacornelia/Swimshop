import Layout from '@/components/layouts/mainLayout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { UserAuthContextProvider } from "../utils/services";


export default function App({ Component, pageProps }: AppProps) {
  return  <Layout> <UserAuthContextProvider>  <Component {...pageProps} />   </UserAuthContextProvider></Layout>
}
