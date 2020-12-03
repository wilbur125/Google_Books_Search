import React, { Component } from 'react';
import API from '../utils/API';
import SearchForm from "./SearchForm";
import SearchDetails from "./SearchDetails";
import Container from "./Container";
import Row from "./Row";



class SearchResults extends Component {
    state = {
      result: {},
      search: "", 
      error: ""
    };
  
    componentDidMount() {
        this.searchBooks("Harry Potter");
    };

    searchBooks = query => {
        API.getBooks(query)
          .then(res => {
              console.log(res.data.items[0])
          
            this.setState({ result: res.data })})
          .catch(err => console.log(err));
      };

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
      this.setState({ 
          [name]: value
       });
    };
  
    handleFormSubmit = event => {
      event.preventDefault();
      this.searchBooks(this.state.search);
  };

    handleViewLink = () => {
      let url = this.state.result.items[0].accessInfo.webReaderLink;
      document.location = url;
      return false;   
    }

    handleSaveBook = () => {
      //initialize variables
      //make json object to put into db
      //save to db

      // const db = mongoose.connection;
      // db.on('error', console.error.bind(console, 'connection error:'));
      // db.once('open', function() {
      //   // we're connected!
      // });
    }
  
    render() {
      if (this.state.result.items === undefined) {
        return <span>Loading...</span>;
    }
        console.log('wut', this.state.result.items)
      return (

            <Container>
                    <SearchForm
                        value={this.state.search}
                        handleInputChange={this.handleInputChange}
                        handleFormSubmit={this.handleFormSubmit}
                    />
                    <Row>
                        
                            <SearchDetails 
                                title={this.state.result.items[0].volumeInfo.title}
                                authors={this.state.result.items[0].volumeInfo.authors[0]} 
                                description={this.state.result.items[0].volumeInfo.description} 
                                src={this.state.result.items[0].volumeInfo.imageLinks.smallThumbnail}  
                                handleViewLink={this.handleViewLink}
                                handleSaveBook={this.handleSaveBook}
                            />
                        
                    </Row>
            </Container>
     
      );
    };
  };
  
  export default SearchResults;