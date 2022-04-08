import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUsers } from "../../redux/actions/actions";
import {
  Card,
  Grid,
  IconButton,
  Tooltip,
  Backdrop,
  CircularProgress,
  Paper,
  Typography,
} from "@mui/material";
import {
  ArrowBackIos,
  ArrowForwardIos,
  AccountCircle,
} from "@material-ui/icons";
import UserCard from "../UserCard/UserCard";
import { fetchUsers } from "../../services/users";

const UserCardContent = ({ userId }) => {
  return (
    <Fragment>
      <div style={{ textAlign: "center" }}>
        <Typography variant="h3" component="h3">
          <AccountCircle style={{ width: "3rem", height: "2rem" }} />
          {userId}
        </Typography>
      </div>
    </Fragment>
  );
};

const UserCatalog = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [pageIndex, setPageIndex] = useState(1);
  const [open, setOpen] = useState(false);
  const [openBackdrop, setOpenBackdrop] = useState(true);
  const [selectedUserId, setSelectedUserId] = useState(1);

  const handleFetchProducts = async () => {
    dispatch(setUsers(await fetchUsers(pageIndex)));
    setOpenBackdrop(false);
  };

  const hanldePageIndexChange = (type) => {
    switch (type) {
      case "increment":
        setPageIndex(pageIndex + 1);
        break;
      case "decrement":
        setPageIndex(pageIndex - 1);
        break;
      default:
    }
  };

  const handleDialogOpen = (userId) => {
    setSelectedUserId(userId);
    setOpen(true);
  };

  useEffect(() => {
    handleFetchProducts();
  }, [pageIndex]);

  return (
    <Fragment>
      {openBackdrop && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={openBackdrop}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      <div style={{ marginTop: "1.5rem" }}>
        <Grid container spacing={2}>
          {users?.users?.map((user) => (
            <Grid item xs={12} sm={4}>
              <Paper elevation={3}>
                <Card
                  style={{ cursor: "pointer" }}
                  onClick={() => handleDialogOpen(user.id)}
                >
                  <UserCardContent userId={user.id} />
                </Card>
              </Paper>
            </Grid>
          ))}
        </Grid>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "1.5rem",
          }}
        >
          <Tooltip title="Previous Page">
            <IconButton disabled={pageIndex === 1 ? true : false}>
              <ArrowBackIos
                onClick={() => hanldePageIndexChange("decrement")}
              />
            </IconButton>
          </Tooltip>

          <Tooltip title="Next Page">
            <IconButton disabled={pageIndex === 2 ? true : false}>
              <ArrowForwardIos
                onClick={() => hanldePageIndexChange("increment")}
              />
            </IconButton>
          </Tooltip>
        </div>
        {open && <UserCard open={open} setOpen={setOpen} id={selectedUserId} />}
      </div>
    </Fragment>
  );
};

export default UserCatalog;
