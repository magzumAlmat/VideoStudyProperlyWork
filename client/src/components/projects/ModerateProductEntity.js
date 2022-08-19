import React, { Component} from "react";
// import { createProject } from '../../store/actions/projectActions';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
// import Select from './Select';
// import Select from "react-select";
import CustomSelect from "./Select";
// import { Category } from '@material-ui/icons';
import { createProductAction } from "..//../store/actions/productActions";

import { storage } from "../../config/fbConfig";
import { event } from "jquery";

import config from "../../config/fbConfig";
import { updateProductAction } from "../../store/actions/updateProductAction";
import firebase from 'firebase/app';
import 'firebase/firestore';
// import {addDoc} from 'firebase/app'
import { useState, useEffect } from "react";
import store from '..//../config/fbConfig'
// const options = [
//   { value: "smartphone", label: "СМАРТФОНЫ" },
//   { value: "pads", label: "ПЛАНШЕТЫ" },
//   { value: "notebooks", label: "НОУТБУКИ" },
//   { value: "smartwatches", label: "СМАРТ-ЧАСЫ" },
//   { value: "headphones", label: "НАУШНИКИ" },
//   { value: "accessories", label: "АКСЕССУАРЫ" },
//   { value: "technique", label: "ТЕХНИКА" },
// ];  



function ModerateProductEntity () {
  

    // this.state = {
    //   selectOptions: [],
    //   cartItems: [],
    //   title: "",
    //   Category: "",
    //   Region: "",
    //   Manufacturer: "",
    //   Brand: "",
    //   Fortress: "",
    //   Colour: "",
    //   Sugar: "",
    //   Grape: "",
    //   Serving_temperature: "",
    //   Vintage: "",
    //   Products_webpage: "",
    //   content: "",
    //   description: "",
    //   delivery: "",
    //   img: "",
    //   name: "",
    //   picture: "",
    //   uid: 0,
    //   sizes: [],
    //   defaultQty: 0,
    //   moderated:false,
    //   url: "",
    //   urlVideo: "",
    //   developers:[]
    //  };
   
    const [posts, setposts] = useState([]);

   useEffect(() => {
    const q = query(collection(config, 'products'))
    onSnapshot(q, (querySnapshot) => {
      setposts(querySnapshot.docs.map(doc => ({
        data: doc.data()
      })))
    })
   }, []); //[post]for every single time post change code will run again,for[] run only once
  return (
    <div className="app">
      {/* header */}
      <div className="app__header">
        <img
          alt="headerimg"
          className="app__header__img"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
        />
      </div>
      <h1>
        this is for learning purpose and many thing that i belive and i will
        continue so
      </h1>

      {posts.map((post) => (
        <Post
          username={post.name}
          userUrl={post.title}
          caption={post.price}
        />
      ))}
    </div>
  );
}

   //------------------------------------------------------------------------


