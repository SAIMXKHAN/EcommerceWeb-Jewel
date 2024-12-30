// Function to render products
   // Product data  
   const ringsProduct = [
    {
      image: "jewel-Images/goldring.webp",
      name: "Dune Quadra Stack - 18K",
      originalPrice: "Rs.2,599.00 PKR",
      salePrice: "Rs.1,799.00 PKR",
      tag: "Sale",
    },
    {
      name: "Iced Out Luxe Zircon Ring - 18K",
      originalPrice: "Rs.1,999.00 PKR",
      salePrice: "Rs.1,699.00 PKR",
      tag: "Sale",
      image: "jewel-Images/goldring.webp",
    },
    {
      name: "Irregular Baroque Pearl Ring - 18K",
      originalPrice: "Rs.2,599.00 PKR",
      salePrice: "Rs.2,199.00 PKR",
      tag: "Sale",
      image: "jewel-Images/goldring.webp",
    },
    {
      name: "Link Up Ring - 18K",
      originalPrice: "Rs.2,199.00 PKR",
      salePrice: "Rs.1,699.00 PKR",
      tag: "Sale",
      image: "jewel-Images/goldring.webp",
    },
    {
      name: "Lea Baguette X Curb Ring",
      originalPrice: "Rs.2,699.00 PKR",
      salePrice: "Rs.2,199.00 PKR",
      tag: "Sale",
      image: "jewel-Images/goldring.webp",
    },
    {
      image: "jewel-Images/goldring.webp",
      name: "Dune Quadra Stack - 18K",
      originalPrice: "Rs.2,599.00 PKR",
      salePrice: "Rs.1,799.00 PKR",
      tag: "Sale",
    },
    {
      name: "Iced Out Luxe Zircon Ring - 18K",
      originalPrice: "Rs.1,999.00 PKR",
      salePrice: "Rs.1,699.00 PKR",
      tag: "Sale",
      image: "jewel-Images/goldring.webp",
    },
    {
      name: "Irregular Baroque Pearl Ring - 18K",
      originalPrice: "Rs.2,599.00 PKR",
      salePrice: "Rs.2,199.00 PKR",
      tag: "Sale",
      image: "jewel-Images/goldring.webp",
    },
    {
      name: "Link Up Ring - 18K",
      originalPrice: "Rs.2,199.00 PKR",
      salePrice: "Rs.1,699.00 PKR",
      tag: "Sale",
      image: "jewel-Images/goldring.webp",
    },
    {
      name: "Lea Baguette X Curb Ring",
      originalPrice: "Rs.2,699.00 PKR",
      salePrice: "Rs.2,199.00 PKR",
      tag: "Sale",
      image: "jewel-Images/goldring.webp",
    },
  ];

  const braceletsProduct = [
    {
      image: "jewel-Images/goldring.webp",
      name: "Dune Quadra Stack - 18K",
      originalPrice: "Rs.2,599.00 PKR",
      salePrice: "Rs.1,799.00 PKR",
      tag: "Sale",
    },
    {
      name: "Iced Out Luxe Zircon Ring - 18K",
      originalPrice: "Rs.1,999.00 PKR",
      salePrice: "Rs.1,699.00 PKR",
      tag: "Sale",
      image: "jewel-Images/goldring.webp",
    },
    {
      name: "Irregular Baroque Pearl Ring - 18K",
      originalPrice: "Rs.2,599.00 PKR",
      salePrice: "Rs.2,199.00 PKR",
      tag: "Sale",
      image: "jewel-Images/goldring.webp",
    },
    {
      name: "Link Up Ring - 18K",
      originalPrice: "Rs.2,199.00 PKR",
      salePrice: "Rs.1,699.00 PKR",
      tag: "Sale",
      image: "jewel-Images/goldring.webp",
    },
    {
      name: "Lea Baguette X Curb Ring",
      originalPrice: "Rs.2,699.00 PKR",
      salePrice: "Rs.2,199.00 PKR",
      tag: "Sale",
      image: "jewel-Images/goldring.webp",
    },
    {
      image: "jewel-Images/goldring.webp",
      name: "Dune Quadra Stack - 18K",
      originalPrice: "Rs.2,599.00 PKR",
      salePrice: "Rs.1,799.00 PKR",
      tag: "Sale",
    },
    {
      name: "Iced Out Luxe Zircon Ring - 18K",
      originalPrice: "Rs.1,999.00 PKR",
      salePrice: "Rs.1,699.00 PKR",
      tag: "Sale",
      image: "jewel-Images/goldring.webp",
    },
    {
      name: "Irregular Baroque Pearl Ring - 18K",
      originalPrice: "Rs.2,599.00 PKR",
      salePrice: "Rs.2,199.00 PKR",
      tag: "Sale",
      image: "jewel-Images/goldring.webp",
    },
    {
      name: "Link Up Ring - 18K",
      originalPrice: "Rs.2,199.00 PKR",
      salePrice: "Rs.1,699.00 PKR",
      tag: "Sale",
      image: "jewel-Images/goldring.webp",
    },
    {
      name: "Lea Baguette X Curb Ring",
      originalPrice: "Rs.2,699.00 PKR",
      salePrice: "Rs.2,199.00 PKR",
      tag: "Sale",
      image: "jewel-Images/goldring.webp",
    },
  ]

   const products = [
    {
        id: 1,
        name: "Worth Diamond Cuban Ring -18K",
        image: "jewel-Images/goldring.webp",
        originalPrice: "2,499.00",
        salePrice: "1,899.00",
        onSale: true
    },
    {
        id: 2,
        name: "Elegance -18K",
        image: "jewel-Images/neclace.webp",
        originalPrice: null,
        salePrice: "2,199.00",
        onSale: false
    },
    {
        id: 3,
        name: "Heart Huggies - 18k",
        image: "jewel-Images/heartsjewel.webp",
        originalPrice: "2,399.00",
        salePrice: "1,649.00",
        onSale: true
    },
    {
        id: 4,
        name: "Cleopatra Band Ring",
        image: "jewel-Images/newring.webp",
        originalPrice: null,
        salePrice: "1,949.00",
        onSale: false
    },
    {
        id: 5,
        name: "Rosá Engraved Vintage Pendant",
        image: "jewel-Images/newnewneclace.webp",
        originalPrice: null,
        salePrice: "1,999,00",
        onSale: false
    },
    {
        id: 6,
        name: "Rosá Engraved Vintage Pendant",
        image: "jewel-Images/ering.webp",
        originalPrice: "1,699.00",
        salePrice: "1,699,00",
        onSale: true
    },
    {
        id: 7,
        name: "Rosá Engraved Vintage Pendant",
        image: "jewel-Images/bnec.webp",
        originalPrice: null,
        salePrice: "2,349.00",
        onSale: false
    },
    {
        id: 8,
        name: "Rosá Engraved Vintage Pendant",
        image: "jewel-Images/lhoops.webp",
        originalPrice: "2,599.00",
        salePrice: "2,199.00",
        onSale: true
    }
];

