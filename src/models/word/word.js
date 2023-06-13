const mongoose = require('mongoose');

const wordSchema = new mongoose.Schema({

    Word: {
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

wordSchema.pre("save", async function (next) {
    if (!this.isModified("wordBody")) {
        this.updatedAt = Date.now;
        next;
    }

    this.updatedAt = Date.now();
    // this.sentenceNumber = 1;
});

module.exports = mongoose.model("Word", wordSchema);
