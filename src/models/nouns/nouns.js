const mongoose = require('mongoose');

const nounSchema = new mongoose.Schema({
 
   Word: {
   type: String,
      required: [true, 'Sort of scratching head here...'],
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
 
nounSchema.pre('save', async function (next) {
   if (!this.isModified('Body')) {
       this.updatedAt = Date.now;
       next;
   }
 
   this.updatedAt = Date.now();
 
});
 
module.exports = mongoose.model('Noun', nounSchema);