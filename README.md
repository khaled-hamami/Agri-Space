Agri Space is a comprehensive platform designed to assist users in various aspects of agriculture. It combines three main functionalities:

1. Weather Forecasting: Provides real-time weather updates based on the user's location. This feature helps users plan their agricultural activities more effectively.

2. Marketplace: A dedicated space for users to post and view classified ads related to agriculture. This feature facilitates the buying and selling of agricultural products and equipment.

3. Plant Disease Recognition: An AI-powered feature that recognizes plant diseases. Users can submit an image of their plant, and the AI will analyze it to identify any potential diseases.

## Installation
# important note : node js v16+ and git must be installed on your local machine

1. Clone the Repository:
   $ git clone <repository_url>
   $ cd <repository_directory>

2. Install Dependencies:
   $ npm install

3. Download the .env from the link below and place in the root of the directory
   link : $ https://drive.google.com/drive/folders/1Jr5slFLA1zH4mPMGSa1cJXNKzrJobwEs?usp=sharing

4. be on the same network withe the server

5. Run the Development Server:
   $ npm run dev

##### API Endpoints

## Weather Endpoint:

- POST /weather: Get current weather information by providing a location.

## Marketplace Endpoints:

- POST /addPost: Authenticate and create a new classified ad post.
- DELETE /delete/{post_id}: Authenticate and delete a specific classified ad post.
- GET /getUserPosts: Authenticate and get the posts created by the authenticated user.
- GET /getPosts/{category}: Get classified ad posts by category.

## AI Endpoints:

- POST /submit: Authenticate and submit an image for plant disease recognition.

###### technologies used   
##
    "@emotion/react": "^11.11.1",
    "@emotion/styled": "^11.11.0",
    "@fortawesome/fontawesome-free": "^6.5.0",
    "@hookform/resolvers": "^3.3.2",
    "@mui/icons-material": "^5.14.18",
    "@mui/material": "^5.14.18",
    "boostrap": "^2.0.0",
    "bootstrap": "^5.3.2",
    "dotenv": "^16.3.1",
    "framer-motion": "^10.16.5",
    "jotai": "^2.6.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-dropzone": "^14.2.3",
    "react-hook-form": "^7.48.2",
    "react-intersection-observer": "^9.5.3",
    "react-router": "^6.20.0",
    "react-router-dom": "^6.20.0",
    "react-spinners": "^0.13.8",
    "swiper": "^8.0.2",
    "yup": "^1.3.2"
##

####################.env : 
VITE_BACKEND_URL=http://192.168.1.112:8000
VITE_FORMSPREE_KEY=https://formspree.io/f/xzblovjv
