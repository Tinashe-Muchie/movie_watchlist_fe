import React from 'react';
import './footer.css';

export const Footer = () => {

    const date = new Date();
    const current_year = date.getFullYear();

    return (
        <footer >
            &copy; All rights reserved, {current_year}.
        </footer>
    );
}