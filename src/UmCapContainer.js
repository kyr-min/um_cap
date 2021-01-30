import { useState } from 'react';
import Upload from './Upload';
import React from 'react';
import axios from 'axios';
import ShowImg from './ShowImg';

const UmCapContainer = () => {
    let [file, setFile] = useState();
    let url;

    const parentFunction = (data) => {
        console.log(data);
        url = data;
    } 

    const fileUpload = (data) => {
        setFile(data);
    }

    const callApi = (e) => {
        e.preventDefault();
        let headers = {'Authorization' : 'KakaoAK 49aa252186cf5b4893357807703f9ef7'}
        let formData = new FormData();
        formData.append('image_url', url);

        axios.post('/v2/vision/face/detect', formData, { headers }).then(response => {
            console.log(response);

            console.log(response.data.result.faces[0].facial_points.nose);

            let nose = response.data.result.faces[0].facial_points.nose;

            let high_y= nose[0];
            console.log(high_y);
            for(let i = 1; i<9; i++){
                if(high_y < nose[parseInt(i)]){
                    high_y = nose[parseInt(i)];
                }

            }
            console.log(high_y);
        })

        console.log(file);
    }



    return (
        <div>
            <div>
                <form method="POST">
                    <Upload parentFunction={parentFunction} fileUpload={fileUpload} />
                    <button onClick={callApi}>모자 씌우기</button>
                </form>
            </div>
            <ShowImg url="https://img.gqkorea.co.kr/gq/2020/05/style_5ecbc5f096041.jpg"/>
        </div>
    )
}

export default UmCapContainer;