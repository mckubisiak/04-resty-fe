import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Controls.css';
// const Controls = () => ();
const Controls = ({ url, jsonInput, onChange, submit }) => {
  return (
    <>
      <input
        aria-label="url"
        type="url"
        name="url"
        value={url}
        onChange={onChange}
      />

      <section className="radio-route">
        <input
          id="GET"
          aria-label="route"
          type="radio"
          name="route"
          value="GET"
          onChange={onChange}
        />
        <label htmlFor="GET">GET</label>

        <input
          id="PUT"
          aria-label="route"
          type="radio"
          name="route"
          value="PUT"
          onChange={onChange}
        />
        <label htmlFor="PUT">PUT</label>

        <input
          id="POST"
          aria-label="route"
          type="radio"
          name="route"
          value="POST"
          onChange={onChange}
        />
        <label htmlFor="POST">POST</label>

        <input
          id="DELETE"
          aria-label="route"
          type="radio"
          name="route"
          value="DELETE"
          onChange={onChange}
        />
        <label htmlFor="DELETE">DELETE</label>
        <button onClick={submit}>Hit Route!</button>
      </section>

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
