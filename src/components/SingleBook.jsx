import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

class SingleBook extends Component {
  render() {
    const { book, isSelected, onBookSelect } = this.props

    return (
      <Card
        onClick={() => onBookSelect(book)}
        style={{
          border: isSelected ? '3px solid red' : '1px solid #ddd',
          cursor: 'pointer',
        }}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title style={{ color: 'black' }}>{book.title}</Card.Title>
        </Card.Body>
      </Card>
    )
  }
}

export default SingleBook
