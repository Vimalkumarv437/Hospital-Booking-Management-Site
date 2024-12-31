import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../css/Home.css'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger'
import Footer from '../components/Footer';

function Home() {


const [CounterOn, setCounterOn]=useState(false);







  return (
    <div>
      {/* navbar component */}
      
<Navbar/>

{/* sections for landeing page first div */}
<div className='container-fluid'>

<div className='main_landing_div' style={{ backgroundImage: 'url("/images/slider3.jpg")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',minHeight:'600px' }}>

<div class="container mt-5">
    <div class="row">
      <div class="col-12 col-md-8 col-lg-6 p-4 ">
        <h1 class="text-center mb-3" style={{fontSize:'60px' , fontWeight:'700', color:'#223a66'}}>Your Most Trusted <br/>Health Partner</h1>
        <p class="text-center mb-3" style={{color:'#6F8BA4'}}>A repudiandae ipsam labore ipsa voluptatum quidem quae laudantium quisquam <br/> aperiam maiores sunt fugit, deserunt rem suscipit placeat.</p>
        <div class="text-center">
          <button class="btn btn-primary w-50 " style={{background:'#e12454'}}>Services</button>
        </div>
      </div>
    </div>
  </div>


</div>

</div>

 
{/* sections for showing date and time of hospital on cards  */}
<div className='container-fluid'>


<div class="row" style={{position:'relative' ,bottom:'70px'}}>
			<div class="col-lg-12">
				<div class="feature-block d-lg-flex">
					<div class="feature-item mb-5 mb-lg-0">
						<span style={{ color:'#223a66'}}>24 Hours Service</span>
						<h4 class="mb-3" style={{ color:'#223a66'}}>Online Appoinment</h4>
						<p class="mb-4" style={{ color:'#223a66'}}>Get ALl time support for emergency.We have introduced the principle of family medicine.</p>
						<button type='button' className='btn_appoinment'>Make a appoinment</button>
					</div>
				
					<div class="feature-item mb-5 mb-lg-0">
					
						<span style={{ color:'#223a66'}} >Timing schedule</span>
						<h4 class="mb-3" style={{ color:'#223a66'}}>Working Hours</h4>
						<ul class="w-hours list-unstyled">
		                    <li class="d-flex justify-content-between" style={{ color:'#223a66'}}>Sun - Wed : <span>8:00 - 17:00</span></li>
		                    <li class="d-flex justify-content-between" style={{ color:'#223a66'}}>Thu - Fri : <span>9:00 - 17:00</span></li>
		                    <li class="d-flex justify-content-between" style={{ color:'#223a66'}}>Sat - sun : <span>10:00 - 17:00</span></li>
		                </ul>
					</div>
				
					<div class="feature-item mb-5 mb-lg-0">
					
						<span style={{ color:'#223a66'}}>Emegency Cases</span>
						<h4 class="mb-3" style={{ color:'#223a66'}}>1-800-700-6200</h4>
						<p style={{ color:'#223a66'}}>Get ALl time support for emergency.We have introduced the principle of family medicine.Get Conneted with us for any urgency .</p>
					</div>
				</div>
			</div>
		</div>



</div>

{/* section for personal care details  */}
<div className='container-fluid mb-5'>

<div class="row">

  <div class="col-12 col-md-4 left-side-image">
    <img src="images/about/img-3.jpg" alt="Doctor images" class="img-fluid"/>
  </div>
  
  <div class="col-12 col-md-4 middle-side-image " style={{marginTop:'120px'}}>
    <img src="images/about/img-2.jpg" alt="Doctor Images" class="img-fluid" />
  </div>


  <div class="col-12 col-md-4 right-side-content">
    <h2 class="heading">Personal care<br/>
    & healthy living</h2>
    <p class="description">We provide best leading medical service. Nulla perferendis veniam deleniti ipsum officia dolores repellat laudantium obcaecati neque.</p>
   <Link to='/services'> <button class="btn Service_button">Services &gt;</button></Link>
  </div>
</div>



</div>

{/* section for counting number effect  */}

<div className='counting_number'>


{/* styles for counting numbers */}
<ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>

{/* div first */}
<div className='counting_num1'>
<h1>

{CounterOn && <CountUp start={0} end={58} duration={2} delay={0} />}
K
</h1>
<p>Happy People</p>
</div>

{/* div second */}
<div className='counting_num2'>
<h1>

{CounterOn && <CountUp start={0} end={700} duration={2} delay={0} />}
+
</h1>
<p>Surgery Completed</p>
</div>

{/* div third */}
<div className='counting_num3'>
<h1>

{CounterOn && <CountUp start={0} end={40} duration={2} delay={0} />}
+
</h1>
<p>Expert Doctors</p>
</div>

{/* div four */}
<div className='counting_num4'>
<h1>

{CounterOn && <CountUp start={0} end={20} duration={2} delay={0} />}
+
</h1>
<p>World wide Branch</p>
</div>
</ScrollTrigger>

</div>


{/* section for award wining details */}

<div className='container-fluid' style={{backgroundColor:'#f4f9fc'}}>

{/* text are in this div  */}
<div className='award-text'>

<h1>Award winning patient care</h1>

<p>Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates <br/> 
<span style={{marginLeft:'30px'}}>incidunt molestias nostrum laudantium. Maiores porro cumque quaerat.</span></p>

</div>
{/* cards are in this div  */}

<div className='row justify-content-center ml-5'>

<div className='col-lg-4 col-md-6 col-sm-6'>
<div className="card w-75">
  <div className="card-body">
    <h4 className="card-title"><i className="fas fa-flask fa-2x" style={{color:'#e12454'}}></i>Laboratry Services</h4>
    <p className="card-text">Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
  </div>
</div>
</div>



<div className='col-lg-4 col-md-6 col-sm-6'>
<div className="card w-75">
  <div className="card-body">
  <h4 className="card-title"><i className="fas fa-heartbeat fa-2x"  style={{color:'#e12454'}}></i>Heart Dieases</h4>
    <p className="card-text">Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
   
  </div>
</div>
</div>


<div className='col-lg-4 col-md-6 col-sm-6'>
<div className="card w-75">
  <div className="card-body">
  <h4 className="card-title"><i className="fas fa-tooth fa-2x"  style={{color:'#e12454'}}></i>Laboratry Services</h4>
    <p className="card-text">Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
  </div>
</div>
</div>




</div>

{/* second row for cards */}

<div className='row mt-5 justify-content-center ml-5'>

<div className='col-lg-4 col-md-6 col-sm-6'>
<div className="card w-75">
  <div className="card-body">
    <h4 className="card-title"><i className="fas fa-crutch fa-2x" style={{color:'#e12454'}}></i>Body Surgery</h4>
    <p className="card-text">Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
  </div>
</div>
</div>



<div className='col-lg-4 col-md-6 col-sm-6'>
<div className="card w-75">
  <div className="card-body">
  <h4 className="card-title"><i className="fas fa-brain fa-2x"  style={{color:'#e12454'}}></i>Neurology Sargery</h4>
    <p className="card-text">Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
   
  </div>
</div>
</div>


<div className='col-lg-4 col-md-6 col-sm-6'>
<div className="card w-75">
  <div className="card-body">
  <h4 className="card-title"><i className="fas fa-dna fa-2x"  style={{color:'#e12454'}}></i>Gynecology</h4>
    <p className="card-text">Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
  </div>
</div>
</div>




</div>
</div>

{/* section for reviews of doctors  */}

<div className='container-fluid mt-5 h-100'  style={{backgroundColor:'#f4f9fc'}}>


<div className='doc_review_text'>

<h1 style={{color:'#223a66'}}>We served over 5000+ <br/>

    <span style={{color:'#223a66' , marginLeft:'100px'}}>Patients</span></h1>

<p>
Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates <br/>incidunt molestias nostrum laudantium. Maiores porro cumque quaerat.</p>

</div>

{/* div for carosal of  cards  */}

    <div className="container-fluid my-5">
      <div id="carouselExample1" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <div className="row g-4 justify-content-center">
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title"><img src="images/1.jpg" className="card-img-top rounded-circle" alt="Card 1" style={{width:'20%'}} />Nice Environment</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
				
                  <div className="card-body">
                    <h5 className="card-title"><img src="images/2.jpg" className="card-img-top rounded-circle" alt="Card 1" style={{width:'20%'}} />Modern Services</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      
    
          {/* Slide 2 */}
          <div className="carousel-item">
            <div className="row g-4 justify-content-center">
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title"><img src="images/1.jpg" className="card-img-top rounded-circle" alt="Card 1" style={{width:'20%'}} />Good Support</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
				
                  <div className="card-body">
                    <h5 className="card-title"><img src="images/2.jpg" className="card-img-top rounded-circle" alt="Card 1" style={{width:'20%'}} />Amazing services</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Carousel Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample1" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample1" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>


</div>



{/* sections for partners details  */}

<div className='container-fluid' style={{height:'50vh'}}>

<div className='partner_text'> 

<h2 style={{color:'#223a66'}}>Partners who support us</h2>

<p>Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt molestias <br/>
 <span style={{marginLeft:'100px'}}> nostrum laudantium. Maiores porro cumque quaerat</span></p>

</div>

{/* div for partners logo images using carasol */}

<div id="carouselExample2" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
      <div className="carousel-inner">
        {/* Slide 1 */}
        <div className="carousel-item active">
          <div className="d-flex justify-content-around">
            <img className="d-block w-15" src="images/about/1.png" alt="First slide" />
            <img className="d-block w-15" src="images/about/2.png" alt="First slide" />
            <img className="d-block w-15" src="images/about/3.png"alt="First slide" />
            <img className="d-block w-15" src="images/about/4.png" alt="First slide" />
            <img className="d-block w-15" src="images/about/5.png" alt="First slide" />
            <img className="d-block w-15" src="images/about/6.png" alt="First slide" />
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <div className="d-flex justify-content-around">
            <img className="d-block w-15" src="images/about/6.png" alt="Second slide" />
            <img className="d-block w-15" src="images/about/05.png" alt="Second slide" />
            <img className="d-block w-15" src="images/about/4.png" alt="Second slide" />
            <img className="d-block w-15" src="images/about/3.png" alt="Second slide" />
            <img className="d-block w-15" src="images/about/2.png" alt="Second slide" />
            <img className="d-block w-15" src="images/about/1.png" alt="Second slide" />
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <div className="d-flex justify-content-around">
            <img className="d-block w-15" src="images/about/1.png" alt="Third slide" />
            <img className="d-block w-15" src="images/about/2.png" alt="Third slide" />
            <img className="d-block w-15" src="images/about/05.png" alt="Third slide" />
            <img className="d-block w-15" src="images/about/6.png" alt="Third slide" />
            <img className="d-block w-15" src="images/about/4.png" alt="Third slide" />
            <img className="d-block w-15" src="images/about/3.png" alt="Third slide" />
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample2" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample2" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
</div>

{/* section for footer */}


<Footer/>


    </div>
  )
}

export default Home