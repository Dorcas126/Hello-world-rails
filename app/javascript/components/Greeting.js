import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomMessage } from '../actions/messagesActions';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector(state => state.message);
  useEffect(() => {
    dispatch(fetchRandomMessage());
  }, [dispatch]);

  console.log(greeting)

  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
};

const mapStateToProps = state => ({
  message: state.message
});

export default connect(mapStateToProps, { fetchRandomMessage })(Greeting);