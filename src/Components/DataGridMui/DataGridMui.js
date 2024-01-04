import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import IconButton from "@mui/material/IconButton";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { DataStore } from "../../Storage/DataStorage";
export default function DataGridMui({ deleteApi, data }) {
  const [columns, setColumns] = React.useState([]);
  const [rows, setRows] = React.useState([]);
  const { fetchAllProjects, fetchAllBlogs, fetchAllContacts } = DataStore();
  React.useEffect(() => {
    if (data) {
      let dynamicColumns = [];
      let dynamicRows = [];

      // Generate columns based on the keys of the first data item
      for (let key in data[0]) {
        dynamicColumns.push({
          field: key,
          headerName: key.charAt(0).toUpperCase() + key.slice(1),
          width: 150,
        });
      }

      // Generate rows with an additional 'id' field
      for (let i = 0; i < data.length; i++) {
        dynamicRows.push({ id: i + 1, ...data[i] });
      }

      // Add 'Actions' column with custom renderers
      dynamicColumns.push({
        field: "actions",
        headerName: "Actions",
        width: 200,
        renderCell: (params) => (
          <>
            <IconButton
              onClick={() => handleEdit(params.row._id)}
              aria-label="Edit"
            >
              <FaPen color="blue" size={18} />
            </IconButton>
            <IconButton
              onClick={() => handleView(params.row._id)}
              aria-label="View"
            >
              <FaEye color="green" size={20} />
            </IconButton>
            <IconButton
              onClick={() => handleDelete(params.row._id)}
              aria-label="Delete"
            >
              <MdDelete color="red" size={20} />
            </IconButton>
          </>
        ),
      });

      setColumns(dynamicColumns);
      setRows(dynamicRows);
    }
  }, [data]);

  const handleEdit = (rowId) => {
    // Implement your logic for edit action
    console.log(`Edit row with ID ${rowId}`);
  };

  const handleView = (rowId) => {
    // Implement your logic for view action
    console.log(`View row with ID ${rowId}`);
  };

  const handleDelete = async (rowId) => {
    try {
      // Make a delete API request
      await axios
        .delete(`${process.env.REACT_APP_API_URL}${deleteApi}/${rowId}`)
        .then((response) => {
          fetchAllProjects();
           fetchAllBlogs();
            fetchAllContacts();
        });
      // Implement any additional logic after a successful delete if needed
      console.log(`Delete row with ID ${rowId} successful`);

      // Update the UI by fetching and updating the data from the server
      // or removing the row directly from the state
    } catch (error) {
      console.error(`Error deleting row with ID ${rowId}:`, error);
      // Implement error handling logic if needed
    }
  };

  return (
    <Box sx={{ height: 400, width: 1 }}>
      <DataGrid
        columns={columns}
        rows={rows}
        pageSizeOptions={[5, 10, 25]}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
      />
    </Box>
  );
}
