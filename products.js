const products = [
    {
      "id": 1,
      "name": "Textured turtleneck with zip",
      "price": 52.99,
      "oldPrice": 53.99,
      "isSale": true,
      "isNew": false,
      "categories": [
        "Men"
      ],
      "color": "Brown",
      "image":"https://fs-thb01.getcourse.ru/fileservice/file/thumbnail/h/54cdbf69f8e60ba13e2e795cd495567f.png/s/f1200x/a/534336/sc/265"
    },
    {
      "id": 2,
      "name": "Spray wrap skirt",
      "price": 35.99,
      "oldPrice": null,
      "isSale": false,
      "isNew": false,
      "categories": [
        "Women"
      ],
      "color": "Red",
      "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/061c4e0891851d157cbcf6984295b7ed.png/s/f1200x/a/534336/sc/111"
    },
    {
      "id": 3,
      "name": "Short shorts with straps",
      "price": 20.99,
      "oldPrice": null,
      "isSale": false,
      "isNew": false,
      "categories": [
        "Men"
      ],
      "color": "Blue",
      "image": "https://fs-thb02.getcourse.ru/fileservice/file/thumbnail/h/b56c73f8da5404fddf58b7a5a540130f.png/s/f1200x/a/534336/sc/238"
    },
    {
      "id": 4,
      "name": "Fashionee - catton shirt",
      "price": 110.99,
      "oldPrice": null,
      "isSale": false,
      "isNew": false,
      "categories": [
        "Men"
      ],
      "color": "Brown",
      "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/911e17505fb10478ce04f078943bf74e.png/s/f1200x/a/534336/sc/55"
    },
    {
      "id": 5,
      "name": "Warm casual sweater",
      "price": 80.99,
      "oldPrice": null,
      "isSale": false,
      "isNew": true,
      "categories": [
        "Women"
      ],
      "color": "Brown",
      "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/ec9bc0e735f3c75eab9d4d8c4f8630fe.png/s/f1200x/a/534336/sc/400"
    },
    {
      "id": 6,
      "name": "Retro style handbag",
      "price": 45.99,
      "oldPrice": 52.99,
      "isSale": true,
      "isNew": false,
      "categories": [
        "Women",
        "Accessories"
      ],
      "color": "Brown",
      "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/c3d454c3b46f6a62d4d036f928a56705.png/s/f1200x/a/534336/sc/100"
    },
    {
      "id": 7,
      "name": "Style Handbag",
      "price": 180.99,
      "oldPrice": null,
      "isSale": false,
      "isNew": false,
      "categories": [
        "Women",
        "Accessories"
      ],
      "color": "Black",
      "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/14e10d5f0aaf5e8405fad852e8344182.png/s/f1200x/a/534336/sc/138"
    },
    {
      "id": 8,
      "name": "Blouse with insert and ruffles",
      "price": 30.99,
      "oldPrice": null,
      "isSale": false,
      "isNew": true,
      "categories": [
        "Women"
      ],
      "color": "Blue",
      "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/2b269ee1c83fd5758f3763f9a45a5605.png/s/f1200x/a/534336/sc/116"
    },
    {
      "id": 9,
      "name": "Long oversized T-shirt",
      "price": 30.99,
      "oldPrice": 52.99,
      "isSale": true,
      "isNew": false,
      "categories": [
        "Men"
      ],
      "color": "Blue",
      "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/92be8394b48b6911690745902643f92d.png/s/f1200x/a/534336/sc/439"
    },
    {
      "id": 10,
      "name": "Stylish and comfortable cap",
      "price": 40.99,
      "oldPrice": null,
      "isSale": false,
      "isNew": false,
      "categories": [
        "Accessories"
      ],
      "color": "White",
      "image": "https://fs-thb02.getcourse.ru/fileservice/file/thumbnail/h/aa0d17c1bd58fc6066aa1f602fe8ab59.png/s/f1200x/a/534336/sc/325"
    },
    {
      "id": 11,
      "name": "Shoulder bag",
      "price": 210.99,
      "oldPrice": null,
      "isSale": false,
      "isNew": true,
      "categories": [
        "Women",
        "Accessories"
      ],
      "color": "Red",
      "image": "https://fs-thb02.getcourse.ru/fileservice/file/thumbnail/h/ad5a7f75f7e3463aaafec1149cd2bfbd.png/s/f1200x/a/534336/sc/477"
    },
    {
      "id": 12,
      "name": "High-heeled shoes",
      "price": 52.99,
      "oldPrice": 70.99,
      "isSale": true,
      "isNew": false,
      "categories": [
        "Women"
      ],
      "color": "Black",
      "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/b14b37c5f1fbd94505697d827305348b.png/s/f1200x/a/534336/sc/57"
    },
    {
      "id": 13,
      "name": "Textured turtleneck with zip (2)",
      "price": 45.99,
      "oldPrice": 53.99,
      "isSale": true,
      "isNew": false,
      "categories": [
        "Men"
      ],
      "color": "Brown",
      "image": "https://fs-thb01.getcourse.ru/fileservice/file/thumbnail/h/54cdbf69f8e60ba13e2e795cd495567f.png/s/f1200x/a/534336/sc/265"
    },
    {
      "id": 14,
      "name": "Spray wrap skirt (2)",
      "price": 25.99,
      "oldPrice": null,
      "isSale": false,
      "isNew": false,
      "categories": [
        "Women"
      ],
      "color": "Red",
      "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/061c4e0891851d157cbcf6984295b7ed.png/s/f1200x/a/534336/sc/111"
    },
    {
      "id": 15,
      "name": "Short shorts with straps (2)",
      "price": 30.99,
      "oldPrice": null,
      "isSale": false,
      "isNew": false,
      "categories": [
        "Men"
      ],
      "color": "Blue",
      "image": "https://fs-thb02.getcourse.ru/fileservice/file/thumbnail/h/b56c73f8da5404fddf58b7a5a540130f.png/s/f1200x/a/534336/sc/238"
    },
    {
      "id": 16,
      "name": "Fashionee - catton shirt (2)",
      "price": 99.99,
      "oldPrice": null,
      "isSale": false,
      "isNew": false,
      "categories": [
        "Men"
      ],
      "color": "Brown",
      "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/911e17505fb10478ce04f078943bf74e.png/s/f1200x/a/534336/sc/55"
    },
    {
      "id": 17,
      "name": "Warm casual sweater (2)",
      "price": 70.99,
      "oldPrice": null,
      "isSale": false,
      "isNew": true,
      "categories": [
        "Women"
      ],
      "color": "Brown",
      "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/ec9bc0e735f3c75eab9d4d8c4f8630fe.png/s/f1200x/a/534336/sc/400"
    },
    {
      "id": 18,
      "name": "Retro style handbag (2)",
      "price": 35.99,
      "oldPrice": 52.99,
      "isSale": true,
      "isNew": false,
      "categories": [
        "Women",
        "Accessories"
      ],
      "color": "Brown",
      "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/c3d454c3b46f6a62d4d036f928a56705.png/s/f1200x/a/534336/sc/100"
    },
    {
      "id": 19,
      "name": "Style Handbag (2)",
      "price": 170.99,
      "oldPrice": null,
      "isSale": false,
      "isNew": false,
      "categories": [
        "Women",
        "Accessories"
      ],
      "color": "Black",
      "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/14e10d5f0aaf5e8405fad852e8344182.png/s/f1200x/a/534336/sc/138"
    },
    {
      "id": 20,
      "name": "Blouse with insert and ruffles (2)",
      "price": 25.99,
      "oldPrice": null,
      "isSale": false,
      "isNew": true,
      "categories": [
        "Women"
      ],
      "color": "Blue",
      "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/2b269ee1c83fd5758f3763f9a45a5605.png/s/f1200x/a/534336/sc/116"
    },
    {
      "id": 21,
      "name": "Long oversized T-shirt (2)",
      "price": 25.99,
      "oldPrice": 52.99,
      "isSale": true,
      "isNew": false,
      "categories": [
        "Men"
      ],
      "color": "Blue",
      "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/92be8394b48b6911690745902643f92d.png/s/f1200x/a/534336/sc/439"
    },
    {
      "id": 22,
      "name": "Stylish and comfortable cap (3)",
      "price": 35.99,
      "oldPrice": null,
      "isSale": false,
      "isNew": false,
      "categories": [
        "Accessories"
      ],
      "color": "White",
      "image": "https://fs-thb02.getcourse.ru/fileservice/file/thumbnail/h/aa0d17c1bd58fc6066aa1f602fe8ab59.png/s/f1200x/a/534336/sc/325"
    },
    {
      "id": 23,
      "name": "Shoulder bag (2)",
      "price": 200.99,
      "oldPrice": null,
      "isSale": false,
      "isNew": true,
      "categories": [
        "Women",
        "Accessories"
      ],
      "color": "Red",
      "image": "https://fs-thb02.getcourse.ru/fileservice/file/thumbnail/h/ad5a7f75f7e3463aaafec1149cd2bfbd.png/s/f1200x/a/534336/sc/477"
    },
    {
      "id": 24,
      "name": "High-heeled shoes (2)",
      "price": 45.99,
      "oldPrice": 70.99,
      "isSale": true,
      "isNew": false,
      "categories": [
        "Women"
      ],
      "color": "Black",
      "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/b14b37c5f1fbd94505697d827305348b.png/s/f1200x/a/534336/sc/57"
    }
  ]

