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
    type: Number,
    required: true
  },
  url: {
    type: String,
    required: true,
    unique: true
  },
  thumbnail: {
    type: String,
    required: true
  },
  notes: {
    type: [
      {
        timeStamp: {
          type: Number,
          required: true
        },
        text: {
          type: String,
          required: true
        }
      }
    ],
  }
});

const Video = mongoose.model("Video", VideoSchema);

module.exports = Video;
