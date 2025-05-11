import { useEffect, useState } from "react";
import { Pagination } from "flowbite-react";

export default function PostsModal() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingComments, setLoadingComments] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  const handlePostClick = (post) => {
    setSelectedPost(post);
    setLoadingComments(true);
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
        setLoadingComments(false);
      });
  };

  if (loading) return <div>Loading posts...</div>;

  if (selectedPost) {
    return (
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="bg-white rounded-xl shadow-lg p-6 w-full h-full overflow-auto">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={() => setSelectedPost(null)}
          >
            Back to posts
          </button>
          <h2 className="text-2xl font-bold mb-2">{selectedPost.title}</h2>
          <div className="mb-4">{selectedPost.body}</div>
          <h3 className="text-xl font-semibold mb-2">Comments</h3>
          {loadingComments ? (
            <div>Loading comments...</div>
          ) : (
            <ul className="space-y-2">
              {comments.map(comment => (
                <li key={comment.id} className="bg-gray-100 rounded p-2">
                  <div className="font-semibold">{comment.name}</div>
                  <div className="text-sm text-gray-600">{comment.email}</div>
                  <div>{comment.body}</div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }

  // Pagination logic
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const startIdx = (currentPage - 1) * postsPerPage;
  const currentPosts = posts.slice(startIdx, startIdx + postsPerPage);

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex flex-col h-full flex-1">
        <div className="flex flex-wrap gap-4 justify-center mb-4 flex-1">
          {currentPosts.map(post => (
            <button
              key={post.id}
              className="w-full sm:w-[45%] md:w-[30%] lg:w-[18%] p-4 rounded-lg bg-green-200 hover:bg-green-300 transition-colors duration-200 text-lg font-semibold text-left"
              onClick={() => handlePostClick(post)}
            >
              {post.title}
            </button>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            showIcons
          />
        </div>
      </div>
    </div>
  );
}
  