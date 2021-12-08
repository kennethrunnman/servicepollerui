import React, {useState, useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {axiosCalls} from './axiosCalls';
import { Button } from '@mui/material';

const Services = () => {

  const [services, setServices] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axiosCalls.fetchServices()
      .then(response => {
        if(response.status === 200) {
          setServices(response.data);
          setLoading(false)
        }
      })
      .catch((error) => {
        console.log(error)
      })

    const timer = setInterval(() => {
      axiosCalls.fetchServices()
        .then(response => {
          if(response.status === 200) {
            setServices(response.data);
            setLoading(false)
          }
        })
        .catch((error) => {
          console.log(error)
        })
        .then()

    }, 2000);

    return () => {
      if (timer) clearInterval(timer)
    };
  }, []);

  const deleteService = (id) => {
    const data = services.filter(service => {
      return service.id !== id
    });
    setTimeout(() => {
      setServices({data})
    },1000);
    axiosCalls.deleteServiceFromDb(id);
  }

  const deleteButton = (params) => {
    return (
        <strong>
            <Button
                variant="contained"
                color="primary"
                size="small"
                style={{ marginLeft: 16 , backgroundColor: 'red'}}
                onClick={() => {
                    deleteService(params.row.id);
                }}
            >
                Delete
            </Button>
        </strong>
    )
  }

  const columns = [
    { field: 'name', headerName: 'Service', width: 200 ,  disableClickEventBubbling: true,},
    { field: 'url', headerName: 'Url', width: 300 ,  disableClickEventBubbling: true,},
    { field: 'creation_time', headerName: 'created', width: 150 ,  disableClickEventBubbling: true,},
    { field: 'status', headerName: 'Status', width: 100 ,  disableClickEventBubbling: true,},
    { field: 'id', headerName: 'Delete', width: 100,  disableClickEventBubbling: true, renderCell: deleteButton,}
  ]
  
  return (
    <div className="services collection" style={{height: 400, width: '100%'}}>
      <DataGrid 
        columns = {columns}
        rows = {services}
        pageSize={5} 
        rowsPerPageOptions={[5]}
        loading={loading} 
        pagination {...services}/>
    </div>
  )
}

export default Services;