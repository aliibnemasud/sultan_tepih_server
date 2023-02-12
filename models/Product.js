const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    
    title: {
      type: String,
      required: [true, "Please provide a tile"],
      trim: true,
      minLength: [3, "Minimum length must be 3 character"]
    },
    code: {
        type: String,
        required: true
    },
    price: {
        type: Array,
        required: true
    },
    desc: {
        type: Array,
        required: true
    },
    specs: {
        type: Array,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    colors: {
        type: Array,
        required: true
    },
    category: {
        type: Array,
        required: true
    },
    collectionName: {
        type: String,
        required: true
    },
    sizes: {
        type: Array,
        required: true
    },
    featured: {
        type: String,
        required: true
    },
    discount: {
        type: String        
    },
    discountPrice: {
        type: String       
    },
    createdAt: {
        type: String       
    },    
    updateAt: {
      type: Date,
      default: Date.now,
    }
  })
  
  // SCHEMA ->  MODEL -> QUERY
  
  const Product = mongoose.model('Product', productSchema);

  module.exports = Product;