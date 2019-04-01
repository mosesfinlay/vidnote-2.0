const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VideoSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId, 
    ref: "User"
  },
  title: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  videoLink: {
    type: String,
    required: true
  },
  notes: {
    type: [
      {
        type: Schema.Types.ObjectId,
        ref: "Note"
      }
    ],
  }
});

const Video = mongoose.model("Video", VideoSchema);

module.exports = Video;
