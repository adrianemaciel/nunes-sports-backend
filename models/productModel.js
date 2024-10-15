export async function getAllProducts(callback) {
  try {
    const { data, error } = await from("products").select("*");

    if (error) {
      return callback(error);
    }
    callback(null, data);
  } catch (err) {
    callback(err);
  }
}

export async function createProduct(product, callback) {
  const { name, code, description, price } = product;

  try {
    const { data, error } = await from("products").insert([
      { name, code, description, price },
    ]);

    if (error) {
      return callback(error);
    }
    callback(null, data);
  } catch (err) {
    callback(err);
  }
}

export async function updateProduct(id, product, callback) {
  const { name, code, description, price } = product;

  try {
    const { data, error } = await from("products")
      .update({ name, code, description, price })
      .eq("id", id);

    if (error) {
      return callback(error);
    }
    callback(null, data);
  } catch (err) {
    callback(err);
  }
}

export async function deleteProduct(id, callback) {
  try {
    const { data, error } = await from("products").delete().eq("id", id);

    if (error) {
      return callback(error);
    }
    callback(null, data);
  } catch (err) {
    callback(err);
  }
}
