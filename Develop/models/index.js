// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
foreignKey: 'category_id',
through: {
  model: Category,
  unique: false
  },

});

// Categories have many Products
Category.hasMany(Product, {

});


Product.belongsToMany(Tag, {
  foreignKey: 'product_id',
  through: {
    model: ProductTag,
    unique: true,
  },


});


Tag.belongsToMany(ProductTag, {
  foreignKey: 'tag_id',
through: {
  model: ProductTag,
  unique: true,
},

});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
