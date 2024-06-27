# LearnLingo

LearnLingo is a web application for online language learning that allows users to find tutors based on various criteria, filter them, add them to favorites, and book trial lessons..

## Table of Contents

- [About the Project](#about-the-project)
- [Core Technologies](#core-technologies)
- [Layout](#layout)
- [Technical Specification](#technical-specification)
- [Deployment](#deployment)

## About the Project

LearnLingo is designed for companies offering online language teaching services. The application consists of three main pages:

- **Home**: A page listing the company's advantages and includes a link to start using the application, redirecting to the "Teachers" page.
- **Teachers**: A page listing tutors that users can filter by teaching language, students' knowledge level, and hourly rate.
- **Favorites**: A private page with tutors added to favorites by the user.

## Core Technologies

- **React**: A JavaScript library for building user interfaces.
- **Firebase**: A platform for mobile and web application development, used for user authentication and data storage.
- **React Hook Form**: A library for managing forms in React.
- **Yup**: A library for form validation.
- **React Router**: A library for routing in React.
- **CSS**: Styling the interface.

## Layout

The project's layout is developed using examples and prototypes to create a unique design. According to the layout, the "Home" and "Teachers" pages have a responsive design from 320px to 1440px, ensuring correct display on mobile and tablet devices.

## Technical Specification

### General Requirements

1. **Authentication**: Add the ability to register, log in, retrieve current user data, and log out using Firebase.
2. **Forms**: Implement registration/login forms and trial lesson booking forms with minimal field validation using react-hook-form and yup.
3. **Tutors Collection**: Create a tutors collection in Firebase Realtime Database with the following fields:

name
surname
languages
levels
rating
reviews
price_per_hour
lessons_done
avatar_url
lesson_info
conditions
experience

4. **Tutor Cards**: Implement displaying tutor cards on the "Teachers" page. Render 4 cards by default, with the option to load more cards by clicking the "Load more" button.
5. **Adding to Favorites**: Implement the functionality to add tutors to favorites for authenticated users using localStorage or Firebase.
6. **Filtering**: Add filtering functionality by teaching language, students' knowledge level, and hourly rate.
7. **Detailed Information**: Implement displaying detailed information about the tutor and student reviews by clicking the "Read more" button.
8. **Trial Lesson Booking**: Implement a modal window with a form for booking a trial lesson.
9. **Private "Favorites" Page**: Implement a private page for viewing tutors added to favorites.

### Completion Criteria

Responsive, semantic, and valid design from 320px to 1440px.
No errors in the browser console.
Use native JS with a bundler (Vite, Parcel, etc.) or React.
Interactivity works according to the technical specification.
Formatted code without comments.
The project is deployed on GitHub Pages, Netlify, or another hosting.

## Deployment

The project is deployed on [Vercel](https://www.vercel.com/) and is available at: [LearnLingo](https://lingua-learn-tau.vercel.app/).
