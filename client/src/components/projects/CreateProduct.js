import React, { Component, useState } from "react";
// import { createProject } from '../../store/actions/projectActions';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
// import Select from './Select';
// import Select from "react-select";
import CustomSelect from "./Select";
// import { Category } from '@material-ui/icons';
import { createProductAction } from "..//../store/actions/productActions";
import firebase from 'firebase/app';
import 'firebase/firestore';

import { storage } from "../../config/fbConfig";

const options = [
  { value: "smartphone", label: "СМАРТФОНЫ" },
  { value: "pads", label: "ПЛАНШЕТЫ" },
  { value: "notebooks", label: "НОУТБУКИ" },
  { value: "smartwatches", label: "СМАРТ-ЧАСЫ" },
  { value: "headphones", label: "НАУШНИКИ" },
  { value: "accessories", label: "АКСЕССУАРЫ" },
  { value: "technique", label: "ТЕХНИКА" },
];
class CreateProject extends Component {
  state = {
    selectOptions: [],
    cartItems: [],
    title: "",
    Category: "",
    Region: "",
    Manufacturer: "",
    Brand: "",
    Fortress: "",
    Colour: "",
    Sugar: "",
    Grape: "",
    Serving_temperature: "",
    Vintage: "",
    Products_webpage: "",
    content: "",
    description: "",
    delivery: "",
    img: "",
    name: "",
    picture: "",
    price: 0,
    sizes: [],
    defaultQty: 0,
    moderated:false,
    url: "",
    urlVideo: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("state from CREATEPRODUCT", this.state);
    this.props.createProductAction(this.state);
    this.props.history.push("/products");
  };

  onChangeInput = (value, e) => {
    this.state.Category = value;
    this.state.selectOptions = this.state.Category.value;
  };

  //-------------------------------------------------------------------------

  ReactFirebaseFileUpload = () => {
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);

    const handleChange = (e) => {
      if (e.target.files[0]) {
        setImage(e.target.files[0]);
      }
    };

