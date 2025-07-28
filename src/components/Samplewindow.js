import React from 'react'
import useWindowsize from './useWindowsize'
const Samplewindow = () => {
  const widthofscreen = useWindowsize();
  return (
    <div>
      Screen size: {widthofscreen}
    </div>
  );
}

export default Samplewindow
