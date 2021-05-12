// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';


import SiteHeader from './components/header.jsx';
import SocialMedia from './components/socialmedia.jsx';
import PicGallery from './components/pictureGallery.jsx';
import Libary from './components/library.jsx';
import ProjectT from './components/projectT.jsx';
import Showcase from './components/showcase.jsx';

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

  if(loc === '?AinSakhri'){
    content = [
      <ProjectT key='d' />
    ]
  }

  if(loc === '?pics'){
    content = [
      <Showcase key='e' />
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
