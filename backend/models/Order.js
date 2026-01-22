const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    productName: String,
    quantity: {
        type: Number,
        required: true,
        min: 1
    },
    material: String,
    size: String,
    customization: {
        type: Map,
        of: mongoose.Schema.Types.Mixed
    },
    price: {
        type: Number,
        required: true
    },
    // 4over specific fields
    is4overProduct: {
        type: Boolean,
        default: false
    },
    fourOverProductId: String,
    fourOverConfig: {
        size: String,
        paperType: String,
        coating: String,
        turnaround: String,
        printSides: String
    },
    printFileId: String
});

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    orderNumber: {
        type: String,
        required: true,
        unique: true
    },
    items: [orderItemSchema],
    shippingAddress: {
        name: String,
        street: String,
        city: String,
        state: String,
        zipCode: String,
        country: String
    },
    paymentMethod: {
        type: String,
        required: true
    },
    paymentStatus: {
        type: String,
        enum: ['pending', 'completed', 'failed', 'refunded'],
        default: 'pending'
    },
    orderStatus: {
        type: String,
        enum: ['pending', 'processing', 'printing', 'shipped', 'delivered', 'cancelled'],
        default: 'pending'
    },
    subtotal: {
        type: Number,
        required: true
    },
    tax: {
        type: Number,
        default: 0
    },
    shipping: {
        type: Number,
        default: 0
    },
    total: {
        type: Number,
        required: true
    },
    notes: String,
    trackingNumber: String,
    estimatedDelivery: Date,
    
    // 4over Integration Fields
    fourOverOrderId: {
        type: String,
        default: null
    },
    fulfillmentPartner: {
        type: String,
        enum: ['internal', '4over', null],
        default: null
    },
    fourOverStatus: {
        type: String,
        enum: ['pending', 'received', 'processing', 'printing', 'shipped', 'delivered', null],
        default: null
    },
    printFiles: [{
        fileId: String,
        fileName: String,
        uploadedAt: Date,
        status: {
            type: String,
            enum: ['pending', 'approved', 'rejected'],
            default: 'pending'
        }
    }]
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
