import React, { useState } from "react";
import "../css/Postform.css";
import axios from "axios";
import { useNavigate } from "react-router";
function PostForm({ onSubmit, onCancel }) {
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    onSubmit(event, formData);
    setTitle("");
    setdescription("");
    setImage(null);

    try {
      axios
        .post("http://192.168.1.128:8080/api.venturecapitalist.com/post/feed", {
          title,
          description,
        })
        .then((response) => {
          const navigate = useNavigate();
          navigate("/posts", {
            state: { title: title, description: description },
          });
        });
    } catch (error) {
      console.log(error);
    }
  };
  const handleCancel = () => {
    onCancel();
    setTitle("");
    setdescription("");
    setImage(null);
  };
  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };
  return (
    <div className="post-form-container">
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <label htmlFor="description">description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(event) => setdescription(event.target.value)}
        />
        {/* <label htmlFor="image">Image:</label>
        <input
          id="image"
          type="file"
          accept=".jpg, .jpeg, .png"
          onChange={handleImageChange}
        /> */}
        <div className="post-form-buttons">
          <button
            type="submit"
            className="submit-button"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button
            type="button"
            className="cancel-button"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
export default PostForm;
