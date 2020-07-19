import React, { Component } from "react";
import axios from 'axios';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

class SearchBar extends Component {
  state = {
    searchQuery: "",
  };

  handleOnChange = event => {
    //Set the state to the current search text box value.
    this.setState({ searchQuery: event.target.value })
  };

  handleOnClick= event => {
    //Stop the form from submitting
    event.preventDefault();

    // API call to the google books api to search for the books on click. Uses the searchQuery state for the
    // query.
    axios
        .get('https://www.googleapis.com/books/v1/volumes?q=' + this.state.searchQuery)
        .then(response => {
          const books = response.data.items;
          this.props.loadBooks(books);
        })
        .catch(error => {
          console.log("Error searching google books. ", error);
        })
  };
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <form name="search" id="search">

            <input type="text" className="form-control" onChange={this.handleOnChange}/>
            <button className="float-right mt-2 btn btn-primary" type="submit" onClick={this.handleOnClick}>Search</button>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SearchBar;