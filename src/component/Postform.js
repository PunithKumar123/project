import React, { useState } from "react";
import "../css/Postform.css";
import axios from "axios";
import { useNavigate } from "react-router";
function PostForm({ onSubmit, onCancel }) {
  const [title, setTitle] = useState("");
  const [Content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("Content", Content);
    onSubmit(event, formData);
    setTitle("");
    setContent("");
    setImage(null);

    try {
      axios
        .post("http://192.168.1.128:8888/api.venturecapitalist.com/postFeed", {
          title,
          Content,
        })
        .then((response) => {
          const navigate = useNavigate();
          navigate("/posts", {
            state: { title: title, Content: Content },
          });
        });
    } catch (error) {
      console.log(error);
    }
  };
  const handleCancel = () => {
    onCancel();
    setTitle("");
    setContent("");
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
        <label htmlFor="Content">Content:</label>
        <textarea
          id="Content"
          value={Content}
          onChange={(event) => setContent(event.target.value)}
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
