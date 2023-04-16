//import React from "react";

import React, { useState } from "react"
import Navbar from './Navbar';
import Text from "./Text";
import { Link } from "react-router-dom";
import style from "./style.module.css";

const Search_bar = () => {
  const [users, setUsers] = useState([])

  const fetchData = e => {
    const query = e.target.value
    fetch(`http://127.0.0.1:8000/summary/judgements/list/${query}`)
      .then(response => {
        return response.json()
      }).then(data => {
        setUsers(data)
      })
  }
  // const showdata = mg => {
  //   const fm = mg
  //   fetch(`http://127.0.0.1:8000/summary/judgements/${fm}/detail`)
  //     .then(response => {
  //       return response.json()

  //     })
  //     .then((value) => {
  //       console.log(value)
  //     })
  // }
//   const strip_html_tags = (str)=>{
//     if ((str===null) || (str===''))
//         return false;
//     else
//     str = str.toString();
//     return str.replace(/<[^>]*>/g, '');
// }

  return (
    <>

      <Navbar />
      <Text />
      <div className={style.search}>
        <input type="search" onChange={fetchData} placeholder="Search Judgements" />


        {users.length > 0 && (
          <ul>
            {users.map((user) => (
              
              // <div className="res">
              // <li> {user.title}<br></br> {user.headline}
              // <a href={`http://127.0.0.1:8000/summary/judgements/${user.tid}/detail`}><button>Details</button></a>
              // <button>
              //   <Link to={`/details/${user.tid}`}>detail</Link>
              // </button>
              // </li>
              // </div>
              <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto flex flex-wrap">
                  <h2 class="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">{user.title}</h2>
                  <div class="md:w-3/5 md:pl-6">
                    
                    <p class="leading-relaxed text-base">{user.headline}</p>
                    <div class="flex md:mt-4 mt-6">
                      <button class="inline-flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded"><Link to={`/details/${user.tid}`}>detail</Link></button>
                      <button class="text-indigo-500 inline-flex items-center ml-4">SUMMARY</button>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </ul>

        )} </div>

    </>

  )
}

export default Search_bar

