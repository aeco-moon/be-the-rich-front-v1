import axios from 'axios';
import React from 'react';
// import { axiosGet } from '../../share/AxiosApi';

function Main(props) {

    const onClickSelectButtn = () => {
        axios.get("http://localhost:8081/v1/api/main/getHelloWorld")
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    return (
        <div>
            HELLO WORLD
            <div>
               1 {process.env.NEXT_PUBLIC_STAGE}
            </div>
            <div>
                2 {process.env.STAGE}
            </div>
            <button onClick={onClickSelectButtn}>조회</button>
        </div>
    );
}

export default Main;