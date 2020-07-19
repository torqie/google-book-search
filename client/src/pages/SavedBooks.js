import React, { Component } from "react";
import PageHeader from "../components/PageHeader";
import axios from 'axios';
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

class SavedBooks extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.loadAllBooks();
  }


  loadAllBooks = () => {
    axios
      .get('/api/books')
      .then(response => {
        console.log("Loading all books. ", response.data);
        this.setState({books: response.data})
      })
      .catch(error => {
        console.log("Error getting all books. ", error);
      })
  };

  handleDeleteBook = book => {
    axios
      .delete(`/api/books/${book._id}`)
      .then(response => {
        console.log("Successfully delete the book from the saved items.");
        this.loadAllBooks();
      })
      .catch(error => {
        console.log("There was an error removed the book from the saved items.");
      });
  };

  render() {
    return (
        <>
        {/*  Page Header */}
        <PageHeader
          title="(React) Google Books Search"
          subTitle="Your Saved Books"
        />
        <Container className="mb-5">
          <Row>
            <Col>
              {this.state.books.map(book => {
                return (
                    <Card key={book._id} className="p-4 mt-4">
                      <Row>
                        <Col>
                          <h6>{book.title}</h6>
                          <small>Written By: {book.authors}</small>
                        </Col>
                        <Col className="text-right">
                          <a href={book.link} className="btn btn-primary btn-sm mr-1">View Book</a>
                          <button onClick={() => this.handleDeleteBook(book)}  className="btn btn-danger btn-sm">Delete Book</button>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={2}>
                          <img src={book.image} alt={book.title} className="img-fluid" />
                        </Col>
                        <Col xs={10}>
                          <p>{book.description}</p>
                        </Col>
                      </Row>
                    </Card>
                )
              })}
            </Col>
          </Row>
        </Container>

        </>

    );
  }
}

export default SavedBooks;