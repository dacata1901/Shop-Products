import { fetchApi } from "./fetchApi.js";
import { API_PRODUCT } from "./constant.js";
import { drawProduct } from "./drawProduct.js";
import { params } from "./variable.js";
const product = document.querySelector("#product");

drawProduct();

// search
const inputSearch = document.querySelector("#search input");

const buttonSearch = document.querySelector("#search button");

buttonSearch.addEventListener("click", () => {
  search();
});

const search = () => {
  params.q = inputSearch.value;
  drawProduct();
};
inputSearch.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    search();
  }
});
// end search

// filter
const filter = document.querySelector("#filter");
filter.addEventListener("change", function (e) {
  switch (e.target.value) {
    case "macdinh":
      params.sort = "";
      params.order = "";
      break;
    case "giathapdencao":
      params.sort = "price";
      params.order = "asc";
      break;
    case "giacaodenthap":
      params.sort = "price";
      params.order = "desc";
      break;

      case "giagiamnhieu":
        params.sort = "discountPercentage";
        params.order = "desc";
        break;
    default:
      break;
  }
  drawProduct();
});

// end filter



// pagination

const pagiPrev = document.querySelector("#paginationPrev")
const pagiNext = document.querySelector("#paginationNext")
const pagiNumber = document.querySelector("#paginationNumber")



pagiPrev.addEventListener("click", function(){
  if(params.page >1 ){
    params.page = params.page -1;
    pagiNumber.innerHTML = params.page;
    drawProduct();
  }
})


pagiNext.addEventListener("click", function() {
   params.page = params.page + 1;
   pagiNumber.innerHTML =params.page;
   drawProduct();
})

// end pagination