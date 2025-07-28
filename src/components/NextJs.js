// pages/user-list.js

import React from "react";

function NextJs({ users, error }) {
  return (
    <div>
      <h2>User List</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Something went wrong while fetching users");
    }

    const data = await response.json();

    return {
      props: {
        users: data,
        error: null,
      },
    };
  } catch (err) {
    return {
      props: {
        users: [],
        error: err.message,
      },
    };
  }
}

export default NextJs;
