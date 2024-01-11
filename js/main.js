// start add class active to menu
let category = document.querySelector(".menu-container");
let menu = document.querySelector(".menu");
let menuSpan = document.querySelector("nav > ul > li > span");
category.addEventListener("click", addActive);

function addActive() {
  menu.classList.toggle("active");
  menuSpan.classList.toggle("active");
}
// end add class active to menu

//------------------------good idea here-------------------

// start remove active classes form menu and account span

// window.onclick = (e) => {
//   let accountSpan = document.querySelector(
//     "header nav  > ul > li:last-of-type span"
//   );
//   let menuSpan = document.querySelector("nav ul li:nth-of-type(3) span");
//   if (e.target != menuSpan || e.target !== accountSpan) {
//     console.log(e.target, menuSpan);
//     menu.classList.remove("active")
//     // accountMenu.classList.remove("active")
//   }
// };

// end remove active classes form menu and account span

// start add active class to account
let listOfAccount = document.querySelector(
  "header nav  > ul > li:last-of-type"
);
let spanOfAccount = document.querySelector(
  "header nav  > ul > li:last-of-type span"
);
let accountMenu = document.querySelector(".account");
listOfAccount.onclick = () => {
  spanOfAccount.classList.toggle("active");
  accountMenu.classList.toggle("active");
};
// end add active class to account

// start list of mobile links
let mobileHeaderList = document.querySelectorAll(".mobile-header li");
let mobileHeaderLink = document.querySelectorAll(".mobile-header li a");
mobileHeaderList.forEach((li) => {
  li.onclick = () => {
    let link = li.getAttribute("data-cat");
    mbRemove();
    mbAdd(li);
    let mbChoose = document.querySelectorAll(".mobile .gategory-choose span");
    mbChoose.forEach((span) => {
      if (span.getAttribute("data-cat") === link) {
        span.classList.add("active");
      }
    });
  };
});
// end list of mobile links

// start list of tablet links
let tabletHeaderList = document.querySelectorAll(".tablet-header li");
let tabletHeaderLink = document.querySelectorAll(".tablet-header li a");
tabletHeaderList.forEach((li) => {
  li.onclick = () => {
    let link = li.getAttribute("data-cat");
    tbRemove();
    tbAdd(li);
    let mbChoose = document.querySelectorAll(".tablet .gategory-choose span");
    mbChoose.forEach((span) => {
      if (span.getAttribute("data-cat") === link) {
        span.classList.add("active");
      }
    });
  };
});
// end list of tablet links
// start list of laptop links
let laptopHeaderList = document.querySelectorAll(".laptop-header li");
let laptopHeaderLink = document.querySelectorAll(".laptop-header li a");
laptopHeaderList.forEach((li) => {
  li.onclick = () => {
    let link = li.getAttribute("data-cat");
    lpRemove();
    lpAdd(li);
    let mbChoose = document.querySelectorAll(".laptop .gategory-choose span");
    mbChoose.forEach((span) => {
      if (span.getAttribute("data-cat") === link) {
        span.classList.add("active");
      }
    });
  };
});
// end list of laptop links

// start list of acces links
let accesHeaderList = document.querySelectorAll(".acces-header li");
let accesHeaderLink = document.querySelectorAll(".acces-header li a");
accesHeaderList.forEach((li) => {
  li.onclick = () => {
    let link = li.getAttribute("data-cat");
    acRemove();
    acAdd(li);
    let mbChoose = document.querySelectorAll(".acces .gategory-choose span");
    mbChoose.forEach((span) => {
      if (span.getAttribute("data-cat") === link) {
        span.classList.add("active");
      }
    });
  };
});
// end list of acces links

// end add class active to menu
// start image slider section
let imgArray = Array.from(document.querySelectorAll(".img-holder img"));
let imgLen = imgArray.length;
let nextBut = document.querySelector(".img-control .next");
let prevtBut = document.querySelector(".img-control .previous");
let currentSpan = document.querySelector(".img-control .current");
let currentImage = 1;
let spansAfterAdded = document.querySelectorAll(".img-control .current span");

