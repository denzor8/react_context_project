import React from "react";
import CounterContextProvider from "./counterContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter2 from "./components/Counter2/Counter2";
//! Users
import AddForm from "./components/AddForm/AddForm";
import EditForm from "./components/EditForm/EditForm";
import Details from "./components/Details/Details";
import UsersList from "./components/UsersList/UsersList";
import UsersContextProvider from "./usersContext";

const App = () => {
  return (
    <UsersContextProvider>
      <CounterContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/counter2" element={<Counter2 />} />
            {/* Users routes */}
            <Route path="/edit/:id" element={<EditForm />} />
            <Route path="/details/:id" element={<Details />} />
            <Route
              path="/users"
              element={
                <>
                  <AddForm />
                  <UsersList />
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </CounterContextProvider>
    </UsersContextProvider>
  );
};

export default App;