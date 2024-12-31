import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import '../css/Services.css'






function Services() {


const navigate=useNavigate()

const handleClick = () => {
    navigate('/BookAppoinments'); 
};





  return (
    <div>
        {/* Navbar component */}
<Navbar/>


{/* title for services */}
<div className='services_title'   style={{
        backgroundImage: 'url(/images/22.jpg)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'

      }}>


<div className='services_text'>
<p style={{color:'white'}}>Our services</p>

<h1 style={{color:'white',fontSize:'66px',fontWeight:'700'}}>What we Do</h1>
</div>

</div>


{/* cards for detaling the services */}
<div className='container-fluid my-4'>



    {/* First Row */}
    <div className="row  justify-content-center  ">
        <div className="col-md-4  mb-4">
            <div className="card " style={{ width: '100%', minWidth: '300px' }}>
                <img
                    src="images/service-1.jpg"
                    className="card-img-top"
                    alt="Card 1"
                />
                <div className="card-body">
                    <h5 className="card-title">Child care</h5>
                    <p className="card-text">
                    Saepe nulla praesentium eaque omnis perferendis a doloremque.
                    </p>
                </div>
            </div>
        </div>
        <div className="col-md-4 mb-4">
            <div className="card " style={{ width: '100%', minWidth: '300px' }}>
                <img
                    src="images/service-2.jpg"
                    className="card-img-top"
                    alt="Card 2"
                />
                <div className="card-body">
                    <h5 className="card-title">Personal Care</h5>
                    <p className="card-text">
                    Saepe nulla praesentium eaque omnis perferendis a doloremque.
                    </p>
                </div>
            </div>
        </div>
        <div className="col-md-4 mb-4">
            <div className="card  " style={{ width: '100%', minWidth: '300px' }}>
                <img
                    src="images/service-3.jpg"
                    className="card-img-top"
                    alt="Card 3"
                />
                <div className="card-body">
                    <h5 className="card-title">CT scan</h5>
                    <p className="card-text">
                    Saepe nulla praesentium eaque omnis perferendis a doloremque.
                    </p>
                </div>
            </div>
        </div>
    </div>

    {/* Second Row */}
    <div className="row justify-content-center  mt-5" >
        <div className="col-md-4 mb-4">
            <div className="card " style={{ width: '100%', minWidth: '300px' }}>
                <img
                    src="images/service-4.jpg"
                    className="card-img-top"
                    alt="Card 4"
                />
                <div className="card-body">
                    <h5 className="card-title">Joint replacement</h5>
                    <p className="card-text">
                    Saepe nulla praesentium eaque omnis perferendis a doloremque.
                    </p>
                </div>
            </div>
        </div>
        <div className="col-md-4 mb-4">
            <div className="card" style={{ width: '100%', minWidth: '300px' }}>
                <img
                    src="images/service-6.jpg"
                    className="card-img-top"
                    alt="Card 5"
                />
                <div className="card-body">
                    <h5 className="card-title">Examination & Diagnosis</h5>
                    <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                </div>
            </div>
        </div>
        <div className="col-md-4 mb-4">
            <div className="card" style={{ width: '100%', minWidth: '300px' }}>
                <img
                    src="images/service-8.jpg"
                    className="card-img-top"
                    alt="Card 6"
                />
                <div className="card-body">
                    <h5 className="card-title">Alzheimer's disease</h5>
                    <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>



{/* image div */}

<div className='service_img'   style={{
        backgroundImage: 'url(/images/banner.jpg)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'

      }}>

<div className='divider'></div>


<h1 style={{fontSize:'50px'}}>We are pleased to offer <br/>you the <span style={{color:'#223a66'}}> chance to have the <br/> healthy</span> </h1>


<button type='button' onClick={handleClick}>Get Appointment &gt;</button>

</div>

{/* footer components */}
<Footer/>









    </div>
  );
}
export default Services