const PRODUCT_IN_BASKET_KEY = 'product-in-basket'
const PRODUCT_IN_FAVORITES = 'product-in-favorites'

const PRODUCTS_PER_PAGE = 12

let searchValue = ''
let sort = ''

let oldfilter = {
  category:'All',
  price: {
    min: 0,
    max: 999999
  },
  color: []
}


const currentfilter = {
  category:'All',
  price: {
    min: 0,
    max: 999999
  },
  color: []
}

const paginationInfo = {
  ActivePage: 0,
  perPage: 12
}


const debounce = (f, t) => {
  return function (args) {
    let previousCall = this.lastcall;
    this.lastcall = Date.now();
    if (previousCall && ((this.lastcall - previousCall) <= t)) {
      clearTimeout(this.lastcallTimer)
    }
    this.lastcallTimer = setTimeout(() => f(args), t)
  }
}

const createProduct = (product) => {
  const productWrapper = document.createElement('div');
  productWrapper.classList.add('product')

  const photo = document.createElement('div');
  photo.classList.add('photo')

  const topBar = document.createElement('div')
  topBar.classList.add('top-bar')

  const lablels = document.createElement('div')
  lablels.classList.add('lablels')

  if (product.isNew) {
    const lable = document.createElement('div')
    lable.classList.add('lable')

    lable.classList.add('new');
    lable.innerHTML = 'New'

    lablels.appendChild(lable)
  }

  if (product.isSale) {
    const lable = document.createElement('div')
    lable.classList.add('lable')

    lable.classList.add('sale')
    lable.innerHTML = 'Sale'

    lablels.appendChild(lable)
  }

  const favorites = document.createElement('div')

  const favoriteIcon = document.createElement('img')
  favoriteIcon.classList.add('favorites')
  favoriteIcon.src = './icons/heart.svg'
  favoriteIcon.alt = 'Favorite Icon'
  favoriteIcon.setAttribute('data-id', product.id);

  favoriteIcon.addEventListener('click', () => {
    if (favoriteIcon.classList.contains('in-favorites')) {
        removeFromFavorites(product, favoriteIcon);
    } else {
        addToFavorites(product, favoriteIcon);
    }
});

  favorites.appendChild(favoriteIcon)
  topBar.appendChild(lablels)
  topBar.appendChild(favorites)

  const productImage = document.createElement('img') 
  productImage.classList.add('product-image')
  productImage.src = product.image
  productImage.alt = 'product img'

  photo.appendChild(productImage)
  photo.appendChild(topBar)

  const info = document.createElement('div')
  info.classList.add('info')

  const name = document.createElement('div')
  name.classList.add('name')
  name.innerHTML = product.name

  const price = document.createElement('div')
  price.classList.add('price')

  const currentPrice = document.createElement('div')
  currentPrice.classList.add('current-price')
  currentPrice.innerHTML = `$${product.price}`
  price.appendChild(currentPrice)

  if (product.oldPrice) {
    const oldPrice = document.createElement('div')
    oldPrice.classList.add('old-price')
    oldPrice.innerHTML = `$${product.oldPrice}`
    price.appendChild(oldPrice)
  }

  info.appendChild(name)
  info.appendChild(price)

  const buyButton = document.createElement('button')
  buyButton.classList.add('buy-btn')
  buyButton.innerHTML = 'Купить'
  buyButton.addEventListener('click', () => {
    buyProduct(product)
  })

  productWrapper.appendChild(photo)
  productWrapper.appendChild(info)
  productWrapper.appendChild(buyButton)

  return productWrapper
}


