

import m from "./Mobiel_navbar.module.css";
import React from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faTimes } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";


const links = [
    { name: "Home", to: "/", id: 1 },
    { name: "WebHosting", to: "/webhosting", id: 2 },
    { name: "WebDesign", to: "/webdesign", id: 3 },
    { name: "Design", to: "/design", id: 4 },
    { name: "Affilate", to: "/affilate", id: 5 },
    { name: "Over Ons", to: "/design", id: 6 },
    { name: "Contact", to: "/contact", id: 7 },
  ];
  
  const itemVariants = {
    closed: {
      opacity: 0,
    },
    open: {
      transition: { delay: 0.170 },
      opacity: 1,
    },
  };
  
  // const sideVariants = {
  //   closed: {
  //     transition: {
  //       staggerChildren: 0.1,
  //       staggerDirection: -1,
  //     },
  //   },
  //   open: {
  //     opacity: 1,
  //     transition: {
  //       staggerChildren: 0.2,
  //       staggerDirection: 1,
  //     },
  //   },
  // };
export default function sidebar(props) {
  return (
    <>
    <AnimatePresence>
        {props.open && (
          <motion.aside
            initial={{ width: 0 }}
            animate={{
              width: "100%",
              transition: {
                duration: 0.3,
              },
            }}
            className={m.aside}
            exit={{
              width: 0,
              transition: { delay: 0.3, duration: 0.5 },
            }}
          >
            <motion.div
              exit={{
                width: 0,
                transition: { delay: 0.3, duration: 0.3 },
              }}
              className={m.aside_content}
            >
              <div>
                <span className={m.close}>
                  <FontAwesomeIcon icon={faTimes} onClick={props.cycleOpen} />
                </span>
              </div>
              <motion.div
                className={m.container}
                initial="closed"
                animate="open"
                exit="closed"
                // variants={sideVariants}
              >
                {links.map(({ name, to, id }) => (
                  <motion.a
                    key={id}
                    href={to}
                    whileHover={{ scale: 1.1 }}
                    variants={itemVariants}
                  >
                    {name}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  )
}
