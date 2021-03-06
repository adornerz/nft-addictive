import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Shake from 'react-reveal/Shake';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16">
              nft.addictive club
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32">
                A big <span className='text-color-primary'> NFT community </span> with over
                <span className='text-color-secondary'> 110,000 </span> followers on instagram
                and with well over 40 NFT collection participations
              </p>
                <ButtonGroup>
                  <Shake>
                    <Button tag="a" color="primary" wideMobile href="https://instagram.com/nft.addictive">
                      Check Out Our Instagram
                    </Button>
                  </Shake>
                </ButtonGroup>
            </div>
          </div>
          <div className="hero-figure illustration-element-01">
            <Image
              className="has-shadow"
              src={require('./../../assets/images/hero-image.jpg')}
              alt="Hero"
              width={896}
              height={504} />
          </div>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;