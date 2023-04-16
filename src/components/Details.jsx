import React, { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import detail from "./Details.module.css";

const Details = ()=>{
    const {id} = useParams();
    const [data, setData] = useState()


    const [title, setTitle] = useState('')
    const [doc, setDoc] = useState('')

    const getData = (id) =>{


    fetch(`http://127.0.0.1:8000/summary/judgements/${id}/detail`)
      .then(res => res.json())
      .then(
        (result) => {
        setTitle(result.title)
        setDoc(result.doc)
        },
        (error) => {
          console.log(error)
        }
      )
     }

    useEffect(()=>{
        getData(id)
    },[id])

    const strip_html_tags = (str)=>{
        if ((str===null) || (str===''))
            return false;
        else
        str = str.toString();
        return str.replace(/<[^>]*>/g, '');
    }

    return (
        <>
        {/* <p>Nitesh</p>
        <span>{id}</span>

        <p>{title}</p>
        <p>{strip_html_tags(doc)}</p> */}

<div className={detail.body}>
<header className={detail.header}>
    <h1 className={detail.h1}><a href="#">Information</a></h1>
  </header>
  <main className={detail.main}>
    <article className={detail.article}>
      <h2>{title}</h2>
      {/* <p class="date">20.12.2022</p> */}
        
      <p>{strip_html_tags(doc)}</p>
    </article>
  </main>
  <footer className={detail.footer}>
    {"MOHIT JAIN AND TEAM"}
  </footer>
  </div>
        </>
        
    )
}

export default Details;