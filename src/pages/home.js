
import Header from '../components/header';
import Banner from '../components/contsint/banner';
import New_bar from '../components/nav-bar'
import Credit  from '../components/contsint/credit-card';
import Digital from '../components/contsint/digital';
import Security from '../components/contsint/security';
import Finance from '../components/contsint/finance';
import Footer from '../components/footer/footer';
// import Modal from '../components/Modal';
const Home = () => {
    return(
        <>
                <Header />
                <New_bar />
                <Banner />
                <Credit />
                <Digital />
                <Security />
                <Finance />
                <Footer />
                {/* <Modal /> */}

                
        </>
    )
}

export default Home;    