for (let i = 0; i < imgLen; i++) {
  let span = document.createElement("span");
  span.setAttribute("data-index", i);
  currentSpan.append(span);
  checkImage();
}

nextBut.addEventListener("click", nextImage);
prevtBut.addEventListener("click", prevImage);
function nextImage() {
  if (nextBut.classList.contains("disable")) {
    currentImage = 1;
    checkImage();
  } else {
    currentImage++;
    checkImage();
  }
}
function prevImage() {
  if (prevtBut.classList.contains("disable")) {
    currentImage = imgLen;
    checkImage();
  } else {
    currentImage--;
    checkImage();
  }
}
function checkImage() {
  if (currentImage === 1) {
    prevtBut.classList.add("disable");
  } else {
    prevtBut.classList.remove("disable");
  }
  if (currentImage === imgLen) {
    nextBut.classList.add("disable");
  } else {
    nextBut.classList.remove("disable");
  }
  removeActive();
  addActiveImg();
}

function removeActive() {
  imgArray.forEach((img) => {
    img.classList.remove("active");
  });
  let spans = document.querySelectorAll(".current span");

  spans.forEach((span) => {
    span.classList.remove("active");
  });
}
function addActiveImg() {
  imgArray[currentImage - 1].classList.add("active");
  let spans = document.querySelectorAll(".current span");
  spans[currentImage - 1].classList.add("active");
}

for (let i = 0; i < imgLen; i++) {
  let spans = document.querySelectorAll(".current span");
  spans[i].onclick = () => {
    currentImage = parseInt(spans[i].getAttribute("data-index")) + 1;
    checkImage();
  };
}
let interval = setInterval(() => {
  nextImage();
}, 3000);

// end image slider section

// start about section
window.addEventListener("scroll", () => {
  let about = document.querySelector(".about");
  let aboutHeight = about.scrollHeight;
  let currentHeight = window.scrollY;
  if (currentHeight >= aboutHeight - 400) {
    about.classList.add("active");
  } else {
    return "";
  }
});
// start about section
// start up button
let up = document.querySelector(".up");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 600) {
    up.classList.add("active");
  } else {
    up.classList.remove("active");
  }
});
up.onclick = () => {
  window.scrollTo({
    top: 0,
  });
};
// end up button

// start mobile category section

let mbChoose = document.querySelectorAll(".mobile .gategory-choose span");
let mbProduct = Array.from(
  document.querySelectorAll(".mobile .gategoryshow div.product")
);
mbChoose.forEach((span) => {
  span.onclick = () => {
    mbRemove();
    mbAdd(span);
  };
});
function mbRemove() {
  mbChoose.forEach((span) => {
    span.classList.remove("active");
  });
  mbProduct.forEach((product) => {
    product.style.cssText = "display:none";
  });
}
function mbAdd(span) {
  let spanCat = span.getAttribute("data-cat");
  span.classList.add("active");
  mbProduct.forEach((product) => {
    if (product.classList.contains(spanCat)) {
      product.style.cssText = "display:block";
    }
  });
}

// end mobile category section
// start tablet category section

let tbChoose = document.querySelectorAll(".tablet .gategory-choose span");
let tbProduct = Array.from(
  document.querySelectorAll(".tablet .gategoryshow div.product")
);
tbChoose.forEach((span) => {
  span.onclick = () => {
    tbRemove();
    tbAdd(span);
  };
});
function tbRemove() {
  tbChoose.forEach((span) => {
    span.classList.remove("active");
  });
  tbProduct.forEach((product) => {
    product.style.cssText = "display:none";
  });
}
function tbAdd(span) {
  let spanCat = span.getAttribute("data-cat");
  span.classList.add("active");
  tbProduct.forEach((product) => {
    if (product.classList.contains(spanCat)) {
      product.style.cssText = "display:block";
    }
  });
}

