import logo from './logo.svg';
import './App.css';
import SiteHeader from './components/header.jsx';
import SocialMedia from './components/socialmedia.jsx';
import PicGallery from './components/pictureGallery.jsx';

function App() {
  return (
    <div className="App">
      <SiteHeader />
      <div className='content'>
        <SocialMedia />
        <PicGallery />
      </div>
    </div>
  );
}

export default App;
