import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "@next/font/google";
import { AppProvider } from "@/contexts/AppContext";
import { Toaster } from 'react-hot-toast';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Toaster/>
      <main className={poppins.className}>
        <Component {...pageProps} />
      </main>
    </AppProvider>
  );
}
