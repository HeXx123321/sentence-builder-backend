const mongoose = require('mongoose');

const exclamationSchema = new mongoose.Schema({

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

exclamationSchema.pre("save", async function (next) {
    if (!this.isModified("Body")) {
        this.updatedAt = Date.now;
        next;
    }

    this.updatedAt = Date.now();
    // this.sentenceNumber = 1;
});

module.exports = mongoose.model("Exclamation", exclamationSchema);
