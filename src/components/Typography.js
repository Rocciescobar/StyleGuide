
import React from 'react';
const Typography = () => (
  <div>
    <h3 className="mg">Tipografía</h3>
  </div>
)

export default Typography
/*
import { connect } from 'react-redux';

const Typography = ({ cambio, text }) => {
  return (
    <div>
      <button onClick={cambio}> {text} </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    text: state.text
  };
};

const mapDispatchToProps = dispatch => {
  return {
    cambio(text) {
      dispatch({
        type: "CAMBIAR",
        text:"se cambio"
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Typography);
*/
