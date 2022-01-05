import mongoose from "mongoose";

const KaseladepanSchema = new mongoose.Schema(
  {
    logo: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      maxlength: 60,
    },
    contentisi: {
      type: String,
      required: true,
    },
    imgsamping: {
        type: String,
        required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Kaseladepan || 
mongoose.model("Kaseladepan", KaseladepanSchema);
