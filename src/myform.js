

export let Myform = () => {


    return (
        <>
         <h1 className="text-center fst-italic ms-5"><ins> STAFF<span style={{color: 'red'}}>REGISTRATION </span>DETAILS</ins></h1>
            <br></br>
        <div className="row justify-content-center mt-3">
        <div className=" row align-items-center  ms-3 col-lg-4 mt-4 me-4 border border-dark"> 
            <label className="form-label fw-bold mt-3">Name : </label>
            <input type='text' className="form-control ms-5 col-3" placeholder="Enter your Name"></input>
            <br></br><br></br>
            <label className="form-label fw-bold">Age : </label>
            <input type='number' className="form-control ms-5" placeholder="Enter your Age"></input>
             <br></br><br></br>
            <label className="form-label fw-bold">Email : </label>
            <input type='email' className="form-control ms-5" placeholder="Enter your Email"></input>
            <br></br><br></br>
            <label className="form-label fw-bold">Address : </label>
            <textarea className="form-control ms-5" placeholder="Enter your Address"></textarea>
            <br></br><br></br>
            <label className="form-label fw-bold">Phone Number : </label>
            <input type='number' className="form-control ms-5" placeholder="Enter your Phone Number"></input>
            <br></br><br></br>
            <label className="form-label fw-bold">PAN Number : </label>
            <input type='number' className="form-control ms-5" placeholder="Enter your PAN Number"></input>
            <br></br>
            <div className="text-center mt-5">
            <button className="btn btn-outline-success text-center">SUBMIT</button>
            </div>
        </div>
        </div>
        </>
    )
}