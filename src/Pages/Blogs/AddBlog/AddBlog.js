import React, { useState } from "react";
import "./addblog.css";
import { Button, TextField } from "@mui/material";
import Header from "../../../Components/Header/Header";
import Editor from "../../../Components/Editor/Editor";
import axios from "axios";
import { DataStore } from "../../../Storage/DataStorage";

function AddBlog() {
  const {fetchAllBlogs} = DataStore()
  // State for managing input values
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [editorContent, setEditorContent] = useState(""); 

  // Handle input changes
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTagsChange = (e) => {
    setTags(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Handle editor content changes
  const handleEditorChange = (content) => {
    setEditorContent(content);
  };

  // Handle form submission
  const handleSubmit = async () => {
    try {
      // Use Axios to send data to the server
      const formData = new FormData();
      formData.append("title", title);
      formData.append("tags", tags);
      formData.append("author", author);
      formData.append("img", image);
      formData.append("contant", editorContent);

      await axios.post(`${process.env.REACT_APP_API_URL}/api/v1/admin/create-blog`, formData)
      .then((response) => fetchAllBlogs())
      .catch((error) => console.log(error))

      // Optionally, you can reset the form fields after successful submission
        setTitle("");
        setTags("");
        setAuthor("");
        setImage("");
        setEditorContent("");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
      <Header component={" "} />
      <div className="mt-5">
        <div className="my-3">
          <TextField
            sx={{ width: "100%" }}
            label="Title"
            type="text"
            value={title}
            onChange={handleTitleChange}
          />
        </div>

        <TextField
          sx={{ width: "100%" }}
          label="Tags"
          type="text"
          value={tags}
          onChange={handleTagsChange}
        />

        <TextField
          sx={{ width: "100%" }}
          label="Author"
          className="my-3"
          type="text"
          value={author}
          onChange={handleAuthorChange}
        />

        <TextField
          sx={{ width: "100%" }}
          label="Image"
          className="mb-3"
          type="file"
          onChange={handleImageChange}
          focused
        />
      </div>

      <Editor value={editorContent}  onChange={handleEditorChange} />

      <Button className="my-3" variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
}

export default AddBlog;
