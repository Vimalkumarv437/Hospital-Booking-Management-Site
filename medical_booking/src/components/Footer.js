import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { MdSpatialAudioOff } from "react-icons/md";
import '../css/Footer.css'





function Footer() {
  return (
    <div>

<div className='container-fluid footer_container' >

<div className='row'>
{/* first coloum */}
<div className='col-lg-4 ml-4 mt-5'>
<img src='images/logo.png'/>

<p style={{color:'#6F8BA4'}}>Tempora dolorem voluptatum nam vero assumenda voluptate, facilis ad eos obcaecati tenetur veritatis eveniet distinctio possimus.</p>

<div className='react_icons'>
<FaFacebook size='3rem' style={{color:'#6F8BA4',marginRight: '20px'}}/>
<FaTwitter size='3rem'  style={{color:'#6F8BA4',marginRight: '20px'}}/>
<MdEmail size='3rem' style={{color:'#6F8BA4',marginRight: '20px'}}/>
</div>

</div>

{/* second coloum */}
<div className='col-lg-2 ml-4 mt-5 department_footer1'>

<h4 style={{color:'#223a66',textTransform:'capitalize'}} className='footer_h4'>Department</h4>
<hr style={{width:'90px'}}/>
<p style={{color:'#6F8BA4'}}>Surgery<br/>
Wome's Health<br/>
Radiology<br/>
Cardioc<br/>
Medicine</p>


</div>

{/* third coloum */}

<div className='col-lg-2 ml-4 mt-5 department_footer2'>

<h4 style={{color:'#223a66',textTransform:'capitalize'}}>Support</h4>
<hr style={{width:'90px'}}/>
<p style={{color:'#6F8BA4'}}>Terms & Conditions<br/>
Privacy Policy<br/>
Company Support<br/>
FAQuestions<br/>
Company Licence</p>


</div>
{/* fourth coloum */}


<div className='col-lg-2 ml-4 mt-5 department_footer2'>

<h4 style={{color:'#223a66',textTransform:'capitalize'}}>Get in Touch</h4>
<hr style={{width:'90px'}}/>
<p style={{color:'#6F8BA4'}}>
  <MdEmail/> Support Available for 24/7<br/>
  <span style={{color:'black',fontSize:'1.2rem',fontWeight:'500'}}>Hello@gmail.com</span> <br/>
  <MdSpatialAudioOff />  Mon to Fri : 08:30 - 18:00<br/>
<span style={{fontSize:'1.3rem',color:'black',fontWeight:'bold'}}>+23-456-6588</span><br/>
</p>


</div>










</div>
<hr/>

<p style={{color:'#6F8BA4'}}>Distributed by <span style={{color:'black' , fontWeight:'bold'}}>Vimalkumar V</span></p>


</div>








    </div>
  );
}
export default Footer