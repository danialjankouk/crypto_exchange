import React,{useState,useEffect} from 'react';
import styles from "./Landing.module.css"
import Loader from './Loader';
//api
import { getCoin } from '../service/api';

const Landing = () => {
    const [data, setData] = useState([])
    const [change, setChange] = useState("")

    const changeHandler = (event) => {
        setChange(event.target.value);
    }
    
    useEffect(() => {
        const fetchApi = async() => {
            const data =await getCoin()
            console.log(data)
            setData(data)
        }
        fetchApi()
    },[])

    return (
      <>
        <input placeholder="Search" type="text" onChange={changeHandler}/>
        <div className={styles.container}>
          {data.length ? data.map((item) => (
            <p key={item.id}>{item.name}</p>
          )): <Loader/>}
        </div>
      </>
    );
};

export default Landing;