import React from 'react';
import { Link } from 'gatsby';
import Navbar from '../components/navbar'

const Resume = () => (
	<div className=''>
		<Navbar />
		<div className="flex-l flex-m w-100 h3 mb4 mb1-m mb0-l">
		  <div className="fl w-100 w-two-thirds-m w-two-thirds-l pa2 bg-dwyl-teal ba b--dwyl-dark-teal">.w-two-thirds</div>
		  <div className="fl w-100 w-third-m w-third-l pa2 bg-dwyl-teal ba b--dwyl-dark-teal">.w-third</div>
		</div>


		<button className='w-20 br3 bg-purple center'>
			<Link className='white no-underline hover-black' to="/">Go BACK</Link>		
		</button>
	</div>	
)

export default Resume;