import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaRegHeart, FaCameraRetro, FaRegFolder, FaMapMarkerAlt, FaEdge } from "react-icons/fa";

  const Profile = ({ id }) => {

  const [result, setResult] = useState([])
  const clientId = "ryOe6peyS2lvvN7-YJFwJ_07u6NgIWi3oRxl17HW2DI"
  const urlaccount = "https://api.unsplash.com/search/users?page=1&query="+id+"&client_id="+clientId;
  useEffect(() => {
    axios.get(urlaccount)
    .then((response) => {
      setResult(response.data.results);
    })
  }, [id]); 

  return (
    <>
      <div className="container my-5" >
        {result.map((userprofile) => (
          <>
            <div className="row">
              <div className="col-2"></div>
              <div className="col-8 cardprofile">
                <div className="row px-4 py-4 card-profile">
                  <div className="col-12 text-center">
                    <img className="img-user-bigimg" src={userprofile.profile_image.large} />
                  </div>
                  <div className="col-12 ps-4">
                    <br></br>
                    <h1 className="ps-3 text-center">{userprofile.first_name+" "+userprofile.last_name}</h1>
                    <hr/>
                    <div className="row py-3">
                      <div className="col-4">
                      <p className="text-center"><FaRegFolder size={25} /><br/>{userprofile.total_collections} Collections</p>
                      </div>
                      <div className="col-4">
                      <p className="text-center"><FaCameraRetro size={25} /><br/>{userprofile.total_photos} Photos</p>
                      </div>
                      <div className="col-4">
                      <p className="text-center"><FaRegHeart size={25} /><br/>{userprofile.total_likes} Likes</p>
                      </div>
                    </div>
                    <hr/>
                    <div className="row py-3">
                      <div className="col-6 text-center">
                      <span><FaMapMarkerAlt size={25} /> {userprofile.location}</span><br/>
                      </div>
                      <div className="col-6 text-center">
                      <span><FaEdge size={25} /> Website <a href={userprofile.links.html} className="link_website" target="_blank">Click Here!</a></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-2"></div>
            </div>
          </>
        ))}
      </div>
    </>
  )
}
export default Profile;