const getFromLs = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key))
  } catch (e) {
      console.log(e)
  }
}

const setToLs = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (e) {
    console.log(e)
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const basketLS = JSON.parse(localStorage.getItem(PRODUCT_IN_BASKET_KEY)) || [];
  const favoritesLS = JSON.parse(localStorage.getItem(PRODUCT_IN_FAVORITES)) || [];

  basketLS.forEach(() => {
    updateHeaderInfo()
  })

  favoritesLS.forEach((product) => {
    updateFavoritesInfo()
    const favoriteIcon = document.querySelector(`.favorites[data-id="${product.id}"]`);
    if (product.status === 'pressed') {
      favoriteIcon.src = './icons/heart-red.svg';
      favoriteIcon.classList.add('in-favorites')
    }
  })
})


const updateHeaderInfo = () => {
  const basketCounter = document.getElementsByClassName('js-basket-counter')

  if (!basketCounter.length) {
    return false
  }

  const productsInBasket = getFromLs(PRODUCT_IN_BASKET_KEY)

  if (!productsInBasket) {
    return false
  }

  let countInBasket = 0

  productsInBasket.forEach(product => {
    countInBasket += product.quantity
  });

  basketCounter[0].innerHTML = countInBasket
}


const buyProduct = (product) => {
  const productsInBasket = getFromLs(PRODUCT_IN_BASKET_KEY)

  if (!productsInBasket) {
    setToLs(PRODUCT_IN_BASKET_KEY, [{ ...product, quantity: 1}])
    updateHeaderInfo() 
    return true
  }

  let hasproductInBasket = false

  const updatedProducts = productsInBasket.map((productInBasket) => {
    if (productInBasket.id === product.id) {
      hasproductInBasket = true

      return {
        ...productInBasket,
        quantity: productInBasket.quantity + 1
      }
    }
    return productInBasket
  })

    if (hasproductInBasket) {
      setToLs(PRODUCT_IN_BASKET_KEY, updatedProducts)
      updateHeaderInfo() 
      return true
    }

    productsInBasket.push({ ...product, quantity: 1})
    setToLs(PRODUCT_IN_BASKET_KEY, productsInBasket)
    updateHeaderInfo() 
}


