export default function productPage({ params: { id } }: { params: { id: string } }) {
    return (<div>Product {id}</div>)
}