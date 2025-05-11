import { useEffect, useState } from "react";

export default function UsersModal() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingPosts, setLoadingPosts] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setLoadingPosts(true);
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoadingPosts(false);
      });
  };

  if (loading) return <div>Loading users...</div>;

  if (selectedUser) {
    return (
      <div>
        <button className="mb-4 text-blue-500 underline" onClick={() => setSelectedUser(null)}>
          ← Back to users
        </button>
        <h2 className="text-2xl font-bold mb-2">{selectedUser.name} ({selectedUser.username})</h2>
        <div className="mb-4">
          <div>Email: {selectedUser.email}</div>
          <div>Phone: {selectedUser.phone}</div>
          <div>Website: {selectedUser.website}</div>
          <div>Address: {selectedUser.address.street}, {selectedUser.address.suite}, {selectedUser.address.city}, {selectedUser.address.zipcode}</div>
          {/* Mapbox map will go here */}
        </div>
        <h3 className="text-xl font-semibold mb-2">Posts</h3>
        {loadingPosts ? (
          <div>Loading posts...</div>
        ) : (
          <ul className="list-disc pl-5 space-y-2">
            {posts.map(post => (
              <li key={post.id}>
                <div className="font-bold">{post.title}</div>
                <div>{post.body}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Users</h2>
      <ul className="space-y-2">
        {users.map(user => (
          <li key={user.id}>
            <button className="w-full text-left p-2 rounded hover:bg-blue-100" onClick={() => handleUserClick(user)}>
              <span className="font-semibold">{user.name}</span> <span className="text-gray-500">(@{user.username})</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
