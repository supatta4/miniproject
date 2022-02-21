import axios from "axios";
import React, { useState, useEffect } from "react";

const ShowImage = ({ id }) => {
  const [img, setImg] = useState([]);
  const clientId = "ryOe6peyS2lvvN7-YJFwJ_07u6NgIWi3oRxl17HW2DI";
  const urlimage =
    "https://api.unsplash.com/users/" +
    id +
    "/photos?page=1&query=&client_id=" +
    clientId;

  useEffect(() => {
    axios.get(urlimage).then((response) => {
      setImg(response.data);
    });
  }, [id]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="img-map">
            {img.map((photo) => (
              <>
			  	<center>
                	<div className="col-8">
                  		<img className="cardprofile img-of-user" src={photo.urls.raw} />
                	</div>
				</center>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowImage;
