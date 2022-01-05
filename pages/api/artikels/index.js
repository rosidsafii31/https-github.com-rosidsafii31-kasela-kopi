import dbConnect from "../../../utils/mongo";
import Artikel from "../../../models/Artikel";

export default async function handler(req, res) {
  const { method } = req;


  dbConnect();

  if (method === "GET") {
    try {
      const artikels = await Artikel.find().sort({_id:-1});
      res.status(200).json(artikels);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "POST") {
    try {
        const artikel = await Artikel.create(req.body);
        res.status(200).json(artikel);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
