import React, { Component } from 'react';

class Content extends Component {
  state = {
    categories: [
        {
            name: "Fruits & Vegetables",
            products: [
                {
                    "id": 1,
                    "name": "Orange",
                    "weight": "1kg",
                    "price": "₹100",
                    "image": "https://new-assets.ccbp.in/frontend/react-js/nxt-mart-app/image_1.jpg"
                },
                {
                    "id": 2,
                    "name": "Apple",
                    "weight": "1kg",
                    "price": "₹200",
                    "image": "https://new-assets.ccbp.in/frontend/react-js/nxt-mart-app/image_2.jpg"
                },
            ]
        },
        {
            name: "Cold Drinks & Juices",
            products: [
                {
                    "id": 11,
                    "name": "Coca Cola",
                    "weight": "500ml",
                    "price": "₹50",
                    "image": "https://new-assets.ccbp.in/frontend/react-js/nxt-mart-app/image_11.jpg"
                },
                {
                    "id": 12,
                    "name": "Pepsi",
                    "weight": "500ml",
                    "price": "₹50",
                    "image": "https://new-assets.ccbp.in/frontend/react-js/nxt-mart-app/image_12.jpg"
                },
                {
                    "id": 20,
                    "name": "Masala Soda",
                    "weight": "150ml",
                    "price": "₹50",
                    "image": "https://new-assets.ccbp.in/frontend/react-js/nxt-mart-app/image_20.jpg"
                }
            ]
        },
        {
            name: "Beverages",
            products: [
                {
                    "id": 21,
                    "name": "Real Fruit Power Juice - Cranberry",
                    "weight": "1L",
                    "price": "₹45.69",
                    "image": "https://new-assets.ccbp.in/frontend/react-js/nxt-mart-app/image_21.jpg"
                },
                {
                    "id": 22,
                    "name": "Red Label Tea, 2x1 kg Multipack",
                    "weight": "2kg",
                    "price": "₹920",
                    "image": "https://new-assets.ccbp.in/frontend/react-js/nxt-mart-app/image_22.jpg"
                },
              
                {
                    "id": 30,
                    "name": "Continental Xtra Coffee, 200 g Jar",
                    "weight": "200g",
                    "price": "₹369.07",
                    "image": "https://new-assets.ccbp.in/frontend/react-js/nxt-mart-app/image_30.jpg"
                }
            ]
        },
        {
            name: "Foodgrains, Oil & Masala",
            products: [
                {
                    "id": 31,
                    "name": "AHAAR Malka Red Dal, 500 g",
                    "weight": "500g",
                    "price": "₹86",
                    "image": "https://new-assets.ccbp.in/frontend/react-js/nxt-mart-app/image_31.jpg"
                },
                ,
                {
                    "id": 40,
                    "name": "BB Royal Bullet Raw Rice, 25 Kg",
                    "weight": "25kg",
                    "price": "₹2022",
                    "image": "https://new-assets.ccbp.in/frontend/react-js/nxt-mart-app/image_40.jpg"
                }
            ]
        },
        {
            name: "Bakery, Cakes & Dairy",
            products: [
                {
                    "id": 41,
                    "name": "Hello Tempayy Soyabean Tempeh Cubes - Rich In Protein & Fibre, Low Carb Snack, 200 g Pouch",
                    "weight": "200g",
                    "price": "₹141.55",
                    "image": "https://new-assets.ccbp.in/frontend/react-js/nxt-mart-app/image_41.jpg"
                },
                {
                    "id": 42,
                    "name": "Nandini GoodLife UHT Treated Toned Milk, 1 L Carton",
                    "weight": "1L",
                    "price": "₹62.98",
                    "image": "https://new-assets.ccbp.in/frontend/react-js/nxt-mart-app/image_42.jpg"
                },
                
                {
                    "id": 50,
                    "name": "Nestle Everyday Dairy Whitener - Milk Powder for Tea, 6x1 kg Multipack",
                    "weight": "6kg",
                    "price": "₹3630",
                    "image": "https://new-assets.ccbp.in/frontend/react-js/nxt-mart-app/image_50.jpg"
                }
            ]
        },
        {
            name: "Snacks & Branded Foods",
            products: [
                {
                    "id": 51,
                    "name": "Tata GoFit Himalayan Apple Cider Vinegar - With Mother, 500 ml",
                    "weight": "500ml",
                    "price": "₹199",
                    "image": "https://new-assets.ccbp.in/frontend/react-js/nxt-mart-app/image_51.jpg"
                },
                {
                    "id": 52,
                    "name": "MAGGI 2-Min Masala Instant Noodles, 560 g Pouch",
                    "weight": "560g",
                    "price": "₹95.8",
                    "image": "https://new-assets.ccbp.in/frontend/react-js/nxt-mart-app/image_52.jpg"
                },
                {
                    "id": 53,
                    "name": "Britannia Marie Gold Biscuit - Crunchy, Light, Zero Trans Fat, Ready To Eat, 950 g",
                    "weight": "950g",
                    "price": "₹119",
                    "image": "https://new-assets.ccbp.in/frontend/react-js/nxt-mart-app/image_53.jpg"
                }
            ]
        },
        {
            name: "Eggs, Meat & Fish",
            products: [
                {
                    "id": 54,
                    "name": "Fresho Farm Eggs - Table Tray, Medium, Antibiotic Residue-Free, 3 x 12 pcs Multipack",
                    "weight": "36pcs",
                    "price": "₹381",
                    "image": "https://new-assets.ccbp.in/frontend/react-js/nxt-mart-app/image_54.jpg"
                },
                {
                    "id": 55,
                    "name": "Fresho Chicken - Curry Cut Without Skin, Antibiotic Residue Free, 12-16 Pcs, 500 g",
                    "weight": "500g",
                    "price": "₹128",
                    "image": "https://new-assets.ccbp.in/frontend/react-js/nxt-mart-app/image_55.jpg"
                },
                {
                    "id": 56,
                    "name": "Fresho Rohu Fish Curry Cut/Bengali Cut, 1 kg Without Head",
                    "weight": "1kg",
                    "price": "₹289",
                    "image": "https://new-assets.ccbp.in/frontend/react-js/nxt-mart-app/image_56.jpg"
                }
            ]
        },
        {
            name: "Gourmet & World Food",
            products: [
                {
                    "id": 57,
                    "name": "Cocosutra Cereal - Granola, Millet Mocha Crunch, Breakfast Cereal With Oats, Nuts, Seeds & Dry Fruits, 300 g",
                    "weight": "300g",
                    "price": "₹300",
                    "image": "https://new-assets.ccbp.in/frontend/react-js/nxt-mart-app/image_57.jpg"
                },
                {
                    "id": 58,
                    "name": "Cocosutra Cereal - Granola, Peanut Butter Chocolate Chunk, Breakfast Cereal With Oats, Nuts, Seeds & Dry Fruits, 300 g",
                    "weight": "300 g",
                    "price": "₹350",
                    "image": "https://new-assets.ccbp.in/frontend/react-js/nxt-mart-app/image_58.jpg"
                },
                {
                    "id": 59,
                    "name": "Kelloggs Muesli Fruit Nut & Seeds - 12-In-1 Power Breakfast, India's No.1 Muesli, 750 g",
                    "weight": "750g",
                    "price": "₹357",
                    "image": "https://new-assets.ccbp.in/frontend/react-js/nxt-mart-app/image_59.jpg"
                }
            ]
        },
        {
            name: "Baby Care",
            products: [
                {
                    "id": 60,
                    "name": "Pampers Pampers  Premium Care Diaper Pants - S, 4-8 kg, Lotion with Al, 36 pcs",
                    "weight": "36pcs",
                    "price": "₹899",
                    "image": "https://new-assets.ccbp.in/frontend/react-js/nxt-mart-app/image_60.jpg"
                },
                {
                    "id": 61,
                    "name": "Pampers Diaper Pants - Extra Large, 56 pcs",
                    "weight": "56pcs",
                    "price": "₹979.3",
                    "image": "https://new-assets.ccbp.in/frontend/react-js/nxt-mart-app/image_61.jpg"
                },
            ]
        },
        {
            name: "Cleaning & Household",
            products: [
                {
                    "id": 63,
                    "name": "Lizol Disinfectant Surface & Floor Cleaner Liquid - Citrus, 1L",
                    "weight": "1L",
                    "price": "₹200.2",
                    "image": "https://new-assets.ccbp.in/frontend/react-js/nxt-mart-app/image_63.jpg"
                },
                {
                    "id": 64,
                    "name": "Vim Dishwash Bar - Lemon, 3 x 125 g Multipack",
                    "weight": "375g",
                    "price": "₹27",
                    "image": "https://new-assets.ccbp.in/frontend/react-js/nxt-mart-app/image_64.jpg"
                },
                {
                    "id": 65,
                    "name": "Colin Glass & Surface Cleaner Liquid Spray, Regular, 500 ml each (Pack of 3)",
                    "weight": "1500ml",
                    "price": "₹314.05",
                    "image": "https://new-assets.ccbp.in/frontend/react-js/nxt-mart-app/image_65.jpg"
                }
            ]
        },
        {
            name: "Beauty & Hygiene",
            products: [
                {
                    "id": 66,
                    "name": "Iodex Rapid Action Spray - Inflammation Relief, 5 Active Ingredients, 60 g",
                    "weight": "60g",
                    "price": "₹164",
                    "image": "https://new-assets.ccbp.in/frontend/react-js/nxt-mart-app/image_66.jpg"
                },
            ]
        },
        {
            name: "Kitchen, Garden & Pets",
            products: [
                {
                    "id": 69,
                    "name": "Pedigree Adult Dry Dog Food - Chicken & Vegetables, 5.5 kg",
                    "weight": "5.5kg",
                    "price": "₹1223.2",
                    "image": "https://new-assets.ccbp.in/frontend/react-js/nxt-mart-app/image_69.jpg"
                },
                {
                    "id": 70,
                    "name": "Duracell Ultra Alkaline AA Batteries, 4 pcs",
                    "weight": "4pcs",
                    "price": "₹169",
                    "image": "https://new-assets.ccbp.in/frontend/react-js/nxt-mart-app/image_70.jpg"
                },
                {
                    "id": 71,
                    "name": "Whiskas Wet Cat Food - Adult, +1 Year, Chicken In Gravy, Balanced Nutrition, Shiny Coat, 85 g (Pack of 12)",
                    "weight": "85g",
                    "price": "₹540",
                    "image": "https://new-assets.ccbp.in/frontend/react-js/nxt-mart-app/image_71.jpg"
                }
            ]
        },
        {
            name: "Chocolates & Candies",
            products: [
                {
                    "id": 72,
                    "name": "Nestle KitKat Share & Snap 2x3 Fingers Wafer Bar, 57 g",
                    "weight": "57g",
                    "price": "₹30",
                    "image": "https://new-assets.ccbp.in/frontend/react-js/nxt-mart-app/image_72.jpg"
                },
                {
                    "id": 73,
                    "name": "Cadbury Dairy Milk Chocolate Bar, 134 g Family Pack",
                    "weight": "134g",
                    "price": "₹98.28",
                    "image": "https://new-assets.ccbp.in/frontend/react-js/nxt-mart-app/image_73.jpg"
                },
                {
                    "id": 74,
                    "name": "Ferrero Rocher Chocolate, 16x24 pcs Multipack",
                    "weight": "384 pcs",
                    "price": "₹13674.88",
                    "image": "https://new-assets.ccbp.in/frontend/react-js/nxt-mart-app/image_74.jpg"
                }
            ]
        },
        {
            name: "Dry Fruits",
            products: [
                {
                    "id": 75,
                    "name": "Tata Sampann 100% Pure Premium Walnuts, 200 g",
                    "weight": "200g",
                    "price": "₹350.62",
                    "image": "https://new-assets.ccbp.in/frontend/react-js/nxt-mart-app/image_75.jpg"
                },
                {
                    "id": 76,
                    "name": "BB Royal Organic - Almond/Badam, 500 g",
                    "weight": "500g",
                    "price": "₹508",
                    "image": "https://new-assets.ccbp.in/frontend/react-js/nxt-mart-app/image_76.jpg"
                },
                {
                    "id": 77,
                    "name": "BB Popular Walnut/Akhrot - Kernels, 200 g Pouch",
                    "weight": "200g",
                    "price": "₹217",
                    "image": "https://new-assets.ccbp.in/frontend/react-js/nxt-mart-app/image_77.jpg"
                }
            ]
        },
        {
            name: "Indian Mithai",
            products: [
                {
                    "id": 78,
                    "name": "Eat Better Co Better Laddoos - Orange & Ginger, No Added Sugar, Vegan & Gluten Free, 70 g",
                    "weight": "70g",
                    "price": "₹139",
                    "image": "https://new-assets.ccbp.in/frontend/react-js/nxt-mart-app/image_78.jpg"
                },
                {
                    "id": 79,
                    "name": "Paper Boat Chikki, Peanut Bar, 16 g (Pack of 50)",
                    "weight": "800g",
                    "price": "₹240",
                    "image": "https://new-assets.ccbp.in/frontend/react-js/nxt-mart-app/image_79.jpg"
                },
                {
                    "id": 80,
                    "name": "Haldiram's Gulab Jamun, 3 x 1 kg Multipack",
                    "weight": "3kg",
                    "price": "₹555",
                    "image": "https://new-assets.ccbp.in/frontend/react-js/nxt-mart-app/image_80.jpg"
                }
            ]
        }
    ],
    selectedCategory: null,
    isLoading: false,
    error: null,
    productQuantities: {},
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ isLoading: true });
    try {
      // Simulating delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch (err) {
      this.setState({ error: err.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleCategoryClick = (category) => {
    this.setState({ selectedCategory: category });
  };

  handleIncrement = (productId) => {
    this.setState((prevState) => ({
      productQuantities: {
        ...prevState.productQuantities,
        [productId]: (prevState.productQuantities[productId] || 0) + 1,
      },
    }));
  };

  handleDecrement = (productId) => {
    this.setState((prevState) => ({
      productQuantities: {
        ...prevState.productQuantities,
        [productId]: Math.max((prevState.productQuantities[productId] || 1) - 1, 0),
      },
    }));
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

  render() {
    const { isLoading, error, selectedCategory, categories, productQuantities } = this.state;

    return (
      <div className="content">
        <div className="main-sidebar">
          <div className="sidebar">
            <h2 className="categories">Categories</h2>
            {this.renderCategoryButtons()}
          </div>
        </div>
        <div className="main-content">
          {isLoading ? (
            <div className="spinner-container">
              {/* Loading spinner */}
            </div>
          ) : error ? (
            <h2>Error: {error}</h2>
          ) : (
            <>
              {selectedCategory === null ? (
                <h2>All Products</h2>
              ) : (
                <h2>{selectedCategory.name}</h2>
              )}
              <ul className="product-list">
                {selectedCategory === null ? (
                  categories.map((category) => (
                    <div key={category.name} className="category-group">
                      <h2>{category.name}</h2>
                      <div className="home-fixer">
                        {category.products.map((product) => (
                          <li key={product.id} className="product-item">
                            {/* Product details */}
                          </li>
                        ))}
                      </div>
                    </div>
                  ))
                ) : (
                  selectedCategory.products.map((product) => (
                    <li key={product.id} className="product-item">
                      {/* Product details */}
                    </li>
                  ))
                )}
              </ul>
              <hr />
            </>
          )}
        </div>
      </div>
    );
  }
}

export default Content;