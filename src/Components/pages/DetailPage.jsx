import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

function DetailPage() {
  const { barcode } = useParams()
  const navigate = useNavigate()

  const [product, setProduct] = useState(null)

  useEffect(() => {
    axios
      .get(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
      .then((res) => setProduct(res.data.product))
  }, [barcode])

  if (!product) return <p>Loading...</p>

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      <h2>{product.product_name}</h2>
    </div>
  )
}

export default DetailPage