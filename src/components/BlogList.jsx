import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BlogList = ({ blogs }) => {
  BlogList.propTypes = {
    blogs: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array
    ]),
    handleDelete: PropTypes.func
  };

  return (
    <ul>
      {blogs.map(blog => (
        <li key={blog.id} className='blog-preview'>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>{blog.author}</p>
            {/* <button>Delete blog</button> */}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default BlogList;