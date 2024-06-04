import { Component } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import './index.css';

class Content extends Component {
  // Initialize state with categories, selected category,..etc;
  state = {
    categories: [],
    selectedCategory: null,
    isLoading: true,
    error: null,
    productQuantities: {},
  };

  // Fetch data when the component mounts
  componentDidMount() {
    this.fetchData();
  }

  // Fetch data from API
  fetchData = async () => {
    try {
      // Fetch data from API
      const response = await fetch('https://run.mocky.io/v3/947e05e1-cd6a-4af9-93e7-0727fba9fec4');
      const data = await response.json();
      // Update state with categories
      this.setState({ categories: data.categories });
    } catch (err) {
      // Handle error
      this.setState({ error: err.message });
    } finally {
      // Set loading status to false
      this.setState({ isLoading: false });
    }
  };

  handleCategoryClick = async (category) => {
    // Set loading status to true
    this.setState({ isLoading: true });
    try {
      // Delay for 1 second
      await new Promise((res) => setTimeout(res, 1000));
      // Update selected category
      this.setState({ selectedCategory: category });
    } catch (err) {
      // Handle error
      this.setState({ error: err.message });
    } finally {
      // Set loading status to false
      this.setState({ isLoading: false });
    }
  };

  // Increment product quantity
  handleIncrement = (productId) => {
    // Update product quantities in state
    this.setState((prevState) => ({
      productQuantities: {
        ...prevState.productQuantities,
        [productId]: (prevState.productQuantities[productId] || 0) + 1,
      },
    }));

    // Add product to cart if quantity is greater than 0
    const product = this.getProductById(productId);
    if (product) {
      this.addToCart(product);
    }
  };

  // Decrement product quantity
  handleDecrement = (productId) => {
    // Update product quantities in state
    this.setState((prevState) => ({
      productQuantities: {
        ...prevState.productQuantities,
        [productId]: Math.max((prevState.productQuantities[productId] || 1) - 1, 0),
      },
    }));

    // Remove product from cart if quantity is 0
    const product = this.getProductById(productId);
    if (product) {
      this.removeFromCart(product);
    }
  };

  // Get product by ID
  getProductById = (productId) => {
    // Find product in categories
    const { categories } = this.state;
    const allProducts = categories.reduce((acc, category) => [...acc, ...category.products], []);
    return allProducts.find((product) => product.id === productId) || null;
  };

  // Add product to cart
  addToCart = (product) => {
    // Get cart items from local storage
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    // Check if product already exists in cart
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      // Increment quantity if product exists
      existingItem.quantity += 1;
    } else {
      // Add new product to cart
      cartItems.push({ ...product, quantity: 1 });
    }

    // Update local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };

  // Remove product from cart
  removeFromCart = (product) => {
    // Get cart items from local storage
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    // Filter out product from cart
    const updatedCartItems = cartItems.filter((item) => item.id !== product.id);
    // Update local storage
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  // Render content
  getContent = () => {
    const { isLoading, error, selectedCategory, categories, productQuantities } = this.state;

    if (isLoading) {
      // Render loading spinner
      return (
        <div className="spinner-container">
          <ThreeDots
            visible
            height="80"
            width="80"
            color="#4fa94d"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      );
    }

    if (error) {
      // Render error message
      return <h2>Error: {error}</h2>;
    }

    // Render content based on selected category
    return (
      <>
        {selectedCategory === null ? (
          // Render all products
          <h2>All Products</h2>
        ) : (
          // Render products for selected category
          <h2>{selectedCategory.name}</h2>
        )}
        <ul className="product-list">
          {selectedCategory === null
            ? // Render all categories
              categories.map((category) => (
                <div key={category.name} className="category-group">
                  <h2>{category.name}</h2>
                  <div className="home-fixer">
                    {category.products.map((product) => (
                      <li key={product.id} className="product-item">
                        <img src={product.image} alt={product.name} className="img" />
                        <div className="product-details">
                          <div className="info">
                            <p className="pname">{product.name}</p>
                            <p className="pweight">{product.weight}</p>
                            <p className="pro-price">{product.price}</p>
                          </div>
                          {productQuantities[product.id] ? (
                            // Render quantity controls
                            <div className="quantity-controls">
                              <button
                                type="button"
                                className="add-button-card"
                                onClick={() => this.handleDecrement(product.id)}
                              >
                                -
                              </button>
                              <span className="quantity">
                                {productQuantities[product.id]}
                              </span>
                              <button
                                type="button"
                                className="add-button-card"
                                onClick={() => this.handleIncrement(product.id)}
                              >
                                +
                              </button>
                            </div>
                          ) : (
                            // Render add button
                            <button
                              type="button"
                              id="add-button-card"
                              onClick={() => this.handleIncrement(product.id)}
                            >
                              Add
                            </button>
                          )}
                        </div>
                      </li>
                    ))}
                  </div>
                </div>
              ))
            : // Render products for selected category
              selectedCategory.products.map((product) => (
                <li key={product.id} className="product-item">
                  <img src={product.image} alt={product.name} className="img" />
                  <div className="product-details">
                    <div className="info">
                      <p className="pname">{product.name}</p>
                      <p className="pweight">{product.weight}</p>
                      <p className="pro-price">{product.price}</p>
                    </div>
                    {productQuantities[product.id] ? (
                      // Render quantity controls
                      <div className="quantity-controls">
                        <button
                          type="button"
                          className="add-button-card"
                          onClick={() => this.handleDecrement(product.id)}
                        >
                          -
                        </button>
                        <span className="quanter">
                          {productQuantities[product.id]}
                        </span>
                        <button
                          type="button"
                          className="add-button-card"
                          onClick={() => this.handleIncrement(product.id)}
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      // Render add button
                      <button
                        type="button"
                        id="add-button-card"
                        onClick={() => this.handleIncrement(product.id)}
                      >
                        Add
                      </button>
                    )}
                  </div>
                </li>
              ))}
        </ul>
        <hr />
      </>
    );
  };


  renderCategoryButtons = () => {
    const { selectedCategory, categories } = this.state;

    return (
      <ul className="sidebar-list">
        <li key="all-products">
          <button
            type="button"
            className={`buttonsy ${selectedCategory === null ? 'pk' : ''}`}
            onClick={() => this.handleCategoryClick(null)}
          >
            All Products
          </button>
        </li>
        {categories.map((category) => (
          <li key={category.name}>
            <button
              type="button"
              className={`buttonsy ${selectedCategory?.name === category.name ? 'pk' : ''}`}
              onClick={() => this.handleCategoryClick(category)}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    );
  };

  // Render component
  render() {
    return (
      <div className="content">
        <div className="main-sidebar">
          <div className="sidebar">
            <h2 className="categories">Categories</h2>
            {this.renderCategoryButtons()}
          </div>
        </div>
        <div className="main-content">{this.getContent()}</div>
      </div>
    );
  }
}

export default Content;
