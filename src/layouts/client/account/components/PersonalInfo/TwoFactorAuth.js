import { Card, Grid } from "@mui/material";
import SoftBadge from "components/SoftBadge";
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import SoftTypography from "components/SoftTypography";
import React from "react";

export default function TwoFactorAuth() {
  return (
    <Card
      sx={{
        // backdropFilter: `saturate(200%) blur(30px)`,
        boxShadow: ({ boxShadows: { navbarBoxShadow } }) => navbarBoxShadow,
        p: 2,
        mt: 3,
      }}
    >
      <SoftBox mb={4} display="flex" justifyContent="space-between">
        <SoftTypography variant="h5" fontWeight="bolder" color="text">
          Two-factor authentication
        </SoftTypography>
        <SoftBadge
          variant="gradient"
          badgeContent="Enabled"
          color="success"
          size="xs"
          container
        ></SoftBadge>
      </SoftBox>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <SoftBox ml={0.5} display="flex" justifyContent="space-between" alignItems="center">
            <SoftTypography component="h6" variant="title" fontWeight="light">
              Security keys
            </SoftTypography>
            <SoftBox ml={0.5} display="flex" alignItems="center" gap={1}>
              <SoftTypography component="p" variant="caption" fontWeight="lighter">
                No Security Keys
              </SoftTypography>
              <SoftButton variant="outlined" color="dark" size="small">
                Add
              </SoftButton>
            </SoftBox>
          </SoftBox>
        </Grid>
        <hr className="horizontal dark mt-4" />
        <Grid item xs={12}>
          <SoftBox ml={0.5} display="flex" justifyContent="space-between" alignItems="center">
            <SoftTypography component="h6" variant="title" fontWeight="light">
              SMS number
            </SoftTypography>
            <SoftBox ml={0.5} display="flex" alignItems="center" gap={1}>
              <SoftTypography component="p" variant="caption" fontWeight="lighter">
                +4012374423
              </SoftTypography>
              <SoftButton variant="outlined" color="dark" size="small">
                Edit
              </SoftButton>
            </SoftBox>
          </SoftBox>
        </Grid>
        <hr class="horizontal dark mt-4" />
        <Grid item xs={12}>
          <SoftBox ml={0.5} display="flex" justifyContent="space-between" alignItems="center">
            <SoftTypography component="h6" variant="title" fontWeight="light">
              Authenticator app
            </SoftTypography>
            <SoftBox ml={0.5} display="flex" alignItems="center" gap={1}>
              <SoftTypography component="p" variant="caption" fontWeight="lighter">
                Not Configured
              </SoftTypography>
              <SoftButton variant="outlined" color="dark" size="small">
                SET UP
              </SoftButton>
            </SoftBox>
          </SoftBox>
        </Grid>
      </Grid>
    </Card>
  );
}