    const handleUpload = () => {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              setUrl(url);
              this.setState({ url });
            });
        }
      );
    };

    console.log("URL ", this.state.url);

    return (
      <div>
        <progress value={progress} max="100" />
        <br />
        <br />
        <input type="file" onChange={handleChange} />
        <a onClick={handleUpload}>Загрузить</a>

        <br />
        {url}
        <br />
        <img
          src={url || "http://via.placeholder.com/300"}
          alt="firebase-image"
        />
      </div>
    );
  };

  //-----------------------------------------------------------------------uploadFileToserverFunctions
  // UplpadComponent = () => {
  //   const [fileData, setFileData] = useState();

  //   const fileChangeHandler = (e) => {
  //     setFileData(e.target.files[0]);
  //   };

  //   const onSubmitHandler = (e) => {
  //     e.preventDefault();
  //     console.log("console log e in UplpadComponent -  ", e);
  //     // Handle File Data from the state Before Sending
  //     const data = new FormData();

  //     data.append("image", fileData);
    
  //     this.state.url = "./images/" + "Lesson" + "--" + fileData.name;  //changing url
  //     fetch("http://localhost:5000/single", {
  //       method: "POST",
  //       body: data,
  //     })
  //       .then((result) => {
  //         console.log("File Sent Successful");
  //         console.log(
  //           "filedata is ------ image ",
  //           "Lesson" + "--" + fileData.name
  //         );
  //       })
  //       .catch((err) => {
  //         console.log(err.message);
  //       });
  //   };


    
  //   return (
  //     <>
  //       <form onSubmit={onSubmitHandler} onChange={fileChangeHandler} >
  //         <input type="file" onChange={fileChangeHandler} />
  //         <br />
  //         <br />

  //         {/* <button type="submit">Submit File to Backend</button> */}
  //       </form>
  //       <br />
  //         <br /> <br />
  //         <br /> <br />
  //         <br /> <br />
  //         <br /> <br />
  //         <br /> <br />
  //         <br /> <br />
  //         <br />
  //     </>
  //   );
  // };



  UplpadComponentVideo = () => {
    const [fileData, setFileData] = useState();

    const [filePath, setFilPath] = useState();
    
    const fileChangeHandler = (e) => {
     
      setFileData(e.target.files[0]);
      try {
        // Get the uploaded file
        const file = e.target.files[0];
  
        // Transform file into blob URL
        setSrc(URL.createObjectURL(file));
      } catch (error) {
        console.error(error);
      }
    };

    const [src, setSrc] = useState("");

    const handleChange = (event) => {
      try {
        // Get the uploaded file
        const file = event.target.files[0];
  
        // Transform file into blob URL
        setSrc(URL.createObjectURL(file));
      } catch (error) {
        console.error(error);
      }
    };



    const onSubmitHandler = (e) => {
      e.preventDefault();
      console.log("console log e in UplpadComponent -  ", e);
      // Handle File Data from the state Before Sending
      const data = new FormData();

      data.append("image", fileData);
      setFilPath(fileData.filePath)
      console.log('filePath name - ---- - --  ',filePath)
      let lcase=String(fileData.name).toLowerCase()
      console.log('fileFata name after lowercase',lcase)
      this.state.urlVideo = src
      // this.state.urlVideo = "/static/media/" + "Lesson" + "--" + (lcase);
      
      fetch("http://localhost:5000/single", {
        method: "POST",
        body: data,
      })
        .then((result) => {
          console.log("File Sent Successful  this is data",data);
          console.log('this is response --------------------- ',result);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };



    return (
      <>
      <this.ReactFirebaseFileUpload/>
              <br />
          <br />
        <form onSubmit={onSubmitHandler} enctype="multipart/form-data">
          <input type="file" onChange={fileChangeHandler} />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          
          <h4>Preview</h4>
          <br />
          <video src={src} controls width="100%">
          Sorry, your browser doesn't support embedded videos.
        </video>
          <button type="submit">Submit File to Backend</button>
        </form>

        
          {/* <input type="file" onChange={handleChange} /> */}


      </>
    );
  };
  //------------------------------------------------------------------------

  render() {
    const { auth } = this.props;

    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit} >
          <h5 className="grey-text text-darken-3">Create New Project</h5>
          <div>
            <label htmlFor="Category">Category</label>
            {/* <Select options={colourOptions} type="text" id="Category" onChange={this.handleChange} /> */}
            <CustomSelect options={options} onChange={this.onChangeInput} />
          </div>

          <br />
          <br />

          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>

          <br />
          <br />

          <div className="input-field">
            <label htmlFor="content">Project Content</label>
            <textarea
              id="content"
              className="materialize-textarea"
              onChange={this.handleChange}
            ></textarea>
          </div>

          <div>{/* <this.ReactFirebaseFileUpload/> */}</div>

          {/* <div className="input-field">
                        <label htmlFor="picture">IMAGE LINK</label>
                        <input type="text" id="picture" onChange={this.handleChange} />
                    </div>
                     */}
          <br />
          <br />

          <div className="input-field">
            <label htmlFor="name">name</label>
            <input type="text" id="name" onChange={this.handleChange} />
          </div>

          <br />
          <br />

          <div className="input-field">
            <label htmlFor="price">price</label>
            <input type="number" id="price" onChange={this.handleChange} />
          </div>

     

          <div className="input-field">
            <label htmlFor="default qty">default qty</label>
            <input
              type="number"
              id="default qty"
              onChange={this.handleChange}
            />
          </div>


          <br />
          <br />
{/* 
          <this.UplpadComponent /> */}
          <this.UplpadComponentVideo />
         

          {/* <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">
              Create Project
            </button>
          </div> */}
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createProductAction: (product) => dispatch(createProductAction(product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
