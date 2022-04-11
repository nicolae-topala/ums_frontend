import React, { ReactElement } from 'react';

import { LoaderSpinner } from '../LoaderSpinner/LoaderSpinner';
import './Button.scss';

interface Props {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  loading?: boolean;
}

export const Button: React.FC<Props> = ({
  text,
  onClick,
  disabled,
  className = '',
  loading = false,
}): ReactElement => {
  return (
    <button
      className={`button ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {loading && <LoaderSpinner />}
      {text}
    </button>
  );
};
