// import { useState } from 'react';
import UmCap from './UmCap';
import Upload from './Upload';

const UmCapContainer = () => {
    const parentFunction = (data) => {
        console.log(data);
    } 
    
    return (
        <div>
            <div>
                <form>
                    <Upload parentFunction={this.parentFunction}/>
                    <button onClick="">모자 씌우기</button>
                </form>
            </div>
            <UmCap test_text="this is from umCap"/>
        </div>
    )
};

export default UmCapContainer;