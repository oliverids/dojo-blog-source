const Home = () => {

  const HandleClick = () => {
    console.log('Button was clicked');
  };

  return ( 
    <div className="home">
      <h1>Homepage</h1>

      <button onClick={HandleClick}>Click me</button>
    </div>
  );
};
 
export default Home;