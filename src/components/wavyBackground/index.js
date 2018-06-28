import React from "react";
import "./styles.css";

function createWavyD(width, height, xSpacing, wavelength, amplitude) {
  let d = '';

  const columnCount = Math.ceil(width / (xSpacing + amplitude));

  for (let column = 0; column < columnCount; column++) {
    const xPos = column * (xSpacing + amplitude);
    let columnD = `M ${xPos},0
      q ${amplitude},${wavelength/4} 0,${wavelength/2}
    `;

    for (let yPos = wavelength/4; yPos <= height; yPos += wavelength/4) {
      columnD += `
        t 0,${wavelength/2}
      `;
    }

    d += columnD;
  }

  return d;
}

class WavyBackground extends React.Component {
  render() {
    const {
      width,
      height,
      dashLength,
      xSpacing,
      wavelength,
      amplitude
    } = this.props;

    return (
      <svg viewBox={`0 0 ${width} ${height}`}>

        <path
          className="WavyBackgroundPath"
          fill="none"
          d={createWavyD(width, height, xSpacing, wavelength, amplitude)}
        />
      </svg>
    );
  }
}

export default WavyBackground;