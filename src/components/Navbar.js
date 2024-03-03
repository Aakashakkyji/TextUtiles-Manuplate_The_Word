import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <div>
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}  `}> 
    {/* ${props.modee} bg-${props.modee} */}
   
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title} </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutText}</Link>
        </li>
        
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-danger" type="submit">Search</button>
      </form> */}
      

{/* Green Mode */}
{/* <div className={`form-check form-switch text-${props.modee==='light'? 'dark' : 'light'}`}>
  <input className="form-check-input" onClick={props.toggleeMode} type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
  <label className="form-check-label" for="flexSwitchCheckChecked">Enable Yellow Mode</label>
</div> */}

{/* //Dark And Light Mode */}
      <div className={`form-check form-switch text-${props.mode==='light'? 'dark' : 'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>

    </div>
  </div>
</nav>

    
    
    </>
    </div>
  )
}


Navbar.prototypes = {title: PropTypes.string.isRequired, aboutText: PropTypes.string.isRequired}


Navbar.defaultProps = {
    title: 'Set title here',
    aboutText:'About'
  };




// import React from "react";
// import PropTypes from "prop-types";

// export default function Navbar(props) {
//   // Array of color options
//   const colorOptions = [
//     { name: "Blue", backgroundColor: "blue" },
//     { name: "Green", backgroundColor: "green" },
//     { name: "Yellow", backgroundColor: "yellow" },
//     { name: "Purple", backgroundColor: "purple" },
//   ];

//   const handleColorChange = (color) => {
//     document.body.style.backgroundColor = color;
//   };

//   return (
//     <nav
//       className={`navbar bg-${props.mode} border-bottom border-bottom-${props.mode}`}
//       data-bs-theme="dark"
//     >
//       <div className="container-fluid">
//         <a
//           className={`navbar-brand  text-${
//             props.mode === "light" ? "dark" : "light"
//           }`}
//           href="#"
//         >
//           {props.title}
//         </a>
//         {/* Color change buttons */}
//         <div>
//           {colorOptions.map((colorOption, index) => (
//             <button
//               key={index}
//               onClick={() => handleColorChange(colorOption.backgroundColor)}
//               className="btn mx-1"
//               style={{
//                 backgroundColor: colorOption.backgroundColor,
//                 color: "white",
//               }}
//             >
//               {colorOption.name}
//             </button>
//           ))}
//         </div>

//         <div
//           className={`form-check form-switch text-${
//             props.mode === "light" ? "dark" : "light"
//           }`}
//         >
//           <input
//             className="form-check-input"
//             type="checkbox"
//             role="switch"
//             id="flexSwitchCheckDefault"
//             onClick={props.enableDarkmode}
//           />
//           <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
//             Enable DarkMode
//           </label>
//         </div>
//       </div>
//     </nav>
//   );
// }
// Navbar.prototypes = { title: PropTypes.string, about: PropTypes.string };