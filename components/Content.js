import { Typography } from "@material-ui/core";
import { Wrap } from "./styles";

export const Content = () => {
  return (
    <>
      <Wrap>
        <Typography variant="h1" gutterBottom>
          Why is Vertical Rhythm an Important Typography Practice?
        </Typography>
        <Typography variant="subtitle2">
          You probably heard of the term Vertical Rhythm if you researched a
          little about typography on the web. It’s one of the most important
          practices when working with typography. I’ve used Vertical Rhythm on
          all my sites ever since I read about it.
        </Typography>
      </Wrap>
      <Wrap>
        <Typography variant="h2" gutterBottom>
          What is Vertical Rhythm?
        </Typography>
        <Typography variant="body1">
          Vertical Rhythm is a concept that originated from print typography (I
          think). In Vertical Rhythm, we try to keep vertical spaces between
          elements on a page consistent with each other. This is often done with
          the help of a baseline – A common denominator used to create the
          consistent spaces.
        </Typography>
      </Wrap>
      <Wrap>
        <Typography variant="h3">How do we determine the baseline?</Typography>
        <Typography variant="body1">
          The baseline is determined by the line-height property of the body
          text. Let’s say your body text has a computed line-height value of
          24px. Your baseline is then 24px. Implementing Vertical Rhythm from
          this point on is simple. There are two rules:
        </Typography>
        <ol>
          <li>
            Set the vertical white space between elements to a multiple of 24px.
          </li>
          <li>
            Set the line-height of all text elements to a multiple of 24px.
          </li>
        </ol>
      </Wrap>
      <Wrap>
        <Typography variant="h4">
          A simple implementation of these two rules may look like this:
        </Typography>
        <code>
          h1 &#123; <br />
          &nbsp;&nbsp;line-height: 48px;
          <br />
          &nbsp;&nbsp;margin: 24px 0;
          <br />
          &#125; <br />
          p &#123;
          <br />
          &nbsp;&nbsp;line-height: 24px;
          <br />
          &nbsp;&nbsp;margin: 24px 0;
          <br />
          &#125;
        </code>
        <br />
        <Typography variant="body1">
          But why? What makes these two rules so powerful that it immediately
          changes your perception of the two (albeit simple) designs?
        </Typography>
      </Wrap>
      <Wrap>
        <Typography variant="h5">
          Let’s take a look at the two rules again:
        </Typography>
        <ol>
          <li>
            Set the vertical white space between elements to a multiple of 24px.
          </li>
          <li>
            Set the line-height of all text elements to a multiple of 24px.
          </li>
        </ol>
        <Typography variant="body1">
          Did you notice a commonality between these two statements? Yep, it’s a
          multiple of 24px.
        </Typography>
        <Typography variant="h6">
          These two rules tie-in with a principle of design called Repetition.
        </Typography>
      </Wrap>
      <Wrap>
        <Typography variant="h2" gutterBottom>
          Varying Repetitions
        </Typography>
        <Typography variant="body1">
          We can’t possibly separate everything by 24px. It’ll be boring. We
          need to throw in some variations somewhere. But how? The answer can be
          found within the two rules for Vertical Rhythm:
        </Typography>
        <ol>
          <li>
            Set the vertical white space between elements to a multiple of 24px.
          </li>
          <li>
            Set the line-height of all text elements to a multiple of 24px.
          </li>
        </ol>
      </Wrap>
      <Wrap>
        <Typography variant="subtitle1">
          Of course, remember to keep repeating the number you choose to use!
        </Typography>
      </Wrap>
      <Wrap>
        <Typography variant="h2" gutterBottom>
          Repeating 24px Elsewhere
        </Typography>
        <Typography variant="body1">
          So far, we’re focused on repeating the flow of 24px from top to
          bottom. Don’t you think you can repeat 24px horizontally on the left
          and right as well?
        </Typography>
        <Typography variant="body1">
          Try using it as the gutter of your grid items. Try it on the left and
          right padding of components. Try it as the padding (or margin) between
          your text and the edge of the screen (especially on a mobile device)
        </Typography>
      </Wrap>
      <Wrap>
        <Typography variant="caption">
          Contenet by this person{" "}
          <a href="https://zellwk.com/blog/why-vertical-rhythms/">zellwk.com</a>
        </Typography>
      </Wrap>
    </>
  );
};
