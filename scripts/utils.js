export function el(tag, options){
  options = options || {};
  var classes = options.classes || [];
  var attrs = options.attrs || {};
  var text = options.text || "";
  var node = document.createElement(tag);
  classes.forEach(function(c){ node.classList.add(c); });
  Object.keys(attrs).forEach(function(k){ node.setAttribute(k, attrs[k]); });
  if (text) node.textContent = text;
  return node;
}

export function validateEmail(value){
  var email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return email_pattern.test(value || "");
}