const updateFavoritesInfo = () => {
  const favoritesCounter = document.getElementsByClassName('js-favorites-counter')
  
  if (!favoritesCounter.length) {
    return false
  }

  const productsInFavorites = getFromLs(PRODUCT_IN_FAVORITES)

  if (!productsInFavorites) {
    return false
  }

  favoritesCounter[0].innerHTML = productsInFavorites ? productsInFavorites.length : 0
}


const addToFavorites = (product, icon) => {
  const productsInFavorites = getFromLs(PRODUCT_IN_FAVORITES)

  if(!productsInFavorites) {
    setToLs(PRODUCT_IN_FAVORITES, [{ ...product, status: 'pressed'}])
    icon.src = './icons/heart-red.svg'
    icon.classList.add('in-favorites')
    updateFavoritesInfo()
    return true
  }

  let hasproductInFavorites = false

  const updatedProductsInFavorites = productsInFavorites.map((productInFavorites) => {
    if(productInFavorites.id === product.id) {  
      hasproductInFavorites = true
    }
    return productInFavorites
  })

  if (hasproductInFavorites === true) {
    return
  } else {
    productsInFavorites.push({ ...product, status: 'pressed'})
    setToLs(PRODUCT_IN_FAVORITES, productsInFavorites)
    icon.src = './icons/heart-red.svg'
    icon.classList.add('in-favorites')
    updateFavoritesInfo()
  }
}


