import React from 'react';

// links to github, linkedin, email
export default function Footer() {
  return (
    <footer>
      <div>
        <a href="mailto:your.email@example.com">
          <img src="email-icon.png" alt="Email" />
        </a>
        <a href="https://github.com/Sype7973" target="_blank" rel="noopener noreferrer">
          <img src="github-icon.png" alt="GitHub" />
        </a>
        <a href="https://au.linkedin.com/in/adam-day-lightineasy" target="_blank" rel="noopener noreferrer">
          <img src="linkedin-icon.png" alt="LinkedIn" />
        </a>
      </div>
    </footer>
  );
}