import React from 'react';


const Common=(props)=>{
    return(
        <>
        <div className="my-4">
        <h2 className="text-center">{props.name}</h2>
        </div>
        <div className="container contact_div">
        <div className="row">
        <div className="col-md-5 col-10 mx-auto">
        <form>
  <div className="form-col">
    <div className="form-group">
    
    <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputName">First Name</label>
      <input type="text" className="form-control" id="inpuName" placeholder="Enter Your First Name" />
    </div>
    <div className="form-group col-md-6">
      <label for="inputName">Last Name</label>
      <input type="text" className="form-control" id="inpuName" placeholder="Enter Your Last Name" />
    </div>
    </div>
    
      <label for="inputEmail4">Email</label>
      <input type="email" className="col-md-12 form-control"  id="inputEmail4" placeholder="name@examole.com" />
      

  <div className="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" className="col-md-12  form-control" id="inputAddress" placeholder="1234 Main St" />
  </div>
  <div className="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" className="col-md-12 form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" className="form-control" id="inputCity" />
    </div>
    <div className="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" className="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div className="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" className="form-control" id="inputZip" />
    </div>
  </div>
  <div className="form-group">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck" />
      <label className="form-check-label" for="gridCheck">
        Check me out
      </label>
      </div>
    
  </div>
    
  <button type="submit" class="btn btn-primary">Submit</button>
  </div>
  </div>
      
</form>

        </div>
        </div>
        </div>
        </>
    );
};


export default Common;

