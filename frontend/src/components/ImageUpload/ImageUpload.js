import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ImageUpload.css"
import ImageLoad from "./ImageLoad";

const ImageUpload = () => {
  const api = "http://localhost:8000/api/upload_image/";
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [submited, setSubmited] = useState(false);
  const [outputImg, setOutputImg] = useState("");
  const [id, setId] = useState(11);

  const handleTitleChange = (e) => setTitle(e.target.value);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    setImageUrl(URL.createObjectURL(e.target.files[0]));
  };

  useEffect(() => {
      axios.get(`http://localhost:8000/api/posts/${id}`)
        .then((response) => {
          let path = response.data.image.replace("incoming_blurred_images", "outgoing_de_blurred_images")
          setOutputImg(prevFilePath => prevFilePath === path ? prevFilePath : path)
        })
        .catch((error) => console.log(error))
    }, [id])
  


  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);

    axios.post(api, formData)
      .then((response) => {
        setId(response.data.id)
        setSubmited(true);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {imageUrl && submited ? (
        <>
          {/* <h2>{title}</h2> */}
          {/* <button onClick={loadDeblurred}>Deblur</button> */}
          <ImageLoad title={title} image={imageUrl} output={outputImg} />
        </>
      ) : (
        
        <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" value={title} onChange={handleTitleChange} />
          <label htmlFor="image">Image</label>
          <input type="file" id="image" onChange={handleImageChange} />
          <button type="submit">Upload</button>
        </form>
</div>

      )}
    </div>
  );
};

export default ImageUpload;
