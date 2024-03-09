const Socials = () => {
    return (
      <div className="socials">
        <h1>Edit Social</h1>
        <form>
          <input type="text" name="text" placeholder="Facebook" /> <br />
          <input type="text" name="text" placeholder="LinkedIn" /> <br />
          <input type="text" name="text" placeholder="Twitter" /> <br />
          <input type="text" name="text" placeholder="Portfolio URL" /> <br />
          <input type="text" name="text" placeholder="Github URL" /> <br />
          <button>Submit</button>
        </form>
      </div>
    );
}
 
export default Socials;