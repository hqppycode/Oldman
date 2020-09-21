import fire from "../../config/fire-config";
import Link from "next/link";
const ReactMarkdown = require("react-markdown");

export default function Blog(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <ReactMarkdown className="spacing" source={props.content} />
      <Link href="/">
        <a className="back-button">Back</a>
      </Link>
    </div>
  );
}

export const getServerSideProps = async ({ query }) => {
  const content = {};
  await fire
    .firestore()
    .collection("blog")
    .doc(query.id)
    .get()
    .then((result) => {
      content["title"] = result.data().title;
      content["content"] = result.data().content;
    });
  return {
    props: {
      title: content.title,
      content: content.content,
    },
  };
};