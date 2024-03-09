const Experience = () => {
    return (
      <div className="experience">
        <h1>Edit Experience</h1>
        <form>
          <input type="text" name="text" placeholder="Job Title" /> <br />
          <input type="text" name="text" placeholder="Company" /> <br />
          <input type="text" name="text" placeholder="Start Date" /> <br />
          <input type="text" name="text" placeholder="End Date" /> <br />
          <input type="text" name="text" placeholder="Location" /> <br />
          <input type="text" name="text" placeholder="Description" /> <br />
          <button>Submit</button>
        </form>
      </div>
    );
}
 
export default Experience;