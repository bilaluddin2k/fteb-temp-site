#!/bin/bash

# Frontend Build
echo "Building Frontend..."
cd frontend
yarn install
yarn run build

# Backend Build
echo "Building Backend..."
cd ../backend
yarn install

echo "Creating environment files..."
# Create frontend production env file
cat > ../frontend/.env.production << EOL
REACT_APP_API_URL=https://api.ftebtech.com
REACT_APP_RECAPTCHA_SITE_KEY=6Le0-pkrAAAAACb-wQTHRU0DQ1xy9wVDSIEI_ZjT
EOL

# Create backend env file
cat > .env << EOL
PORT=5000
OFFICE365_USER=your-office365-email
OFFICE365_PASS=your-office365-password
EOL

echo "Build complete!"
