import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

const DetalleUsuarioModal = ({ user, open, handleClose }) => {
  if (user) {
    return (
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Detalles del Usuario</DialogTitle>
        <DialogContent>
          <p>ID: {user.id}</p>
          <p>Nombre: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Username: {user.username}</p>
          <p>
            Dirección:{" "}
            {user.address &&
              `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}
          </p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    );
  } else {
    return;
  }
};

export default DetalleUsuarioModal;
