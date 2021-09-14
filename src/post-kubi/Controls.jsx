import React from 'react';
import PropTypes from 'prop-types';

// const Controls = () => ();
const Controls = ({ url, jsonInput, onChange,  submit }) => {
  return (
    <>
      <input
        aria-label="url"
        type="url"
        name="url"
        value={url}
        onChange={onChange}
      />

      <section>
        <input
          aria-label="route"
          type="radio"
          name="route"
          value="GET"
          onChange={onChange}
        />

        <input
          aria-label="route"
          type="radio"
          name="route"
          value="PUT"
          onChange={onChange}
        />
      </section>

      <button onClick={submit}>Hit Route!</button>

      <textarea
        aria-label="request"
        type="text"
        name="jsonInput"
        value={jsonInput}
        onChange={onChange}
      />
    </>
  );
};

Controls.propTypes = {
  url: PropTypes.string.isRequired,
  jsonInput: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  
};

export default Controls;
