import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Button = React.forwardRef((props, ref) => {
  const {
    children,
    className,
    variant,
    ...rest
  } = props;


  const outline = variant === 'outline';
  const solid = variant === 'solid' || !outline; // default to solid
  const buttonClasses = classNames(
    'button__base',
    {
    'button__variant--solid': solid,
    'button__variant--outline': outline
    },
    className
  );
  
  return (
    <button {...rest} className={buttonClasses} ref={ref}>
      {children}
    </button>
  );
});

Button.displayName = 'Button';

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  variant: PropTypes.oneOf([null, 'solid', 'outline'])
}

