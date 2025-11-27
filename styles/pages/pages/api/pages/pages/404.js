export default function Custom404() {
  return (
    <div style={{
      textAlign: "center",
      padding: "80px",
      fontFamily: "Arial"
    }}>
      <h1>🚫 Page Not Found</h1>
      <p>Your Christmas Store is online — but this page does not exist.</p>
      <a
        href="/"
        style={{
          display: "inline-block",
          marginTop: "20px",
          padding: "10px 20px",
          background: "#d62828",
          color: "white",
          borderRadius: "6px",
          textDecoration: "none"
        }}
      >
        Go to Homepage
      </a>
    </div>
  );
}