function renderProducts() {
  const container = document.getElementById("productsContainer");

  const productsHTML = products.map((product) => `
            <div class="col-12 col-sm-6 col-lg-3">
                <div class="card product-card border-0">
                    
                    <img src="${product.image}" 
                         class="card-img-top product-image" 
                         alt="${product.name}">
                         
                    <div class="card-body text-center">
                    ${
                        product.onSale
                          ? '<span class="sale-badge">Sale</span>'
                          : ""
                      }
                        <h5 class="card-title">${product.name}</h5>
                        <div class="price-container">
                            ${
                              product.originalPrice
                                ? `<span class="original-price me-2">Rs. ${product.originalPrice} PKR</span>`
                                : ""
                            }
                            <span class="sale-price">Rs. ${
                              product.salePrice
                            } PKR</span>
                        </div>
                    </div>
                </div>
            </div>
        `
    )
    .join("");

  container.innerHTML = productsHTML;
}

function renderRingsProducts() {
  const container = document.getElementById("rings-productsContainer");

  const productsHTML = ringsProduct.map((product) => `
            <div class="col-12 col-sm-6 col-lg-3">
                <div class="card product-card border-0">
                    
                    <img src="${product.image}" 
                         class="card-img-top product-image" 
                         alt="${product.name}">
                         
                    <div class="card-body text-center">
                    ${
                        product.onSale
                          ? '<span class="sale-badge">Sale</span>'
                          : ""
                      }
                        <h5 class="card-title">${product.name}</h5>
                        <div class="price-container">
                            ${
                              product.originalPrice
                                ? `<span class="original-price me-2">Rs. ${product.originalPrice} PKR</span>`
                                : ""
                            }
                            <span class="sale-price">Rs. ${
                              product.salePrice
                            } PKR</span>
                        </div>
                    </div>
                </div>
            </div>
        `
    )
    .join("");

  container.innerHTML = productsHTML;
}

function renderBraceletsProducts() {
  const container = document.getElementById("bracelets-productsContainer");

  const productsHTML = braceletsProduct.map((product) => `
            <div class="col-12 col-sm-6 col-lg-3">
                <div class="card product-card border-0">
                    
                    <img src="${product.image}" 
                         class="card-img-top product-image" 
                         alt="${product.name}">
                         
                    <div class="card-body text-center">
                    ${
                        product.onSale
                          ? '<span class="sale-badge">Sale</span>'
                          : ""
                      }
                        <h5 class="card-title">${product.name}</h5>
                        <div class="price-container">
                            ${
                              product.originalPrice
                                ? `<span class="original-price me-2">Rs. ${product.originalPrice} PKR</span>`
                                : ""
                            }
                            <span class="sale-price">Rs. ${
                              product.salePrice
                            } PKR</span>
                        </div>
                    </div>
                </div>
            </div>
        `
    )
    .join("");

  container.innerHTML = productsHTML;
}

function initializeSlider() {
    $('.slider').slick({
      slidesToShow: 4, // Number of slides to show at once
      slidesToScroll: 1, // Number of slides to scroll on arrow click
      arrows: true, // Enable navigation arrows
      dots: false, // Disable dots
      infinite: false, // Disable infinite scrolling
      prevArrow: '<button type="button" class="slick-prev">Previous</button>',
      nextArrow: '<button type="button" class="slick-next">Next</button>',
      responsive: [
        {
          breakpoint: 768, // For tablets
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 576, // For mobile
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }
  
  function DisplaySlider() {
    $('.slider').slick({
      slidesToShow: 4, // Number of slides to show at once
      slidesToScroll: 1, // Number of slides to scroll on arrow click
      arrows: true, // Enable navigation arrows
      dots: false, // Disable dots
      infinite: false, // Disable infinite scrolling
      prevArrow: '<p type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>',
      responsive: [
        {
          breakpoint: 768, // For tablets
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 576, // For mobile
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }

  // Ensure the slider is initialized after the DOM is ready


  document.addEventListener("DOMContentLoaded", () => {
    renderRingsProducts(); // Render Rings products
    renderBraceletsProducts(); // Render Bracelets products
    
    // Initialize sliders after rendering products
    initializeSlider('#rings-productsContainer');
    initializeSlider('#bracelets-productsContainer');
  });

// Render products when page loads
document.addEventListener("DOMContentLoaded", renderProducts);

let slickslides = document.getElementById(slickSlides);
