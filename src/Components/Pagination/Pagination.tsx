import React, { useState, useContext } from 'react';
import { GoArrowSmallRight, GoArrowSmallLeft } from 'react-icons/go'; 
import { Context } from '../../Context/GlobalContext';
import './pagination.css';

export const Pagination: React.FunctionComponent = () => {

    const { currentMoviePage, setCurrentMoviePage } = useContext(Context);
    const active = false;
    /*use setActive later */
    //const [ active, setActive ] = useState(false);

    //this it the number of items that a user will see on a single page
    const itemsPerPage: number = 20;
    
    const pageNumberLimit: number = 10;
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState<number>(10);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState<number>(0);

    /*Calculate the total number of pages that are available by dividing
    the data you get from the server with the number of items on a page*/
    const pages: number[] = [];
    for (let i = 1; i <= Math.ceil(10000 / itemsPerPage); i++) { 
        pages.push(i);
    }

    //right button disabled boolean to toggle between disabling and enabling the left button
    const rdisabled:boolean = (currentMoviePage === pages[pages.length - 1]) ? true : false;
    //left button disabled boolean to toggle between disabling and enabling the left button
    const ldisabled:boolean = (currentMoviePage === pages[0]) ? true : false;

    const handleNextButton = () => {
        setCurrentMoviePage(currentMoviePage + 1);
    
        if (currentMoviePage + 1 > maxPageNumberLimit) {
          setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
          setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    };
    
    const handlePrevButton = () => {
        setCurrentMoviePage(currentMoviePage - 1);
    
        if ((currentMoviePage - 1) % pageNumberLimit === 0) {
          setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
          setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    };

    const renderPageNumbers = pages.map((number) => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
          return (
                <button 
                key={number}
                onClick={()=> {setCurrentMoviePage(number)}}
                className={active ? 'active_page_to_show': 'page_to_show'}
            >
                {number}
            </button>
          );
        } else {
          return null;
        }
    });

    return (
        <ul className='pagination_wrapper'>
            <li>
                <button 
                    className='page_to_show'
                    onClick={handlePrevButton}
                    disabled={ldisabled}
                >
                    <GoArrowSmallLeft />
                </button>
            </li>
            { renderPageNumbers }
            <li>
                <button 
                    className='page_to_show'
                    onClick={handleNextButton}
                    disabled={rdisabled}
                >
                    <GoArrowSmallRight />
                </button>
            </li>
        </ul>
    );
}