import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

export default function SocialContainer() {
  return (
    <ul className="cfl-social-container">
      <li key="cfl-social-twitter" className="cfl-social-twitter cfl-social">
        <a href="https://twitter.com/CFL">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
      </li>
      <li key="cfl-social-facebook" className="cfl-social-facebook cfl-social">
        <a href="https://www.facebook.com/CFL">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
      </li>
      <li
        key="cfl-social-instagram"
        className="cfl-social-instagram cfl-social"
      >
        <a href="https://www.instagram.com/cfl">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </li>
      <li key="cfl-social-youtube" className="cfl-social-youtube cfl-social">
        <a href="http://www.youtube.com/CFL">
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
      </li>
    </ul>
  );
}
