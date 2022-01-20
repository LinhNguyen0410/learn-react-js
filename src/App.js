import TodoFeature from './features/Todo';
import AlbumFeature from './features/Album';
import ColorBox from './components/ColorBox';
import Counter from './components/Counter';
import { Link, Route, NavLink, Switch } from 'react-router-dom';
import './App.scss';
import NotFound from './components/NotFound';
import React, { useEffect } from 'react';
import productApi from './api/productApi';
import UploadAvatar from './features/UploadAvatar';
import CommentBox from './features/CommentBox';
import Countdown from './features/Countdown';
import ReducerCounter from './features/ReducerCounter';
import CounterFeature from './features/Counter';
import Header from './components/Header';

// render thằng parent lên đây
// set routing , routing nào sẽ đi đến component đó
function App() {
  //demo call api
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const params = {
  //       _limit: 10,
  //     };
  //     const productList = await productApi.getAll(params);
  //     console.log(productList);
  //   };
  //   fetchProducts();
  // }, []);

  return (
    <div className="App">
      <Header />
      <Switch>
        {/*  />
        <Route path={'/upload'} component={UploadAvatar} />
        <Route path={'/comment'} component={CommentBox} />
        <Route path={'/countdown'} component={Countdown} />
        <Route path={'/reducer'} component={ReducerCounter} /> */}
        <Route path={'/todos'} component={TodoFeature}></Route>
        <Route path={'/counter-redux'} component={CounterFeature} />
        <Route path={'/'} component={AlbumFeature}></Route>

        {/* nếu như user nhập url k có cái nào match thì mình show notfound */}
        <Route component={NotFound} />
      </Switch>

      <div className="btn-navlink">
        {/*
        <NavLink to={'/albums'}> Album Page</NavLink>
        <NavLink to={'/upload'}> Upload Avatar</NavLink>
        <NavLink to={'/comment'}>Go to Lesson</NavLink>
        <NavLink to={'/countdown'}>Countdown</NavLink>
        <NavLink to={'/reducer'}>counter reducer</NavLink> */}
      </div>
    </div>
  );
}

export default App;
