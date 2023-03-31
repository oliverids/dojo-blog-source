import PropTypes from 'prop-types';

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
          <h2>{blog.title}</h2>
          <p>{blog.author}</p>
          <button>Delete blog</button>
        </li>
      ))}
    </ul>
  );
};

export default BlogList;