import { Product } from '../../models/products';


export const listar = async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
};