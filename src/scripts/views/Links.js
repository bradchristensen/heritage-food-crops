import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faGlobeAsia as faGlobe } from "@fortawesome/free-solid-svg-icons/faGlobeAsia";
import { faFax } from "@fortawesome/free-solid-svg-icons/faFax";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { faMapPin } from "@fortawesome/free-solid-svg-icons/faMapPin";
import title from "../infrastructure/documentTitle";
import OutboundLink from "../components/OutboundLink";

function ContactCard({
  name,
  address,
  mapUrl,
  phone,
  phoneHref,
  fax,
  email,
  websiteUrl,
  websiteLabel
}) {
  return (
    <p className="contact-card">
      <strong>{name}</strong>
      {Boolean(address) && (
        <Fragment>
          <br />
          <FontAwesomeIcon icon={faMapPin} title="Location" fixedWidth />{" "}
          <strong>Address: </strong>
          <OutboundLink to={mapUrl} eventLabel={`Map to ${websiteLabel}`}>
            {address}
          </OutboundLink>
        </Fragment>
      )}
      {Boolean(phone) && (
        <Fragment>
          <br />
          <FontAwesomeIcon icon={faPhone} title="Phone" fixedWidth />{" "}
          <strong>Phone: </strong>
          <a href={`tel:${phoneHref}`}>{phone}</a>
        </Fragment>
      )}
      {Boolean(fax) && (
        <Fragment>
          <br />
          <FontAwesomeIcon icon={faFax} title="Fax" fixedWidth />{" "}
          <strong>Fax: </strong>
          {fax}
        </Fragment>
      )}
      {Boolean(email) && (
        <Fragment>
          <br />
          <FontAwesomeIcon icon={faEnvelope} title="Email" fixedWidth />{" "}
          <strong>Email: </strong>
          <a href={`mailto:${email}`}>{email}</a>
        </Fragment>
      )}
      {Boolean(websiteUrl) && (
        <Fragment>
          <br />
          <FontAwesomeIcon icon={faGlobe} title="Website" fixedWidth />{" "}
          <strong>Website: </strong>
          <OutboundLink to={websiteUrl} eventLabel={websiteLabel}>
            {websiteUrl}
          </OutboundLink>
        </Fragment>
      )}
    </p>
  );
}

ContactCard.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string,
  mapUrl: PropTypes.string,
  phone: PropTypes.string,
  phoneHref: PropTypes.string,
  fax: PropTypes.string,
  email: PropTypes.string,
  websiteUrl: PropTypes.string,
  websiteLabel: PropTypes.string
};

function Links() {
  return (
    <div className="wrapper">
      <div className="wrapper wrap-900">
        <div className="box">
          <h2>Monty’s Surprise Apple Trees</h2>

          <h3>New Zealand - small numbers of trees</h3>

          <p>
            In New Zealand, most Garden Centres now stock Monty’s Surprise apple
            trees, or can order them in for you.
          </p>

          <ContactCard
            name="Sarah Frater, Edible Garden"
            address="889 Ashhurst-Bunnythorpe Road, RD 10, Palmerston North 4470"
            mapUrl="https://www.google.co.nz/maps/place/Edible+Gardens/@-40.2939702,175.7331424,17z/data=!3m1!4b1!4m5!3m4!1s0x6d41b722d749c0af:0x93e5d99210365744!8m2!3d-40.2939702!4d175.7353311"
            phone="(06) 326 7313"
            phoneHref="6463267313"
            email="sarah@ediblegarden.co.nz"
            websiteUrl="http://www.ediblegarden.co.nz"
            websiteLabel="Edible Garden"
          />

          <h3>New Zealand - for orders of 20 trees and above</h3>

          <ContactCard
            name="Harrisons Trees 2007 Ltd"
            address="483 Awahuri Feilding Road, RD 9, Palmerston North 4479"
            mapUrl="https://www.google.co.nz/maps/place/483+Awahuri+Feilding+Rd,+Awahuri+4479/@-40.2614943,175.5208845,17z/data=!3m1!4b1!4m5!3m4!1s0x6d404a2ae08f3dc3:0x4b7f63ee1e19498c!8m2!3d-40.2614943!4d175.5230732"
            phone="(06) 324 0400"
            phoneHref="6463240400"
            fax="0508 487 337"
            email="harrisonstrees2007@farmside.co.nz"
          />

          <h3>Australia</h3>

          <p>To obtain Monty’s Surprise apple trees in Australia:</p>

          <ContactCard
            name="PlantNet"
            websiteUrl="https://www.plantnet.com.au/shop/fruit-trees/apples/dwarf-montys-surprise/"
            websiteLabel="Monty’s Surprise at PlantNet"
          />

          <h3>United States</h3>

          <p>
            To pre-order Monty’s Surprise apple trees in the United States
            (these are still going through quarantine as at May 2019):
          </p>

          <ContactCard
            name="Michael Dolan, Burnt Ridge Nursery"
            address="432 Burnt Ridge Road, Onalaska, WA 98570"
            mapUrl="https://www.google.co.nz/maps/place/432+Burnt+Ridge+Rd,+Onalaska,+WA+98570,+USA/@46.5820246,-122.6203234,17z/data=!3m1!4b1!4m5!3m4!1s0x5491519bb0397957:0x23a13d89b6aff12e!8m2!3d46.5820246!4d-122.6181346"
            phone="360-985-2873"
            phoneHref="360-985-2873"
            fax="360-985-0882"
            email="mail@burntridgenursery.com"
            websiteUrl="https://www.burntridgenursery.com"
            websiteLabel="Burnt Ridge Nursery"
          />
        </div>

        <div className="box">
          <h2>Golden/Orange Tomato Seeds</h2>

          <h3>New Zealand</h3>

          <p>
            The Trust makes seeds of these varieties freely available as a
            wellbeing initiative for all New Zealanders, and gratefully accepts
            any{" "}
            <Link to="/contact-us">donations to help us continue our work</Link>
            . We will send you 5 varieties that we have selected. If you would
            like specific named varieties, you may request them, and we will do
            our best to provide them if seed is available.
          </p>

          <p>
            To obtain seeds, please send a stamped, self-addressed envelope to:
          </p>

          <p>
            Heritage Food Crops Research Trust
            <br />
            126A Springvale Road
            <br />
            Whanganui 4501
            <br />
            New Zealand
          </p>

          <h3>International</h3>

          <p>
            If your country allows imports of tomato seeds, then we can send
            seed to you. However, the postage cost alone for a customs-declared
            envelope with tomato seeds is about $16.00. As such we require a
            donation from you to at least cover this postage cost. Please see{" "}
            <Link to="/contact-us">our donation page</Link>.
          </p>
        </div>

        <div className="box">
          <h2>Climbing Beans</h2>

          <p>
            For New Zealanders to obtain some of the Climbing Beans that we
            imported from North America:
          </p>
          <p>
            Please send a stamped, self-addressed bubble bag, together with your
            request and names of any specific varieties you would like or
            preference for dry or green beans to:
          </p>

          <p>
            Heritage Food Crops Research Trust
            <br />
            126A Springvale Road
            <br />
            Whanganui 4501
            <br />
            New Zealand
          </p>

          <p>
            Any small donations to help us continue our work are greatly
            appreciated.
          </p>
        </div>
      </div>

      <hr />
    </div>
  );
}

export default title(Links, "Links");
