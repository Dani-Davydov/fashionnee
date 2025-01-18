const PRODUCT_IN_BASKET_KEY = 'product-in-basket'
const PRODUCT_IN_FAVORITES = 'product-in-favorites'
const PROMO_WAS_USED = 'promo-was-used'

const productsInBasketFromLS = localStorage.getItem(PRODUCT_IN_BASKET_KEY)

let productsInBasket = JSON.parse(productsInBasketFromLS)


const productsFromFavoritesLS = localStorage.getItem(PRODUCT_IN_FAVORITES)

let favoritesProducts = JSON.parse(productsFromFavoritesLS)

const addScroll = () => {
    const jsProducts = document.getElementsByClassName('js-product-list')

    const productList = jsProducts[0]

    if (productsInBasket.length > 2) {
        productList.style.overflowY = 'scroll'
        productList.style.height = '404px'
    } else {
        productList.style.overflowY = ''
    }
}
addScroll()



const createProduct = (product) => {
    const productWrapper = document.createElement('div')
    productWrapper.classList.add('product')

    const photo = document.createElement('div')
    photo.classList.add('photo')

    const productImage = document.createElement('img') 
    productImage.classList.add('product-image')
    productImage.src = product.image
    productImage.alt = 'product img'
  
    photo.appendChild(productImage)

    const infoWrapper = document.createElement('div')
    infoWrapper.classList.add('product-info')

    const name = document.createElement('div')
    name.classList.add('title')
    name.innerHTML = product.name

    const priceWrapper = document.createElement('div')
    priceWrapper.classList.add('price-wrapper')

    const price_and_count = document.createElement('div')
    price_and_count.classList.add('price-and-count')

    const price = document.createElement('div')
    price.classList.add('price')

    if (product.oldPrice) {
        const oldPrice = document.createElement('div')
        oldPrice.classList.add('cart-old-price')
        oldPrice.innerHTML = `$${product.oldPrice}`
        price.appendChild(oldPrice)
    }

    const currentPrice = document.createElement('div')
    currentPrice.classList.add('cart-current-price')
    currentPrice.innerHTML = `$${product.price}`
    price.appendChild(currentPrice)
  
    const quantiti = document.createElement('div')
    quantiti.classList.add('quantiti')

    const count_button_minud = document.createElement('div')
    count_button_minud.classList.add('count-button')
    count_button_minud.innerHTML = '-'

    count_button_minud.addEventListener('click', () => {
        if (count.textContent == 1) {
            return
        } else {
           decreaseProduct(product)
        }
        count.innerHTML = product.quantity;
        countOrderPrice()
        updateTotalOrederPrice()
    })

    const count_button_plus = document.createElement('div')
    count_button_plus.classList.add('count-button')
    count_button_plus.innerHTML = '+'

    count_button_plus.addEventListener('click', () => {
        if (count.textContent == 100) {
            return
        } else {
            increaseProduct(product)
        }
        count.innerHTML = product.quantity;
        countOrderPrice()
        updateTotalOrederPrice()
    })


    const count = document.createElement('div')
    count.classList.add('count')
    count.innerHTML = product.quantity


    quantiti.appendChild(count_button_minud)
    quantiti.appendChild(count)
    quantiti.appendChild(count_button_plus)


    price_and_count.appendChild(price)
    price_and_count.appendChild(quantiti)

    const totalPrie = document.createElement('div')
    totalPrie.classList.add('total-price')
    totalPrie.innerHTML = `$${(product.price * product.quantity).toFixed(2)}`

    priceWrapper.appendChild(price_and_count)
    priceWrapper.appendChild(totalPrie)

    const closeBtn = document.createElement('div')
    closeBtn.classList.add('close')
    closeBtn.innerHTML = 'X'

    closeBtn.addEventListener('click', () => {
        deleteFromLS(product)
        productWrapper.remove();
        addScroll()
        countOrderPrice()
        updateTotalOrederPrice()
    })


    infoWrapper.appendChild(name)
    infoWrapper.appendChild(priceWrapper)
    infoWrapper.appendChild(closeBtn)

    productWrapper.appendChild(photo)
    productWrapper.appendChild(infoWrapper)

    return productWrapper
}

const updateCartHeaderInfo = () => {
    const basketCounter = document.getElementsByClassName('js-basket-counter')

    if (!basketCounter.length) {
      return false
    }

  
    if (!productsInBasket) {
      return false
    }
  
    let countInBasket = 0
  
    productsInBasket.forEach(product => {
      countInBasket += product.quantity
    });
  
    basketCounter[0].innerHTML = countInBasket
}

  

