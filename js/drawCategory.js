import { fetchApi } from "./fetchApi.js";
import { API_CATEGORY } from "./constant.js";
import { params } from "./variable.js";

export const drawCategory = () => {
fetchApi(API_CATEGORY)
.then(data =>{
    console.log(data);
    let htmls = data.map(item => {
       return `<div class="category__item">
        ${item}</div> `;
      
    })
 

    category.innerHTML = htmls.join("")
})
}