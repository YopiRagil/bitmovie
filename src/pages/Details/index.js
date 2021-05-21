import React from 'react';
import { connect } from 'react-redux';
import { MDBContainer, MDBRow, MDBCol, MDBTypography } from 'mdbreact';

const styles = {
  main: { backgroundColor: 'black', minHeight: '900px' },
  text_title: { color: 'white', fontSize: 'calc(1.5vw + 1.5vh)' },
  text_type: { color: '#e3e3e3', fontSize: 'calc(0.7vw + 0.7vh)' },
  text_year: { color: '#f1f2c7', fontSize: 'calc(1vw + 1vh)' },
  poster: { width: '50%' },
};
const Details = (props) => {
  return (
    <div style={styles.main}>
      <MDBContainer fluid className="pt-5 pb-5">
        <MDBRow>
          <MDBCol size="12" sm="6" xl="4" lg="5" md="6">
            <img
              style={styles.poster}
              alt="poster"
              src={props.detail?.Poster}
            />
          </MDBCol>
          <MDBCol size="12" xl="8" lg="7" sm="6" md="6">
            <MDBTypography className="text-left mb-0" style={styles.text_title}>
              {props.detail?.Title}
            </MDBTypography>
            <MDBTypography className="text-left mb-0" style={styles.text_type}>
              Type : {props.detail?.Type}
            </MDBTypography>
            <MDBTypography className="text-left" style={styles.text_year}>
              Realease in {props.detail?.Year}
            </MDBTypography>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    detail: state.movie.detail,
  };
};
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Details);
