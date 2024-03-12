// import { Link } from "@mui/material";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";

const OurStory = () => {
  const title = "Our Story";
  const subtitle = "Your Personalised Career Launchpad!";

  return (
    <div className="ourstory">
      <div className="section">
        <h3>{title}</h3>
        <h1>{subtitle}</h1>
        <p>
          Uptrust offers personalised career insights, matching your skills with
          job requirements and providing tailored learning recommendations. With
          intuitive tools like the job Description Analyser and Profile
          Comparison, it streamlines your job search and skills development with
          prioritising privacy and security.
        </p>
        <RouterLink>
          <motion.button
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px blue",
              boxShadow: "0px 0px 8px blue",
            }}
          >
            Learn More
          </motion.button>
        </RouterLink>
      </div>
    </div>
  );
};

export default OurStory;
