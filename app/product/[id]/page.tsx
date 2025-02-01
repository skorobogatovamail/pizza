export default async function productPage({ params }: { params: { id: string } }) {
    const { id } = await params;
    return (<div>Product {id}</div>)
}