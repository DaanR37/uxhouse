import { StyledMenu } from './style';
import { motion } from 'framer-motion';

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open} onClick={() => setOpen(!open)}>

      <motion.a href="/"
        whileHover={{
          scale: 1.1,
          originX: 0,
          textShadow: "0px 0px 2px rgb(255,255,255)"
        }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <h3>
          Services
        </h3>

        <img
          src='images/handshake.svg' alt='handshake'
        />

      </motion.a>

      <motion.a href="/"
        whileHover={{
          scale: 1.1,
          originX: 0,
          textShadow: "0px 0px 2px rgb(255,255,255)"
        }}
        transition={{ type: 'spring', stiffness: 100 }}
      >

        <h3>
          Vacatures
          <br></br>
          &
          <br></br>
          Projecten
        </h3>

        <img
          src='images/projects.svg' alt='projects'
        />
      </motion.a>

      <motion.a href="/"
        whileHover={{
          scale: 1.1,
          originX: 0,
          textShadow: "0px 0px 2px rgb(255,255,255)"
        }}
        transition={{ type: 'spring', stiffness: 100 }}
      >

        <h3>
          Contact
        </h3>

        <img
          src='images/contact.svg' alt='contact'
        />
      </motion.a>

    </StyledMenu>
  )
}

export default Menu;
