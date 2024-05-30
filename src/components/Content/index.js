import {Component} from 'react'
import {ThreeDots} from 'react-loader-spinner'
import './index.css'

class Content extends Component {
  state = {
    categories: [],
    selectedCategory: null,
    isLoading: true,
    error: null,
    productQuantities: {},
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    try {
      const response = await fetch(
        'https://run.mocky.io/v3/947e05e1-cd6a-4af9-93e7-0727fba9fec4',
      )
      const data = await response.json()
      this.setState({categories: data.categories})
    } catch (err) {
      this.setState({error: err.message})
    } finally {
      this.setState({isLoading: false})
    }
  }

  handleCategoryClick = async category => {
    this.setState({isLoading: true})
    try {
      const delay = ms => new Promise(res => setTimeout(res, ms))
      await delay(1000)
      this.setState({selectedCategory: category})
    } catch (err) {
      this.setState({error: err.message})
    } finally {
      this.setState({isLoading: false})
    }
  }

  handleIncrement = productId => {
    this.setState(prevState => ({
      productQuantities: {
        ...prevState.productQuantities,
        [productId]: (prevState.productQuantities[productId] || 0) + 1,
      },
    }))

    const product = this.getProductById(productId)
    if (product) {
      this.addToCart(product)
    }
  }

  handleDecrement = productId => {
    this.setState(prevState => ({
      productQuantities: {
        ...prevState.productQuantities,
        [productId]: Math.max(
          (prevState.productQuantities[productId] || 1) - 1,
          0,
        ),
      },
    }))

    const product = this.getProductById(productId)
    if (product) {
      this.removeFromCart(product)
    }
  }

  getProductById = productId => {
    const {categories} = this.state
    const allProducts = categories.reduce(
      (acc, category) => [...acc, ...category.products],
      [],
    )
    return allProducts.find(product => product.id === productId) || null
  }

  /*
  getProductById = productId => {
    const {categories} = this.state
    for (const category of categories) {
      for (const product of category.products) {
        if (product.id === productId) {
          return product
        }
      }
    }
    return null
  }
  */

  addToCart = product => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []
    const existingItem = cartItems.find(item => item.id === product.id)

    if (existingItem) {
      existingItem.quantity += 1
    } else {
      cartItems.push({...product, quantity: 1})
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }

  removeFromCart = product => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []
    const updatedCartItems = cartItems.filter(item => item.id !== product.id)
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))
  }
  /* eslint-disable */
  getContent = () => {
    const {isLoading, error, selectedCategory, categories, productQuantities} =
      this.state

    if (isLoading) {
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
      )
    }

    if (error) {
      return <h2>Error: {error}</h2>
    }

    return (
      <>
        {selectedCategory === null ? (
          <h2>All Products</h2>
        ) : (
          <h2>{selectedCategory.name}</h2>
        )}
        <ul className="product-list">
          {selectedCategory === null
            ? categories.map(category => (
                <div key={category.name} className="category-group">
                  <h2>{category.name}</h2>
                  <div className="home-fixer">
                    {category.products.map(product => (
                      <li key={product.id} className="product-item">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="img"
                        />
                        <div className="product-details">
                          <div className="info">
                            <p className="pname">{product.name}</p>
                            <p className="pweight">{product.weight}</p>
                            <p className="pro-price">{product.price}</p>
                          </div>
                          {productQuantities[product.id] ? (
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
            : selectedCategory.products.map(product => (
                <li key={product.id} className="product-item">
                  <img src={product.image} alt={product.name} className="img" />
                  <div className="product-details">
                    <div className="info">
                      <p className="pname">{product.name}</p>
                      <p className="pweight">{product.weight}</p>
                      <p className="pro-price">{product.price}</p>
                    </div>
                    {productQuantities[product.id] ? (
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
    )
  }

  renderCategoryButtons = () => {
    const {selectedCategory, categories} = this.state

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
        {categories.map(category => (
          <li key={category.name}>
            <button
              type="button"
              className={`buttonsy ${
                selectedCategory?.name === category.name ? 'pk' : ''
              }`}
              onClick={() => this.handleCategoryClick(category)}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    )
  }

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
    )
  }
}

export default Content
