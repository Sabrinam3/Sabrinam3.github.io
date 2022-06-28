import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import {
  FormControl,
  TextField,
  FormLabel,
} from "@material-ui/core";

import "../App.css";
import ToggleSwitch from "./ToggleSwitch";
import ToggleButtons from "./ToggleButtons";

import emailjs from "@emailjs/browser";

const useStyles = makeStyles((theme) => ({
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "#65bcb1 !important",
    color: "white !important",
  },
  label: {
    color: "white !important",
    fontSize: "0.7em !important",
  },
  input: {
    color: "white !important",
  },
}));

const paintOptions1 = ["Residential", "Commercial"];
const paintOptions2 = ["Interior", "Exterior", "Both"];

export default function Contact() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [phoneSelected, setPhoneSelected] = useState(true);
  const [jobType, setJobType] = useState("unspecified");
  const [jobDetail, setJobDetail] = useState("unspecified");

  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");
  const [nameStatus, setNameStatus] = useState("");
  const [phoneStatus, setPhoneStatus] = useState("");
  const [emailStatus, setEmailStatus] = useState("");

  const [messageStatus, setMessageStatus] = useState("");
  const [formStatus, setFormStatus] = useState("");

  const onToggleChange = (e) => {
    if (phoneSelected) {
      document.getElementById("email-box").style.display = "block";
      document.getElementById("phone-box").style.display = "none";
      setPhoneSelected(false);
    } else {
      document.getElementById("email-box").style.display = "none";
      document.getElementById("phone-box").style.display = "block";
      setPhoneSelected(true);
    }
  };

  const changeFormSelection = (e) => {
    if (e === "Next") {
      document.getElementById("form-stage1").style.display = "none";
      document.getElementById("form-stage2").style.display = "block";
    } else if (e === "Previous") {
      document.getElementById("form-stage1").style.display = "block";
      document.getElementById("form-stage2").style.display = "none";
      setFormStatus("");
    }
  };

  const validateForm = () => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let re2 = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    let nameValid = name !== "";
    let contactValid = phoneSelected
      ? phone !== "" && re2.test(phone)
      : email !== "" && re.test(email);

    setNameStatus(nameValid ? "" : "Enter your name");

    if (phoneSelected && !contactValid) {
      setPhoneStatus("Enter a valid phone number");
    }

    if (!phoneSelected && !contactValid) {
      setEmailStatus("Enter a valid email address");
    }

    return nameValid && contactValid;
  };

  const submitContactForm = () => {
    //validate the form
    if (!validateForm()) {
      setFormStatus("Oops! Please fill in the required fields and try again");
    } else {
      //Send the email
      var templateParams = {
        from_name: name,
        reply_to: phoneSelected ? phone : email,
        message_html: message,
        job_type: jobType,
        job_detail: jobDetail,
      };

      emailjs
        .send(
          "gmail",
          "ThielotPainting",
          templateParams,
          "user_SdhrQXfrPZb4mn1plcyk9"
        )
        .then(
          (result) => {
            setFormStatus("Thank you! We will be in touch soon.");
            setName("");
            setPhone("");
            setEmail("");
            setMessage("");
          },
          (error) => {
            setFormStatus(
              "There was a problem submitting the form. Try again or call me directly at (519)-859-9458"
            );
          }
        );
    }
  };

  return (
    <div>
            <h4 id="form-status">{formStatus}</h4>

    <div className="form-section">
      <div id="form-stage1">
        <h5>Step 1 - Tell us About Your Project(optional)</h5>
        <div className="form-box">
          <ToggleButtons
            options={paintOptions1}
            label={"What Type of Property Needs Painting?"}
            alignment={jobType}
            setAlignment={setJobType}
          />
        </div>
        <div className="form-box">
          <ToggleButtons
            options={paintOptions2}
            label={"What Needs Painting?"}
            alignment={jobDetail}
            setAlignment={setJobDetail}
          />
        </div>
        <div className="form-btn-box">
          <button
            className="button4"
            value="Next"
            onClick={(e) => changeFormSelection(e.target.value)}
          >
            Next
          </button>
        </div>
      </div>
      <div id="form-stage2">
        <h5>Step 2 - Tell Us How To Reach You</h5>
        <ToggleSwitch
          onToggleChange={onToggleChange}
          phoneSelected={phoneSelected}
        />
        <div className="form-box">
          <TextField
            type="text"
            value={name}
            variant="outlined"
            size="small"
            InputProps={{
              classes: {
                notchedOutline: classes.notchedOutline,
                input: classes.input,
              },
            }}
            InputLabelProps={{
              classes: {
                root: classes.label,
              },
            }}
            name="name"
            onChange={(e) => setName(e.target.value)}
            label="Your Name"
            autoFocus={true}
            required
            error={nameStatus !== ""}
            helperText={nameStatus}
          />
        </div>

        <div className="form-box" id="phone-box">
          <TextField
            type="tel"
            value={phone}
            variant="outlined"
            size="small"
            fullWidth
            required
            InputProps={{
              classes: {
                notchedOutline: classes.notchedOutline,
                input: classes.input,
              },
            }}
            InputLabelProps={{
              classes: {
                root: classes.label,
              },
            }}
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
            label="Phone Number"
            error={phoneStatus !== ""}
            helperText={phoneStatus}
          />
        </div>
        <div className="form-box" id="email-box">
          <TextField
            type="email"
            value={email}
            variant="outlined"
            size="small"
            fullWidth
            required
            InputProps={{
              classes: {
                notchedOutline: classes.notchedOutline,
                input: classes.input,
              },
            }}
            InputLabelProps={{
              classes: {
                root: classes.label,
              },
            }}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            label="Email Address"
            error={emailStatus !== ""}
            helperText={emailStatus}
          />
        </div>

        {/* <RowRadioButtonsGroup
            onRadioChange={onRadioChange}
            phoneSelected={phoneSelected}
          /> */}

        <div className="form-box">
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Tell Us More About Your Project (optional)
            </FormLabel>
            <TextField
              type="text"
              value={message}
              variant="outlined"
              fullWidth
              multiline
              InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline,
                  input: classes.input,
                },
              }}
              InputLabelProps={{
                classes: {
                  root: classes.label,
                },
              }}
              name="message"
              onInput={(e) => setMessage(e.target.value)}
              error={messageStatus !== ""}
              helperText={messageStatus}
            />
          </FormControl>
        </div>
        <div className="form-btn-box">
          <button
            className="button4"
            value="Previous"
            onClick={(e) => changeFormSelection(e.target.value)}
          >
            Previous
          </button>
          <button
            className="button4"
            value="Submit"
            onClick={(e) => submitContactForm()}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}
