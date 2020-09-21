import { useState } from "react";
import fire from "../config/fire-config";
import styled from "@emotion/styled";
import Success from "../components/Success";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notification, setNotification] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    fire.firestore().collection("blog").add({
      title: title,
      content: content,
    });

    setTitle("");
    setContent("");
    setNotification("Blogpost created");
    setTimeout(() => {
      setNotification("");
    }, 3000);
  };

  return (
    <CreatePostContainer>
      {notification && <Success />}
      <Subtitle>What would you like to say?</Subtitle>
      <form onSubmit={handleSubmit}>
        <div>
          <Input
            type="text"
            value={title}
            onChange={({ target }) => setTitle(target.value)}
            placeholder="Title"
          />
        </div>
        <div>
          <Spacer />
          <TextArea
            value={content}
            onChange={({ target }) => setContent(target.value)}
            placeholder="Your content goes here"
          />
        </div>
        <button type="submit">Post it ✏️</button>
      </form>

      <Big>Cheatsheet</Big>
      <CheatSheet>
        <Big># This is extra large text.</Big>
        <h2>## This is medium large text.</h2>
        <h3>### This is large text.</h3>
        <Bold>** This bold text **</Bold>
        <Italic>* This is italic text *</Italic>
        <p>
          If you want a line break,
          <br />
          <br />
          add an empty line.
        </p>
        <br />
        <p>
          <ImageLink>Image</ImageLink>
          To add an image, add an exclamation mark (!), followed by what you
          want to call the image in brackets, and the path or URL to the image
          asset in parentheses.
          <br />
          <ColorText>
            ![Philadelphia's Magic Gardens. This place was so
            cool!](https://pixy.org/src/53/thumbs350/531258.jpg)
          </ColorText>
        </p>
        <br />
        <p>
          <ImageLink>Link</ImageLink>
          To create a link, enclose the link text in brackets (e.g., [Duck Duck
          Go]) and then follow it immediately with the URL in parentheses (e.g.,
          (https://duckduckgo.com)).
          <br /> <ColorText>[Duck Duck Go](https://duckduckgo.com)</ColorText>
        </p>
      </CheatSheet>
    </CreatePostContainer>
  );
}

const CreatePostContainer = styled.div`
  button {
    border: none;
    margin-top: 1rem;
    background-color: #72a998;
    padding: 0.3em 0.3em 0.3em 0.4em;
    font-size: 1.5rem;
    width: 150px;
    color: #222;
    font-weight: 700;
    transition: background-color 0.1s ease;
    text-align: center;
    cursor: pointer;
    margin-bottom: 2rem;
    &:hover {
      background-color: #8ccfb9;
    }
    textarea {
      width: 100%;
    }
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 400px;
  font-size: 1.5rem;
  font-family: "Roboto", sans-serif;
  padding: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  font-family: "Roboto", sans-serif;
  font-size: 1.5rem;
  padding-left: 0.5rem;
`;

const Subtitle = styled.h2`
  color: #444;
  margin-bottom: 0.5rem;
`;

const Spacer = styled.div`
  height: 10px;
`;

const CheatSheet = styled.div`
  border: 5px solid #888;
  padding: 0.5rem;
  border-radius: 10px;
`;

const Big = styled.h2`
  font-size: 2.5rem;
`;
const Bold = styled.p`
  font-weight: 900;
`;

const Italic = styled.p`
  font-style: italic;
`;

const ColorText = styled.span`
  color: rebeccapurple;
  font-size: 1.5rem;
`;

const ImageLink = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
`;
