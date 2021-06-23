import * as React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux';

function NewCakeContainer(props) {
  const { numOfCakes, buyCake } = props;

  const [number, setNumber] = React.useState(1);

  const changeNumber = (e) => {
    setNumber(e.target.value);
  };

  return (
    <div>
      <h2>Number of cakes - {numOfCakes} </h2>
      <input type="text" value={number} onChange={changeNumber} />
      <button onClick={() => buyCake(number)}>Buy {number} Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
