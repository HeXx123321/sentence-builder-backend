const mongoose = require('mongoose');

const adjectiveSchema = new mongoose.Schema({
 
   Word: {
   type: String,
      required: [true, 'This cannot be blank sorry ...'],
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
 
adjectiveSchema.pre('save', async function (next) {
   if (!this.isModified('Body')) {
       this.updatedAt = Date.now;
       next;
   }
 
   this.updatedAt = Date.now();
 
});
 
module.exports = mongoose.model('Adjective', adjectiveSchema);