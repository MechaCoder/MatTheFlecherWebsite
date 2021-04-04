import React from 'react';
import ReactDOM from 'react-dom';

import data from '../data/books.json';

export class Book extends React.Component{
    render(){
        return(
        <a className="book" href={this.props.link} target="_blank">
            <div className="cover">
                <div className="inner">
                    <div className='title'>{this.props.title}</div>
                </div>
            </div>
        </a>
        )
    }
}

export default class Library extends React.Component {
    constructor(){
        super();
        this.state = {
            'libarary': []
        }
    }

    componentDidMount(){

        var books = []

        for(var i = 0; i<=data.books.length; i++){

            if(data.books[i] === undefined){
                continue;
            }

            if(data.books[i].title === undefined){
                data.books[i].title = data.books[i].src
            }

            if(data.books[i].src === undefined){
                continue
            }

            books.push({
                'title': data.books[i].title,
                'url': data.books[i].src
            })

        }
        this.setState({'libarary': books});
    }

    render(){

        var docs = [];
        for(var i = 0; i<=this.state.libarary.length; i++){
            if(this.state.libarary[i] === undefined){
                continue
            }
            docs.push(
                <Book key={i} title={this.state.libarary[i].title} link={this.state.libarary[i].url} />
            )
        }


        return(
            <div className='pannel library'>
                <h1>Libray</h1>
                <div className='inner shelf'>
                    {docs}  
                </div>
            </div>
        );
    }
}
