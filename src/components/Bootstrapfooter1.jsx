import React from "react";
import "./customscss.scss";
import Text from "./Text";

const Bootstrapfooter = () => {
  return (
    <div className="bg-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <Text type={"h6"} content={"Help"} />
            <div>
              <Text type={"link"} content={"Help center"} />
            </div>
            <div>
              <Text type={"link"} content={"FAQs"} />
            </div>
            <div>
              <Text type={"link"} content={"Privacy policy"} />
            </div>
            <div>
              <Text type={"link"} content={"Cookies policy"} />
            </div>
            <div>
              <Text type={"link"} content={"Term of use"} />
            </div>
            <div>
              <Text type={"link"} content={"Manage cookies setting"} />
            </div>
            <div>
              <Text type={"link"} content={"Digital Services Act (EU)"} />
            </div>
            <div>
              <Text type={"link"} content={"Content guidelines & reporting"} />
            </div>
            <div>
              <Text type={"link"} content={"Modern Slavery Statement"} />
            </div>
          </div>
          <div className="col-md-2">
            <Text type={"h6"} content={"Company"} />

            <div>
              <Text type={"link"} content={"About us"} />
            </div>
            <div>
              <Text type={"link"} content={"Careers"} />
            </div>
            <div>
              <Text type={"link"} content={"Press"} />
            </div>
            <div>
              <Text type={"link"} content={"Blogs"} />
            </div>
            <div>
              <Text type={"link"} content={"Points max"} />
            </div>
          </div>
          <div className="col-md-2">
            <Text type={"h6"} content={"Destination"} />
            <div>
              <Text type={"link"} content={"Countries/Territories"} />
            </div>
            <div>
              <Text type={"link"} content={"All flight Routes"} />
            </div>
          </div>
          <div className="col-md-3">
            <Text type={"h6"} content={"Partner with us"} />
            <div>
              <Text type={"link"} content={"YCS partner portal"} />
            </div>
            <div>
              <Text type={"link"} content={" partner Hub"} />
            </div>
            <div>
              <Text type={"link"} content={"Advertise on Agoda"} />
            </div>
            <div>
              <Text type={"link"} content={"Affiliates"} />
            </div>
            <div>
              <Text type={"link"} content={"Agoda API Documentation"} />
            </div>
          </div>
          <div className="col-md-3">
            <div className="fw-bold">Get the app</div>
            <div>
              <Text type={"link"} content={" iOS app"} />
            </div>
            <div>
              <Text type={"link"} content={"Andriod app"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bootstrapfooter;
