
import './App.css';

// import Title from '../pages/TitlePage/Title';
// import AboutUs from '../pages/AboutUsPage/AboutUs';
// import Trainer from '../pages/TrainerPage/Trainer';
// import Qigong from '../pages/QigongPage/Qigong';
// import Schedule from '../pages/SchedulePage/Schedule';
// import Price from '../pages/PricePage/Price';
// import Contacts from '../pages/ContactsPage/Contacts';
// import Gallery from '../pages/Gallery/Gallery';
// import Footer from '../pages/Footer/Footer';
import Menu from '../common/components/Menu/Menu';
import Content from '../pages/Content';

function App() {

  return (
    <div className="App">
      <Menu />
      <Content />
    </div>
  );
}

export default App;
