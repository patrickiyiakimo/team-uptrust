const Addresses = () => {
  return (
    <div className="addresses">
      <h1>Edit Address</h1>
      <form>
        <input type="text" name="text" placeholder="Address 1" /> <br />
        <input type="text" name="text" placeholder="Address 2" /> <br />
        <input type="text" name="text" placeholder="City" /> <br />
        <input type="text" name="text" placeholder="Post COde" /> <br />
        <input type="text" name="text" placeholder="Country" /> <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Addresses;
