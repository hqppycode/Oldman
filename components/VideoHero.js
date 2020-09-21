import styled from "@emotion/styled";
import Link from "next/link";

export default function Video() {
  return (
    <VideoContainer>
      <VideoEl
        // ref={ref => (this.video = ref)}
        autoPlay
        muted
        loop
      >
        <source src="/videos/coverr.mp4" type="video/mp4" />
      </VideoEl>
      <MainTitle>
        Hoping for the best <br />
        Preparing for the worst
      </MainTitle>
      <SubTitle>Here's what I've learned.</SubTitle>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sed
        exercitationem excepturi, cupiditate ad odit veritatis maxime iure in
        vitae consequuntur eum eveniet accusantium, veniam tempore illum quo
        dolorum ut. Vero doloremque excepturi enim nam perferendis, corrupti
        consequatur aperiam, provident saepe eum delectus itaque repellendus aut
        officiis consectetur nihil soluta!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sed
        exercitationem excepturi, cupiditate ad odit veritatis maxime iure in
        vitae consequuntur eum eveniet accusantium, veniam tempore illum quo
        dolorum ut. Vero doloremque excepturi enim nam perferendis, corrupti
        consequatur aperiam, provident saepe eum delectus itaque repellendus aut
        officiis consectetur nihil soluta! Vero doloremque excepturi enim nam
        perferendis, corrupti consequatur aperiam, provident saepe eum delectus
        itaque repellendus aut officiis consectetur nihil soluta! Vero
        doloremque excepturi enim nam perferendis, corrupti consequatur aperiam,
        provident saepe eum delectus itaque repellendus aut officiis consectetur
        nihil soluta!
      </p>
      <img
        style={{ height: "500px", objectFit: "cover" }}
        src="/images/gabriel.jpg"
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sed
        exercitationem excepturi, cupiditate ad odit veritatis maxime iure in
        vitae consequuntur eum eveniet accusantium, veniam tempore illum quo
        dolorum ut. Vero doloremque excepturi enim nam perferendis, corrupti
        consequatur aperiam, provident saepe eum delectus itaque repellendus aut
        officiis consectetur nihil soluta!
      </p>
      <p>
        To find out more, take a look at the{" "}
        <Link href="/articles">
          <a>article section</a>
        </Link>
      </p>
    </VideoContainer>
  );
}

const VideoContainer = styled.div`
  margin-bottom: 20px;
  p,
  img {
    margin-bottom: 20px;
  }
  a {
    text-decoration: underline;
    transition: color 0.1s ease;
  }
  a:hover {
    color: #228b22;
  }
`;

//need to adjust video height for cell phones after hamburger menu
const VideoEl = styled.video`
  position: absolute;
  width: 100vw;
  height: calc(67vh - 50px);
  left: 0;
  top: 75px;
  object-fit: cover;
  @media (max-width: 480px) {
    top: 60px;
  }
`;

const MainTitle = styled.h1`
  position: absolute;
  color: #fff;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  line-height: 1.3;
  font-size: 8.5vw;
  white-space: nowrap;
  @media (min-width: 1024px) {
    font-size: 80px;
  }
`;

const SubTitle = styled.h2`
  margin-top: 62vh;
`;
