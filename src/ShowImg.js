import './img.css';

const ShowImg = ({url}) => {
    return(
        <div>
            <img src={url}></img>
            {/* <img src="https://i.ibb.co/gtvPHPp/um-removebg-preview.png" id="um"></img> */}
        </div>
    )
};

export default ShowImg