const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createProductAction: (product) => dispatch(updateProductAction(product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModerateProductEntity);















// import React from 'react'
// import { connect } from 'react-redux'
// import { firestoreConnect } from 'react-redux-firebase'
// import { compose } from 'redux'
// // import { Redirect } from 'react-router-dom'
// import moment from 'moment'
// import { deleteProject } from '../../store/actions/projectActions'
// // import Products from './Products'
// // const [cart,setCart]=useState([])

// // const {auth}=props
// // const { product } = this.props;
// import {Container} from 'reactstrap'
// import {Row} from 'reactstrap'

// import {Col} from 'reactstrap'
// import {Media} from 'reactstrap'
// import {Alert} from 'reactstrap'
// // import "node_modules/video-react/dist/video-react.css";
// import { Player ,BigPlayButton} from 'video-react';
// import "./video-react.css";
// import ReactPlayer from 'react-player'
// // import myVideo from 'C:/server/images/Lesson--44.mp4'




// const ModerateProductEntity = (props) => {
  




//     const { product} = props.location.myCustomProps;
//     const {auth}=props
//     console.log('productDetail--',product,'AUTH--',auth)
    
//     const handleChange = (e) => {
//       console.log('this is e-',e)  
//       this.setState({
//           [e.target.id]: e.target.value
//       })
//   }
    

//     const handleClick = (e) =>{
//         // e.preventDefault();
//         // const id = props.match.params.id;
//         // props.deleteProject(id, auth.uid);
//         // props.history.push('/');
//     }

//     const handleEditClick = (e) =>{
//         // console.log(props.id)
//         // e.preventDefault();
//         // props.history.push(`/project/${props.match.params.id}/edit`);
//     }

//     console.log('proDDDUCT from project details',props.location.myCustomProps)

    
//     // const myVideo ='C:/server/images/Lesson--44.mp4'
//     //if(!auth.uid)
//     return (
        
//         // <div className="container section project-details">
//         //         <div className="card z-depth-0">
//         //             <div className="card-content">

//         //             <img
//         //                 className="card-img-top "
//         //                 src={props.location.myCustomProps.url}
//         //                 alt={props.location.myCustomProps.name}
//         //                 width='600'
//         //                 height='600'
//         //                 style={{ 
//         //                 paddingTop:'5%'
//         //                 }}
//         //             />
        
          
//         //     <h5 className="card-title">{props.location.myCustomProps.name}</h5>
//         //     <p className="uid">{props.location.myCustomProps.uid} T</p>
                     
                   
                      
//         //             </div>
                    
//         //             <div className="card-action grey lighten-4 grey-text">
//         //                 <div>Posted by {props.location.myCustomProps.authorFirstName} {props.location.myCustomProps.authorLastName}</div>
//         //                 {/* <div>{moment(product.createdAt.toDate()).calendar()}</div> */}
//         //             </div>
//         //             {/* <div>
//         //                 <Cart cartItems={cartItems }/>
//         //             </div> */}
               
//         //         </div>
//         //     </div>

//         <div className='container'>
//             <Container>
//             <Row>
//                 <Col> 
//                 <img width={300}
//                      height={300}
//                      className="mr-3"
//                      src={props.location.myCustomProps.url}
//                      alt={props.location.myCustomProps.name}
//                 />

//                 {/* <ReactPlayer  url={props.location.myCustomProps.url}/> */}

//                 {console.log( 'props.location.myCustomProps.urlVideo    -  ',props.location.myCustomProps.urlVideo)}
              
//                  {/* <video id="videoPlayer" width="85%" controls muted="muted" autoplay>
//                     <source src={props.location.myCustomProps.urlVideo} type="video/mp4" />
//                 </video>  */}
                        
//                  <Player
//                     playsInline
//                     poster="/assets/poster.png"
//                     src={props.location.myCustomProps.urlVideo}
//                     width="85%"
//                     >
//                       <BigPlayButton position="center" />
//                 </Player> 

//               {/* <ReactPlayer
//                         className='react-player fixed-bottom'
//                         url= {props.location.myCustomProps.urlVideo}
                      
//                         controls = {true}  />   */}

                      
//                           {/* <video src={props.location.myCustomProps.urlVideo} controls width="100%">
//                         Sorry, your browser doesn't support embedded videos.
//                         </video>   */}
      
//                 </Col>

//                 <Col> 
//                 <div className="input-field">
//                 <h3>{props.location.myCustomProps.title}</h3>
//                         <label htmlFor="title">Title</label>
//                         <input type="text" id="title" onChange={handleChange} />
//                 </div>

               
//                 <div className="input-field">
//                 <h5>Категория: {props.location.myCustomProps.Category.label}</h5>
//                         <label htmlFor="title">Title</label>
//                         <input type="text" id="title" onChange={handleChange} />
//                 </div>
             
                
                
//                 {/* <h6>{props.location.myCustomProps.content}</h6> */}
//                 <div variant="success">
//                     <div>
//                     <div className="input-field">
//                     <h4>{props.location.myCustomProps.uid} &#8376;</h4>
//                         <label htmlFor="title">Title</label>
//                         <input type="text" id="title" onChange={handleChange} />
//                 </div>
                   
//                     </div>
//                     <h6>
//                     <div className="input-field">
//                     1 x {props.location.myCustomProps.title} 
//                         <label htmlFor="title">Title</label>
//                         <input type="text" id="title" onChange={handleChange} />
//                 </div>
                        
                       
//                        <span className='float-right'>
//                        <div className="input-field">
//                        {props.location.myCustomProps.uid}
//                         <label htmlFor="title">Title</label>
//                         <input type="text" id="title" onChange={handleChange} />
//                       </div>

//                       <div>
//                     <div className="input-field">
//                     <h4>{props.location.myCustomProps.moderated} &#8376;</h4>
//                         <label htmlFor="title">Title</label>
//                         <input type="text" id="title" onChange={handleChange} />
//                 </div>
                   
//                     </div>

                 
//                        </span>
//                     </h6>

//                     <hr />
                   
//                     </div>

                  
//                 <p>
            
//                 </p>
//                 </Col>
//             </Row>
            
//             </Container>
//         </div>
        
        

//             // <Media >
           
//             //  <div>Posted by {props.location.myCustomProps.authorFirstName} {props.location.myCustomProps.authorLastName}</div>
//             // <div>{moment(props.location.myCustomProps.createdAt.toDate()).calendar()}</div>
//             // <Media.Body>
//             //     <h5></h5>
//             //     <p>
//             //     Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
//             //     ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
//             //     tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
//             //     Donec lacinia congue felis in faucibus.
//             //     </p>
//             // </Media.Body>
//             // </Media>
//     )

//     if (product) {

//         const disabledBool = product.authorId !== auth.uid;
//         return(
//             <div className="container section project-details">
//                 <div className="card z-depth-0">
//                     {/* <div className="card-content">
//                         <span className="card-title">{ project.title }</span>
//                         <p>{ project.content }</p>
//                         <button className="button waves-effect waves-light btn indigo darken-2"
//                         disabled={disabledBool}
//                         onClick={handleEditClick}>
//                             Edit
//                         </button>
//                         <button 
//                             onClick={handleClick}
//                             className="button waves-effect waves-light btn red darken-4"
//                             disabled={disabledBool}>
//                             Delete
//                         </button>
//                     </div>
//                     <div className="card-action grey lighten-4 grey-text">
//                         <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
//                         <div>{moment(project.createdAt.toDate()).calendar()}</div>
//                     </div>
//                      */}
//                 </div>
//             </div>
//         )
//     }else{
//         return (
//             <div className="container center">
//                 <p>Loading project...</p>
//             </div>
//         )
//     }
// }

// const mapStateToProps = (state, ownProps) => {
//     const id = ownProps.match.params.id;
//     const projects = state.firestore.data.projects;
//     const project = projects ? projects[id] : null;
//     return {
//         project: project,
//         auth: state.firebase.auth
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return{
//         deleteProject: (projectId, userId) => dispatch(deleteProject(projectId, userId))
//     }
// }

// export default compose(
//     connect(mapStateToProps, mapDispatchToProps),
//     firestoreConnect([
//          {collection: 'products' }
//     ])
// )(ModerateProductEntity)