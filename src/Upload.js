const React = require('react')

class Upload extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      fileUrl: null,
      parentFunction: props.parentFunction
    }
    this.handleChange = this.handleChange.bind(this)
  }

  

  handleChange(event) {
    this.setState({
      fileUrl: URL.createObjectURL(event.target.files[0])
    })

    this.props.fileUpload(event.target.files[0]);
  }

  childText = 'childText';

  childFunction = (e) => {
    e.preventDefault();
    this.props.parentFunction(this.childText);
  }


  render() {
    return (
      <div>
        <button onClick={this.childFunction}>click</button>
        <input type="file" onChange={this.handleChange}/>
        <img src={this.state.fileUrl}/>
      </div>
    );
  }
}

export default Upload;