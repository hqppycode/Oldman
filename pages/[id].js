import fire from "../config/fire-config";
import Link from "next/link";
const ReactMarkdown = require("react-markdown");

export default function Blog({ content }) {
  return (
    <div>
      <h1>{content.title}</h1>
      <ReactMarkdown className="spacing" source={content.content} />
      <Link href="/">
        <a className="back-button">Back</a>
      </Link>
    </div>
  );
}

// export async function getStaticPaths() {
//   const paths = await fire
//     .firestore()
//     .collection("blog")
//     .onSnapshot((snap) => {
//       snap.docs.map((doc) => {
//         doc.id;
//       });
//     });
//   console.log(paths);
//   return {
//     paths: paths,
//     fallback: false,
//   };
// }

// export const getStaticProps = async ({ query }) => {
//   const blog = {};
//   await fire
//     .firestore()
//     .collection("blog")
//     .doc(query.id)
//     .get()
//     .then((result) => {
//       blog["title"] = result.data().title;
//       blog["content"] = result.data().content;
//     });

//   return {
//     props: {
//       blog,
//     },
//   };
// };

// This works in local developement

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

// has not been shown to work

// export async function getStaticPaths() {
//   const paths = await fire
//     .firestore()
//     .collection("blog")
//     .onSnapshot((snap) => {
//       snap.docs.map((doc) => {
//         doc.id;
//       });
//     });
//   console.log(paths);
//   return {
//     paths,
//     fallback: false,
//   };
// }
