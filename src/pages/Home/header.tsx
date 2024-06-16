import Button from '../../components/btn';

export default function Header(): JSX.Element {
  return (
    <header className='header'>
      <h1 className='header__title-desktop'>
        Moder<span className='n'>n</span> Art
        <br /> Gal<span className='l'>l</span>
        <span className='e'>e</span>
        <span className='r'>y</span>
        <span className='y'>y</span>
      </h1>

      <img
        src='../assets/mobile/image-hero@2x.jpg'
        alt='Gallery'
        className='header__img-mobile'
      />
      <img
        src='../assets/tablet/image-hero@2x.jpg'
        alt='Gallery'
        className='header__img-tablet'
      />
      <img
        src='../assets/desktop/image-hero@2x.jpg'
        alt='Gallery'
        className='header__img-desktop'
      />

      <div className='header__content'>
        <h1 className='header__title-mobile'>Modern Art Gallery</h1>
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
