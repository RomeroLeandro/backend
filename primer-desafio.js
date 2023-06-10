class ProductManager {
    constructor() {
        this.products = []
    }
    getProducts () {
        return this.products;
    }
    getProductById(id) {
        const product = this.products.find(product => product.id === id)
        if (product) {
            return product
        } else {
            console.log("Not Found")
        }
    }
    addProduct(p){
        if (!p.tittle || !p.description || !p.thumbnail || !p.code || !p.stock){
            console.log("Todos los campos son obligatorios")
        }
        const existCode = this.products.find(prod => prod.code === p.code)
        if(existCode){
            console.log("El codigo del poducto ya existe");
            return;
        }
        const newProduct = {
            id: this.products.length +1,
            tittle: p.tittle,
            description: p.description,
            price: p.price,
            thumbnail: p.thumbnail,
            code: p.code,
            stock: p.stock,
            date: p.date ? new Date(p.date) : new Date()
        }
        this.products.push(newProduct)
    }
}
const productManager = new ProductManager()

const product1 =  {
    tittle: "Teclado",
    description: "Teclado mecanico RGB",
    price: 15.000,
    thumbnail: "teclado-mecanico.png",
    code: "BC001",
    stock: 5,
    date: "2023-01-01"
}
const product2 =  {
    tittle: "Mouse",
    description: "Mouse inalambrico",
    price: 12.000,
    thumbnail: "mouse-inalambrico.png",
    code: "BC002",
    stock: 15,
    date: "2023-10-05"
}
const product3 =  {
    tittle: "Auriculares",
    description: "Auriculares inalambricos",
    price: 15.000,
    thumbnail: "auriculares-inalambricos.png",
    code: "BC003",
    stock: 21,
    date: "2023-01-22"
}

productManager.addProduct(product1)
productManager.addProduct(product2)
productManager.addProduct(product3)
productManager.getProducts();
console.log(productManager);
console.log(productManager.getProductById(4))