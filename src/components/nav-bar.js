
// import Icons from '../ASSETS/footer-icons/iconmonstr-menu-lined.png';
import logo from '../ASSETS/responsive-bar/logo-responsive.webp';
import Call from '../ASSETS/call-icon.svg';
import country from '../ASSETS/india-icon.svg';
import notification from '../ASSETS/notification.webp';
import Log_in from '../ASSETS/responsive-bar/icon_user_orange.png';
import account  from '../ASSETS/responsive-bar/orange_menu-icon1.png'
import top_icon from '../ASSETS/responsive-bar/icici-icon.svg';

import MyStorage from '../components/myData/MyStorage'

import './../SCSS/navbar.scss'

import '../SCSS/navbar.scss';


import { useState } from 'react';


const imeges = account;
const New_bar = () => {

    const [hide , setHide] = useState(false);
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")

    const [menu_class, setMenuClass] = useState("menu hidden")

    function close_mark() {
         setHide(current => !current);
    }

    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("hidden")
        }
         setIsMenuClicked(!isMenuClicked);
     }
     
    const navbar = [
            {
                img_main:'https://www.icicibank.com/content/dam/icicibank/icici-assets/orange_menu-icon1.png' ,
                data:'Account',
                contsint: 'Dccount, Deposits , Card and More',
            },
            {
                img_main:'https://www.icicibank.com/content/dam/icicibank/icici-assets/orange_menu-icon2.png' ,
                data:'CARD',
                contsint: 'Credit Card , Debit Card / ATM Card , travel Card and More ',
            },
            {
                img_main:'https://www.icicibank.com/content/dam/icicibank/icici-assets/orange_menu-icon3.png' ,
                data:'LOAN',
                contsint: 'Popular Loans , Agri and Rural Finance , business Loans and More',
            },
            {
                img_main:'https://www.icicibank.com/content/dam/icicibank/icici-assets/orange_menu-icon4.png' ,
                data:'INVEST',
                contsint: 'deposit and Grow and more',
            },
            {
                img_main:'https://www.icicibank.com/content/dam/icicibank/icici-assets/orange_menu-icon5.png' ,
                data:'INSURE',
                contsint: 'Popular Insurance and more ',
            },
            {
                img_main:'https://www.icicibank.com/content/dam/icicibank/icici-assets/orange_menu-icon6.png' ,
                data:'PAY',
                contsint: 'Money Transfer , Utility Payments , Recharge and More  ',
            },
            {
                img_main:'https://www.icicibank.com/content/dam/icicibank/icici-assets/orange_menu-icon2.png' ,
                data:'OFFERS',
                contsint: 'ICICI Bank Offers and More',
            },
          ]

    return(
             <header  className='w-100 d-lg-none'>
                <div id={hide ? 'hide_top_nav' : 'null'}  className='top-wapper row align-items-center justify-content-evenly'>
                    <div className='col-2 center-all-data' onClick={close_mark}>
                       <p>
                            <a className='click-on text-white'  href='#'>
                                X
                            </a>
                       </p>
                    </div>

                   <div className='col-5 text-center'>
                        <img className='img-fluid' src={top_icon} alt='icici-bank' />
                   </div>

                   <div className='text-white header-fonts m-0 p-0 col-5'>
                        <p>
                            App that fits all your
                        </p>
                        <p>
                            banking solution Install-iMobile
                        </p>
                        <p>
                            pay app Now.
                        </p>
                   </div>
                </div>
                 <nav className='responsive-bar nav-open'>
                        <div className='icons-bar center-all-data gap-3 p-2'>
                                <button className='border-0 outline-0'
                                 onClick={updateMenu} >

                                {
                                     menu_class == 'visible' ?  <i class="fa fa-times" aria-hidden="true"></i> :
                                     <i class="fa-solid d-block open-burger fs-3  fa-bars" id={burger_class}></i>
                                }
                                </button>
                            <div>
                                    <img className='img-fluid' src={logo} alt='logo' />
                            </div>
                        </div>

                        <div className='center-all-data gap-4 p-2'>
                            <div className='d-flex'>
                                <img className='img-fluid' src={Call} />
                                <p>
                                    <a href='#' className='text-dark comman-fonts'>
                                        1800 1080
                                    </a>
                                </p>
                            </div>
                            <div className='me-3 d-flex gap-3 align-items-center'>
                                <img className='img-fluid' src={country} alt='country' />
                                <img className='img-fluid' src={notification} alt='notification' />
                                <img className='img-fluid login-img' src={Log_in} alt='LogIn' />
                            </div>
                        </div>

                       <div id={menu_class} className={hide ? 'harry points nikki  bg-white' : 'points nikki  bg-white'}>
                           <div className='taps-btn d-flex flex-wrap gap-5 center-all-data'>

                              {MyStorage.map( (items) => {
                                  return(
                                    <p>
                                        <a href='#' className='text-white btn-fonts'>
                                            {items}
                                        </a>
                                    </p>
                                  )
                              })}
                                    <p className='d-none md-d-block'>
                                         <a href='#' className='text-white  btn-fonts'>
                                             GIFT CITY
                                         </a>
                                    </p>
                           </div>

                           <div className='bank-info'>

                           {navbar.map( (items) => {
                                        return(
                                            <div className='d-flex gap-4 align-items-center w-100 p-3 border border-top-1'>
                                               <img className='img-fluid main-img' src={items.img_main} alt='account' />

                                                <div>
                                                    <p className='comman-fonts'>
                                                        {items.data}
                                                    </p>
                                                    <p className='btn-fonts'>
                                                        {items.contsint}
                                                    </p>
                                                </div>
                                           </div>
                                        )
                                    })}
                           </div>
                       </div>
                    </nav>
                </header>

    )
}

export default New_bar;
