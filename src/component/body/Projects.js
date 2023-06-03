import React, { useEffect, useState } from "react";
import axios from "axios";
import ProjectCss from "./project.module.css";
import Icons from "./Icons";
import VisitLinkIcon from "../../resources/VisitLink.png";

function Projects() {
  const [urlResponse, setUrlResponse] = useState(null);
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:5001/api/products/",
      responseType: "json",
    })
      .then((response) => {
        console.log(response.data);
        setUrlResponse(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  return (
    <div>
      {urlResponse &&
        urlResponse.map((data, index) => {
          return (
            <div
              key={index}
              style={{
                backgroundImage: `linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 41%, rgba(0,0,0,0.5) 79%, rgba(0,0,0,0.2) 100%), url(${data.image})`,
                backgroundSize: "100% 100%",
              }}
              className={ProjectCss.container}
            >
              <div className={ProjectCss.dataContainer} key={data.id}>
                <p className={ProjectCss.title}>{data.title}</p>
                <p className={ProjectCss.description}>{data.description}</p>
                <ul className={ProjectCss.techStack}>
                  {data.techStack.map((tech, index) => {
                    return (
                      <li key={index}>
                        <Icons tech={tech} />
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className={ProjectCss.urlContainer}>
                <a href={data.url}>
                  <img src={VisitLinkIcon} alt="Visit the project website" />
                  <p>Checkout The Website</p>
                </a>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Projects;
