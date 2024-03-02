
import Health_img from '../../ASSETS/credit/health-img.webp';
import apply_img from '../../ASSETS/credit/apply-card.webp';
import bookmark_img from '../../ASSETS/credit/bookmark-orange.webp';
import share_img from '../../ASSETS/credit/share.webp';




 const Finance = () => {
  return (
    
                   <div className="container bg-white rounded p-3 my-3">
                        <div className='row justify-content-center '>
                            <div className="col-12  text-center mb-3">
                                <p className="comman-text">
                                    ---------- BLOGS ----------
                                </p>

                                <h2 className="comman-headding">
                                    MANAGE YOUR FINANCES
                                 
                                </h2>
                                     <span className="btn-fonts">
                                        BETTER
                                    </span>
                            </div>

                            <div class="col-12 col-md-6 col-lg-4 mb-4 m-md-0 comman-radius">
                                <div class="card">
                                    <a href='#'>
                                         <img src={Health_img} class="card-img-top img-fluid" alt="Health_img" />
                                    </a>
                                <div class="card-body p-3">
                                    <p class="card-title comman-text">INVESTMENT</p>
                                    <h5 class="card-text my-3">
                                        <a href='#' className='text-dark'>
                                              How Can Investments Improve your Financial Health ?
                                        </a>
                                    </h5>
                                </div>


                                <div className='d-flex justify-content-between p-3'>
                                         <span>
                                              10 Jan, 2019
                                         </span>

                                         <div className='img-icons'>
                                                <img className='img-fluid me-3' src={bookmark_img} />
                                                <img className='img-fluid' src={share_img} />
                                         </div>
                                    </div>
                            </div>
                        </div>
                             <div class="col-12 col-md-6 col-lg-4 comman-radius">
                                <div class="card ">
                                <a href='#'>
                                     <img src={apply_img} class="card-img-top img-fluid" alt="apply_card" />
                                </a>
                                    <div class="card-body p-3">
                                        <p class="card-title comman-text">CARDS</p>
                                        <h5 class="card-text my-3"> 
                                            <a href='#' className='text-dark'>
                                                 Things to consider before you apply for credit card online
                                            </a>
                                        </h5>
                                    </div>

                                    <div className='d-flex justify-content-between p-3'>
                                         <span>
                                              13 Sep, 2022
                                         </span>

                                         <div className='img-icons'>
                                                <img className='img-fluid me-3' src={bookmark_img} />
                                                <img className='img-fluid' src={share_img} />
                                         </div>
                                    </div>
                                </div>
                             </div>
                        </div>


                        <div className='btn-blogs text-center mt-5'>
                            <button className='contact-btn border-0'>
                                <a href='#' className='text-dark'>
                                    VIEW ALL BLOGS 
                                </a>    
                            </button>
                        </div>
                   </div>    
  )
}

export default Finance;
