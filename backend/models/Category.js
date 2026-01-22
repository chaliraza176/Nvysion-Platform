const mongoose = require('mongoose');

const subcategorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    items: [{
        name: { type: String, required: true },
        slug: { type: String, required: true }
    }]
});

const categorySchema = new mongoose.Schema({
    id: Number,
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    icon: String,
    image: String,
    gradient: String,
    subcategories: [subcategorySchema]
}, { timestamps: true });

module.exports = mongoose.model('Category', categorySchema);
