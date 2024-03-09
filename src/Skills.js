const Skills = () => {
    return (
      <div className="skills">
        <h1>Edit Skills</h1>
        <form>
          <input type="text" name="text" placeholder="Name" /> <br />
          <input type="text" name="text" placeholder="Level" /> <br />
          <input type="text" name="text" placeholder="Description" /> <br />
          <button>Submit</button>
        </form>
      </div>
    );
}
 
export default Skills;