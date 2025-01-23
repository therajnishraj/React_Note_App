import { React, useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Add } from "../dialog/Add";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import Update from "../dialog/Update";
import { useDispatch } from "react-redux";
import { deleteNote, getAllNotes } from "../redux/actions/NoteAction";

function Home() {
  const { notes, loading, error } = useSelector((state) => state.notesReducer);
  const [showDialog, setShowDialog] = useState(false);
  const [showUpdateDialog, setShowUpdateDialog] = useState(false);
  const [rowData, setRowData] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllNotes());
  }, []);

  const accept = (id) => {
    dispatch(deleteNote(id));
  };

  const reject = () => {};
  const handleClose = () => {
    setShowDialog(false);
  };

  const handleUpdateClose = () => {
    setShowUpdateDialog(false);
  };

  const handleNote = () => {
    setShowDialog(true);
  };

  const handleEdit = (data) => {
    setShowUpdateDialog(true);
    setRowData(data);
  };

  const handleDelete = (data) => {
    console.log(data);
    confirmDialog({
      message: "Do you want to delete this record?",
      header: "Delete Confirmation",
      icon: "pi pi-info-circle",
      defaultFocus: "reject",
      acceptClassName: "p-button-danger",
      accept: () => accept(data.id),
      reject,
    });
  };

  return (
    <>
      <ConfirmDialog />
      <Add show={showDialog} close={handleClose} />
      <Update
        show={showUpdateDialog}
        close={handleUpdateClose}
        data={rowData}
      />
      <div>
        <h2>Welcome to the Home Page</h2>
        <p>This is the content of the Home page.</p>
        <i
          style={{
            cursor: "pointer",
            fontSize: "40px",
            padding: "10px",
            display: "block",
            textAlign: "right",
          }}
          onClick={handleNote}
          className="pi pi-plus"
        ></i>

        <div className="card" style={{ overflowY: "auto", height: "50vh" }}>
          <DataTable
            paginator
            rows={5}
            value={notes}
            tableStyle={{ minWidth: "50rem" }}
          >
            <Column field="id" header="ID"></Column>
            <Column field="title" header="Title"></Column>
            <Column field="content" header="Content"></Column>
            <Column field="createdAt" header="Created At"></Column>
            <Column field="updatedAt" header="Updated At"></Column>
            <Column
              header="Actions"
              body={(rowData) => (
                <div>
                  <i
                    className="pi pi-pencil"
                    onClick={() => handleEdit(rowData)}
                    style={{ marginRight: "20px", cursor: "pointer" }}
                  />
                  <i
                    className="pi pi-trash"
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={() => handleDelete(rowData)}
                  />
                </div>
              )}
            />
          </DataTable>
        </div>
      </div>
    </>
  );
}

export default Home;
