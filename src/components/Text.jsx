function Text({ type, content }) {
  return (
    <>
      {type == "h2" ? (
        <h2 style={{ marginLeft: "8%" }}>{content}</h2>
      ) : type == "h5" ? (
        <h5>{content}</h5>
      ) : (
        <p className="fs-5">{content}</p>
      )}
    </>
  );
}
export default Text;
