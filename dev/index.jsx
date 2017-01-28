import React from "react";
import ReactDOM from "react-dom";

// var HelloWorld = React.createClass({
//     render: function() {
//         return (
//             <p>Hello, {this.props.greetTarget}!</p>
//         );
//     }
// })



class Menu extends React.Component {
    render(){
        return(<div>Hello Menu!</div>)
    }
}

class BookList extends React.Component {
    render(){
        const books = this.props.books.map((book) => {
        return (
            <li key={book.bookId}>{book.title}</li>
        );
        });

        return(
            <div>
                <ul>
{books}
                </ul>

            </div>
            )
    }
}

class BookDetail extends React.Component {
    render(){
        return(<div>Hello Book Detail!</div>)
    }
}

class AddBook extends React.Component {
    render() {
        return (<div>Hello, Add Book!</div>)
    }
}

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            books: [{
                bookId: 1,
                title: "Great Expectations" 
            },
            {
                bookId: 2,
                title: "A Game of Thrones"
            }]
        };
    }
    render(){
        return(
            <div>
                <Menu />
                <BookList books={this.state.books} />
                <BookDetail />
                <AddBook />
            </div>
            )
    }
}


ReactDOM.render(
    <App />,
    document.querySelector("#container")
);