
import './App.css';
import Title from '../pages/TitlePage/Title';
import AboutUs from '../pages/AboutUsPage/AboutUs';
import Trainer from '../pages/TrainerPage/Trainer';
import Qigong from '../pages/QigongPage/Qigong';
import Schedule from '../pages/SchedulePage/Schedule';
import Price from '../pages/PricePage/Price';
import Contacts from '../pages/ContactsPage/Contacts';
import Gallery from '../pages/Gallery/Gallery';

function App() {
  return (
    <div className="App">
      <Title />
      <AboutUs />
      <Trainer />
      <Qigong />
      <Schedule />
      <Price />
      <Contacts />
      <Gallery />
    </div>
  );
}

export default App;
