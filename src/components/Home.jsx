import { useState } from 'react';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ]);

  return (
    <div className="home">
      <ul>
        {blogs.map(blog => (
          <li key={blog.id} className='blog-preview'>
            <h2>{blog.title}</h2>
            <p>{blog.author}</p>
            {/* <p>{blog.body}</p> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;