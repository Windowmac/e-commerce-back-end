// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Categories have many Products
// Products belongsTo Category
Category.hasMany(Product, {
  foreignKey: 'category_id',
});

Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Products belongToMany Tags (through ProductTag)
// Tags belongToMany Products (through ProductTag)
ProductTag.belongsToMany(Tag, { through: 'tag_id' });
Tag.belongsToMany(ProductTag, { through: 'tag_id' });

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
