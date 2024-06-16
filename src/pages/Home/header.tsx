import Button from '../../components/btn';
import imgMobile from '../../assets/mobile/image-hero@2x.jpg';
import imgTablet from '../../assets/tablet/image-hero@2x.jpg';
import imgDesktop from '../../assets/desktop/image-hero@2x.jpg';

export default function Header(): JSX.Element {
  return (
    <header className='header'>
      <div className='header__black-region'></div>
      <h1 className='header__title-desktop'>
        Moder<span className='n'>n</span> <br />
        Art Gal<span className='l'>l</span>
        <span className='e'>e</span>
        <span className='r'>r</span>
        <span className='y'>y</span>
      </h1>

      <img src={imgMobile} alt='Gallery' className='header__img-mobile' />
      <img src={imgTablet} alt='Gallery' className='header__img-tablet' />
      <img src={imgDesktop} alt='Gallery' className='header__img-desktop' />

      <div className='header__content'>
        <h1 className='header__title-mobile'>
          Modern <br />
          Art Gallery
        </h1>
        <p className='header__body'>
          The arts in the collection of the Modern Art Gallery all started from
          a spark of inspiration. Will these pieces inspire you? Visit us and
          find out.
        </p>
        <Button>Our location</Button>
      </div>
    </header>
  );
}
