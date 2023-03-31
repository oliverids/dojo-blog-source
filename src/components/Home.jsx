import { useEffect, useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setisPending] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then(r => r.json())
      .then(data => {
        setBlogs(data);
        setisPending(false);
      });
  }, []);

  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs}/>}
    </div>
  );
};

export default Home;