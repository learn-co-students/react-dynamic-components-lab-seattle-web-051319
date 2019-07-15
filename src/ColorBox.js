import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
    
    if (this.props.opacity >= 0.2) {
      // const lowerOpacityFloat = this.props.opacity - 0.1;
      // const intOpacity = Math.round(lowerOpacityFloat * 10) / 10;
      return (
        <div className="color-box" style={{opacity: this.props.opacity}}>
          {/* {console.log(`initial: ${this.props.opacity}`)}
          {console.log(`float: ${lowerOpacityFloat}`)}
          {console.log(`floor: ${intOpacity}`)} */}
          <ColorBox opacity={this.props.opacity - 0.1} />
        </div>
      );
    } else {
      return null;
    }
  }
  
}
