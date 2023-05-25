
import Title from './TitlePage/Title';
import AboutUs from './AboutUsPage/AboutUs';
import Trainer from './TrainerPage/Trainer';
import Qigong from './QigongPage/Qigong';
import Schedule from './SchedulePage/Schedule';
import Price from './PricePage/Price';
import Contacts from './ContactsPage/Contacts';
import Gallery from './Gallery/Gallery';
import Footer from './Footer/Footer';

const Content = () => {

    return (

        <div>
            <Title />
            <AboutUs />
            <Trainer />
            <Qigong />
            <Schedule />
            <Price />
            <Contacts />
            <Gallery />
            <Footer />
        </div>
    );
}

export default Content;
