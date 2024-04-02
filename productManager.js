class ProductManager {
    static ultId = 0;

    constructor() {
        this.products = [];
    }

    addProduct(product) {
        let { title, description, price, thumbnail, code, stock } = product;
        //Validación Nro 1 - Todos los campos son obligatorios
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log("Todos los campos son obligatorios.");
            return;
        }
        //Validación Nro 2 - La propiedad Code no puede repetirse
        if (this.products.some(item => item.code === code)) {
            console.log(`Ya existe un producto con el code ${code}`);
            return;
        }

        const newProduct = {
            id: ++ProductManager.ultId,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }

        this.products.push(newProduct);
    }

    getProducts() {
        console.log(this.products);
        return this.products;
    }

    getProductById(id) {        
        const product = this.products.find(product => product.id === id);

        if (!product) {
            console.log(`No existe el producto con ID ${id} en la base de datos`);
        } else {
            console.log(`El producto encontrado con el ID ${id} es:`);
            return product;
        }
    }
}

//  -----------------------------Tests--------------------------------//
const pm = new ProductManager();
console.log(pm);
//  -----------------------------Agregar un producto--------------------------------//
pm.addProduct({
  title: "Producto Nro1",
  description: "Soy el primer producto",
  price: 123,
  thumbnail: "Imagen.jpg", 
  code: "ASD123",
  stock: 25
});
pm.addProduct({
    title: "Producto Nro2",
    description: "Soy el segundo producto",
    price: 123,
    thumbnail: "Imagen.jpg", 
    code: "ASD124",
    stock: 40
});
//------------Validación Nro 1 - Todos los campos son obligatorios-------------------//
pm.addProduct({
    title: "Producto Nro3",
    description: "Soy el tercer producto",
    price: 123,
    code: "ASD125",
    stock: 19
}); 

//------------Validación Nro 2 - La propiedad Code no puede repetirse----------------//
pm.addProduct({
    title: "Producto Nro4",
    description: "Soy el cuarto producto",
    price: 123,
    thumbnail: "Imagen.jpg", 
    code: "ASD124",
    stock: 40
});

// --------------Obtener un producto por ID-------------------------//
console.log(pm.getProductById(2));
console.log(pm.getProductById(5));
// --------------Obtener todos los productos-------------------------//
console.log(pm.getProducts());