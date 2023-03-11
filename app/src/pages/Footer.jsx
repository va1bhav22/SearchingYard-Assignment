import React from "react";
import "../styles/Footer.css";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <motion.div
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2, duration: 1 }}
      className="FooterMainContainer"
    >
      <div className="FooterContainer">
        <div className="FooterDiv">
          <div>
            <img
              className="LogoImg"
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
              alt="logo"
            />
          </div>
          <br />

          <div>
            <button className="Btn1"> Hi VaibhavJ</button>
          </div>
        </div>
        <div className="FooterDiv">
          <div className="footerDivHead">THE BASICS</div>
          <div>About TMDB</div>
          <div>Contact Us</div>
          <div>Support Forums</div>
          <div>API</div>
        </div>
        <div className="FooterDiv">
          <div className="footerDivHead">GET INVOLVED</div>
          <div>Contribution Bible</div>
          <div>Add New Movie</div>
          <div>Add New TV Show</div>
          <div>System Status</div>
        </div>
        <div className="FooterDiv">
          <div className="footerDivHead">COMMUNITY</div>
          <div>Guidelines</div>
          <div>Discussions</div>
          <div>Leaderboard</div>
          <div>Twitter</div>
        </div>
        <div className="FooterDiv">
          <div className="footerDivHead">LEGAL</div>
          <div>Terms of Use</div>
          <div>API Terms of Use</div>
          <div>Privacy Policy</div>
          <div>System Status</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
