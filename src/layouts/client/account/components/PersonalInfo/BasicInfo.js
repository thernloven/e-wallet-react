import { Card, Grid } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftInput from "components/SoftInput";
import SoftTypography from "components/SoftTypography";
import React from "react";

export default function BasicInfo() {
  return (
    <Card
      sx={{
        // backdropFilter: `saturate(200%) blur(30px)`,
        boxShadow: ({ boxShadows: { navbarBoxShadow } }) => navbarBoxShadow,
        p: 2,
        mt: 3,
      }}
    >
      <SoftBox mb={3}>
        <SoftTypography variant="h5" fontWeight="bolder" color="text">
          Basic Info
        </SoftTypography>
      </SoftBox>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <SoftBox mb={2}>
            <SoftBox ml={0.5}>
              <SoftTypography component="label" variant="caption" fontWeight="bold">
                First Name
              </SoftTypography>
            </SoftBox>
            <SoftInput type="text" placeholder="Lukas" />
          </SoftBox>
        </Grid>
        <Grid item xs={12} md={6}>
          <SoftBox mb={2}>
            <SoftBox ml={0.5}>
              <SoftTypography component="label" variant="caption" fontWeight="bold">
                Last Name
              </SoftTypography>
            </SoftBox>
            <SoftInput type="text" placeholder="Thern Loven" />
          </SoftBox>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} md={6}>
          <SoftBox mb={1}>
            <SoftBox ml={0.5}>
              <SoftTypography component="label" variant="caption" fontWeight="bold">
                I'm
              </SoftTypography>
            </SoftBox>
            <select className="form-control" name="choices-gender" id="choices-gender">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </SoftBox>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={5} md={5}>
          <SoftBox mb={2} display="flex" gap={2}>
            <div class="col-sm-5 col-5">
              <label class="form-label mt-4">Birth Date</label>
              <select class="form-control" name="choices-month" id="choices-month">
                <option label="January" value={1}>
                  January
                </option>
              </select>
            </div>
            <div class="col-sm-4 col-3">
              <label class="form-label mt-4">&nbsp;</label>
              <select class="form-control" name="choices-day" id="choices-day">
                <option label="1" value={1}>
                  1
                </option>
              </select>
            </div>
            <div class="col-sm-3 col-4">
              <label class="form-label mt-4">&nbsp;</label>
              <select class="form-control" name="choices-year" id="choices-year">
                <option label="2023" value={2023}>
                  2023
                </option>
              </select>
            </div>
          </SoftBox>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <SoftBox mb={2}>
            <SoftBox ml={0.5}>
              <SoftTypography component="label" variant="caption" fontWeight="bold">
                Email
              </SoftTypography>
            </SoftBox>
            <SoftInput type="text" placeholder="example@email.com" />
          </SoftBox>
        </Grid>
        <Grid item xs={12} md={6}>
          <SoftBox mb={2}>
            <SoftBox ml={0.5}>
              <SoftTypography component="label" variant="caption" fontWeight="bold">
                Confirmation Email
              </SoftTypography>
            </SoftBox>
            <SoftInput type="text" placeholder="example@email.com" />
          </SoftBox>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <SoftBox mb={2}>
            <SoftBox ml={0.5}>
              <SoftTypography component="label" variant="caption" fontWeight="bold">
                Your location
              </SoftTypography>
            </SoftBox>
            <SoftInput type="text" placeholder="Sydney, A" />
          </SoftBox>
        </Grid>
        <Grid item xs={12} md={6}>
          <SoftBox mb={2}>
            <SoftBox ml={0.5}>
              <SoftTypography component="label" variant="caption" fontWeight="bold">
                Phone Number
              </SoftTypography>
            </SoftBox>
            <SoftInput type="number" placeholder="+40 735 631 620" />
          </SoftBox>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <SoftBox mb={2}>
            <SoftBox ml={0.5}>
              <SoftTypography component="label" variant="caption" fontWeight="bold">
                Language
              </SoftTypography>
            </SoftBox>
            <select className="form-control" name="choices-language" id="choices-language">
              <option value="English">English</option>
              <option value="French">French</option>
              <option value="Spanish">Spanish</option>
            </select>
          </SoftBox>
        </Grid>
      </Grid>
    </Card>
  );
}
