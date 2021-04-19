import React from 'react';
// eslint-disable-next-line
import ReactDOM from 'react-dom';

import data from '../data/books.json';
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faYoutube, faAmazon, faEbay } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class Book extends React.Component{
    render(){

        var icon = faBook;

        if(this.props.link.includes('facebook.com')){
            icon = faFacebook;
        }

        if(this.props.link.includes('youtube.com')){
            icon = faYoutube;
        }

        if(this.props.link.includes('amazon.com')){
            icon = faAmazon;
        }

        if(this.props.link.includes('amazon.co.uk')){
            icon = faAmazon;
        }

        if(this.props.link.includes('ebay.co.uk')){
            icon = faEbay;
        }

        var notesEl = null;
        if(this.props.notes.length !== 0){
            notesEl = (<div className="text inner">{this.props.notes}</div>)
        }

        var bookCoverClasses = "cover ";
        if(this.props.new){
            bookCoverClasses += "new";
        }

        return(
            <a className="book" href={this.props.link} target="_blank" rel="noreferrer">
                <div className={bookCoverClasses} >
                    <div className="inner">
                        <div className='title'>{this.props.title}</div>
                        <div className='info'>
                            <div className='inner'>
                                <div className="icon"><FontAwesomeIcon icon={icon} /></div>
                                {notesEl}
                            </div>
                        </div>
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

            if(data.books[i].notes === undefined){
                data.books[i].notes = "";
            }

            if(data.books[i].new === undefined){
                data.books[i].new = false;
            }

            books.push({
                'title': data.books[i].title,
                'url': data.books[i].src,
                'notes': data.books[i].notes,
                'new': data.books[i].new
            })

        }

        books.sort((a,b) => {
            if(a.title < b.title){return -1}
            if(a.title > b.title){return 1}
            return 0
        })

        this.setState({'libarary': books});
    }

    render(){

        var docs = [];
        for(var i = 0; i<=this.state.libarary.length; i++){
            if(this.state.libarary[i] === undefined){
                continue
            }
            docs.push(
                <Book key={i} title={this.state.libarary[i].title} link={this.state.libarary[i].url} notes={this.state.libarary[i].notes} new={this.state.libarary[i].new} />
            )
        }


        return(
            <div className='pannel library'>
                <h1>Libray</h1>
                <div className='shelf'>
                    <div className='inner'>
                    {docs} 
                    </div>
                </div>
            </div>
        );
    }
}
