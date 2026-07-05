import React from 'react';
import { Section, Link } from './TelegramButton.styles';

// Update this to your actual Telegram channel/group link.
const TELEGRAM_URL = 'https://t.me/itsmoviestimee';

const TelegramButton = () => (
  <Section>
    <Link href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
      <svg width="26" height="26" viewBox="0 0 240 240" aria-hidden="true">
        <circle cx="120" cy="120" r="120" fill="rgba(255,255,255,0.15)" />
        <path
          fill="#fff"
          d="M181 72.4l-20.9 98.4c-1.6 7-5.8 8.7-11.7 5.4l-32.3-23.8-15.6 15c-1.7 1.7-3.2 3.2-6.5 3.2l2.3-33 60.2-54.4c2.6-2.3-.6-3.6-4.1-1.3l-74.5 46.9-32.1-10c-7-2.2-7.1-7 1.5-10.3l125.6-48.4c5.8-2.2 10.9 1.4 8.1 12.3z"
        />
      </svg>
      Join our Telegram
    </Link>
  </Section>
);

export default TelegramButton;