import React, { useState } from "react";
import {
  FormControl,
  TextField,
  FormLabel,
} from "@mui/material";

import "../App.css";
import ToggleSwitch from "./ToggleSwitch";
import ToggleButtons from "./ToggleButtons";

import emailjs from "@emailjs/browser";

const paintOptions1 = ["Residential", "Commercial"];
const paintOptions2 = ["Interior", "Exterior", "Both"];

export default function Contact() {
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

  // const changeFormSelection = (e) => {
  //   if (e === "Next") {
  //     document.getElementById("form-stage1").style.display = "none";
  //     document.getElementById("form-stage2").style.display = "block";
  //   } else if (e === "Previous") {
  //     document.getElementById("form-stage1").style.display = "block";
  //     document.getElementById("form-stage2").style.display = "none";
  //     setFormStatus("");
  //   }
  // };

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
      setFormStatus("Please fill in the required information and submit again");
      document.getElementById("form-status").style.color = "#f44336";
    } else {
      //Send the email
      var templateParams = {
        from_name: name,
        phone_num: phone,
        email_adr: email,
        message_html: message,
        job_type: jobType,
        job_detail: jobDetail,
      };

    
      emailjs
        .send(
          "service_blr7ltw",
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
            document.getElementById("form-status").style.color = "white";
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
        

    <div className="form-section">
    <h4>Ready to Make a Change?</h4>
    <h3>Submit a Service Inquiry</h3>
      <div id="form-stage1">
      <div className="form-box">
          <TextField
            sx={{ input: { color: 'white' }, fieldset: { borderColor: "#FAF9F6" } }}
           
            type="text"
            value={name}
            variant="outlined"
            size="small"
            name="name"
            onChange={(e) => setName(e.target.value)}
            label="Your Name"
            autoFocus={true}
            required
            error={nameStatus !== ""}
            helperText={nameStatus}
          />
        </div>

          <h5>Tell Us How To Reach You</h5>

        <ToggleSwitch
          onToggleChange={onToggleChange}
          phoneSelected={phoneSelected}
        />

        <div className="form-box" id="phone-box">
          <TextField
             sx={{ input: { color: 'white' }, fieldset: { borderColor: "#FAF9F6" } }}
            type="tel"
            value={phone}
            variant="outlined"
            size="small"
            fullWidth
            required
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
            label="Phone Number"
            error={phoneStatus !== ""}
            helperText={phoneStatus}
          />
        </div>
        <div className="form-box" id="email-box">
          <TextField
            sx={{ input: { color: 'white' }, fieldset: { borderColor: "#FAF9F6" } }}
            type="email"
            value={email}
            variant="outlined"
            size="small"
            fullWidth
            required
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            label="Email Address"
            error={emailStatus !== ""}
            helperText={emailStatus}
          />
        </div>

          <h5>Tell Us About Your Project (Optional)</h5>

        <div className="form-box">
        <ToggleButtons
            options={paintOptions1}
            alignment={jobType}
            setAlignment={setJobType}
            label="What Type Of Property Needs To Be Painted?"
          />
        </div>
       
        <div className="form-box">
          <ToggleButtons
            options={paintOptions2}
            alignment={jobDetail}
            setAlignment={setJobDetail}
            label="What Needs To Be Painted?"
          />
        </div>

        <div className="form-box">
          <FormControl>
            <TextField
               sx={{
                fieldset: { borderColor: "white" }
              }}
              inputProps={{ style: { color: "white" } }}
          
              type="text"
              value={message}
              variant="outlined"
              fullWidth
              multiline
              minRows={4}
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
            value="Submit"
            onClick={(e) => submitContactForm()}
          >
            Submit
          </button>
        </div>
      </div>

      <h4 id="form-status">{formStatus}</h4>
    </div>
    </div>
  );
}
