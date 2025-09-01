const prisma = require('../../utils/prisma');


async function getProducts(){
    const product = await prisma.products.findMany();
    return product;
}

async function create(dataProduct){ 
    const product = await prisma.products.create({
        data : {...dataProduct}
    })

    return product;
}

async function update(id,dataProduct){
    const product = await prisma.products.update({
        where:{
            id : id
        },
        data : {...dataProduct}
    })


    return product
}


async function deleteProducts(id){
    const product = await prisma.products.delete({
        where:{
            id:id
        },
    })

    return product
}


module.exports= {
    getProducts,
    create, 
    update,
    deleteProducts
}