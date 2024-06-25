// platformSellRequest.model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define PlatformSellRequest schema
const PlatformSellRequestSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['PENDING', 'APPROVED', 'REJECTED'],
        default: 'PENDING'
    },
    created: {
        type: Date,
        default: Date.now
    }
});

// Create model for PlatformSellRequest
const PlatformSellRequest = mongoose.model('PlatformSellRequest', PlatformSellRequestSchema);

module.exports = PlatformSellRequest;
