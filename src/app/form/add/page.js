import { addEmployee } from "@/helpers/actions";

export default function AddPage() {

    return (
     <>
      <h1>Add employee</h1>
      <div>
        <form action={addEmployee}>
          <input type="text" className="form-control mb-3" id="fullname"
            placeholder="Enter the fullname" name="fullname"
          />

          <input type="text" className="form-control mb-3" id="position"
            placeholder="Enter the position" name="position"
          />

          <input type="text" className="form-control mb-3" id="age"
            placeholder="Enter the age" name="age"
          />

          <button type="submit" className="btn btn-primary">
            Add employee
          </button>
        </form>
      </div>
     </>
    );
  }
  