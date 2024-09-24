import comic from "../_/comic.js";

export default async (req, res) => {
  const data = await comic();
  res.json(data);
}
