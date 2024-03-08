const Edit = () => {
    return (
      <div className="icon">
        <h1>Edit Education</h1>
        <input
          type="text"
          name="text"
          placeholder="Name Of School"
          required
        />
        <br />
        <input type="text" name="text" placeholder="Degree" required /> <br />
        <input
          type="text"
          name="text"
          placeholder="Institution"
          required
        />
        <br />
        <input
          type="text"
          name="text"
          placeholder="Field Of Study"
          required
        />
        <br />
        <input type="text" name="text" placeholder="Start Year" required />{" "}
        <br />
        <input type="text" name="text" placeholder="End Year" required /> <br />
        <input
          type="text"
          name="text"
          placeholder="Institution Website"
          required
        />
        <br />
        <input
          type="text"
          name="text"
          placeholder="Description"
          required
        />
        <br />
        <button>Submit</button>
      </div>
    );
}
 
export default Edit;