const {
    getProducts,
    create,
    update,
    deleteProducts
} = require('../products/product.repo')

const getAllProducts = async()=>{
    try {
        const products = await getProducts()

        return products
    } catch (err) {
        throw err 
    }
}

const createProduct = async (dataProduct) =>{
    try {
        const product = await create(dataProduct)
        return product
    } catch (err) {
        throw err
    }
}

const updateProduct = async(id,dataProduct)=>{
    try {
        const product = await update(id, dataProduct)
        return product
    } catch (error) {
        
    }
}

const deleteProduct = async(id)=>{
    try {
        const product = await deleteProducts(id)
        return product
    } catch (error) {
        
    }
}

module.exports={
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct
}