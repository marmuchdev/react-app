
const Home = (props) => {
    //Accessing the props object
    // we can access the "className" prop to customize the class of the h1 element
    const {className} = props;
  return <h1 className={className}>Home</h1>;
};
//Default props object that contains certain predefined properties and methods.
Home.defaultProps = {
    className: 'home-title', // seting default className for h1 element
};

export default Home;
