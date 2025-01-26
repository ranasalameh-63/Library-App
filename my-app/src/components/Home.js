import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class Home extends Component {
  state = {
    books: [
      { id: 1, title: 'Introduction of Ibn Khaldun', author: 'Ibn Khaldun', isbn: '1289499030' },
      { id: 2, title: 'Al-Hawi in Medicine', author: 'Abu Bakr al-Razi', isbn: '893847239479' },
      { id: 3, title: 'The Book of Sibawayh', author: 'Sibawayh', isbn: '1234567890' },
      { id: 4, title: 'History of Al-Tabari', author: 'Al-Tabari', isbn: '8765432109' }
    ]
  };

  render() {
    return (
      <div>
        <Header />
        <Main books={this.state.books} />
        <Footer />
      </div>
    );
  }
}

export default Home;
