import React, { Component } from "react";
import PageHeader from "../components/PageHeader";
import SearchBar from "../components/SearchBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import axios from 'axios';

class Search extends Component {
  state = {
    books: []
  };

  loadBooks = books => {
    this.setState({ books: books })
  };

  handleSaveBook = book => {
    console.log("saving Book... ", book);
    axios.post("/api/books", {
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      link: book.volumeInfo.infoLink,
      image: book.volumeInfo.imageLinks.thumbnail,
      description: book.volumeInfo.description,

    }).then(response => {
      console.log("Book has been saved. ", response);

    }).catch(error => {
      console.log("Error saving book. ", error);
    })
  };
  render() {
    return (
        <div>
          {/* Page Header Component */}
          <PageHeader
              title="(React) Google Books Search"
              subTitle="Search for and save books of interest"
          />
          {/* Search Bar Component */}
          <Container className="mb-5">
            <Row>
              <Col>
                <SearchBar loadBooks={this.loadBooks} />
              </Col>
            </Row>


          {/* Results from search */}
          {this.state.books.map(book => {
            return (
                <Card key={book.id} className="p-4 mt-4">
                  <Row>
                    <Col>
                      <h6>{book.volumeInfo.title}</h6>
                      <small>Written By: {book.volumeInfo.authors}</small>
                    </Col>
                    <Col className="text-right">
                      <a href={book.volumeInfo.infoLink} className="btn btn-primary btn-sm mr-1">View Book</a>
                      <button onClick={() => this.handleSaveBook(book)}  className="btn btn-success btn-sm">Save Book</button>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={2}>
                      <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} className="img-fluid" />
                    </Col>
                    <Col xs={10}>
                      <p>{book.volumeInfo.description}</p>
                    </Col>
                  </Row>
                </Card>
            )
          })}
          </Container>
        </div>

    );
  }
}

export default Search;