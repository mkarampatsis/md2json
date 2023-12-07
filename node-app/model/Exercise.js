const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new mongoose.Schema({
  chapter: { type: String, required: true },
	subchapter: { type: Array, required: true }
}, { _id : false });

const hintSchema = new mongoose.Schema({
  text: { type: String, required: true },
	code: { type: String },
  penalty: { type: String, required: true },
}, { _id : false });

const authorSchema = new mongoose.Schema({
  name: { type: String, required: true },
	email: { 
    type: String, 
    required: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Email address is not valid",
    ], 
  }
}, { _id : false });

const exerciseSchema = new Schema({
		introduction: { type: Array, required: true },
		subintroduction: { type: Array, required: true },
		exercise_description: { type: Array, required: true },
		category: { type: categorySchema, required: true },
    hints: { type: [hintSchema], required: true },
    author: { type: authorSchema, required: true },
		exercise: { type: String, required: true },
    type: { type: String, required: true },
    code: { type: String, required: true },
    output: { type: Array, required: true }
	});

// Apply the uniqueValidator plugin to userSchema.
// exerciseSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Exercise',exerciseSchema);