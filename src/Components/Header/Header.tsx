import { 
    ChangeEvent, FunctionComponent, 
    useState, useContext } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import { Context } from '../../Context/GlobalContext';
import { NavLink } from 'react-router-dom';
import './Header.css';

export const Header: FunctionComponent = () => {

    const { setSearch } = useContext(Context);

    //open is for opening the burger menu options
    const [open, setOpen] = useState<boolean>(false);
    const [query, setQuery] = useState<string>('');

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setQuery(e.currentTarget.value)
    };

    const WatchlistNavigation = () => {
        return (
            <>
             <NavLink 
                        className= {({isActive})=> 
                        isActive ? 'watchlist_navigation_link_active'
                        : 'watchlist_navigation_link'
                    }    
                        to='/watchlist'
                    >
                        <li>
                            Watchlist
                        </li>
                    </NavLink>
                    <NavLink 
                        className= {({isActive})=> 
                        isActive ?  'watchlist_navigation_link_active'
                        :  'watchlist_navigation_link'
                    } 
                        to='/watched' 
                    >
                        <li>
                            Watched
                        </li>
                    </NavLink>
            </>
        );
    }

    return (
        <header>
            <section className='header_wrapper'>
            <h1 className='title'>
                Welcome. Explore various movies and tv shows available and save the ones you like.
            </h1>
            <section className='input_wrapper'> 
                <form>
                    <input  
                        placeholder='Search for movies and tv shows by name....' 
                        value={query}
                        onChange={onChange}
                    />
                    <NavLink
                        className='button_navigation_link' 
                        to ={{
                            pathname: '/search'
                        }}
                    >
                        <button
                            className='header_search_button'
                            onClick={()=> {
                                setSearch(query);
                                setQuery('');
                            }}
                        >
                            search
                        </button>
                    </NavLink>
                </form>
                <div className='hamburger_wrapper'>
                    {
                        open ? <MdClose onClick={()=> setOpen(!open)} />
                        :   <GiHamburgerMenu onClick={()=> setOpen(!open)}/>
                    }
                    <ul className={open? 'watchlist_ul' : 'watch_ul'}>
                        <WatchlistNavigation />
                    </ul>
                </div>
                <ul className='watch_ul'>
                    <WatchlistNavigation />
                </ul>
            </section>
            </section> 
            <section className='category_wrapper'>
                <NavLink
                    className={({isActive}) => 
                    isActive ? 'category_navigation_link_active'
                    : 'category_navigation_link'
                } 
                    to="/"
                >
                    <p className='category'>
                        MOVIES
                    </p>
                </NavLink>
                <NavLink 
                    className={({isActive}) => 
                    isActive ? 'category_navigation_link_active'
                    : 'category_navigation_link'
                }
                    to="/tvshows"
                >
                    <p className='category'>
                        TV SHOWS
                    </p>
                </NavLink>   
            </section>   
        </header>
    );
}