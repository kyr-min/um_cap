// import { useState } from 'react';
import UmCap from './UmCap';

const UmCapContainer = () => {
    
    
    return (
        <div>
            <div>
                <form>
                    <input type="file" />
                    <button>모자 씌우기</button>
                </form>
            </div>
            <UmCap test_text="this is from umCap"/>
        </div>
    )
};

export default UmCapContainer;