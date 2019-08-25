
import React from 'react';
interface Props {
  data: any
}
interface State {
  data: any
}

export default class ContentItem extends React.Component<Props, State>  {
  constructor(props: Props) {
    super(props);
    this.state = {
      data: props.data
    }
  }

  render() {
    if (this.state.data.style === "oneImage") {
      var image1 = this.state.data.image1[Math.floor(Math.random() * this.state.data.image1.length)];

      return (
        <div className="ContentItem oneImage" style={{ position: "static", paddingBottom: "5vw" }}>
          <div style={{ position: "relative", zIndex: 100 }}>
            <div style={{ padding: "10vw", position: "relative", width: "50vw", height: "40vw", left: "50vw", top: "0vw", backgroundColor: "#EFEFF0" }}>
              <h1 style={{ fontWeight: "bold", fontSize: "3vw" }}>{this.state.data.header1}</h1>
              <h2>{this.state.data.header2}</h2>
              <div>{this.state.data.text1}</div>
              <a href={this.state.data.link1Action}>{this.state.data.link1Text}</a>
            </div>
            <img src={image1.src} alt={image1.alt} style={{ position: "absolute", height: "35vw", left: "20vw", top: "4vw", boxShadow: "0px 20px 40px rgba(26, 26, 26, 0.16);" }} />
          </div>
        </div>
      )
    }


    return (null)
  }
}