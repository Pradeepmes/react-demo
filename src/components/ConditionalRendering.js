import React, { useLayoutEffect, useState } from "react";
import { useEffect } from "react";

function ConditionalRendering() {
  const [error, setError] = useState(false);
  const [isLoggedin, setLoggedIn] = useState(true);

  useEffect(() => {
    console.log("loaded later");
  }, []);

  useLayoutEffect(() => {
    console.log("use Layout will load first");
  }, []);

  function renderLoginStatus() {
    if (isLoggedin) return <div>loggedIn</div>;
    else return <div>not loggedIn</div>;
  }

  return (
    <div>
      <h1>here</h1>

      {error && <div>condtion is only true</div>}

      {isLoggedin ? <div>loggedIn</div> : <div>not logged In</div>}

      {renderLoginStatus()}
    </div>
  );
}

export default ConditionalRendering;
