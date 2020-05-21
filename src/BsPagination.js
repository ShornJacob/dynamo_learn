import 'bootstrap/dist/css/bootstrap.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Posts from './Posts'
import Pagination from './Pagination'
import './App.css';

function App() {

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)

  //runs when component mounts or after update
  useEffect(  ()=> {
    const fetchPosts = async() => {
      setLoading(true)
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
      setPosts(res.data)
      setLoading(false)
    }

    fetchPosts()
  },[])
  //without empty parenthessis, creates loops
  //empty set makes it only run when it mounts
  
  console.log(posts)
  console.log(currentPage)

 //Get current posts
 const indexOfLastPost = currentPage * postsPerPage
 const indexOfFirstPost = indexOfLastPost - postsPerPage
 const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

 console.log(currentPosts)


  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">My Blog</h1>
      <Posts posts={currentPosts} loading={loading}/>
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} setCurrentPage={setCurrentPage}/>
    </div>
  );
}

export default App;
