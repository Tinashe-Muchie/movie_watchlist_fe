import React from 'react';
import {
    HashRouter as Router,
    Routes,                         
    Route } from 'react-router-dom';
import { Header } from '../Components/index';
import { Movies } from '../Pages/index';
import { TvShows } from '../Pages/index';
import { Search } from '../Pages/index';
import { Watchlist} from '../Pages/index';
import { Watched } from '../Pages/index';
import { MovieDetail } from '../Components/index';
import { TvShowDetail } from '../Components/index';
import { Footer } from '../Components/index';

export const Routing: React.FunctionComponent = () => {
    return (
        <Router>
          <Header /> 
        <Routes>
            <Route path='/' element={ <Movies /> } />
            <Route path='/tvshows' element={ <TvShows /> } />
            <Route path='/search' element={ <Search /> } />
            <Route path='/watchlist' element={ <Watchlist /> } />
            <Route path='/watched' element={ <Watched />} />
            <Route path='/moviedetails' element={ <MovieDetail />} />
            <Route path='/tvshowdetails' element={ <TvShowDetail /> } />
        </Routes> 
        <Footer />
        </Router>
    );
}