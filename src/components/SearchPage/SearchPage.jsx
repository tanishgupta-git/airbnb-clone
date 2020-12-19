import React from 'react';
import {Button} from '@material-ui/core';
import  SearchResults from '../SearchResult/SearchResult';
import './SearchPage.css';

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage__info'>
                <p>2 stays - 26 august to 3- august - 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant='outlined'>Cancellation Flexibility</Button>
                <Button variant='outlined'>Type Of place</Button>
                <Button variant='outlined'>Price</Button>
                <Button variant='outlined'>Rooms and beds</Button>
                <Button variant='outlined'>More filters</Button>
                <SearchResults img="
            https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_1280.jpg"
                   location="Private room in center London"
                   title="Stay at this spacious Edwardian House"
                   description="1 guest . i bedroom . 1 bed . 1.5 shared bathrooms . wifi . kitchen . free parking .
                   washing machine"
                   star={4.73}
                   price="$30 / night"
                   total="$117 total"
               />
                    <SearchResults img="
               https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_1280.jpg"
                   location="Private room in center London"
                   title="Stay at this spacious Edwardian House"
                   description="1 guest . i bedroom . 1 bed . 1.5 shared bathrooms . wifi . kitchen . free parking .
                   washing machine"
                   star={4.73}
                   price="$30 / night"
                   total="$117 total"
               />
            </div>
        </div>
    )
}

export default SearchPage;