const removeFromFavorites = (product, icon) => {
  let productsInFavorites = getFromLs(PRODUCT_IN_FAVORITES)

  if (productsInFavorites) {
      productsInFavorites = productsInFavorites.filter(favProduct => favProduct.id !== product.id)
      setToLs(PRODUCT_IN_FAVORITES, productsInFavorites)
  }

  icon.src = './icons/heart.svg'
  icon.classList.remove('in-favorites')
  updateFavoritesInfo();
}

let pageCount = 0

let activeIndex = paginationInfo.ActivePage;

const createPagination = (productsCount) => {
  const jsPages = document.getElementsByClassName('js-pages')
  const pagination = document.getElementById('pagination')

  if (!productsCount) {
    pagination.classList.add('hide')

    return
  }

  if (!jsPages.length) {
    return
  }

  pagination.classList.remove('hide')

  const jsPagesContainer = jsPages[0]

  jsPagesContainer.innerHTML = ""

  pageCount = Math.ceil(productsCount / paginationInfo.perPage)

  for (let i = 0; i < pageCount; i++) {
    const page = document.createElement('div')
    page.classList.add('page')
    if (i === paginationInfo.ActivePage) {
      page.classList.add('active')
    }
    page.innerHTML = i + 1
    page.dataset.index = i

    page.addEventListener('click', (e) => {
      const currentElement = e.target;

      const alreadyActive = document.querySelector('.page.active');
    
      if (alreadyActive) {
        alreadyActive.classList.remove('active');
      }
    
      currentElement.classList.add('active');
    
      const newActiveIndex = Number(currentElement.dataset.index);
      activeIndex = newActiveIndex;
      paginationInfo.ActivePage = newActiveIndex;


      paginBtnLeft(newActiveIndex);
      paginBtnRight(newActiveIndex);

      const {filteredProducts, productsCount} = FilterProducts(searchValue, oldfilter, sort, paginationInfo)

      createProductList(filteredProducts, productsCount)
    })

    jsPagesContainer.appendChild(page)
  }
}


const createProductList = (products, productsCount) => {
  const jsProducts = document.getElementsByClassName('js-products')

  if (!jsProducts.length) {
    return
  }

  jsProducts[0].innerHTML = ''

  for(const product of products) {
    const createdProduct = createProduct(product)
    jsProducts[0].appendChild(createdProduct)
  }

  createPagination(productsCount)
}

const buttonLeft = document.getElementsByClassName('button-left-pagin')[0]

paginBtnLeft(activeIndex)

const buttonRight = document.getElementsByClassName('button-right-pagin')[0]

paginBtnRight(activeIndex)

function paginBtnLeft(activeindex) {
    if (activeindex < pageCount - 1) {
      buttonRight.removeAttribute('disabled');
    }

    if (activeindex === 0) {
      buttonLeft.setAttribute('disabled', true);
    } else {
      buttonLeft.removeAttribute('disabled');
    }
}

function paginBtnRight(activeindex) {
  if (activeindex > 0) {
    buttonLeft.removeAttribute('disabled');
  }


  if (activeindex === pageCount - 1) {
    buttonRight.setAttribute('disabled', true);
  } else {
    buttonRight.removeAttribute('disabled');
  }
}

buttonLeft.addEventListener('click', () => {
  if (activeIndex > 0) {
    activeIndex--;
  }

  paginBtnLeft(activeIndex)
  updateActivePage(activeIndex)
})

buttonRight.addEventListener('click', () => {
  if (activeIndex < pageCount - 1) {
    activeIndex++;
  }

  paginBtnRight(activeIndex)
  updateActivePage(activeIndex)
})


