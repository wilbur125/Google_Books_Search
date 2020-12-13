import React, { Component } from 'react';
import API from '../utils/API';
import SearchForm from "./SearchForm";
import { SearchDetails } from "./SearchDetails";
import Container from "./Container";
import { Row } from "./Row";



class SearchResults extends Component {
    state = {
      result: {},
      search: "", 
      error: ""
    };
  
    componentDidMount() {
        this.searchBooks("Hunger Games");
    };

    searchBooks = query => {
        API.getBooks(query)
          .then(result => {
          this.setState({ result: result.data })})
          .then( result => {
            let apiData = this.state.result;
            let finalData = []
            
            for (let i = 0; i < this.state.result.items; i++) {

              let books = 

              {
                'id': i + 1,
                'title': apiData.items[i].volumeInfo.title,
                'authors': apiData.items[i].volumeInfo.authors,
                'description':apiData.items[i].volumeInfo.description,
                'src': apiData.items[i].volumeInfo.imageLinks.smallThumbnail,
                'link': apiData.items[i].accessInfo.webReaderLink
              }
              finalData.push(books)
            }
            this.setState({
              result: finalData
            })
          })
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
      let url = this.result.link;
      document.location = url;
      return false;   
    }

    handleSaveBook = () => {
      //initialize variables
      //make json object to put into db
      //save to db
      //error message
      //success message
    }
  
    render() {
      if (this.state.result.items === undefined) {
        return null;

    }

        console.log('Component Did Mount Results', this.state.result.items)
      return (

            <Container>
                    <SearchForm
                        value={this.state.search}
                        handleInputChange={this.handleInputChange}
                        handleFormSubmit={this.handleFormSubmit}
                    />
                    <div>
                    {this.state.result.items.length ? (
                      <Row>
                        {this.state.result.items.map(result => (
                          <SearchDetails key={result.id}>
                            <h5>{result.title}</h5>
                            <div class="button">
                            <button onClick={this.handleViewLink}>View</button>
                            <button onClick={this.handleSaveBook}>Save</button>
                            </div>    
                            <p>Written by: {result.authors}</p>
                            <div>
                            <img alt={result.title} className="img-fluid" src={result.src} style={{ margin: "0 auto" }} />
                            <span>{result.description}</span>
                            </div>
                            </SearchDetails>
                        ))}
                      </Row>
                    ) : (
                      <h6>Search for a book</h6>
                    )}
                    </div>
            </Container>
     
      );
    };
  };
  
  export default SearchResults;