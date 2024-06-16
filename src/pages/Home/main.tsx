import img1Mobile from '../../assets/mobile/image-grid-1@2x.jpg';
import img1Tablet from '../../assets/tablet/image-grid-1@2x.jpg';
import img1Desktop from '../../assets/desktop/image-grid-1@2x.jpg';
import img2Mobile from '../../assets/mobile/image-grid-2@2x.jpg';
import img2Tablet from '../../assets/tablet/image-grid-2@2x.jpg';
import img2Desktop from '../../assets/desktop/image-grid-2@2x.jpg';
import img3Mobile from '../../assets/mobile/image-grid-3@2x.jpg';
import img3Tablet from '../../assets/tablet/image-grid-3@2x.jpg';
import img3Desktop from '../../assets/desktop/image-grid-3@2x.jpg';

export default function Main(): JSX.Element {
  return (
    <main className='main'>
      <div className='main__cnt-1'>
        <h3 className='main__title'>Your day at the gallery</h3>
        <p className='main__body'>
          Wander through our distinct collections and find new insights about
          our artists. Dive into the details of their creative process.
        </p>
      </div>

      <img src={img1Mobile} alt='Gallery' className='main__img-1-mobile' />
      <img src={img1Tablet} alt='Gallery' className='main__img-1-tablet' />
      <img src={img1Desktop} alt='Gallery' className='main__img-1-desktop' />

      <img src={img2Mobile} alt='Gallery' className='main__img-2-mobile' />
      <img src={img2Tablet} alt='Gallery' className='main__img-2-tablet' />
      <img src={img2Desktop} alt='Gallery' className='main__img-2-desktop' />

      <img src={img3Mobile} alt='Gallery' className='main__img-3-mobile' />
      <img src={img3Tablet} alt='Gallery' className='main__img-3-tablet' />
      <img src={img3Desktop} alt='Gallery' className='main__img-3-desktop' />

      <div className='main__cnt-2'>
        <h3 className='main__title'>Come & be inspired</h3>
        <p className='main__body'>
          We’re excited to welcome you to our gallery and see how our
          collections influence you.
        </p>
      </div>
    </main>
  );
}
