import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import { Fade } from 'react-reveal';
import testomonialsData from "./testimonial.data"

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Customer testimonials',
    paragraph: 'We let our work talk for us.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            {
              testomonialsData.map(({ text, author, project, reval }) => (
                <Fade>
                  <div className="tiles-item">
                    <div className="tiles-item-inner">
                      <div className="testimonial-item-content">
                        <p className="text-sm mb-0">
                          {text}
                        </p>
                      </div>
                      <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                        <span className="testimonial-item-name text-color-high"> {author} </span>
                        <span className="text-color-low"> / </span>
                        <span className="testimonial-item-link">
                          <a href="#0"> {project} </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </Fade>
              ))
            }
            
          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;