const updateFavoritesInfo = () => {
    const favoritesCounter = document.getElementsByClassName('js-favorites-counter')
    
    if (!favoritesCounter.length) {
      return false
    }
  
    if (!favoritesProducts) {
      return false
    }
  
    favoritesCounter[0].innerHTML = favoritesProducts ? favoritesProducts.length : 0
  }

const deleteFromLS = (product) => {
    productsInBasket = productsInBasket.filter((productInBasket) => productInBasket.id !== product.id);
    localStorage.setItem(PRODUCT_IN_BASKET_KEY, JSON.stringify(productsInBasket));
    updateCartHeaderInfo()
}

const increaseProduct = (product) => {
    productsInBasket = productsInBasket.map((productInBasket) => {
        if (productInBasket.id === product.id) {     
            return {
              ...productInBasket,
              quantity: productInBasket.quantity + 1
            };
        }
        return productInBasket;
    });

    localStorage.setItem(PRODUCT_IN_BASKET_KEY, JSON.stringify(productsInBasket));

    createProductList(productsInBasket);
    updateCartHeaderInfo();
}

const decreaseProduct = (product) => {
    productsInBasket = productsInBasket.map((productInBasket) => {
        if (productInBasket.id === product.id) {     
            return {
              ...productInBasket,
              quantity: productInBasket.quantity - 1
            };
        }
        return productInBasket;
    });

    localStorage.setItem(PRODUCT_IN_BASKET_KEY, JSON.stringify(productsInBasket));

    createProductList(productsInBasket);
    updateCartHeaderInfo();
}

const OrderPrice = document.getElementsByClassName('all-staff-price')[0]

const countOrderPrice = () => {
    const OrderPrice = document.getElementsByClassName('all-staff-price')[0]

    const totalPrice = document.querySelectorAll('.total-price')
    const priceArr = []
    
    totalPrice.forEach((price) => {
        priceArr.push(Number(price.textContent.slice(1)))
    });

    const summPrice = priceArr.reduce((total, value2) => {
        return total + value2
    })

    OrderPrice.innerHTML = `$${summPrice.toFixed(2)}`

    return `$${summPrice.toFixed(2)}`
}

const promoInput = document.getElementsByClassName('input-promo')[0]

const promoButtom = document.querySelector('.button-promo')

promoButtom.addEventListener('click', () => {
    const promoFromLS = localStorage.getItem(PROMO_WAS_USED)

    if (!promoFromLS && promoInput.value === "I_LOVE_FRONTEND20") {
        localStorage.setItem(PROMO_WAS_USED, JSON.stringify([{status: 'used'}]))
    }
    promoInput.value = ''
    updateTotalOrederPrice()
})

const updateTotalOrederPrice = () => {
    const orderTotalPrice = document.getElementsByClassName('order-total-price')[0]
    const OrderPrice = document.getElementsByClassName('all-staff-price')[0]
    const discountStatus = document.getElementsByClassName('promo-status')[0]
    const promoStatus = JSON.parse(localStorage.getItem(PROMO_WAS_USED)) || []

    const PriceOfDelivery = 16

    const OrderPriceValue = Number(OrderPrice.textContent.slice(1))

    let totalPrice = OrderPriceValue + PriceOfDelivery

    if (promoStatus.some(promo => promo.status === 'used')) {
        const discountValue = (totalPrice / 100) * 15;
        totalPrice -= discountValue;
        discountStatus.innerHTML = 'Yes';
    } else {
        discountStatus.innerHTML = 'No';
    }

    orderTotalPrice.innerHTML = `$${totalPrice.toFixed(2)}`;
}


const createProductList = (products) => {
    const jsProducts = document.getElementsByClassName('js-product-list');

    if (!jsProducts.length) {
        return;
    }

    const productList = jsProducts[0];

    if (!products.length) {
        productList.innerHTML = 'no stuff in cart';
        return;
    }

    productList.innerHTML = '';

    for (const product of products) {
        const createdProduct = createProduct(product);
        productList.appendChild(createdProduct);
    }
}

createProductList(productsInBasket)
updateCartHeaderInfo()
updateFavoritesInfo()
OrderPrice.innerHTML = countOrderPrice()
updateTotalOrederPrice()
