function Child(childprops) {
  const handleClick = () => {
    childprops.parentprops("SABA MUKHTAR");
  };
  return (
    <>
      <button onClick={handleClick}>Send data</button>
    </>
  );
}
export default Child;
