import React from 'react';
import PropTypes from 'prop-types';
import BackroundImage from '../Commons/BackroundImage.jsx';
import LoginBannerSection from '../../sections/homepage/LoginBanner/LoginBannerSection';
import {
  BREAKPOINT_XS,
  BREAKPOINT_SM,
  BREAKPOINT_MD,
  BREAKPOINT_LG
} from '../../config/constants/breakpoints';
import SearchHomesForm from '../SearchHomesForm/SearchHomesForm.jsx';
import {
  COLOUR_WHITE,
  COLOUR_GREY_LIGHT,
  COLOUR_PINK
} from '../../config/constants/global_colors';

const HeroBanner = ({
  heading,
  subTitle,
  ctaText,
  imageSmall,
  imageWebp,
  imageMobileWebP,
  imageAlternateTxt,
  imageAccessibilityLabel,
  inputFieldFrom,
  inputFieldTo,
  tracking,
  ipLocation
}) => {
  // TODO: Change here the fromCountry when we get it from BE
  const fromCountry = 'GB';
  const inputFrom = {
    placeholder: inputFieldFrom.inputPlaceholder,
    inputLabel: inputFieldFrom.inputLabel,
    accessibilityLabel: inputFieldFrom.inputAccessibilityLabel,
    value: ipLocation
  };
  const inputTo = {
    placeholder: inputFieldTo.inputPlaceholder,
    inputLabel: inputFieldTo.inputLabel,
    accessibilityLabel: inputFieldTo.inputAccessibilityLabel,
    value: 'anywhere'
  };

  return (
    <div className="hero-banner">
      <BackroundImage
        imageWebp={imageWebp}
        imageMobileWebP={imageMobileWebP}
        imageSmall={imageSmall}
        altText={imageAlternateTxt}
        ariaLabel={imageAccessibilityLabel}
      />

      <div className="content">
        <div className="inner-wrapper">
          <div className="heading-wrapper">
            <h1 data-testid="heading">{heading}</h1>
            <h2 className="subTitle" data-testid="subheading">
              {subTitle}
            </h2>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-banner > * {
          -webkit-font-smoothing: antialiased; /* Chrome, Safari */
          -moz-osx-font-smoothing: grayscale; /* Firefox */
        }
        .hero-banner {
          position: relative;
          padding-bottom: 142%;
          min-height: 40rem;
          color: ${COLOUR_WHITE};
          background: ${COLOUR_GREY_LIGHT};
          font-family: 'Montserrat', 'MontserratSubset', Helvetica, Arial,
            sans-serif;
          font-weight: 600;
        }

        .hero-banner img {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
        }

        .content {
          color: white;
          position: absolute;
          width: 100%;
          height: calc(100% - 9rem);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          text-align: center;
          margin: 5rem 0 0 0;
          align-items: center;
        }

        .heading-wrapper {
          padding: 0 2rem;
        }

        a {
          display: block;
          padding: 1.2rem;
          margin: 2rem auto;
          width: 80%;
          background-color: ${COLOUR_PINK};
          color: white;
          font-size: 1.1rem;
          text-align: center;
          cursor: pointer;
          text-align: center;
          text-decoration: none;
        }

        a:hover {
          background-color: #bd2654;
        }

        h1 {
          font-size: 2.2rem;
          line-height: 2.5rem;
          text-align: center;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }

        .subTitle {
          font-size: 1.2rem;
          line-height: 1rem;
          margin-top: 1.2rem;
          display: none;
        }
        .inner-wrapper {
          height: 100%;
          display: flex;
          align-items: center;
          flex-direction: column;
          width: 100%;
          justify-content: center;
        }

        @media (min-width: ${BREAKPOINT_XS}px) {
          .hero-banner {
            padding-bottom: 65%;
          }
        }

        @media (min-width: ${BREAKPOINT_SM}px) {
          .inner-wrapper {
            width: 95%;
          }
          .hero-banner {
            padding-bottom: 55%;
            min-height: 40rem;
            height: 0;
          }
          .hero-banner img {
            top: 0;
          }
          .subTitle {
            display: block;
          }
          .heading-wrapper {
            width: 80%;
            padding: 0;
            margin-bottom: 2rem;
          }

          .content {
            background: linear-gradient(
              to left,
              rgba(0, 0, 0, 0),
              rgba(0, 0, 0, 0.2),
              rgba(0, 0, 0, 0.4)
            );
          }
          h1 {
            font-size: 2.5rem;
            line-height: 3rem;
            font-weight: 700;
            margin-bottom: 0;
          }
          .subTitle {
            font-weight: 600;
            font-size: 1.1rem;
            line-height: 1.5rem;
            margin-top: 0.5rem;
          }
          a {
            width: auto;
            margin-top: 1.8rem;
            padding: 1.5rem 7rem;
            background-color: ${COLOUR_PINK};
            color: white;
            font-size: 1.1rem;
            font-weight: 600;
            text-align: center;
            cursor: pointer;
            text-align: center;
            text-decoration: none;
          }
        }
        @media (min-width: ${BREAKPOINT_MD}px) {
          .inner-wrapper {
            width: 90%;
          }
          .hero-banner {
            padding-bottom: 45%;
          }
          .hero-banner img {
            top: 0;
          }
          .subTitle {
            display: block;
          }
          h1 {
            font-size: 2.5rem;
            line-height: 3rem;
            font-weight: 700;
          }
          .subTitle {
            font-weight: 400;
            font-size: 1.1rem;
            line-height: 1.5rem;
          }
          a {
            margin: 0;
            margin-top: 1.8rem;
            padding: 1.5rem 10rem;
            background-color: ${COLOUR_PINK};
            color: white;
            font-size: 1.1rem;
            font-weight: 600;
            text-align: center;
            cursor: pointer;
            text-align: center;
            text-decoration: none;
          }
        }

        @media (min-width: ${BREAKPOINT_LG}px) {
          .inner-wrapper {
            width: 70%;
          }
          .hero-banner {
            padding-bottom: 40%;
          }
          .subTitle {
            font-weight: 600;
            font-size: 1.2rem;
            line-height: 1.5rem;
          }

          a {
            margin-top: 1.8rem;
            padding: 1.5rem 10rem;
            background-color: ${COLOUR_PINK};
            color: white;
            font-size: 1.1rem;
            font-weight: 600;
            text-align: center;
            cursor: pointer;
            text-align: center;
            text-decoration: none;
          }
        }

        @supports (-webkit-appearance: none) {
          .contentWrapper {
            padding: 0 20px;
            position: static;
          }
          a {
            text-decoration: none;
          }
        }
      `}</style>
    </div>
  );
};

HeroBanner.defaultProps = {
  heading: '',
  subTitle: '',
  ctaText: '',
  ctaUrl: '',
  imageSmall: '',
  imageLarge: '',
  imageAlternateTxt: '',
  imageAccessibilityLabel: '',
  inputFieldFrom: null,
  inputFieldTo: null,
  ipLocation: ''
};

HeroBanner.propTypes = {
  heading: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  ctaText: PropTypes.string.isRequired,
  ctaUrl: PropTypes.string.isRequired,
  imageSmall: PropTypes.string.isRequired,
  imageLarge: PropTypes.string.isRequired,
  imageAlternateTxt: PropTypes.string,
  imageAccessibilityLabel: PropTypes.string,
  inputFieldFrom: PropTypes.shape({
    inputLabel: PropTypes.string,
    inputPlaceholder: PropTypes.string,
    inputAccessibilityLabel: PropTypes.string
  }),
  inputFieldTo: PropTypes.shape({
    inputLabel: PropTypes.string,
    inputPlaceholder: PropTypes.string,
    inputAccessibilityLabel: PropTypes.string
  }),
  ipLocation: PropTypes.string.isRequired
};