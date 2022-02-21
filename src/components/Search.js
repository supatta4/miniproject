import React, { useState } from 'react'
import axios from 'axios';
import Post from '../components/Posts';
const Search = () => {
  const [photo, setPhoto] = useState([]);
  const [clientId] = useState("ryOe6peyS2lvvN7-YJFwJ_07u6NgIWi3oRxl17HW2DI")
  const [result, setResult] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = "https://api.unsplash.com/search/photos?page=1&query="+photo+"&client_id="+clientId;
    axios.get(url)
    .then((response) => {
      setResult(response.data.results);
    })
  }

  return (
    <>
      <div className="container">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        <h1 className="text-center text-header-h1">Search Photos</h1>
        <p className="text-center">Create by Supatta Yoophiphat 624259031</p>
        <br></br>
        <form onSubmit={handleSubmit}>
          <div className="fix-input-text input-group text-center">
            <input
              onChange={(e) => setPhoto(e.target.value)}
              className="form-control border-info"
              type="text"
              placeholder="&nbsp;&nbsp;Search something..."/>
              &nbsp;&nbsp;&nbsp;
            <div className="input-group-append">
              <button
                type="submit"
                className="btn btn-success px-5">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
      <Post id={result} />
    </>
  )
}

export default Search;