// end tablet category section
// start laptop category section

let lpChoose = document.querySelectorAll(".laptop .gategory-choose span");
let lpProduct = Array.from(
  document.querySelectorAll(".laptop .gategoryshow div.product")
);
lpChoose.forEach((span) => {
  span.onclick = () => {
    lpRemove();
    lpAdd(span);
  };
});
function lpRemove() {
  lpChoose.forEach((span) => {
    span.classList.remove("active");
  });
  lpProduct.forEach((product) => {
    product.style.cssText = "display:none";
  });
}
function lpAdd(span) {
  let spanCat = span.getAttribute("data-cat");
  span.classList.add("active");
  lpProduct.forEach((product) => {
    if (product.classList.contains(spanCat)) {
      product.style.cssText = "display:block";
    }
  });
}

// end laptop category section

// start acces category section

let acChoose = document.querySelectorAll(".acces .gategory-choose span");
let acProduct = Array.from(
  document.querySelectorAll(".acces .gategoryshow div.product")
);
acChoose.forEach((span) => {
  span.onclick = () => {
    acRemove();
    acAdd(span);
  };
});
function acRemove() {
  acChoose.forEach((span) => {
    span.classList.remove("active");
  });
  acProduct.forEach((product) => {
    product.style.cssText = "display:none";
  });
}
function acAdd(span) {
  let spanCat = span.getAttribute("data-cat");
  span.classList.add("active");
  acProduct.forEach((product) => {
    if (product.classList.contains(spanCat)) {
      product.style.cssText = "display:block";
    }
  });
}

// end acces category section
// start product added message

let addProducts = document.querySelectorAll(".product-txt span");
let addProductMessage = document.querySelector(".product-message");
addProducts.forEach((addPro) => {
  addPro.onclick = () => {
    // \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
    // important for backend i guess for add selcted product to database
    // console.log(addPro.parentElement.parentElement)
    // /\/\/\/\/\/\/\/\/\/\/\/\/\\/\/\/\/\/\/\\/\/\/\/\
    // addProductMessage.classList.add("active");
    let div = document.createElement("div");
    div.classList.add("product-message");
    let span = document.createElement("span");
    span.append(
      document.createTextNode(
        addPro.parentElement.firstElementChild.textContent
      )
    );
    // span.append(document.createTextNode(addPro.parentElement.children[1].textContent));
    div.append(span);
    div.append(document.createTextNode(" is added to your cart"));
    document.body.append(div);
    div.classList.add("active");

    let time = setTimeout(() => {
      div.classList.remove("active");
      div.remove();
    }, 1200);
  };
});

// end product added message

