const mongoose = require('mongoose');

const adverbSchema = new mongoose.Schema({

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

adverbSchema.pre("save", async function (next) {
    if (!this.isModified("Body")) {
        this.updatedAt = Date.now;
        next;
    }

    this.updatedAt = Date.now();
});

module.exports = mongoose.model("Adverb", adverbSchema);
