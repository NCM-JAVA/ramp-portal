import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../../redux/slice/UserSlice";
import { Link } from "react-router-dom";

const User = () => {
  const dispatch = useDispatch();
  const { list, loading } = useSelector((state) => state.users);
  console.log('user list user list - ',list);
  

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>Loading users...</p>;

  return (
    <div style={{ width: "600px", margin: "50px auto" }}>
      <h2>User List</h2>

      <table border="1" width="100%" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>More</th>
          </tr>
        </thead>

        <tbody>
          {list?.data?.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/users/${user.id}`}>View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default User;