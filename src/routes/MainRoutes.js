import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from '../pages/home';
import Details from '../pages/Details';
import { connect } from 'react-redux';

const MainRoutes = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/detail/:name" component={Details} />
      </Switch>
    </BrowserRouter>
  );
};
const mapStateToProps = (state) => {
  return {
    loading: state.movie.isLoading,
  };
};
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MainRoutes);
