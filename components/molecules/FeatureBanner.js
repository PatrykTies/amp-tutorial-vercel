import React from 'react';
import PropTypes from 'prop-types';
import BackroundImage from '../atoms/BackroundImage';
import PlaceHolder from '../atoms/Placeholder';

const FeatureBanner = ({
  heading,
  text,
  buttonText,
  url,
  imageSmall770x462,
  imageLarge1400x420,
  imageMobileWebP,
  imageWebp
}) => {
  return (
    <div className="feature-banner">
        <BackroundImage
          imageWebp={imageWebp}
          imageMobileWebP={imageMobileWebP}
          imageSmall={imageSmall770x462}
          imageLarge={imageLarge1400x420}
          altText={heading}
          ariaLabel={'View of few restaurants in a old town.'}
        />
      <div className="contentWrapper">
        <div className="heading" data-testid="heading">
          {heading}
        </div>
        <div className="description" data-testid="description">
          {text}
        </div>
        <div>
          <a href={url} aria-label="Join today">
            {buttonText}
          </a>
        </div>
      </div>
      <style jsx>{`
        a {
          color: ${COLOUR_WHITE};
        }
        .feature-banner {
          margin: auto;
          position: relative;
          height: 0;
          padding-bottom: 53.07291666666667%;
          background-position-y: 50% 50%;
          background-size: contain;
          background-repeat: no-repeat;
          margin-bottom: 1.5rem;
        }
        .contentWrapper {
          color: white;
          position: absolute;
          z-index: 1;
          width: 300px;
          font-family: 'Montserrat', Helvetica, Arial, sans-serif;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        @media (min-width: ${BREAKPOINT_LG}px) {
          .feature-banner.feature-banner {
            margin: auto;
            position: relative;
            height: 0;
            max-width: 1200px;
            padding-bottom: 30.07291666666667%;
            background-position-y: 40%;
            background-size: cover;
            background-repeat: no-repeat;
          }
          .contentWrapper {
            top: 50%;
            left: 5%;
            transform: translate(0%, -50%);
          }
        }
        @media (min-width: ${BREAKPOINT_XS}px) {
          .feature-banner.feature-banner {
            margin: auto;
            position: relative;
            height: 0;
            width: 90%;
            padding-bottom: 43.07291666666667%;
            background-position-y: 40%;
            background-size: cover;
            background-repeat: no-repeat;
          }
        }
        @media (min-width: ${BREAKPOINT_SM}px) {
          .feature-banner.feature-banner {
            margin: auto;
            position: relative;
            height: 0;
            width: 95%;
            padding-bottom: 33.07291666666667%;
            background-position-y: 40%;
            background-size: cover;
            background-repeat: no-repeat;
          }
        }
        @media (min-width: ${BREAKPOINT_MD}px) {
          .feature-banner.feature-banner {
            margin: auto;
            position: relative;
            height: 0;
            padding-bottom: 30.07291666666667%;
            background-position-y: 40%;
            background-size: cover;
            background-repeat: no-repeat;
          }
        }
        .heading {
          font-size: 28px;
          line-height: 36px;
          font-weight: 600;
        }
        .description {
          margin-top: 10px;
        }
        @media (min-width: ${BREAKPOINT_XS}px) {
          .description {
            width: 450px;
          }
        }
        a {
          display: block;
          margin-top: 25px;
          width: 200px;
          padding: 10px 0;
          background: transparent;
          color: white;
          font-size: 16px;
          border: 2px solid ${COLOUR_WHITE};
          font-weight: 600;
          text-align: center;
          cursor: pointer;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
};

FeatureBanner.defaultProps = {
  heading: '',
  text: '',
  buttonText: '',
  url: '',
  imageSmall770x462: '',
  imageLarge1400x420: '',
  imageWebp: '',
  imageMobileWebP: ''
};

FeatureBanner.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  imageSmall770x462: PropTypes.string.isRequired,
  imageLarge1400x420: PropTypes.string.isRequired,
  imageWebp: PropTypes.string.isRequired,
  imageMobileWebP: PropTypes.string.isRequired
};

export default FeatureBanner;

// <style jsx global>{`
// .webp .backgroundContainer.feature-banner {
//   background-image: linear-gradient(
//       239deg,
//       rgba(0, 0, 0, 0),
//       rgba(0, 0, 0, 1)
//     ),
//     url(${imageMobileWebP});
// }
// .no-webp .backgroundContainer.feature-banner {
//   background-image: linear-gradient(
//       239deg,
//       rgba(0, 0, 0, 0),
//       rgba(0, 0, 0, 1)
//     ),
//     url(${imageSmall770x462});
// }
// @media (min-width: ${BREAKPOINT_LG}px) {
//   .webp .backgroundContainer.feature-banner {
//     background-image: linear-gradient(
//         239deg,
//         rgba(0, 0, 0, 0),
//         rgba(0, 0, 0, 0.5)
//       ),
//       url(${imageWebp});
//   }
//   .no-webp .backgroundContainer.feature-banner {
//     background-image: linear-gradient(
//         239deg,
//         rgba(0, 0, 0, 0),
//         rgba(0, 0, 0, 0.5)
//       ),
//       url(${imageLarge1400x420});
//   }
// }
// `}</style>