import EditProductForm from "@/components/products/EditProductForm"
import ProductForm from "@/components/products/ProductForm"
import GoBackButton from "@/components/ui/GoBackButton"
import Heading from "@/components/ui/Heading"
import { prisma } from "@/src/lib/prisma"
import { notFound } from "next/navigation"

async function getProductById(id: number) {
  const product = await prisma.product.findUnique({
    where: {
      id
    }
  })

  if (!product) {
    notFound()
  }

  return product
}

export default async function EditProductsPage({params}: {params: Promise<{id: string}>}) {
  const { id } = await params
  const product = await getProductById(+id)
  console.log(product)
  return (
    <>
      <Heading>Editar Producto: <b>{ product.name }</b></Heading>
      <GoBackButton />
      <EditProductForm>
        <ProductForm product={product} />
      </EditProductForm>
    </>
  )
}
