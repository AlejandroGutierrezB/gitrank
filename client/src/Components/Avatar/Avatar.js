import React, { useState } from 'react';
import './Avatar.css';
import cx from 'classnames';

function Avatar ({
  className,
  avatarUrl,
  size = 40,
  author,
  onError,
  ...props
}) {
  const [imageError, setImageError] = useState(false);
  const classnames = cx('Avatar', className);

  return !imageError ? (
    <div className={classnames} style={{ width: size, height: size }}>
      <img
        {...props}
        src={avatarUrl}
        alt={author}
        title={author || 'You'}
        onError={() => {
          setImageError(true);
          if (onError) {
            onError();
          }
        }}
      />
    </div>
  ) : (
      <div className={classnames}>
        <span className='Avatar-error'>{author}</span>
      </div>
    );
}

export default Avatar;
