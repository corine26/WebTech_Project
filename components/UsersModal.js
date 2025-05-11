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
      <div className="flex justify-center items-start w-full h-full mt-2">
        <div className="bg-white rounded-xl shadow-lg p-6 w-full h-[calc(100%-4rem)] mt-2 overflow-auto">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={() => setSelectedUser(null)}
          >
            Back to users
          </button>
          <h2 className="text-2xl font-bold mb-2">{selectedUser.name} ({selectedUser.username})</h2>
          <div className="mb-4">
            <div>Email: {selectedUser.email}</div>
            <div>Phone: {selectedUser.phone}</div>
            <div>Website: {selectedUser.website}</div>
            <div>Address: {selectedUser.address.street}, {selectedUser.address.suite}, {selectedUser.address.city}, {selectedUser.address.zipcode}</div>
            {/* Mapbox map will go here */}
            <div className="my-4 w-full h-48 bg-blue-100 flex items-center justify-center rounded">Mapbox Map Placeholder</div>
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
      </div>
    );
  }

  return (
    <div>
      <ul className="space-y-2">
        {users.map(user => (
          <li key={user.id}>
            <button 
              className="w-full text-left p-4 rounded-lg bg-blue-200 hover:bg-blue-300 transition-colors duration-200 text-xl font-semibold"
              onClick={() => handleUserClick(user)}
            >
              {user.name} <span className="text-gray-600 font-normal">(@{user.username})</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
