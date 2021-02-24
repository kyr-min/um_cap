import Upload from './Upload';
import React from 'react';
import axios from 'axios';

import './style.css';

const UmCapContainer = () => {
    let url_in;
    let highNosePoint_y;
    let highNosePoint_x;

    // const check = (nose, high_x, high_y, high_idx) => {
        // for(let i = 0; i< 9; i++){
        //     if(i === 0){
        //         console.log(`------- First Call -------`);
                
        //     }
        //     console.log(`x = ${nose[i][0]}\ty = ${nose[i][1]}`);
        //     if(i === 8){
        //         console.log(`high_x = ${high_x}\thigh_y = ${high_y}`);
        //         console.log(`high_idx = ${high_idx}`);
        //     }
        // }
    // }
    
    const parentFunction = (data) => {
        console.log(data);
        url_in = data;
        document.getElementById("previewImg").src = data;
    } 

    const callApi = (e) => {
        e.preventDefault();
        let headers = {'Authorization' : 'KakaoAK 49aa252186cf5b4893357807703f9ef7'}
        let formData = new FormData();
        formData.append('image_url', url_in);

        axios.post('/v2/vision/face/detect', formData, { headers }).then(response => {
            var umHat = document.getElementById("umHat");
            var previewImg = document.getElementById("previewImg");

            umHat.style.transform = "";

            let flipped = false;
            
            let nose = response.data.result.faces[0].facial_points.nose;
            let face_width = response.data.result.faces[0].w;
            let face_height = response.data.result.faces[0].h;
            let face_pitch = response.data.result.faces[0].pitch * 100;
            let face_yaw = response.data.result.faces[0].yaw;
            let face_roll = response.data.result.faces[0].roll;

            umHat.width = 369;
            umHat.height = 212;
            umHat.style.top = "";
            umHat.style.left = "";

            console.log(`Initial API Called\nface_width = ${face_width}\nface_height = ${face_height}\nface_yaw = ${face_yaw}\nface_roll = ${face_roll}`)

            if(face_yaw >= 0 && flipped === false){
                umHat.style.transform = "scaleX(-1)";
                flipped = true;
            }

            if(face_yaw <= 0 && flipped === true){
                umHat.style.transform = "scaleX(1)";
                flipped = false;
            }

            if(face_pitch !== 0){
                console.log(face_pitch);
                umHat.style.transform = umHat.style.transform + `rotate(${ -1 * parseInt(face_pitch)}deg)`
                console.log(umHat.style.transform);
            }

            

            let hatW = parseInt(previewImg.width * face_width + previewImg.width / 10);
            let hatH = parseInt(previewImg.height * face_height /2);

            // umHat.width = hatW;
            // umHat.height = hatH;


            let high_y= nose[0][1];
            let high_x = nose[0][0];

            let high_idx = 0;
            for(let i = 1; i<9; i++){
                if(high_y > nose[i][1]){
                    high_y = nose[i][1];
                    high_x = nose[i][0];
                    high_idx = i;
                }
            }

            for(let i = 0; i< 9; i++){
                if(i === 0){
                    console.log(`------- First Call -------`);
                    
                }
                console.log(`x = ${nose[i][0]}\ty = ${nose[i][1]}`);
                if(i === 8){
                    console.log(`high_x = ${high_x}\thigh_y = ${high_y}`);
                    console.log(`high_idx = ${high_idx}`);
                }
            }
            
            
            nose.splice(high_idx, 1);

            high_y= nose[0][1];
            high_x = nose[0][0];

            for(let i = 1; i<8; i++){
                if(high_y > nose[i][1]){
                    high_y = nose[i][1];
                    high_x = nose[i][0];
                    high_idx = i;
                }
            }

            for(let i = 0; i< 8; i++){
                if(i === 0){
                    console.log(`------- Second Call -------`);
                    
                }
                console.log(`x = ${nose[i][0]}\ty = ${nose[i][1]}`);
                if(i === 7){
                    console.log(`high_x = ${high_x}\thigh_y = ${high_y}`);
                    console.log(`high_idx = ${high_idx}`);
                }
            }

            nose.splice(high_idx, 1);

            high_y= nose[0][1];
            high_x = nose[0][0];

            for(let i = 1; i<7; i++){
                if(high_y > nose[i][1]){
                    high_y = nose[i][1];
                    high_x = nose[i][0];
                    high_idx = i;
                }
            }

            for(let i = 0; i< 7; i++){
                if(i === 0){
                    console.log(`------- Second Call -------`);
                    
                }
                console.log(`x = ${nose[i][0]}\ty = ${nose[i][1]}`);
                if(i === 6){
                    console.log(`high_x = ${high_x}\thigh_y = ${high_y}`);
                    console.log(`high_idx = ${high_idx}`);
                }
            }

            highNosePoint_y = previewImg.height * (high_y);
            highNosePoint_x = previewImg.width * (high_x);
            
            let point_y = parseInt(umHat.style.top - 200 + highNosePoint_y);
            let point_x = parseInt(umHat.style.left - 295 + highNosePoint_x);

            
            
            umHat.style.top = `${point_y}px`;
            umHat.style.left = `${point_x}px`;
        })
        
    }

    const print_cor = (e) => {
        let div = document.getElementById("cors");
        var x = parseInt(e.nativeEvent.offsetX);
        var y = parseInt(e.nativeEvent.offsetY);
        div.innerText = `x = ${x}\n y = ${y}`;
    }

    return (
        <div>
            <div>
                <form method="POST">
                    <Upload parentFunction={parentFunction}/>
                    <div id="imgCon">
                        <img id="previewImg" src="https://i.ibb.co/xYYm8gq/image.png" ></img>
                        <img id="umHat" src="https://i.ibb.co/fXnjXD8/UmCap.png" onMouseMove={print_cor}/>
                    </div>
                    <button onClick={callApi} >모자 씌우기</button>
                    <div id="cors"></div>
                </form>
            </div>
        </div>
    )
}

export default UmCapContainer;