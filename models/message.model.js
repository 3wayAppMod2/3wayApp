const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema ({
    description: {
        type: String,
        required: 'Description is required'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
}, { timestamps: true });

const Message = mongoose.model('Message', messageSchema);
module.exports = Message;


