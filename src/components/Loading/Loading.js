import React from 'react';
import { MDBAnimation } from 'mdbreact';

const AnimationPage = (props) => {
  const isLoading = props;
  return (
    <div style={{ display: isLoading ? 'none' : '' }}>
      <MDBAnimation type="jello" infinite>
        <h1 style={{ color: 'white' }}>Loading . . . </h1>
      </MDBAnimation>
    </div>
  );
};

export default AnimationPage;
