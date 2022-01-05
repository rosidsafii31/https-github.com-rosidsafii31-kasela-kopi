import dbConnect from "../../../utils/mongo";
import Artikel from "../../../models/Artikel";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;
  // const token = cookies.token

  dbConnect();

  if (method === "GET") {
    try {
      const artikel = await Artikel.findById(id);
      res.status(200).json(artikel);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "PUT") {
    if(!token || token !== process.env.token){
      return res.status(401).json("Not authenticated!")
    }
    try {
      const artikel = await Artikel.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(artikel);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "DELETE") {
    if(!token || token !== process.env.token){
      return res.status(401).json("Not authenticated!")
    }
    try {
      await Artikel.findByIdAndDelete(id);
      res.status(200).json("The product has been deleted!");
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
