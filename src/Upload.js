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

  inputChange = (e) => {
    var fileIn = e.target;
    var file = fileIn.files[0];
    if (file && file.size < 5000000) {
      const formData = new FormData();

      formData.append("image", file);
      fetch("https://api.imgur.com/3/image", {
          method: "POST",
          headers: {
              Authorization: "Client-ID ee82525f8f8f8c2",
              Accept: "application/json",
          },
          body: formData,
      })
          .then((response) => response.json())
          .then((response) => {
              e.preventDefault();
              this.props.parentFunction(response.data.link); 
          });
  } else {
      console.error("파일 용량 초과");
  }
  }
    



  render() {
    return (
      <div>
        <input type="file" name="image" id="upload" onChange={this.inputChange}/>
      </div>
    );
  }
}

export default Upload;
