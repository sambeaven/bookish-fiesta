import React from "react";
import ReactDOM from "react-dom";

var HelloWorld = React.createClass({
    render: function() {
        return (
            <p>Hello, {this.props.greetTarget}!</p>
        );
    }
})

class Menu extends React.Component {
    render(){
        return(<div>Hello Menu!</div>)
    }
}

class BookList extends React.Component {
    render(){
        return(<div>Hello Book List!</div>)
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
    render(){
        return(
            <div>
                <Menu />
                <BookList />
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