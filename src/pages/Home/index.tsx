import Footer, { Type } from '../../components/footer';
import Header from './header';
import Main from './main';

export default function Home(): JSX.Element {
  return (
    <>
      <Header />
      <Main />
      <Footer type={Type.Dark} />
    </>
  );
}
