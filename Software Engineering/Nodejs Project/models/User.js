const mongoose = require( 'mongoose' ),
  userSchema = mongoose.Schema( {
    name: String,
    csc141: String,
    csc142: String,
    csc240: String,
    csc241: String,
    gpa: String
  } );
module.exports = mongoose.model( 'User', userSchema );