function updateActivePage(newIndex) {
  const pages = document.querySelectorAll('.page');

  const alreadyActive = document.querySelectorAll('page.active')

  if (alreadyActive?.length) {
    alreadyActive[0].classList.remove('active')
  }

  pages[newIndex].classList.add('active');

  paginationInfo.ActivePage = newIndex;

  const { filteredProducts, productsCount } = FilterProducts(searchValue, currentfilter, sort, paginationInfo
  );

  createProductList(filteredProducts, productsCount);
}

const filterBySearchValue = (products, value) => {
  return products.filter((product) => {
    return product.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
  })
}

const filterProductsByFilterInfo = (products, filter) => {

  let filteredProducts = products

  if (Object.keys(filter).length) {
    if (filter.category && filter.category !== 'All') {
          filteredProducts = filteredProducts.filter((product) => {
          return product.categories.includes(filter.category)
        })
    }

    if (filter.price) {
      filteredProducts = filteredProducts.filter((product) => {
        return product.price >= filter.price.min && product.price <= filter.price.max
      })
    }

    if (filter.color && filter.color.length > 0) {
      filteredProducts = filteredProducts.filter((product) => {
        return filter.color.includes(product.color);
      }) 
    }
  }

  return filteredProducts
}

const sortProducts = (products, sort) => {
  products.sort((a, b) => {

    if (sort === "ASC") {
      if (a.name > b.name) return 1;
      if (a.name === b.name) return 0;
      if (a.name < b.name) return -1;
    }

    if (a.name > b.name) return -1;
    if (a.name === b.name) return 0;
    if (a.name < b.name) return 1;
  })
}

const paginateProducts = (products, pagiInfo) => {
  const productsCount = products.length


  const { perPage, ActivePage } = pagiInfo;
  const firstIndex = ActivePage * perPage;
  const paginatedProducts = products.slice(firstIndex, firstIndex + perPage);

  return {
    productsCount,
    paginatedProducts
  }
}

const FilterProducts = (searchValue, filter, sort, pagination) => {
  let filteredProducts = [...products]

  if (searchValue) {
    filteredProducts = filterBySearchValue(filteredProducts, searchValue)
  }


  filteredProducts = filterProductsByFilterInfo(filteredProducts, filter)



  if (sort) {
    sortProducts(filteredProducts, sort)
  }

  const {paginatedProducts, productsCount} = paginateProducts(filteredProducts, paginationInfo)

  return {
    filteredProducts: paginatedProducts,
    productsCount
  }
}


const updatedProductsCount = (count) => {
  document.getElementById('js-products-count').innerHTML = count
}


const toggleBlockFilterBtn = () => {
  const applyFilter = document.getElementById('apply-filter')


  const isCategoryChanged = currentfilter.category !== oldfilter.category;

  const isPriceChanged = 
    currentfilter.price.min !== oldfilter.price.min ||
    currentfilter.price.max !== oldfilter.price.max;

  const isColorChanged = 
  currentfilter.color.length !== oldfilter.color.length ||
  currentfilter.color.some(color => !oldfilter.color.includes(color));

  if (isCategoryChanged || isPriceChanged || isColorChanged) {
    applyFilter.removeAttribute('disabled');
  } else {
    applyFilter.setAttribute('disabled', 'disabled');
  }
}

document.getElementById('js-search-row').addEventListener('keyup', debounce( (e) => {
  searchValue = e.target.value
  const {filteredProducts, productsCount} = FilterProducts(searchValue, oldfilter, sort, paginationInfo)

  createProductList(filteredProducts, productsCount)
  updatedProductsCount(productsCount)
}, 500 ))



const categoryItem = document.getElementsByClassName('js-category')

for (let i = 0; i < categoryItem.length; i++) {

  categoryItem[i].addEventListener('click', (e) => {

    if (e.target.classList.contains('active')) {
      e.target.classList.remove('active')
      categoryItem[0].classList.add('active')
      currentfilter.category = 'All'

      toggleBlockFilterBtn()
      return
    }

    const alreadyActive = document.querySelectorAll('.js-category.active')

    if (alreadyActive?.length) {
      alreadyActive[0].classList.remove('active')
    }

    e.target.classList.add('active')

    currentfilter['category'] = e.target.dataset.category

    toggleBlockFilterBtn()
  })
}



