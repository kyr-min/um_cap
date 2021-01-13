import { useState } from 'react';
import UmCap from './UmCap';
import Upload from './Upload';
import axios from 'axios';

const UmCapContainer = () => {
    let [file, setFile] = useState()

    const parentFunction = (data) => {
        console.log(data);
    }

    const fileUpload = (data) => {
        setFile(data);
    } 

    const callApi = (e) => {
        e.preventDefault();
        let headers = {'Authorization': 'KakaoAK API-KEY'}
        let formData = new FormData();
        formData.append('image', file);

        axios.post('/v2/vision/face/detect', formData, { headers }).then(response=>{
            console.log(response)
        })
    }

    console.log(file);
    
    return (
        <div>
            <div>
                <form>
                    <Upload parentFunction={parentFunction} fileUpload={fileUpload}/>
                    <button onClick={callApi}>모자 씌우기</button>
                </form>
            </div>
            <UmCap test_text="this is from umCap"/>
        </div>
    )
};

export default UmCapContainer;