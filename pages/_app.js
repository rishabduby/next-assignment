import AppNavbar from "../component/AppNavbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AppNavbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
