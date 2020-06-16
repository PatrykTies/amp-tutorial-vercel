import React from 'react';
import PropTypes from 'prop-types';

const BackroundImage = ({ imageWebp, imageMobileWebP, imageSmall, altText, ariaLabel }) => {

  return (
  <>
      <source
        media={`(min-width: ${BREAKPOINT_MD}px)`}
        srcSet={imageWebp}
        type="image/jpeg"
      />
      <source srcSet={imageMobileWebP} type="image/webp" />
      <source srcSet={imageSmall} type="image/jpeg" />
      <img src={imageSmall} alt={altText} aria-label={ariaLabel} />
      <style jsx>{`
        img {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
        }
      `}</style>
   </>
  );
};

BackroundImage.propTypes = {};

export default BackroundImage;