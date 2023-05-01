import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import Actions from '../redux/actions';

function Themes() {
  const tema=useSelector(state=>state.temaReducer);
  const dispatch=useDispatch();


  return (
    <div style={tema}>
        <button onClick={()=>dispatch(Actions.temaAksiyon.acik_tema())}>ACIK TEMA</button>
        <button onClick={()=>dispatch(Actions.temaAksiyon.koyu_tema())}>KOYU TEMA</button>
    </div>
  )
}

export default Themes