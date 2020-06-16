import * as React from 'react';
import { FacebookIcon } from './icons/FacebookIcon.jsx';
import { LinkedInIcon } from './icons/LinkedInIcon.jsx';
import { TwitterIcon } from './icons/TwitterIcon.jsx';
import { PinterestIcon } from './icons/PinterestIcon.jsx';
import { PhoneIcon } from './icons/PhoneIcon.jsx';
import { TranslationsIcon } from './icons/TranslationsIcon.jsx';
import { LogoIcon } from './icons/LogoIcon.jsx';
import { ArrowRightIcon } from './icons/ArrowRightIcon';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';

export const viewBox = '0 0 0 0';

const iconMap = {
	facebook: FacebookIcon,
	linkedin: LinkedInIcon,
	twitter: TwitterIcon,
	pinterest: PinterestIcon,
	phone: PhoneIcon,
	translations: TranslationsIcon,
	logo: LogoIcon,
	arrowRight: ArrowRightIcon,
	arrowLeft: ArrowLeftIcon
};

export const Icon = props => {
	const { name, size, color, isLegacy } = props;
	const NamedIcon = iconMap[name];
	return (
		<span>
			<NamedIcon fill={color} height={size} width={size} />
			<style jsx>{`
        span {
          display: inline-block;
          vertical-align: baseline;
          height: '${size}rem';
          width: '${size}rem';
          margin-left: ${isLegacy ? '1.5rem' : ''};
          margin-right: ${isLegacy ? '1rem' : ''};
        }
      `}</style>
		</span>
	);
};