import React from "react";
import PropTypes from "prop-types";

export default function Bean({ description, name, openLightbox, ...bean }) {
  const images = bean.image ? [bean.image] : bean.images;

  return (
    <li className="bean-list-item">
      {images && (
        <div style={{ float: "left", margin: "10px 10px 10px 25px" }}>
          {images.map(({ full, thumbnail }, imgIndex) => (
            <a
              href={full}
              // eslint-disable-next-line react/no-array-index-key
              key={`bean-img-${imgIndex}`}
              className="b100"
              onClick={openLightbox}
            >
              <img src={thumbnail} alt={name} />
            </a>
          ))}
        </div>
      )}
      <h4>{name}</h4>
      <p>{description}</p>
    </li>
  );
}

const ImagePropType = PropTypes.shape({
  full: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired
});

Bean.propTypes = {
  description: PropTypes.node.isRequired,
  image: ImagePropType,
  images: PropTypes.arrayOf(ImagePropType),
  name: PropTypes.string.isRequired,
  openLightbox: PropTypes.func.isRequired
};

Bean.defaultProps = {
  image: null,
  images: null
};
