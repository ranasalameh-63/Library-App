import React, { Component } from 'react';

class Main extends Component {
  render() {
    const { books } = this.props;

    return (
      <main style={{ padding: '20px' }}>
        <h2>Book List</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
          {books.map((book) => (
            <div key={book.id} style={{ border: '1px solid #ddd', borderRadius: '5px', padding: '10px' }}>
              <h3>{book.title}</h3>
              <p>Author: {book.author}</p>
              <p>ISBN: {book.isbn}</p>
            </div>
          ))}
        </div>
      </main>
    );
  }
}

export default Main;
