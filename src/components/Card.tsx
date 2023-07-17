import React, {FC, PropsWithChildren} from 'react';

export enum CardVariant {
  outlined = 'outlined',
  primary = 'primary'
}

interface CardProps extends PropsWithChildren {
  width?: string;
  height?: string;
  variant: CardVariant;
  onClick: () => void;
}

const Card: FC<CardProps> = 
  ({
    width,
    height,
    variant,
    onClick,
    children
  }) => {
  return (
    <div style={{
      width,
      height,
      border: variant === CardVariant.outlined ? '1px solid #000' : 'none',
      background: variant === CardVariant.primary ? 'lightgray' : ''
    }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;