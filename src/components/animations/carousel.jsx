import React, {PureComponent, PropTypes} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './carousel.css';

class Carousel extends PureComponent {
  render() {
    return (
      <div>
        <ReactCSSTransitionGroup>
          <img src="" alt="beauty"/>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

Carousel.propType = {
  imgSrc: PropTypes.string.isRequired
};

export default Carousel;
