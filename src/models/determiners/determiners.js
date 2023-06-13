const mongoose = require('mongoose');

const determinerSchema = new mongoose.Schema({

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

determinerSchema.pre("save", async function (next) {
    if (!this.isModified("Body")) {
        this.updatedAt = Date.now;
        next;
    }

    this.updatedAt = Date.now();

});

module.exports = mongoose.model("Determiner", determinerSchema);
