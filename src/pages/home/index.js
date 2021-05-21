import React, { useEffect } from 'react';
import { getMovieAll, setDetails } from '../../redux/actions/movieActions';
import { connect } from 'react-redux';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import { NavbarPage, CardExample, AnimationPage } from '../../components';
import InfiniteScroll from 'react-infinite-scroller';

const styles = {
  no_data: { height: '1000px', width: '100%' },
  containers: { backgroundColor: 'black' },
  text_no_file: { color: 'white' },
};
const Home = (props) => {
  const getMovieList = async () => {
    await props.getMovieAll();
  };
  useEffect(() => {
    getMovieList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getNextData = async () => {
    if (props?.save?.page) {
      await props.getMovieAll(
        props.save.page + 1,
        props.save.keyword,
        props.save.type
      );
    }
  };
  return (
    <div id="nextdatawillget">
      <NavbarPage setSearch={(e, type) => props.getMovieAll(1, e, type)} />
      <InfiniteScroll
        pageStart={1}
        loadMore={getNextData}
        hasMore={props.movies?.totalResults > props.movies?.Search?.length}
        useWindow={true}
      >
        <MDBContainer fluid className="pt-5 pb-5" style={styles.containers}>
          <AnimationPage isLoading={props.isLoading} />
          <MDBRow>
            {props.movies?.Search?.length > 0 ? (
              props.movies?.Search?.map((item, index) => (
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
              ))
            ) : (
              <div
                className="d-flex justify-content-center"
                style={styles.no_data}
              >
                <div>
                  <h2 style={styles.text_no_file}>No File Found !</h2>
                </div>
              </div>
            )}
          </MDBRow>
          {props?.save?.page === null ? (
            <div>
              <p>Max</p>
            </div>
          ) : null}
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
