// @mui material components
import Grid from "@mui/material/Grid";
// import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
// import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

import { AppBar, Card, MenuItem, Switch } from "@mui/material";
import { Article, Delete, RocketLaunch, Tune, Widgets } from "@mui/icons-material";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import burceMars from "assets/img/ar.png";
import BasicInfo from "./BasicInfo";
import ChangePassword from "./ChangePassword";
import TwoFactorAuth from "./TwoFactorAuth";
import DeleteAccount from "./DeleteAccount";

function PersonalInfo() {
  // const { size } = typography;
  // const { chart, items } = reportsBarChartData;

  return (
    <DashboardLayout>
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={3}>
              <Card>
                <SoftBox color="text" p={2}>
                  <MenuItem onClick={() => {}}>
                    <RocketLaunch />
                    &nbsp; Profile
                  </MenuItem>
                  <MenuItem onClick={() => {}}>
                    <Article />
                    &nbsp; Basic Info
                  </MenuItem>
                  <MenuItem onClick={() => {}}>
                    <Widgets />
                    &nbsp; Change Password
                  </MenuItem>
                  <MenuItem onClick={() => {}}>
                    <Tune />
                    &nbsp; 2FA
                  </MenuItem>
                  <MenuItem onClick={() => {}}>
                    <Delete />
                    &nbsp; Delete Account
                  </MenuItem>
                </SoftBox>
              </Card>
            </Grid>
            <Grid item xs={12} lg={9}>
              <Card
                sx={{
                  backdropFilter: `saturate(200%) blur(30px)`,
                  backgroundColor: ({ functions: { rgba }, palette: { white } }) =>
                    rgba(white.main, 0.8),
                  boxShadow: ({ boxShadows: { navbarBoxShadow } }) => navbarBoxShadow,
                  position: "relative",
                  p: 2,
                }}
              >
                <Grid container spacing={3} alignItems="center">
                  <Grid item>
                    <SoftAvatar
                      src={burceMars}
                      alt="profile-image"
                      variant="rounded"
                      size="xl"
                      shadow="sm"
                    />
                  </Grid>
                  <Grid item>
                    <SoftBox height="100%" mt={0.5} lineHeight={1}>
                      <SoftTypography variant="h5" fontWeight="medium">
                        Lukas Thern Loven
                      </SoftTypography>
                      <SoftTypography variant="button" color="text" fontWeight="medium">
                        CEO / Co-Founder
                      </SoftTypography>
                    </SoftBox>
                  </Grid>
                  <Grid item ml={"auto"}>
                    <AppBar position="static">
                      <SoftBox display="flex" py={1} mb={0.25}>
                        <SoftBox width="80%" ml={2}>
                          <SoftTypography variant="button" fontWeight="regular" color="text">
                            Pause account
                          </SoftTypography>
                        </SoftBox>
                        <SoftBox mt={0.25} ml={2}>
                          <Switch />
                        </SoftBox>
                      </SoftBox>
                    </AppBar>
                  </Grid>
                </Grid>
              </Card>
              <BasicInfo />
              <ChangePassword />
              <TwoFactorAuth />
              <DeleteAccount />
            </Grid>
          </Grid>
        </SoftBox>
      </SoftBox>
    </DashboardLayout>
  );
}

export default PersonalInfo;
