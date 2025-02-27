function Child2({ type, content }) {
  return (
    <>
      {type == "h2" ? (
        <h2>{content}</h2>
      ) : type == "h3" ? (
        <h3>{content}</h3>
      ) : type == "h4" ? (
        <h4>{content}</h4>
      ) : (
        <h5>{content}</h5>
      )}
    </>
  );
}
export default Child2;
