import React from 'react';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import TagsInput from 'react-tagsinput'

import 'react-tagsinput/react-tagsinput.css'

function LeadForm() {
    const [tags, setTags] = useState({ tags: [] })

    const handleChangeTags = (tags) => {
        setTags({ tags })
    }

    // const top100Films = [
    //     { title: 'The Shawshank Redemption' },
    //     { title: 'The Godfather'},
    //     { title: 'The Godfather: Part II' },
    //     { title: 'The Dark Knight'},
    //     { title: '12 Angry Men'}]
    return (
        <>
            <div className="container-fluid dark p-5 pt-4 pb-4" style={{ fontSize: "14px", color: "#E4E4E4" }}>
                <form>
                    <div className="row">
                        <div className="col-3">
                            <div className="mb-3">
                                <label htmlFor="exampleInputPhone" className="form-label">
                                    Status
                                </label>
                                <div class="input-group">
                                    <select class="form-select form-select-top backtransparent" id="inputGroupSelect04" aria-label="Example select with button addon">
                                        <option selected>Choose...</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                    <a href='#' class="mybtn d-flex justify-content-center align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#FFFFFF" class="bi bi-plus-lg" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="mb-3">
                                <label htmlFor="exampleInputPhone" className="form-label">
                                    Sourse
                                </label>
                                <div class="input-group">
                                    <select class="form-select form-select-top backtransparent" id="inputGroupSelect04" aria-label="Example select with button addon">
                                        <option selected>Choose...</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                    <a href='#' class="mybtn d-flex justify-content-center align-items-center" >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#FFFFFF" class="bi bi-plus-lg" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 d-flex align-items-center offset-3">
                            <div className='assignImg' >
                                <img src="https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg" width="100%" height="100%" alt="cccxcscds" />
                            </div>
                            <div class="form-floating" >
                                <select class="form-select form-select-top-left backtransparent" id="floatingSelect" aria-label="Floating label select example">
                                    <option selected >Select</option>
                                    <option value="1">Abhishek Singh</option>
                                    <option value="2">Rohit Singh</option>
                                    <option value="3">Ajay Singh</option>
                                </select>
                                <label for="floatingSelect">Assigned To</label>
                            </div>
                        </div>
                    </div>
                </form>

                <hr className='divider' size={"5px"} />

                <form>
                    <h5 className='mb-3'>Lead Form</h5>
                    <div className="row">
                        <div className="col-4">
                            <div className="mb-3">
                                <label htmlFor="exampleInputName" className="form-label">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputName"
                                    aria-describedby="NameHelp"
                                    placeholder='Enter Name'
                                />
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="mb-3">
                                <label htmlFor="exampleInput" className="form-label">
                                    Father's Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInput"
                                    aria-describedby="NameHelp"
                                    placeholder="Enter Father's Name"
                                />
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="mb-3">
                                <label htmlFor="exampleInputPhone" className="form-label d-flex justify-content-between">
                                    Mobile No.1
                                    <div class="">
                                        <input type="checkbox" class="form-check-input mx-1" id="exampleCheck1" />
                                        <label class="form-check-label" for="exampleCheck1">Whatsapp</label>
                                    </div>
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputPhone"
                                    aria-describedby="emailHelp"
                                    placeholder='Enter Mobile No.1'
                                />
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="mb-3">
                                <label htmlFor="exampleInputPhone" className="form-label d-flex justify-content-between">
                                    Mobile No.2
                                    <div class="">
                                        <input type="checkbox" class="form-check-input mx-1" id="exampleCheck1" />
                                        <label class="form-check-label" for="exampleCheck1">Whatsapp</label>
                                    </div>
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputPhone"
                                    aria-describedby="emailHelp"
                                    placeholder='Enter Mobile No.2'
                                />
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="mb-3">
                                <label htmlFor="exampleInput" className="form-label">
                                    City
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInput"
                                    aria-describedby="emailHelp"
                                    placeholder='Enter City'
                                />
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail" className="form-label">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail"
                                    aria-describedby="emailHelp"
                                    placeholder='Enter Email'
                                />
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="mb-3">
                                <label htmlFor="exampleInput" className="form-label">
                                    DOB(DD/MM/YYYY)
                                </label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="exampleInput"
                                    aria-describedby="emailHelp"
                                    placeholder='DD/MM/YYYY'
                                />
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="mb-3">
                                <label htmlFor="exampleInputAddress" className="form-label">
                                    Complete Address
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputAddress"
                                    aria-describedby="emailHelp"
                                    placeholder='Enter Address'
                                />
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="mb-3">
                                <label htmlFor="exampleInputPhone" className="form-label">
                                    Degree/Diploma Certification
                                </label>
                                <select class="form-select form-select-bottom backtransparent" aria-label="Default select example">
                                    <option selected>select</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="mb-3">
                                <label htmlFor="exampleInput" className="form-label">
                                    Board University
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInput"
                                    aria-describedby="emailHelp"
                                    placeholder='Enter Your Board University Name'
                                />
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="mb-3">
                                <label htmlFor="exampleInput" className="form-label">
                                    Year Of Passing
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInput"
                                    aria-describedby="emailHelp"
                                    placeholder='Enter Your Year Of Passing'
                                />
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="mb-3">
                                <label htmlFor="exampleInputPhone" className="form-label">
                                    Instrested In
                                </label>
                                <select class="form-select form-select-bottom backtransparent" aria-label="Default select example">
                                    <option selected>select</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-4">
                            <label htmlFor="exampleInputPhone" className="form-label">
                                Known About Technosters Through
                            </label>
                            <select class="form-select form-select-bottom backtransparent" aria-label="Default select example">
                                <option selected>select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="col-4">
                            <div className="mb-3">
                                <label htmlFor="exampleInput" className="form-label">
                                    Attended By
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInput"
                                    aria-describedby="emailHelp"
                                    placeholder='Enter Attended By'
                                />
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="mb-3">
                                <label htmlFor="exampleInput" className="form-label">
                                    Lead Value
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInput"
                                    aria-describedby="emailHelp"
                                    placeholder='Enter Lead Value'
                                />
                            </div>
                        </div>
                        <div className="col-8">
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Tags</label>
                                {/* <textarea class="form-control form-control-textarea backtransparent" id="exampleFormControlTextarea1" rows="1"></textarea> */}
                                <TagsInput value={tags?.tags} onChange={handleChangeTags} />
                                {/* <Stack spacing={2} sx={{ width: 500 }}>
                                    <Autocomplete
                                        multiple
                                        id="size-small-standard-multi"
                                        size="small"
                                        options={top100Films}
                                        getOptionLabel={(option) => option.title}
                                        defaultValue={[top100Films[4]]}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                variant="standard"
                                                label="Size small"
                                                placeholder="Favorites"
                                            />
                                        )}
                                    />
                                </Stack> */}
                            </div>
                        </div>
                    </div>
                    <hr className='divider' size={"5px"} />
                    <div className='d-flex justify-content-end'>
                        <button className=' btn-border-purple'> Cancel </button>
                        <button className=' btn-purple mx-4'> Submit </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default LeadForm
