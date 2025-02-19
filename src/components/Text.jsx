function Text({ type, content }) {
  return (
    <>
      {type == "h2" ? (
        <h2 style={{ marginLeft: "8%" }}>{content}</h2>
      ) : type == "h5" ? (
        <h5>{content}</h5>
      ) : type == "h1" ? (
        <h1 style={{ marginLeft: "10%" }}>{content}</h1>
      ) : (
        <p className="fs-5">{content}</p>
      )}
    </>
  );
}
export default Text;
