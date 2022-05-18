import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import {
    FormControl,
    TextField,
    InputLabel,
    FormHelperText,
    Box,
    FormLabel
  } from "@material-ui/core";
  


  import '../App.css';
  import RowRadioButtonsGroup from "./RowRadioButtonsGroup";
  import ToggleButtons from "./ToggleButtons";


  const useStyles = makeStyles((theme) => ({
    notchedOutline: {
        borderWidth: "1px",
        borderColor: "#65bcb1 !important",
        color: "white !important",
      },
      label: {
        color: "white !important",
        fontFamily: 'Playfair Display',
      },
      input: {
        color: "white !important",
      }
}));

const paintOptions1 = [
 "Residential",
 "Commercial"
];
const paintOptions2 = ["Interior", "Exterior", "Both"];

  export default function Contact() {
    const classes = useStyles();
    const theme = useTheme();
    const [name, setName] = useState("");
    const [phoneSelected, setPhoneSelected] = useState(true);
    const [jobType, setJobType] = useState("Residential");
    const [jobDetail, setJobDetail] = useState("Interior");

    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const [message, setMessage] = useState("");
    const [nameStatus, setNameStatus] = useState("");
    const [phoneStatus, setPhoneStatus] = useState("");
    const [emailStatus, setEmailStatus] = useState("");

    const [messageStatus, setMessageStatus] = useState("");
    const [formStatus, setFormStatus] = useState("");



//   const validateForm = () => {
//     let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     let valid = name !== "" && email !== "" && re.test(email) && message !== "";
//     setNameStatus(name === "" ? "Enter your name" : "");

//     setEmailStatus(
//       email === "" || !re.test(email) ? "Enter a valid email address" : ""
//     );

//     setMessageStatus(message === "" ? "Enter your message" : "");

//     return valid;
//   };
  
//   const submitForm = () => {
//     //validate the form
//     if (!validateForm()) {
//       setFormStatus("Fill out required fields and try again");
//     } else {
//       //Send the email
//       var templateParams = {
//         from_name: name,
//         reply_to: email,
//         message_html: message,
//       };

//       emailjs
//         .send(
//           "gmail",
//           "PioneerPropertyManagement",
//           templateParams,
//           "user_SdhrQXfrPZb4mn1plcyk9"
//         )
//         .then(
//           (result) => {
//             setFormStatus("Thank you! Talk to you soon.");
//             setName("");
//             setEmail("");
//             setMessage("");
//           },
//           (error) => {
//             setFormStatus(
//               "There was a problem submitting the form. Try again or call me directly at (613)-281-4133"
//             );
//           }
//         );
//     }
//   };

const onRadioChange = (e) => {
    if(e.target.value === 'email'){
        document.getElementById('email-box').style.display = 'block';
        document.getElementById('phone-box').style.display = 'none';
        setPhoneSelected(false);
    }
    else{
        document.getElementById('email-box').style.display = 'none';
        document.getElementById('phone-box').style.display = 'block';
        setPhoneSelected(true);
    }
}

 

const changeFormSelection = (e) => {
    if(e=== "Next"){
        document.getElementById("form-stage1").style.display = 'none';
        document.getElementById("form-stage2").style.display = 'block';
    }else if(e === "Previous"){
        document.getElementById("form-stage1").style.display = 'block';
        document.getElementById("form-stage2").style.display = 'none';
    }else{
        //Submit
    }

}


return(
 <div className="form-section">

    <div id="form-stage1">
            <div className="form-box">
                <ToggleButtons options={paintOptions1} 
                label={"What Type of Property Needs Painting?"}
                alignment={jobType}
                setAlignment={setJobType}
                />
            </div>    
            <div className="form-box">
                <ToggleButtons options={paintOptions2} 
                label={"What Needs Painting?"}
                alignment={jobDetail}
                setAlignment={setJobDetail}
                />
            </div>
            <div className="form-box">
                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">Tell us About Your Project (optional)</FormLabel>
                        <TextField
                            type="text"
                            value={message}
                            variant="outlined"
                            fullWidth
                            multiline
                            minRows={5}
                            InputProps={{
                                classes: {
                                notchedOutline: classes.notchedOutline,
                                input: classes.input
                                }
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
                <button className="button1" value="Next" onClick={(e) => changeFormSelection(e.target.value)} >Next</button>
            </div> 
    </div>  
    <div id="form-stage2">
    <div className="form-box">
            <RowRadioButtonsGroup onRadioChange={onRadioChange} phoneSelected={phoneSelected}/>
        </div>
        <div className="form-box">
        <TextField
                type="text"
                value={name}
                variant="outlined"
                InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline,
                      input: classes.input
                    }
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
                fullWidth
                InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline,
                      input: classes.input
                    }
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
                fullWidth
                InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline,
                      input: classes.input
                    }
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
            <div className="form-btn-box">
                <button className="button1" value="Previous" onClick={(e) => changeFormSelection(e.target.value)}>Previous</button>
                <button className="button1" value="Submit" onClick={(e) => changeFormSelection(e.target.value)}>Submit</button>
            </div> 
        </div>    
    </div>
 
)

}