const minPrice = document.querySelector('.input-min');
const maxPrice = document.querySelector('.input-max');


const priceForFilter = () => {

  const minPriceValue = minPrice.value ? Number(minPrice.value) : null;
  const maxPriceValue = maxPrice.value ? Number(maxPrice.value) : null;

  if (minPriceValue !== null || maxPriceValue !== null) {
    currentfilter.price = {
      min: minPriceValue !== null ? minPriceValue : 0,
      max: maxPriceValue !== null ? maxPriceValue : 999999
    };
  } else {
    currentfilter.price = {
      min: 0,
      max: 999999
    };
  }

  toggleBlockFilterBtn()
}


minPrice.addEventListener('input', () => {
  priceForFilter()
})

maxPrice.addEventListener('input', () => {
  priceForFilter()
})

const colorsItems = document.getElementsByClassName('color-checkbox')

for (let j = 0; j < colorsItems.length; j++) {
  colorsItems[j].addEventListener('click', (e) => {

    if (e.target.checked) {
      e.target.classList.add('color-active')

      currentfilter.color.push(e.target.dataset.color)
    } else {
      e.target.classList.remove('color-active')
      if (currentfilter.color) {
        currentfilter.color = currentfilter.color.filter(color => color !== e.target.dataset.color);
      }
    }
    toggleBlockFilterBtn()
  })
}



document.getElementById('apply-filter').addEventListener('click', (e) => {

  const {filteredProducts, productsCount} = FilterProducts(searchValue, currentfilter, sort, paginationInfo)

  createProductList(filteredProducts, productsCount)
  updatedProductsCount(productsCount)

  e.target.setAttribute('disabled', 'disabled')

  oldfilter = JSON.parse(JSON.stringify(currentfilter));

})



document.getElementById('sort').addEventListener('change', (e) => {
  sort = e.target.value

  const {filteredProducts, productsCount} = FilterProducts(searchValue, oldfilter, sort, paginationInfo)

  createProductList(filteredProducts, productsCount)
  updatedProductsCount(productsCount)
})

const renderRandomProduct = (product) => {
  const productWrapper = document.createElement('div');
  productWrapper.classList.add('staf')

  const photo = document.createElement('div');
  photo.classList.add('picture')

  const productImage = document.createElement('img') 
  productImage.classList.add('product-image')
  productImage.src = product.image

  photo.appendChild(productImage)
  productWrapper.appendChild(photo)

  const info = document.createElement('div')
  info.classList.add('short-info')

  const name = document.createElement('div')
  name.classList.add('staf-name')
  name.innerHTML = product.name

  const price = document.createElement('div')
  price.classList.add('coast')

  const currentPrice = document.createElement('div')
  currentPrice.classList.add('current-price')
  currentPrice.innerHTML = `$${product.price}`
  price.appendChild(currentPrice)

  if (product.oldPrice) {
    const oldPrice = document.createElement('div')
    oldPrice.classList.add('old-price')
    oldPrice.innerHTML = `$${product.oldPrice}`
    price.appendChild(oldPrice)
  }

  info.appendChild(name)
  info.appendChild(price)

  productWrapper.appendChild(info)

  return productWrapper
}

const getRandomProducts = (products, count) => {
  const newProducts = [...products]
  const randomProducts = [];

  do {
    const randomNumber = Math.floor(Math.random() * newProducts.length)
    randomProducts[randomProducts.length] = newProducts.splice(
      randomNumber, 1)[0]
  } while (randomProducts.length < count)

    return randomProducts
}


const generateMigtyLikeProducts = () => {

  const randomProducts = getRandomProducts(products, 3)

  const container = document.getElementsByClassName('js-might-like-staff')[0]

  randomProducts.forEach(product => {
    const randomProduct = renderRandomProduct(product)
    container.appendChild(randomProduct)
  })

}

generateMigtyLikeProducts()

const {paginatedProducts, productsCount} = paginateProducts(products, paginationInfo)

createProductList(paginatedProducts, productsCount);
updatedProductsCount(products.length)