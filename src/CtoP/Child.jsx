function Child(props) {
  const handledata = () => {
    props.parentprops("SABA MUKHTAR");
    props.parentprops("Abrar Hussain");
    props.parentprops("Zahida perveen");
    props.parentprops("Abrar hussain");
  };
  return (
    <>
      <button type="button" onClick={handledata}>
        Send data
      </button>
    </>
  );
}

export default Child;
