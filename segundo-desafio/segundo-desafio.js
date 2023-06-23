
const fs = require('fs').promises;

class ProductManager {
  constructor(path) {
    this.products = [];
    this.path = path; 
  }

//   crear producto
  async addProduct(product) {
    product.id = this.products.length +1;
    this.products.push(product);
    await this.saveToFile();
  }

//   obtener producto por id
  async getProductById(id) {
    try {
      const data = await fs.readFile(this.path, 'utf8');
      const products = JSON.parse(data);
      const product = products.find((p) => p.id === id);
      return product || null;
    } catch (error) {
      console.error('Error al leer el archivo:', error);
      return null;
    }
  }

//   actualizar producto
  async updateProduct(id, updatedData) {
    try {
      const data = await fs.readFile(this.path, 'utf8');
      const products = JSON.parse(data);
      const index = products.findIndex((p) => p.id === id);
      if (index !== -1) {
        products[index] = { ...products[index], ...updatedData };
        await fs.writeFile(this.path, JSON.stringify(products, null, 2));
        console.log('Producto actualizado correctamente.');
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error al actualizar el producto:', error);
      return false;
    }
  }

//   eliminar producto
  async deleteProduct(id) {
    try {
      const data = await fs.readFile(this.path, 'utf8');
      const products = JSON.parse(data);
      const filteredProducts = products.filter((p) => p.id !== id);
      await fs.writeFile(this.path, JSON.stringify(filteredProducts, null, 2));
      console.log('Producto eliminado correctamente.');
      return true;
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
      return false;
    }
  }

//   obtener productos
  async getProducts() {
    try {
      const data = await fs.readFile(this.path, 'utf8');
      const products = JSON.parse(data);
      return Array.isArray(products) ? products : [];
    } catch (error) {
      console.error('Error al leer el archivo:', error);
      return [];
    }
  }

//   guardar datos
  async saveToFile() {
    const data = JSON.stringify(this.products, null, 2);
    try {
      await fs.writeFile(this.path, data);
      console.log('Producto guardado correctamente.');
    } catch (error) {
      console.error('Error al guardar el producto:', error);
    }
  }
}

const manager = new ProductManager("../segundo-desafio/datos.json");

(async () => {

  
  // devuelve array vacio
  // const products = await manager.getProducts();
  // console.log('Productos:', products);

  // const product = await manager.getProductById()
  // console.log('productById', product)


  //   agrega nuevo producto al array
  // const newProduct = { tittle: "Teclado",
  // description: "Teclado mecanico RGB",
  // price: 15.000,
  // thumbnail: "teclado-mecanico.png",
  // code: "BC001",
  // stock: 5,
  // date: "2023-01-01" };
  // await manager.addProduct(newProduct);


  //   agrega nuevo producto al array
  // const newProduct2 = { tittle: "Auriculares",
  // description: "Auriculares inalambricos",
  // price: 15.000,
  // thumbnail: "auriculares-inalambricos.png",
  // code: "BC003",
  // stock: 21,
  // date: "2023-01-22" };
  // await manager.addProduct(newProduct2);

  
  //   agrega nuevo producto al array
  // const newProduct3 = { tittle: "Mouse",
  // description: "Mouse inalambrico",
  // price: 12.000,
  // thumbnail: "mouse-inalambrico.png",
  // code: "BC002",
  // stock: 15,
  // date: "2023-10-05" };
  // await manager.addProduct(newProduct3);


  //   obtiene el producto segun su id
  // const productId = 1;
  // const product = await manager.getProductById(productId);
  // console.log(`Producto con ID ${productId}:`, product);


  //   eliminar producto segun su ID
  // const isDeleted = await manager.deleteProduct(productId);
  // console.log('Producto eliminado:', isDeleted);


  //   actualizar producto
  // const updatedData = { description: "Teclado gamer mecanico RGB", price: 19 };
  // const isUpdated = await manager.updateProduct(productId, updatedData);
  // console.log('Producto actualizado:', isUpdated);


  // const updatedProducts = await manager.getProducts();
  // console.log('Productos actualizados:', updatedProducts);
})();
module.exports = new ProductManager("../segundo-desafio/datos.json");

