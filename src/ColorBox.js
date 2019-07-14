import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {

    // with one-line conditional:
    
    // let opValue = this.props.opacity;
    //
    //   return (
    //     <div className="color-box" style={{opacity: opValue}}>
    //       { opValue >= 0.2 ? <ColorBox opacity={opValue - 0.1}/> : null}
    //     </div>
    //   )


    let opValue = this.props.opacity;

    if (opValue >= 0.2) {
      return (
        <div className="color-box" style={{opacity: opValue}}>
          <ColorBox opacity={opValue - 0.1} />
        </div>
      )
    } else {
      return (
        null
      )
    }
  }

}
