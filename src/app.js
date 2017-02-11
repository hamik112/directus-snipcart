import Handlebars from 'handlebars'
import productTemplate from './templates/product.handlebars'

function clearProducts(){
  var products = document.getElementById("products");
  while (products.firstChild) {
    products.removeChild(products.firstChild);
  }
};

function renderProducts(){
  clearProducts();

  window.data.filter(isCurrentCategory).forEach(function(x) {
    var template = productTemplate(x);
    var output = createProductNode(template);
    document.getElementById('products').appendChild(output);
  });

  $.scrollify({
    section: ".product-section"
  });
};

function isCurrentCategory(e){
  return e.category.toLowerCase() === window.category.toLowerCase();
};

function createProductNode(inner){
  var div = document.createElement('div');
  div.className = 'product-section';
  div.innerHTML = inner;
  return div;
};

window.toggleCategory = function(element){
  $('.category').each(function(index, e){
    $(e).removeClass('category-active');
  });

  $(element).addClass("category-active");
  window.category = element.text;
  renderProducts();
};

window.category = "men";

fetch('https://api.myjson.com/bins/1d85gx')
  .then(function(response){
    response.json().then(function(data) {
      window.data = data;
      renderProducts();
    });
  });
