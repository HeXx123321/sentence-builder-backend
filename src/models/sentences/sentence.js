const mongoose = require('mongoose');

const sentenceSchema = new mongoose.Schema({
    sentenceNumber: {
        type: String,
        minlength: [1, 'This is autogenerated, relax.'],
        default: 1
    },

    sentenceBody: {
        type: String,
        required: [true, 'Just build a random sentence...'],
    },

    updatedAt: {
        type: Date,
    },

    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },

})

sentenceSchema.pre("save", async function (next) {
    if (!this.isModified("sentenceBody")) {
        this.updatedAt = Date.now;
        next;
    }

    this.updatedAt = Date.now();
    // this.sentenceNumber = 1;
});

module.exports = mongoose.model("Sentence", sentenceSchema);
