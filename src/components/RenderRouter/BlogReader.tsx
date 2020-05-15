
import React from 'react';
import "./BlogReader.scss";
import Dropdown from 'react-bootstrap/Dropdown';
import Fade from 'react-bootstrap/Fade';
//import ReactHtmlParser from 'react-html-parser';
import { convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import {
  FacebookShareButton,
  EmailShareButton,
  TwitterShareButton
} from "react-share";
import {
  FacebookIcon,
  EmailIcon,
  TwitterIcon
} from "react-share";

interface Props {
  content: any,
  data: any
}
interface State {
  data: any,
  content: any,
}
export default class VideoPlayer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      content: props.content,
      data: props.data
    }
  }

  getMarkup() {
    //fix below
    const markup = draftToHtml(convertToRaw(this.state.data.whatevericallthecontentobject.getCurrentContent()));
    return markup
  }

  shareButton() {
    return (
    <Dropdown>
      <Dropdown.Toggle id="share-custom"><img className="button-icon" src="/static/svg/Share.svg" alt=""/>Share</Dropdown.Toggle>
        <Fade timeout={1000}>
          <Dropdown.Menu className="ShareMenu">
            
            <FacebookShareButton 
              className="ShareOption" 
              // if the data is null (unlikely), window.location.href will work for ~98% of situations. the rest of the time the user is sent to https://www.themeetinghouse.com/teaching
              url={window.location.href}
              quote={this.state.data.Youtube ? this.state.data.Youtube.snippet.title + " from The Meeting House" : "Check out this video from The Meeting House"}>
              <Dropdown.Item as="button" className="dropitem"><FacebookIcon className="social-share-icon" size={32} round />Facebook</Dropdown.Item>
            </FacebookShareButton>

            <TwitterShareButton 
              className="ShareOption" 
              url={window.location.href}
              title={this.state.data.Youtube ? this.state.data.Youtube.snippet.title + " from The Meeting House" : "Check out this video from The Meeting House"}
              via={"TheMeetingHouse"}
              related={["TheMeetingHouse"]}>
              <Dropdown.Item as="button" className="dropitem"><TwitterIcon className="social-share-icon" size={32} round />Twitter</Dropdown.Item>
            </TwitterShareButton>

            <EmailShareButton 
              className="ShareOption" 
              url={window.location.href}
              subject={this.state.data.Youtube ? "Check out " + this.state.data.Youtube.snippet.title + " from The Meeting House" : "Check out this video from The Meeting House"}
              body={"I wanted to share this video with you:"}>
              <Dropdown.Item as="button" className="dropitem"><EmailIcon className="social-share-icon" size={32} round />Email</Dropdown.Item>
            </EmailShareButton>

          </Dropdown.Menu>
        </Fade>
    </Dropdown>
    )
  }

  render() {
    return (
      <div>
      </div>
    )

  }
}
