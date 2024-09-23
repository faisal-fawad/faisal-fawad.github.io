import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import posthog from 'posthog-js';
import { PostHogProvider} from 'posthog-js/react'

posthog.init(
  'phc_orvs411FhN5DR4VqjBZ0P0hqYrbaYjlcNWyFuMCYoE3',
  {
    api_host: 'https://us.i.posthog.com',
    person_profiles: 'identified_only',
  }
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PostHogProvider client={posthog}>
      <App />
    </PostHogProvider>
  </React.StrictMode>,
)
