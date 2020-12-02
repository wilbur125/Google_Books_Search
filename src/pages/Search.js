import React, { Component } from 'react';
import SearchResults from '../components/SearchResults';

class Search extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return(
            <div class="container">
                <SearchResults/>
            </div>
        )
    }
}

export default Search;