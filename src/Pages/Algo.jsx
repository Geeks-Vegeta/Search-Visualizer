import React, { useState } from "react";
import { MDBContainer, MDBTooltip } from "mdb-react-ui-kit";
import "./header.css";
import { AiFillBulb,
    AiFillInfoCircle, AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
import AutoTyping from "./AutoTyping";

import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBInput,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
  } from 'mdb-react-ui-kit';

const Algo=()=>{



    const [algo, setAlgo]=useState('Linear')
    const [basicModal, setBasicModal] = useState(false);
    const [start, setStart]=useState(false);
    const [inputData, setInputData]=useState('')
    const [target, setTarget]=useState('');

    const notext="No Input Data 🥲 and No target 🤐 Value\n\
    Unable to proceed forward. Make Sure To add Values"

    let myarray=inputData.split(' ');
    let xx=myarray.slice();
    const datatextlinear=`Alright so your array is [${myarray}]  and target is ${target}.
            And your algorithm is Linear Search, As Linear Search Does not required to sort array`
    const datatextbinary=`Alright so your array is [${myarray}]  and target is ${target}.
    And your algo is Binary Search.Lets sort array [${xx.sort(function(a, b) {
        return a - b;
      })}]`
    const [lineartext, setLinear]=useState('');
    const [Binarytext, setBinary]=useState('');



    const toggleShow = () => setBasicModal(!basicModal);

    const setFalseStart=()=>setStart(false);

    // useEffect(() => {
    //     setFalseStart();
    //     }, []);

    const ClearBoard=()=>{
        setStart(false);
        setInputData('');
        setTarget('');
        setLinear('');
        setBinary('');


    }



    const linearSearch=async(delay=1300)=>{
        let s=document.querySelectorAll('.circle');
        let findvalue=Number(target);

        let found=[];

        for(let i=0;i<s.length;i++){
            s[i].style.backgroundColor = "#FF4949";


        await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, delay)
        );

        let num=Number(s[i].innerHTML);


        if (findvalue === num) {
            s[i].style.backgroundColor = "#13CE66";
            const foundData=`Hurray 🥰 we found our target ${target} at position ${i}`
            setLinear(foundData);
            found.push(i);
            break;
        } else {
            // Changing the color to the previous one
            s[i].style.backgroundColor = "#6b5b95";
            let not_found=`Look like ${num} != ${findvalue}`
            setLinear(not_found);
        }

        }
        if (found.length===0){
            setLinear("Target Not Found No such Target Exists 😮‍💨")
        }
}
    


    const BuildArrayLinear=async(delay=1000)=>{
        setLinear(lineartext);
        let x=document.getElementById("array");
    
        let d=myarray
    
        for(let i=0;i<d.length;i++){
            await new Promise((resolve) =>
            setTimeout(() => {
              resolve();
            }, delay)
          );
    
            let s=document.createElement('div');
            s.classList.add("circle");
            s.innerText=d[i]
            x.appendChild(s);
        }
    
        linearSearch();
    }


    const BinarySearch=async(delay=1300)=>{
        let s=document.querySelectorAll('.circle');
        let findvalue=Number(target);

    
        let l=0;
        let hi=s.length;
        let found=[];
        while (l<=hi){
            await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, delay)
            );
            let mid=Math.floor(l+(hi-l)/2)
            if (s[mid]===undefined){
                console.log("yes")
                setBinary("Target Not Found No such Target Exists 😮‍💨")
            };
            if (Number(s[mid].innerText)===findvalue){
                s[mid].style.backgroundColor = "#13CE66";
                const foundData=`Hurray 🥰 we found our target ${target} at position ${mid}`
                setBinary(foundData);
                found.push(mid);
                break;
            }else if (Number(s[mid].innerText)<findvalue){
                l=mid+1
                s[mid].style.backgroundColor = "#6b5b95";
                let not_found=`Look like ${mid} != ${findvalue}`
                setBinary(not_found);
            }else{
                hi=mid-1
                s[mid].style.backgroundColor = "#6b5b95";
                let not_found=`Look like ${mid} != ${findvalue}`
                setBinary(not_found);
            }
        }
        if (found.length===0){
            setBinary("Target Not Found No such Target Exists 😮‍💨")
        }
    }



    const BuildArrayBianry=async(delay=1000)=>{
        setBinary(datatextbinary);
        let x=document.getElementById("array");

        
        let d = myarray.map(Number);
        d.sort(function(a, b) {
            return a - b;
          });
    
        for(let i=0;i<d.length;i++){
            await new Promise((resolve) =>
            setTimeout(() => {
              resolve();
            }, delay)
          );
    
            let s=document.createElement('div');
            s.classList.add("circle");
            s.innerText=d[i]
            x.appendChild(s);
        }
    
        BinarySearch();
    }
    


    return (
        <>
        {/* modal toggle */}
        <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
            <MDBModalDialog>
            <MDBModalContent>
                <MDBModalHeader>
                <MDBModalTitle>Add Data</MDBModalTitle>
                <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                </MDBModalHeader>
                <MDBModalBody>
                    <span>Add Array In Following Format</span>
                    <br />
                    <span>1 4 5 7 8 2 7 2</span>
                
                    <MDBInput value={inputData} onChange={(e)=>{setInputData(e.target.value)}} label='Array Data' id='typeText' type='text' />
                    <br />
                    <MDBInput value={target} onChange={(e)=>{setTarget(e.target.value)}} label='Target' id='typeText' type='text' />
                </MDBModalBody>

                <MDBModalFooter>
                <MDBBtn color='secondary' onClick={toggleShow}>
                    Close
                </MDBBtn>
                <MDBBtn onClick={toggleShow}>Save changes</MDBBtn>
                </MDBModalFooter>
            </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>


        <MDBContainer fluid className="bg_color p-2" >
            <div className="navs-headers">
                <div className="heading">
                    <h4>Searching Visualizer</h4>

                    <div className="about_tut">
                       <MDBTooltip tag='a' wrapperProps={{ href: '#' }} placement='bottom' title='tutorial'>
                            <AiFillBulb className="mx-2" size="1.5rem"/>
                        </MDBTooltip>

                        <MDBTooltip tag='a' wrapperProps={{ href: '#' }} placement='bottom' title='author'>
                            <a href="https://github.com/Geeks-Vegeta" rel="noreferrer" target="_blank">
                                <AiFillGithub className="mx-2" size="1.5rem"/>
                            </a>
                        </MDBTooltip>


                        <MDBTooltip tag='a' wrapperProps={{ href: '#' }} placement='bottom' title='about'>
                            <Link to="/about">
                            <AiFillInfoCircle className="mx-2" size="1.5rem"/>
                            </Link>
                        </MDBTooltip>
                        

                    </div>
                </div>
                <div className="components-lists">
                <ul>
                    <Link to="/algo">
                        <li
                        onClick={()=>setAlgo('Linear')}>Linear
                        </li>
                    </Link>
                    <Link to="/algo">
                        <li onClick={()=>setAlgo('Binary')}>Binary
                        </li>
                    </Link>
                    <li onClick={toggleShow}>Add Data</li>
                    <li onClick={ClearBoard}>Clear Board</li>
                    <li>
                        <span>Algo Selected: {algo}</span>
                    </li>
                    <li>
                        {algo==='Linear'?(
                            <>
                            <span className="visualbutton" onClick={()=>{
                            setStart(true);
                            BuildArrayLinear();
                        }}>Start Visualizing Linear</span>
                            </>
                        ):(
                            <>
                            <span className="visualbutton" onClick={()=>{
                            setStart(true);
                            BuildArrayBianry();
                        }}>Start Visualizing Binary</span>
                            </>
                        )}
                        
                    </li>
                </ul>


                </div>

            </div>
        </MDBContainer>
            <div id="algo">

                
                {start?(
                    <>
                    
                        <div className="name my-3">
                            <h5 className="text-center">{algo} Search</h5>
                        </div>

                        {!inputData & !target?(
                            <> 
                                <div className="box-algo">
                                    <AutoTyping text={notext} speed={40} /> 
                                </div>
                                {
                                    setTimeout(() => {
                                        setFalseStart();
                                        window.location.reload();
                                    }, 6000)
                                }
                            </>
                        ):(

                            <>
                               {algo==="Binary"?(
                                <>
                                   <div className={`box-algo ${Binarytext.length<=50?'text-center':''}`}>
                                        <AutoTyping text={Binarytext?Binarytext:datatextbinary} speed={10} /> 

                                    </div>
                                </>
                               ):(
                                <>
                                    <div className={`box-algo ${lineartext.length<=10?'':'text-center'}`}>
                                        <AutoTyping text={lineartext?lineartext:datatextlinear} speed={10} /> 
                                    </div>
                                </>
                               )} 
                            </>
                          
                        )}
                    </>
                ):(
                    <>
                    </>
                )}
                {!inputData & !target?(
                    <>
                    </>
                ):(
                    <>
                    <div className="array_box">
                        <div id="array">
                        </div>
                    </div>
                    </>
                )}
                

               

            </div>


        </>
    )
}

export default Algo;