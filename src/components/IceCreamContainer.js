import React from 'react';
import { connect } from 'react-redux';
import { buyIceCream } from '../redux';

function IceCreamContainer(props) {
  const { numOfIceCreams, buyIceCream } = props;

  return (
    <div>
      <h2>Number of icecreams - {numOfIceCreams} </h2>
      <button onClick={buyIceCream}>Buy Icecream</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
