const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    status: {
        type: String,
        enum: ['In Progress', 'Ready to Order', 'Completed', 'Archived'],
        default: 'In Progress'
    },
    thumbnail: String,
    icon: String,
    designData: {
        type: Map,
        of: mongoose.Schema.Types.Mixed
    },
    quantity: {
        type: Number,
        default: 1
    },
    price: Number,
    material: String,
    size: String,
    lastEdited: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
