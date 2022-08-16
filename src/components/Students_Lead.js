import React from 'react'
import Divider from '@mui/material/Divider';
import Table from '../components/Table.js'
import ActionButton from './buttons/ActionButton.jsx';

function Students_Lead() {

  return (
    <>
      <div className="container-fluid theme-color">
        <div className='top-navbar d-flex'>
          <ActionButton buttonName="New Lead" className='new-lead-btn my-3'/>
          <ActionButton buttonName={<i class="bi bi-download"></i>} className='download-btn mx-2 my-3'/>
          <ActionButton buttonName={<i class="bi bi-upload"></i>} className='upload-btn  my-3'/>
          <ActionButton buttonName={<i class="bi bi-file-bar-graph"></i>} className='bar-graph-btn mx-2 my-3'/>

          <Divider orientation="vertical" className='divider2' variant="middle" flexItem />

          <form className='d-flex lead-select-form'>
            <div className='mx-1 my-3'>
              <select class="form-select " aria-label="Default select example">
                <option selected>Assigned</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className='mx-1 my-3'>
              <select class="form-select" aria-label="Default select example">
                <option selected>Assigned</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className='mx-1 my-3'>
              <select class="form-select" aria-label="Default select example">
                <option selected>Assigned</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className='mx-1 my-3'>
              <input class="form-control" type="search" placeholder="Search" aria-label="Search" />
            </div>
          </form>
        </div>
        <div className=''>
          <Table />
        </div>
      </div>
    </>
  )
}

export default Students_Lead
