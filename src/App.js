import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
import { Container, Row, Col } from 'react-bootstrap'
import BookList from './components/BookList'
import CommentArea from './components/CommentArea'

import fantasy from './data/fantasy.json'

class App extends Component {
  state = {
    selectedBook: null,
  }

  handleBookSelect = (book) => {
    this.setState({
      selectedBook: this.state.selectedBook === book ? null : book,
    })
  }

  render() {
    return (
      <>
        <MyNav />
        <Container>
          <Welcome />
          <Container>
            <Row>
              <Col md={8}>
                <BookList
                  books={fantasy}
                  selectedBook={this.state.selectedBook}
                  onBookSelect={this.handleBookSelect}
                />
              </Col>
              <Col>
                {this.state.selectedBook ? (
                  <CommentArea asin={this.state.selectedBook.asin} />
                ) : (
                  <div className="no-book-selected">
                    Seleziona un libro per vedere i commenti
                  </div>
                )}
              </Col>
            </Row>
          </Container>
        </Container>
        <MyFooter />
      </>
    )
  }
}

export default App