// start product page
let products = document.querySelectorAll(".product");
let buyProduct = document.querySelectorAll(".product .product-txt span");
products.forEach((product) => {
  product.onclick = (e) => {
    if (e.target !== product.children[1].children[3]) {
      let productPage = document.createElement("div");
      productPage.classList.add("product-page");
      let container = document.createElement("div");
      container.classList.add("container");
      productPage.append(container);
      let close = document.createElement("span");
      close.classList.add("close");
      close.append(document.createTextNode("X"));
      container.append(close);
      let img = document.createElement("img");
      img.src = product.children[0].children[0].getAttribute("src");
      container.append(img);
      let div = document.createElement("div");
      div.classList.add("product-details");
      container.append(div);
      let h3 = document.createElement("h3");
      h3.append(
        document.createTextNode(product.children[1].children[0].textContent)
      );
      div.append(h3);
      let p = document.createElement("p");
      p.append(
        document.createTextNode(product.children[1].children[2].textContent)
      );
      div.append(p);
      let price = document.createElement("span");
      price.classList.add("price");
      price.append(
        document.createTextNode(product.children[1].children[1].textContent)
      );
      div.append(price);
      let buyBut = document.createElement("span");
      buyBut.append(document.createTextNode("Add TO Cart"));
      buyBut.classList.add("add-but-message");
      div.append(buyBut);
      document.body.append(productPage);
      productPage.style.cssText = "display:block";
      let allContainers = document.querySelectorAll(".container");
      let up = document.querySelector(".up");
      up.style.cssText = "display:none";
      allContainers.forEach((cont) => {
        cont.classList.add("blur");
      });
      product.addEventListener("click", (e) => {
        e.preventDefault();
      });

      let closeBut = document.querySelector(".product-page .close");
      let addBut = document.querySelector(".add-but-message");
      addBut.addEventListener("click", () => {
        let div = document.createElement("div");
        div.classList.add("product-message");
        let span = document.createElement("span");
        let productH3 = document.querySelector(".product-details h3");
        span.append(document.createTextNode(productH3.textContent));
        div.append(span);
        div.append(document.createTextNode(" is added to your cart"));
        document.body.append(div);
        div.classList.add("active");

        let time = setTimeout(() => {
          div.classList.remove("active");
          div.remove();
        }, 1200);
      });
      closeBut.addEventListener("click", () => {
        closeBut.parentElement.parentElement.remove();
        allContainers.forEach((cont) => {
          cont.classList.remove("blur");
          up.style.cssText = "display:flex";
          closeBut.parentElement.parentElement.remove();
        });
      });
      window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          closeBut.parentElement.parentElement.remove();
          allContainers.forEach((cont) => {
            cont.classList.remove("blur");
            up.style.cssText = "display:flex";
            closeBut.parentElement.parentElement.remove();
          });
        }
      });
      let x = document.querySelector(".product-page");
      x.onclick = (e) => {
        if (e.target === x) {
          x.remove();
          allContainers.forEach((cont) => {
            cont.classList.remove("blur");
            up.style.cssText = "display:flex";
            closeBut.parentElement.parentElement.remove();
          });
        }
      };
    }
  };
});

// end product page

// start cart page
let cartLink = document.querySelector(".account li:first-child");
let allContainers = document.querySelectorAll(".container");
let header = document.querySelector("header .container");
let footer = document.querySelector("footer .container");
let cartPageCont = document.querySelector(".cart-page .container");
let headerNav = document.querySelectorAll("header nav > ul > li");
let orderNow = document.querySelector(".order-now span:last-of-type");
let backTOCart = document.querySelector(".order-now span:first-of-type");
let checkOut = document.querySelector(".checkout");
let select = document.querySelector("select");
let cardDetails = document.querySelector(".card-details");
cartLink.addEventListener("click", () => {
  headerNav.forEach((li) => {
    li.style.cssText = "display:none";
  });
  headerNav[0].style.cssText = "display:inline-block";
  headerNav[4].style.cssText = "display:inline-block";
  headerNav[0].addEventListener("click", () => {
    allContainers.forEach((cont) => {
      cont.style.cssText = "display:block";
    });
    headerNav.forEach((li) => {
      li.style.cssText = "display:inline-block";
    });
    header.style.cssText = "display:flex";
    footer.style.cssText = "display:flex";
    cartPageCont.style.cssText = "display:none";
  });

  backTOCart.addEventListener("click", () => {
    products.forEach((pro) => {
      pro.style.cssText = "display:block";
    });
    orderNow.style.display = "inline-block";
    backTOCart.style.display = "none";
    checkOut.style.display = "none";
  });
  allContainers.forEach((cont) => {
    cont.style.cssText = "display:none";
  });
  header.style.cssText = "display:flex";
  footer.style.cssText = "display:flex";
  cartPageCont.style.cssText = "display:block";
});

orderNow.addEventListener("click", () => {
  products.forEach((pro) => {
    pro.style.cssText = "display:none";
  });
  checkOut.style.cssText = "display:block";
  orderNow.style.cssText = "display:none";
  backTOCart.style.cssText = "display:inline-block";
});

select.onclick = () => {
  if (select.value === select.children[1].value) {
    cardDetails.style.cssText = "display:block";
  } else {
    cardDetails.style.cssText = "display:none";
  }
};

// end cart page
