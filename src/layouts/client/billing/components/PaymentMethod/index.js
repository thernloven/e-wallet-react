// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

// Soft UI Dashboard React base styles
import borders from "assets/theme/base/borders";

// Images
import masterCardLogo from "assets/images/logos/mastercard.png";
import visaLogo from "assets/images/logos/visa.png";
import { useState } from "react";
import SoftModal from "components/SoftModal";
import { Link } from "react-router-dom";

function PaymentMethod() {
  const { borderWidth, borderColor } = borders;
  const [modal, setModal] = useState({
    addMoney: false,
    sendMoney: false,
  });

  const toggleAddMoney = () => setModal((prev) => ({ ...prev, addMoney: !prev.addMoney }));
  const toggleSendMoney = () => setModal((prev) => ({ ...prev, sendMoney: !prev.sendMoney }));

  return (
    <Card id="delete-account">
      <SoftBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <SoftTypography variant="h6" fontWeight="medium">
          Payment Method
        </SoftTypography>
        <SoftBox display="flex" gap={1} alignItems="center">
          <SoftButton variant="gradient" color="dark" onClick={toggleAddMoney}>
            <Icon sx={{ fontWeight: "bold" }}>add</Icon>
            &nbsp;Add Money
          </SoftButton>
          <SoftButton variant="gradient" color="primary" onClick={toggleSendMoney}>
            <Icon sx={{ fontWeight: "bold" }}>send</Icon>
            &nbsp;Send Money
          </SoftButton>
        </SoftBox>
      </SoftBox>
      <SoftBox p={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <SoftBox
              border={`${borderWidth[1]} solid ${borderColor}`}
              borderRadius="lg"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p={3}
            >
              <SoftBox component="img" src={masterCardLogo} alt="master card" width="10%" mr={2} />
              <SoftTypography variant="h6" fontWeight="medium">
                ****&nbsp;&nbsp;****&nbsp;&nbsp;****&nbsp;&nbsp;7852
              </SoftTypography>
              <SoftBox ml="auto" lineHeight={0}>
                <Tooltip title="Edit Card" placement="top">
                  <Icon sx={{ cursor: "pointer" }} fontSize="small">
                    edit
                  </Icon>
                </Tooltip>
              </SoftBox>
            </SoftBox>
          </Grid>
          <Grid item xs={12} md={6}>
            <SoftBox
              border={`${borderWidth[1]} solid ${borderColor}`}
              borderRadius="lg"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p={3}
            >
              <SoftBox component="img" src={visaLogo} alt="master card" width="10%" mr={2} />
              <SoftTypography variant="h6" fontWeight="medium">
                ****&nbsp;&nbsp;****&nbsp;&nbsp;****&nbsp;&nbsp;5248
              </SoftTypography>
              <SoftBox ml="auto" lineHeight={0}>
                <Tooltip title="Edit Card" placement="top">
                  <Icon sx={{ cursor: "pointer" }} fontSize="small">
                    edit
                  </Icon>
                </Tooltip>
              </SoftBox>
            </SoftBox>
          </Grid>
        </Grid>
      </SoftBox>
      <SoftModal
        header="Add Money"
        toggle={toggleAddMoney}
        open={modal.addMoney}
        body={
          <>
            <div class="row">
              <div class="form-group col-12">
                <label for="">Select Card</label>
                <select class="form-control" id="exampleFormControlSelect1">
                  <option>**** **** **** 7852</option>
                  <option>**** **** **** 3462</option>
                </select>
              </div>
            </div>
            <div class="row mt-2">
              <div class="form-group col-2">
                <select class="form-control" id="exampleFormControlSelect1">
                  <option>USD</option>
                  <option>EUR</option>
                  <option>GBP</option>
                  <option>SEK</option>
                  <option>SGD</option>
                </select>
              </div>
              <div class="form-group col-10">
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="00.00"
                />
              </div>
            </div>
          </>
        }
        footer={
          <SoftBox display="flex" gap="5px">
            <SoftButton component="button" color={"secondary"} onClick={toggleAddMoney}>
              Cancel
            </SoftButton>
            <SoftButton component="button" color={"success"}>
              Add
            </SoftButton>
          </SoftBox>
        }
      />
      <SoftModal
        header="Send Money"
        toggle={toggleSendMoney}
        open={modal.sendMoney}
        body={
          <>
            <div class="row mt-4">
              <div class="form-group col-2">
                <select class="form-control" id="exampleFormControlSelect1">
                  <option>USD</option>
                  <option>EUR</option>
                  <option>GBP</option>
                  <option>SEK</option>
                  <option>SGD</option>
                </select>
              </div>
              <div class="form-group col-10">
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="00.00"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Choose Receptiant</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option selected>Choose Receptiant</option>
                <option value="1">Camila Guemes</option>
                <option value="2">Lukas Thern Loven</option>
                <option value="3">Maximiliano Barrientos</option>
              </select>
            </div>
            <Link to="" className="text-sm">
              Add new receptiant
            </Link>
          </>
        }
        footer={
          <SoftBox display="flex" gap="5px">
            <SoftButton component="button" color={"secondary"} onClick={toggleSendMoney}>
              Cancel
            </SoftButton>
            <SoftButton component="button" color={"success"}>
              Send
            </SoftButton>
          </SoftBox>
        }
      />
    </Card>
  );
}

export default PaymentMethod;
