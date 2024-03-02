import Digital_img from '../../ASSETS/credit/mobile-banking.webp';
import Didital_responsive from '../../ASSETS/credit/mobile-banking-responsive.webp';
import Scan from '../../ASSETS/credit/imobilepay-qrcode.png';
import festive from  '../../ASSETS/credit/digital-festive.webp';
import phone_icon from  '../../ASSETS/credit/imobile-download-icon.webp';

function Digital() {
  return (
    
    <div className='container bg-white rounded p-3  my-5'>
        <div className='row  banking-wapper'>
            <div className='col-12 col-lg-6 p-2 p-lg-5'>
                <div>
                    <h2>DIGITAL BANKING</h2>
                    <h4 classname='text-secondary'>Advance. Innovative. Instant</h4>
                </div>
                <div className='row mt-3'>
                    <div className='col-6 btn-fonts'>
                         <button>
                              <a className='text-dark' href='#'>Mobile Banking</a>
                         </button>
                    </div>
                    <div className='col-6 btn-fonts'>
                        <button>
                             <a className='text-dark' href='#'>Net Banking</a>
                        </button> 
                    </div>
                    <div className='col-8 col-md-6 mt-3 btn-fonts'>
                        <button>
                          <a className='text-dark' href='#'>WhatsApp Banking</a>
                        </button>
                    </div>

                    <div className='mt-3 col-10 col-md-8 btn-fonts '>
                        <button>
                            <a className='text-dark' href='#'>EXPLORE DIGITAL BANKING</a>
                        </button>
                     </div>

                     <div className='col-12 gap-3  d-block d-md-flex justify-content-center mt-5'>
                         <div>
                              <img src={festive} />
                         </div>

                         <div className='mt-3 mt-md-0'> 
                            <p className='fonts'>
                                Thousands of offers, millions of reasons to shop
                            </p>
                            <a href='#' className='comman-fonts comman-text'>
                                CHECK OFFERS NOW 
                            </a>
                         </div>
                        
                     </div>
                </div>
            </div>

            
            <div className='col-12 col-lg-6 p-2 p-lg-5 position-perent'>
                <div className='position-child digital-scan d-flex'>
                    <div className='scan-wapper d-none d-md-flex d-flex'>
                          {/* <div> */}
                                  <img className='img-fluid' src={Scan} alt='Scan-bank' />

                                <div>
                                    <p className='p-0 m-0'>Download</p>
                                    <p className='p-0 m-0'>iMobile App</p>
                                    <p className='p-0 m-0'> <a href='#'>Click to Enlarge</a></p>
                                </div>
                          {/* </div> */}
                    </div>

                    <div className='scan-wapper d-none d-md-flex d-flex'>
                         <img className='img-fluid' src={Scan} alt='Scan-bank' />

                         
                         <div>
                              <p className='p-0 m-0'>Download</p>
                              <p className='p-0 m-0'>Poket</p>
                              <p className='p-0 m-0'> <a href='#'>Click to Enlarge</a></p>
                         </div>
                    </div>
                </div>
                    <img className='img-fluid d-none d-lg-block' src={Digital_img} alt='digital Banking' />
                    <img className='img-fluid d-lg-none' src={Didital_responsive} alt='digital Banking' />
            </div>
        </div>
    </div>
  )
}

export default Digital;