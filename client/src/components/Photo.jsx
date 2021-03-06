import React from 'react';
import PropTypes from 'prop-types';

const Photo = props => (
  <button className="btn-photo" onClick={evt => props.onClick(evt, props.index)}>
    <img className={`${props.column} img-fluid photo-zoom`} alt="" src={props.photo.url} />
  </button>
);

Photo.propTypes = {
  index: PropTypes.number.isRequired,
  photo: PropTypes.object.isRequired,
  column: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Photo;
