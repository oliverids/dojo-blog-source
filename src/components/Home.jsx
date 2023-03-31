import { useEffect, useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setisPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then(r => {
        if (!r.ok) {
          throw Error('Could not fetch the data for that resource.');
        } else {
          return r.json();
        }
      })
      .then(data => {
        setBlogs(data);
        setisPending(false);
        setError(null);
      })
      .catch(err => {
        setError(err.message);
        setisPending(false);
      });
  }, []);

  return (
    <div className="home">
      {error && <div>{ error }</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;