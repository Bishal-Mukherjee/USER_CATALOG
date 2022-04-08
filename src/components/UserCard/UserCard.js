import React, { useEffect, useState } from "react";
import {
  Card,
  CardMedia,
  Typography,
  Dialog,
  IconButton,
  CardContent,
  Backdrop,
  CircularProgress,
  Paper,
} from "@mui/material";
import { Close } from "@material-ui/icons";
import { fetchUserById } from "../../services/users";

const UserCard = ({ id, open, setOpen }) => {
  const [user, setUser] = useState({});
  const [openBackdrop, setOpenBackdrop] = useState(true);
  const { email, first_name, last_name, avatar } = user;

  const handleFetchUser = async () => {
    setUser(await fetchUserById(id));
    setOpenBackdrop(false);
  };

  useEffect(() => {
    handleFetchUser();
  }, []);

  return (
    <div style={{ margin: "1.5rem" }}>
      <Dialog open={open} fullWidth={true} maxWidth="sm">
        <div
          style={{
            display: "flex",
            alignItems: "end",
            justifyContent: "end",
          }}
        >
          <IconButton>
            <Close onClick={() => setOpen(false)} />
          </IconButton>
        </div>

        <Paper elevation={1}>
          <Card>
            {openBackdrop && (
              <Backdrop
                sx={{
                  color: "#fff",
                  zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={openBackdrop}
              >
                <CircularProgress color="inherit" />
              </Backdrop>
            )}
            <CardContent>
              <div style={{ height: "1rem", width: "100%", color: "black" }} />
              <CardMedia
                image={avatar}
                component="img"
                alt="user_image"
                height="300"
              />
              <Typography
                style={{
                  fontFamily: "Zen Kurenaido",
                  color: "black",
                  textAlign: "center",
                  fontSize: "1.2rem",
                }}
              >
                {first_name + " " + last_name}
              </Typography>

              <Typography
                style={{
                  fontFamily: "Zen Kurenaido",
                  color: "red",
                  textAlign: "center",
                  marginLeft: "3%",
                  marginRight: "3%",
                  marginTop: "1rem",
                  fontSize: "1.2rem",
                }}
              >
                {email}
              </Typography>
            </CardContent>
          </Card>
        </Paper>
      </Dialog>
    </div>
  );
};

export default UserCard;
