function SavedPage({ saved, dispatch }) {
  return (
    <div>
      <h2>Saved Items</h2>

      {saved.map((item) => (
        <div key={item.code}>
          <p>{item.product_name}</p>
          <button onClick={() => dispatch({ type: 'REMOVE', code: item.code })}>
            Remove
          </button>
        </div>
      ))}
    </div>
  )
}

export default SavedPage