const React = require('react')
var url = 0;

class Upload extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      fileUrl: null,
      parentFunction: props.parentFunction
    }
  }
  
  

<<<<<<< HEAD
  childFunction = (e) => {
    e.preventDefault();
    url = document.getElementById('url').value
    this.props.parentFunction(url); 
=======
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
>>>>>>> d50bc57544aee64c4f1d6865401c92258ad72aaa
  }

  render() {
    return (
      <div>
<<<<<<< HEAD
        <input type="text" formMethod="POST" id="url" onChange={this.childFunction}/>
=======
        <button onClick={this.childFunction}>click</button>
        <input type="file" onChange={this.handleChange}/>
        <img src={this.state.fileUrl}/>
>>>>>>> d50bc57544aee64c4f1d6865401c92258ad72aaa
      </div>
    );
  }
}

export default Upload;