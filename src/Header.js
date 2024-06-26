// import { Link } from "@mui/material";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="Spark">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
          />
        </svg>

        <button>New:Empowering Your Career Journey</button>
        <h1>
          Unlock Your Potential with <span>Intelligent career Guidance</span>
        </h1>
        <p>
          Embark on a transforming journey with <strong>Uptrust</strong>
        </p>
        <RouterLink to="/GetStarted">
          <motion.span>
            <motion.button
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ delay: 0.5, duration: 1.5 }}
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px blue",
                boxShadow: "0px 0px 8px blue",
              }}
            >
              Get Started
            </motion.button>
          </motion.span>
        </RouterLink>
      </div>
    </div>
  );
};

export default Header;
