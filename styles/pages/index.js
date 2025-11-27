import Image from "next/image";

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Christmas LED Lights",
      price: 19.99,
      img: "https://images.unsplash.com/photo-1545205597-3d9d02c29597"
    },
    {
      id: 2,
      name: "Santa Claus Cap",
      price: 9.99,
      img: "https://images.unsplash.com/photo-1543589077-47d81606c1bf"
    },
    {
      id: 3,
      name: "Christmas Tree Decor",
      price: 29.99,
      img: "https://images.unsplash.com/photo-1601134467661-3d5e3f3b062e"
    },
    {
      id: 4,
      name: "Gift Box Set",
      price: 14.99,
      img: "https://images.unsplash.com/photo-1601850494422-3c31b5bb9ddf"
    },
  ];

  return (
    <div>
      <nav>
        <h2>🎄 Christmas Joy Store</h2>
        <p>Best Festive Deals</p>
      </nav>

      <div className="product-grid">
        {products.map((p) => (
          <div key={p.id} className="product-card">
            <Image
              src={p.img}
              width={300}
              height={300}
              alt={p.name}
            />
            <h3>{p.name}</h3>
            <p>${p.price}</p>
            <button>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}
