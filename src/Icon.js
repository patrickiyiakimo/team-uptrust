const Edit = () => {
    return (
      <div className="icon">
        <h1>Edit Education</h1>
        <input type="text" name="text" placeholder="Name Of School" /> <br />
        <input type="text" name="text" placeholder="Degree" /> <br />
        <input type="text" name="text" placeholder="Institution" /> <br />
        <input type="text" name="text" placeholder="Field Of Study" /> <br />
        <input type="text" name="text" placeholder="Start Year" /> <br />
        <input type="text" name="text" placeholder="End Year" /> <br />
        <input type="text" name="text" placeholder="Institution Website" />{" "}
        <br />
        <input type="text" name="text" placeholder="Description" /> <br />
        <button>Submit</button>
      </div>
    );
}
 
export default Edit;