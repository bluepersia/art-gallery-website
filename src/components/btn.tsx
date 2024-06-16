import { PropsWithChildren } from 'react';
import imgArrowLeft from '../assets/icon-arrow-left.svg';
import imgArrowRight from '../assets/icon-arrow-right.svg';

type Props = {
  toRight?: boolean;
};
export default function Button({
  children,
  toRight = true,
}: PropsWithChildren<Props>): JSX.Element {
  return (
    <button className='btn'>
      {!toRight && (
        <span className='btn__arr-container'>
          <img src={imgArrowLeft} alt='Arrow' className='btn__img-arr' />
        </span>
      )}
      <span className='btn__cnt'>{children}</span>
      {toRight && (
        <span className='btn__arr-container'>
          <img src={imgArrowRight} alt='Arrow' className='btn__img-arr' />
        </span>
      )}
    </button>
  );
}
