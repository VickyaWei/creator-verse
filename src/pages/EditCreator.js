
import React, { useState } from "react";
import "./EditCreator.css";

export const EditCreator = (onEdit) => {
    const [name, setName] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [description, setDescription] = useState("");
    const [youtube, setYoutube] = useState("");
    const [twitter, setTwitter] = useState("");
    const [instagram, setInstagram] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (typeof onEdit !== "function") {
        console.error("onAdd is not a function");
        return;
      }
      onEdit({
        name,
        imageURL,
        description,
        youtube,
        twitter,
        instagram,
      });

      setName("");
      setImageURL("");
      setDescription("");
      setYoutube("");
      setTwitter("");
      setInstagram("");
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          <h>Name</h>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
  
        <label>
          <h>Image</h>
          <p>
            Provide a link to an image of your creator. Be sure to include the
            http://
          </p>
          <input
            type="text"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
          />
        </label>
  
        <label>
          <h>Description</h>
          <p>
            Provide a description of the creator. Who are they? What makes them
            interesting?
          </p>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
  
        <h1>Social Media Links</h1>
        <p>Provide at least one of the creator's social media links.</p>
  
        <label>
          <h>YouTube</h>
          <p>The creator's YouTube handle (without the @)</p>
          <input
            type="text"
            value={youtube}
            onChange={(e) => setYoutube(e.target.value)}
          />
        </label>
  
        <label>
          <h>Twitter</h>
          <p>The creator's Twitter handle (without the @)</p>
          <input
            type="text"
            value={twitter}
            onChange={(e) => setTwitter(e.target.value)}
          />
        </label>
  
        <label>
          <h>Instagram</h>
          <p>The creator's Instagram handle (without the @)</p>
          <input
            type="text"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
          />
        </label>
  
        <button type="submit">SUBMIT</button>
        <button type="delete">DELETE</button>
      </form>
    );
}
