const Educations = () => {
    return (
      <div className="educations">
        <h1>Edit Education</h1>
        <form>
          <input type="text" name="text" placeholder="Name of School" /> <br />
          <input type="text" name="text" placeholder="Degree" /> <br />
          <input type="text" name="text" placeholder="Institution" /> <br />
          <input type="text" name="text" placeholder="Field of Study" /> <br />
          <input type="text" name="text" placeholder="Start Year" /> <br />
          <input type="text" name="text" placeholder="End Year" /> <br />
          <input
            type="text"
            name="text"
            placeholder="Institution Website"
          />
          <br />
          <input type="text" name="text" placeholder="Description" /> <br />
          <button>Submit</button>
        </form>
      </div>
    );
}
 
export default Educations;