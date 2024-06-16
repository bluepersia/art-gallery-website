import { PropsWithChildren } from 'react';

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
          <img
            src='../assets/icon-arrow-left.svg'
            alt='Arrow'
            className='btn__img-arr'
          />
        </span>
      )}
      <span className='btn__cnt'>{children}</span>
      {toRight && (
        <span className='btn__arr-container'>
          <img
            src='../assets/icon-arrow-right.svg'
            alt='Arrow'
            className='btn__img-arr'
          />
        </span>
      )}
    </button>
  );
}
