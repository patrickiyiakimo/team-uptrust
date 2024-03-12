import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

const svgVariants = {
  hidden: { rotate: -180 },
  visible: {
    rotate: 0,
    transition: { duration: 1 },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const LogIn = () => {
//   const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [PasswordError, setPasswordError] = useState(false);
  const [EmailError, setEmailError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setPasswordError(false);
    setEmailError(false);

    if (Password === "") {
      setPasswordError(true);
    }

    if (Email === "") {
      setEmailError(true);
    }

    if ( Password && Email) {
      console.log( Password, Email);
    }

    setIsLoading(true);

      fetch("https://uptrust-service-api.onrender.com/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(LogIn),
      }).then(() => {
          console.log("new data added");
          setIsLoading(false);
          history.push("/");
      });
    //     .catch(err =>{
    //         console.log(err.message);
    //   })
  };

  return (
    <div className="login">
      <div className="svg">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
          variants={svgVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
            variants={pathVariants}
          />
          <motion.path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
            variants={pathVariants}
          />
        </motion.svg>
      </div>

      <h1>Uptrust</h1>
      <p>
        Unlock Your Potential with <span> Intelligent career Guidance</span>
      </p>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <br></br>
        <TextField
          style={{
            width: "500px",
            marginBottom: "60px",
            border: "2px solid blue",
          }}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          variant="outlined"
          color="secondary"
          type="password"
          required
          error={PasswordError}
        />
        <br></br>
        <TextField
          style={{
            width: "500px",
            marginBottom: "60px",
            border: "2px solid blue",
          }}
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          variant="outlined"
          color="secondary"
          required
          error={EmailError}
        />
        <br></br>
        {!isLoading && (
          <motion.button
            onClick={handleSubmit}
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.5, duration: 1.5 }}
            type="submit"
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px blue",
              boxShadow: "0px 0px 8px blue",
            }}
          >
            Submit
          </motion.button>
        )}
        {isLoading && (
          <motion.button
            disabled
            onClick={handleSubmit}
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.5, duration: 1.5 }}
            type="submit"
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px blue",
              boxShadow: "0px 0px 8px blue",
            }}
          >
            Submitting...
          </motion.button>
        )}
      </form>
    </div>
  );
};

export default LogIn;
