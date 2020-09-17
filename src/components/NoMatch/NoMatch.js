import React from 'react';
import { useHistory } from 'react-router-dom';

const NoMatch = () => {
  const history = useHistory();
  return (
    <div className="d-flex flex-column vh-100 align-items-center justify-content-center">
      <div className="d-flex justify-content-center align-items-center display-4 rounded-circle mb-4" style={{flexBasis: '150px', width: '150px', border: '6px solid #EB0028', color: '#EB0028'}}>404</div>
      <h4 style={{color: '#666666'}}>Not found!</h4>
      <div className="my-4" style={{width: '35px', height: '1px', background: 'black'}}></div>
      <h6 className="my-5" style={{color: '#66666A'}}>Sorry, we can't find what you're looking for.</h6>
      <button onClick={() => history.push('/')} className="px-5 py-2" style={{border: '1px solid #D70226', color: '#D70226'}}>Go back home</button>
    </div>
  );
};

export default NoMatch;