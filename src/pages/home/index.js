import React, { useEffect } from 'react';
import { getMovieAll, setDetails } from '../../redux/actions/movieActions';
import { connect } from 'react-redux';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import { NavbarPage, CardExample, AnimationPage } from '../../components';
import InfiniteScroll from 'react-infinite-scroll-component';

const Home = (props) => {
  const getMovieList = async () => {
    await props.getMovieAll();
  };
  useEffect(() => {
    getMovieList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getNextData = async () => {
    await props.getMovieAll(
      props.save.page + 1,
      props.save.keyword,
      props.save.type
    );
  };
  console.log(props.movies);
  return (
    <div style={{}}>
      <NavbarPage setSearch={(e, type) => props.getMovieAll(e, type)} />
      <InfiniteScroll
        dataLength={100}
        next={getNextData}
        inverse={true}
        hasMore={true}
        scrollThreshold="100%"
      >
        <MDBContainer
          fluid
          className="pt-5 pb-5"
          style={{ backgroundColor: 'black' }}
        >
          <AnimationPage isLoading={props.isLoading} />
          <MDBRow>
            {props.movies?.Search?.map((item, index) => (
              <MDBCol
                className="mb-3"
                key={index}
                size="6"
                sm="6"
                md="4"
                lg="4"
                xl="3"
              >
                <CardExample {...props} datas={item} />
              </MDBCol>
            ))}
          </MDBRow>
        </MDBContainer>
      </InfiniteScroll>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.movie.movies,
    isLoading: state.movie.isLoading,
    save: state.movie.save,
  };
};
const mapDispatchToProps = { getMovieAll, setDetails };
export default connect(mapStateToProps, mapDispatchToProps)(Home);
