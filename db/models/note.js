const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  timeStamp: {
    type: Number,
  },
  note: {
    type: String
  }
});

const Note = mongoose.model("Note", NoteSchema);

module.exports = Note;