import logo from './logo.svg';
import './App.css';


import SiteHeader from './components/header.jsx';
import SocialMedia from './components/socialmedia.jsx';
import PicGallery from './components/pictureGallery.jsx';
import Libary from './components/library.jsx';

function App() {

  var content = [];

  var loc = window.location.search;

  content = [
    <SocialMedia key='a' />,
    <PicGallery key='b' />
  ]

  if(loc === '?lib'){
    content = [
      <Libary key='c'/>
    ]
  }

  return (
    <div className="App">
      <SiteHeader />
      <div className='content'>
        {content}
      </div>
    </div>
  );
}

export default App;
