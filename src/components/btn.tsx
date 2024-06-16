import { PropsWithChildren } from 'react';
import imgArrowLeft from '../assets/icon-arrow-left.svg';
import imgArrowRight from '../assets/icon-arrow-right.svg';
import { Link } from 'react-router-dom';

type Props = {
  toRight?: boolean;
  className?: string;
  to: string;
};
export default function Button({
  children,
  toRight = true,
  className = '',
  to,
}: PropsWithChildren<Props>): JSX.Element {
  return (
    <Link to={to} className={`btn ${className}`}>
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
    </Link>
  );
}
