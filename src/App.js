import TodoFeature from './features/Todo';
import AlbumFeature from './features/Album';
import ColorBox from './components/ColorBox';
import Counter from './components/Counter';
import { Link, Route, NavLink, Switch } from 'react-router-dom';
import './App.scss';
import NotFound from './components/NotFound';
import React, { useEffect } from 'react';
import productApi from './api/productApi';

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
      <div className="btn-navlink">
        <NavLink to={'/todos'}> Todos Page</NavLink>
        <NavLink to={'/albums'}> Album Page</NavLink>
      </div>
      <Switch>
        <Route path={'/todos'} component={TodoFeature} />
        <Route path={'/albums'} component={AlbumFeature} />

        {/* nếu như user nhập url k có cái nào match thì mình show notfound */}
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
