

import Card_img from '../../ASSETS/credit/cerdit-img.webp';
import icon_img from '../../ASSETS/credit/icon1-w1.svg';
import travel_img from '../../ASSETS/credit/icon2-w.svg';
import sports_img from '../../ASSETS/credit/icon3-w.svg';
import user_img from '../../ASSETS/credit/user-icon.png';

const Card_option = ['select','Cards','  Deposits','insurance', 'Loan' , ' Opening an  Account'];
const Card_select = ['select','Benefit and Rewards ','Travel','Shopping', 'Forgin Currentency' , 'getting Personalized  Cards'];


const Credit = () => {
  return (
    <div>
            <div className='card-wapper row m-2 m-md-5 bg-white p-3 rounded justify-content-center'>
                    <div className='col-12 col-lg-5'>
                           <div className='d-lg-flex gap-3 align-items-center'>
                                    <p>
                                        I am interested in:
                                    </p>

                                    <select className='select-card orange-border'>
                                        {Card_option.map( (item) => {
                                            return(
                                                <option>
                                                    <a href='#'>
                                                        {item}
                                                    </a>
                                                  </option>
                                            )
                                        })}
                                    </select>
                           </div>
                    </div>  
                    <div className='col-12 mt-3 mt-lg-0 col-lg-5'>
                        <div className='d-lg-flex  gap-3 align-items-center'>
                                        <p>
                                            For
                                        </p>

                                        <select className='select-card orange-border'>
                                            {Card_select.map( (item) => {
                                                return(
                                                    <option>
                                                        <a href='#'>
                                                            {item}
                                                        </a>
                                                    </option>
                                                )
                                            })}
                                        </select>
                            </div>

                          
                    </div>

                           <div className=' col-lg-5 col-10 d-flex justify-content-center justify-content-lg-start   mt-5'>
                                 <img className='img-fluid rounded ' src={Card_img} />                               
                            </div>

                            <div className='col-10 col-lg-6  ms-3 mt-5 '>
                                <div className='d-flex gap-3'>
                                    <div className='card-type  center-all-data'>
                                        <img className='img-fluid me-1' src={icon_img} />
                                        <a className=' text-white comman-fonts' href='#'>LIFESTYLE</a>
                                    </div>

                                    <div className='card-type center-all-data'>
                                        <img className='img-fluid me-1' src={travel_img} />
                                        <a className=' text-white comman-fonts' href='#'>TRAVEL</a>
                                    </div>

                                    <div className='card-type center-all-data'>
                                        <img className='img-fluid me-1' src={sports_img} />
                                        <a className=' text-white comman-fonts' href='#'>SPORTS</a>
                                    </div>
                                </div>


                                     <div className='mt-2 income-wapper'>
                                            <span className='fonts'>
                                                  Your Net Annual Income (in Laks)
                                            </span>

                                            <div className='income-select orange-border d-flex'>
                                                <div className='income'>
                                                    <p>
                                                       <a className=' text-dark' href='#'>2.5</a>
                                                    </p>
                                                </div>
                                                <div className='income'>
                                                    <p>
                                                       <a className=' text-dark' href='#'>4.8</a>
                                                    </p>
                                                </div>
                                                <div className='income'>
                                                    <p>
                                                      <a className=' text-dark' href='#'>5</a>
                                                    </p>
                                                </div>
                                                <div className='income'>
                                                    <p>
                                                         <a className=' text-dark' href='#'>10</a>
                                                    </p>
                                                </div>
                                            </div>
                                    </div>


                                    <div className='card-info mt-2'>
                                                <h3 className='text-secondary mt-3 comman-headding'>
                                                     Manchester United Platinum Credit Card
                                                </h3>

                                                <ul className='p-0 m-0'>
                                                    <li className='mt-2'>
                                                        <a href='#' className='text-dark comman-fonts'>
                                                             Joining Fee - Rs 499 + GST
                                                        </a>
                                                    </li>

                                                    <li className='mt-2'>
                                                        <a href='#' className='text-dark comman-fonts'>
                                                          Get a Manchester United branded football on activation
                                                        </a>
                                                    </li>

                                                    <li className='mt-2' >
                                                        <a href='#' className='text-dark comman-fonts'>
                                                             Top 20 Spenders: Get a Manchester United Branded Merchandise Kit*
                                                        </a>
                                                    </li>

                                                    <li className='mt-2'>
                                                        <a href='#' className='text-dark comman-fonts'>
                                                              1 complimentary domestic airport lounge visit per quarter
                                                        </a>
                                                    </li>
                                                </ul>
                                    </div>


                                    <div className='d-flex gap-3 mt-3'>
                                        <div className='mt-2'>
                                            <a className='btn-apply text-white' href='#'> APPLY NOW </a>
                                        </div>

                                        <div className='mt-2'>
                                            <a href='#'>KNOW MORE</a>
                                        </div>
                                    </div>

                                    <div className='d-block d-md-flex mt-4'>
                                        <div className='call-back w-100'>
                                            <p>
                                                Get a call back to know best offer on credit cards
                                            </p>
                                        </div>

                                    <div className='input-user mt-3 align-items-center gap-1 d-flex'>
                                             <img  src={user_img} />
                                              <input  className='comman-fonts' typeof='text' placeholder='Enter your Name'/>
                                            </div>
                                      </div>
                                </div>

                    
            </div>


           
    </div>
  )
}


export default Credit;