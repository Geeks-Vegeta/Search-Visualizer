import { MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import AutoTyping from "./AutoTyping";

const About=()=>{
    const navigate = useNavigate();
    const texts="Hi my name is Shreyas Mohite\
     adipisicing elit. Ea natus odio tenetur cum saepe\n\
      placeat non labore consectetur animi quo enim laudantium similique,\
     adipisci fugit unde est reprehenderit voluptatum repellat."

    return(
        <>
        <MDBContainer className="my-4">
            <BiArrowBack onClick={()=>navigate(-1)} className="pointer" size="1.4rem"/>
            <h4 className="text-center">About</h4>
            <div className="box">
            <AutoTyping text={texts} speed={50} /> 
            </div>
        </MDBContainer>
        </>
    )
}
export default About;