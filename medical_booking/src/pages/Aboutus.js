import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../css/Aboutus.css'




 function Aboutus() {
  return (
    <div>
{/* navbar component */}
<Navbar/>

{/* about section start here */}

<div className='about_title'   style={{
        backgroundImage: 'url(/images/22.jpg)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'

      }}>


<div className='about_text'>
<p style={{color:'white'}}>About us</p>

<h1 style={{color:'white',fontSize:'66px',fontWeight:'700'}}>About Us</h1>
</div>

</div>

{/* remaing text and paragrah */}


<div className='personal_text'>
   <h1 style={{color:'#223a66',fontSize:'44px',fontWeight:'bold',marginLeft:'70px'}}>Personal care <br/>for your healthy <br/>living</h1>



<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, quod laborum alias. Vitae dolorum, <br/>officia sit! Saepe ullam facere at, consequatur incidunt, quae esse, quis ut reprehenderit dignissimos, <br/>libero delectus.</p>


<img src='images/about/sign.png' alt='sign image'/>

</div>

{/* cards for personal care details */}


<div className="container-fluid mt-5">
      <div className="row">
        {/* Card 1 */}
        <div className="col-md-3 mb-4">
          <div className="card h-100">
            <img src="/images/about/about-1.jpg" className="card-img-top" alt="Card image" />
            <div className="card-body">
              <h5 className="card-title font-weight-bold">Healthcare for Kids</h5>
              <p className="card-text">This is some content for the first card. It provides additional information.</p>
            </div>
          </div>
        </div>
        
        {/* Card 2 */}
        <div className="col-md-3 mb-4">
          <div className="card h-100">
            <img src="/images/about/about-2.jpg" className="card-img-top" alt="Card image" />
            <div className="card-body">
              <h5 className="card-title font-weight-bold">Medical Counseling</h5>
              <p className="card-text">This is some content for the second card. It provides additional information.</p>
            </div>
          </div>
        </div>
        
        {/* Card 3 */}
        <div className="col-md-3 mb-4">
          <div className="card h-100">
            <img src="/images/about/about-3.jpg" className="card-img-top" alt="Card image" />
            <div className="card-body">
              <h5 className="card-title font-weight-bold">Modern Equipments</h5>
              <p className="card-text">This is some content for the third card. It provides additional information.</p>
            </div>
          </div>
        </div>
        
        {/* Card 4 */}
        <div className="col-md-3 mb-4">
          <div className="card h-100">
            <img src="/images/about/about-4.jpg" className="card-img-top" alt="Card image" />
            <div className="card-body">
              <h5 className="card-title font-weight-bold">Qualified Doctors</h5>
              <p className="card-text">This is some content for the fourth card. It provides additional information.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

{/* sections for sepeclists */}

<div className='speciallist_text'>

<h1>Meet Our Specialist</h1>

<p>Today’s users expect effortless experiences. Don’t let essential people and<br/> <span style={{marginLeft:'50px'}}> processes stay stuck in the past. Speed it up, skip the hassles</span> </p>



{/* sections of cards specialist */}


<div className="row w-100 justify-content-center">
        {/* Card 1 */}
        <div className="col-md-2 mb-4">
          <div className="card h-100">
            <img src="/images/test-thumb1.jpg" className="card-img-top" alt="Card image" />
            <div className="card-body">
              <h5 className="card-title">John Marshal</h5>
              <p className="card-text">Internist, Emergency Physician</p>
            </div>
          </div>
        </div>
        
        {/* Card 2 */}
        <div className="col-md-2 mb-4">
          <div className="card h-100">
            <img src="/images/test-thumb2.jpg" className="card-img-top" alt="Card image" />
            <div className="card-body">
              <h5 className="card-title">Marshal Root</h5>
              <p className="card-text">Surgeon, Сardiologist</p>
            </div>
          </div>
        </div>
        
        {/* Card 3 */}
        <div className="col-md-2 mb-4">
          <div className="card h-100">
            <img src="/images/test-thumb3.jpg" className="card-img-top" alt="Card image" />
            <div className="card-body">
              <h5 className="card-title">Siamon john</h5>
              <p className="card-text">Internist, General Practitioner</p>
            </div>
          </div>
        </div>
        
        {/* Card 4 */}
        <div className="col-md-2 mb-4">
          <div className="card h-100">
            <img src="/images/test-thumb4.jpg" className="card-img-top" alt="Card image" />
            <div className="card-body">
              <h5 className="card-title">Rishat Ahmed</h5>
              <p className="card-text">Orthopedic Surgeon</p>
            </div>
          </div>
        </div>
      </div>


</div>

{/* footer */}

<Footer/>


    </div>
  );
}
export default Aboutus