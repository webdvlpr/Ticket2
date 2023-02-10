
import ExistingBody from './components/ExistingBody';
import Header from './components/Header/Header';
import ExistingTicket from './components/Tickets/ExistingTicket';
import NewTicket from './components/Tickets/NewTicket';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import { userid } from './store';
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store";
import { useEffect } from "react";

function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();

  const ProtectedComponent = ({ login, children }) => {
    if (!login) return <Navigate to="/signUp" replace />;
    return children;
  };

  useEffect(() => {
    if (localStorage.getItem("userId")) {
      dispatch(userid.login());
    }
    console.log(isLoggedIn);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {!isLoggedIn ? (
            <>
            <Route path="/signUp" element={<SignUp />} />
            <Route path='/' element={<ExistingBody/>}/>
            <Route path="/signIn" element={<SignIn />} />
            </>
          ) : (
            <>
              <Route
                
                path="/newticket"
                element={
                  <ProtectedComponent login={isLoggedIn} children={<NewTicket />} />
                }
              />
              <Route exact path='/*' element={<ExistingBody/>}/>

              <Route
                path="/existingticket"
                element={
                  <ProtectedComponent
                    login={isLoggedIn}
                    children={<ExistingTicket />}
                  />
                }
              />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
