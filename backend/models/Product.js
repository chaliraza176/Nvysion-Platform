const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String,
        required: true
    },
    subcategory: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    startingPrice: {
        type: Number,
        required: true
    },
    images: [{
        type: String
    }],
    materials: [{
        name: String,
        price: Number,
        popular: { type: Boolean, default: false }
    }],
    quantities: [{
        qty: Number,
        price: Number
    }],
    features: [String],
    specifications: {
        type: Map,
        of: String
    },
    sizes: [{
        name: String,
        dimensions: String,
        price: Number
    }],
    customizationOptions: {
        type: Map,
        of: mongoose.Schema.Types.Mixed
    },
    rating: {
        average: { type: Number, default: 0 },
        count: { type: Number, default: 0 }
    },
    inStock: {
        type: Boolean,
        default: true
    },
    featured: {
        type: Boolean,
        default: false
    },
    type: {
        type: String,
        enum: ['bundle', 'unit'],
        default: 'unit'
    }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
