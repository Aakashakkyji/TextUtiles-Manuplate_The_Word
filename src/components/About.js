import React from 'react'


export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor:'white',  
    // })
    let myStyle ={
      color:props.mode === 'dark'?'white':'#27274c',
      backgroundColor : props.mode ==='dark'?'#27274c': 'white'
    }
    // const [btntext,setBtnText] = useState("Enable Dark mode")



// const toggleStyle= () =>{
//     if(myStyle.color === 'black'){
//         setMyStyle({

//         color: 'white',
//         backgroundColor:'black',
//         border: '1px solid white'
            
//         })
//         // setBtnText("Enable Light Mode")
//     }
//     else {
//         setMyStyle({
//             color: 'black',
//         backgroundColor:'white'
//         })
//         // setBtnText("Enable Dark")
//     }
// }


  return (
    <div className="container" >
        <h1 className="my-3" style={{color:props.mode === 'dark'?'white':'#27274c'}}>About Us</h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button " style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       <strong>Analyze Your Text</strong> 
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Free to Use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        AnyOne Can Accesss this
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Browser Compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        Easy and faster Then Other Websites
      </div>
    </div>
  </div>
</div>
<div className="container my-3">
{/* <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button> */}
</div>
    </div>
  )
}
