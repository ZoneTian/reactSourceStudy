import React ,{useState}from "react";
import ReduxPage from "./pages/ReduxPage";
import ReactReduxHookPage from './pages/ReactReduxHookPage'
export default function App(props) {

 const [state, setstate] = useState(1)
  return (
    <div>
      <button onClick = {()=>setstate(state+1)}>{state}</button>
      {state % 2  && <ReduxPage />}
      <ReactReduxHookPage/>
    </div>
  );
}
