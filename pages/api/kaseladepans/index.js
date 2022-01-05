import dbConnect from "../../../utils/mongo";
import Kaseladepan from "../../../models/Kaseladepan";

export default async function handler(req, res) {
  const { method } = req;


  dbConnect();

  if (method === "GET") {
    try {
      const kaseladepans = await Kaseladepan.find();
      res.status(200).json(kaseladepans);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "POST") {
    try {
        const kaseladepan = await Kaseladepan.create(req.body);
        res.status(200).json(kaseladepan);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
