    import React from 'react'
    import Childone from './Childone';

    const Parentone = () => {

    const handleData = (data) => {
        console.log(data);
    };

    return <Childone sendData={handleData} />;
    }

    export default Parentone
