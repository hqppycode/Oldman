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
        I believe that in the near future we will all be facing a world that we
        won’t recognize. Just like all of the rioting, looting, murder,
        destruction of property, and total chaos that is happening in different
        places here in the states on a small scale will become far more
        destructive and wide spread. I don’t mean that the chaos that is
        happening now will become much more wide spread. I am talking about a
        period of time where there may be a solar EMP entering our country, a
        man made EMP attack against our nation, a major volcano eruption combine
        with major earthquake, and the list goes on. Nowhere will be safe. No
        matter what you do, how well protected you may think you are, and
        regardless of how well equipped you think you are, a hundred against one
        is no odds.
      </p>

      <p>
        Now let me make this statement. Prepping is a growing way of life for
        many people who have the same vision of the future as I have. However,
        there is so much on the Internet that looks good, sounds good, but
        really isn’t worth the time of day for most of the people like me. Money
        is and always will be an issue when you begin to prepare for the future.
        I will elaborate on this later. Now before I go any further, let me just
        give you an example of how I am wanting to structure this web site.
        Let’s start with food storage regarding how to protect what you have
        been building up for years.
      </p>

      <p>
        Many web sites will inform you on different places to stash your food
        good. In the closet on the top shelf, in the basement, under the bed, in
        your garage, and many other different places. Now let just assume that
        you are overran by looters and you are not killed. Every place in your
        home will be searched. Not only for food but for anything and everything
        they believe will be of use to them. So what good has your food storage
        done for you when it is all gone, if you survive this event. No good.
        Let’s face it, preparing for the worst is only the first step.
      </p>

      <p>
        So what have I done to safeguard against this from happening. The place
        where I live is an acre of flat terrain. I have a root cellar with a
        building design over it. The access to the root cellar is cover by a
        ramp leading into the storage building above it. The ramp is also built
        in such a way that it appears to be a permanent attachment. A couple of
        hidden pins can be removed and thus the ramp can be removed. My second
        area is inside of another storage building I have. On the back wall I
        have several shelves sixteen inches deep which can store up to a year or
        more in food storage. I also have enough cut to fit piece of wall board
        to cover up this area within a couple of minutes. A few minutes of
        moving around tables, cabinets, other movable shelves and the wall is
        totally blocked with junk. If the storage building is ransacked, the
        food storage will still remain hidden from sight. Just put yourself in a
        position of a looter. You are going to go through all the drawers,
        boxes, cabinet, and whatever else in search of something useful. You are
        not going to move heavy piece. You may knock them over, push them to the
        side, strip them of anything valuable, but won’t give any thought to the
        wall itself. I am working on having other places that are close by and
        out of sight, but not to that point yet. Don’t put all your eggs in one
        basket.
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
