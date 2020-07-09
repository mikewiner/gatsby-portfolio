import React from "react"
import Header from "../components/header.js"
import Textbox from "../components/textbox.js"
import Fade from 'react-reveal/Fade';


export default function Contact() {
  return (
    <section id='contact' className='pa3 ma3 center'>
      <Textbox>
      	<Fade duration={2000} delay={1000} distance="30px">
      		<div className="bg-white">
      				<Header headerText="Contact" />
      				<p>Find me on github <a href='https://github.com/mikewiner'>Click here.</a></p>
      				<p>Or my email winer.mike@gmail.com</p>
        	</div>
        </Fade>
      </Textbox>
    </section>
  );
}