import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li 
          key={book.title} 
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

// whatever is returned will show up as props inside BookList
function mapStateToProps(state) {
  return {
    books: state.books
  };
}

// Anything returned from this function will end up as props on BookList
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed to all reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote BookList from component to Container. It needs to know about
// the dispatch method, selectBook (actions/index.js). Made available as prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);