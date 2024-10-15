const supabase = require("../supabaseClient");

const getProducts = async (req, res) => {
  try {
    const { data, error } = await supabase.from("products").select("*");

    if (error) {
      throw error;
    }

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createProduct = async (req, res) => {
  const product = req.body;

  try {
    const { error } = await supabase.from("products").insert([product]);

    if (error) {
      throw error;
    }

    res.status(201).json({ message: "Produto cadastrado com sucesso." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;

  if (
    !product.name ||
    !product.code ||
    !product.description ||
    !product.price
  ) {
    return res
      .status(400)
      .json({ message: "Todos os campos devem ser preenchidos!" });
  }

  try {
    const { error } = await supabase
      .from("products")
      .update(product)
      .eq("id", id);

    if (error) {
      throw error;
    }

    res.json({ message: "Produto atualizado com sucesso." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const { error } = await supabase.from("products").delete().eq("id", id);

    if (error) {
      throw error;
    }

    res.json({ message: "Produto excluído com sucesso." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
