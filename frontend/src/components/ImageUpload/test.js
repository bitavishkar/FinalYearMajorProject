import React, { useState, useReducer } from "react";
import axios from "axios";
import ImageLoad from "./ImageLoad";

const ImageUpload = () => {
    const api = "http://localhost:8000/api/upload_image/";
    const [title, setTitle] = useState("");
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState("");
    const [submited, setSubmited] = useState(null);
    const [outputImg, setOutputImg] = useState();
    const [id, setId] = useState(11);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
        setImageUrl(URL.createObjectURL(e.target.files[0]));
    };

    const loadDeblurred = (e) => {
        e.preventDefault();
        axios.get(`http://localhost:8000/api/posts/${id}`)
            .then(function (response) {
                let path = response.data.image;
                path = path.replace("incoming_blurred_images", "outgoing_de_blurred_images");
                setOutputImg(() => path);
                dispatch({ type: "SET_OUTPUT_IMG", payload: updatedPath });
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
            });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", title);
        formData.append("image", image);

        axios
            .post(api, formData)
            .then((response) => {
                setId(response.data.data.id)
                setSubmited(true);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    if (imageUrl && submited) {
        return (
            <>
                <div>
                    <h2>{title}</h2>
                    <button onClick={loadDeblurred}>Deblur</button>
                    <ImageLoad image={imageUrl} output={outputImg} />
                </div>
            </>
        )
    }
    else
        return (
            <>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="title">Title:</label>
                            <input type="text" id="title" value={title} onChange={handleTitleChange} />
                        </div>
                        <div>
                            <label htmlFor="image">Image:</label>
                            <input type="file" id="image" onChange={handleImageChange} />
                        </div>
                        <button type="submit">Upload</button>
                    </form>
                </div>
            </>
        );
};

export default ImageUpload;


setOutputImg(prevFilePath => prevFilePath === path ? prevFilePath : path)
