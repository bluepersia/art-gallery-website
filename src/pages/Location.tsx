import imgMobile from '../assets/mobile/image-map@2x.png';
import imgTablet from '../assets/tablet/image-map@2x.png';
import imgDesktop from '../assets/desktop/image-map@2x.png';
import Footer, { Type } from '../components/footer';
import Button from '../components/btn';

export default function Location(): JSX.Element {
  return (
    <div className='location'>
      <div className='location__map-container'>
        <img src={imgMobile} alt='Map' className='location__map-mobile' />
        <img src={imgTablet} alt='Map' className='location__map-tablet' />
        <img src={imgDesktop} alt='Map' className='location__map-desktop' />
        <Button to='/' className='location__btn' toRight={false}>
          Back to home
        </Button>
      </div>

      <div className='location__content'>
        <h2 className='location__title'>Our location</h2>
        <div className='location__content__content'>
          <h4 className='location__street'>99 King Street</h4>
          <p className='location__address'>
            Newport
            <br />
            RI 02840
            <br />
            United States of America
          </p>
          <p className='location__description'>
            Our newly opened gallery is located near the Edward King House on 99
            King Street, the Modern Art Gallery is free to all visitors and open
            seven days a week from 8am to 9pm.
          </p>
        </div>
      </div>

      <Footer type={Type.Light} />
    </div>
  );
}
