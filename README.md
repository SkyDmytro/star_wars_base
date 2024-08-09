### Project Description: Star Wars Data Base

**Tech Stack:**

-   **Vite:** For fast project setup and build.
-   **React:** The core framework for building the user interface.
-   **TypeScript:** Ensures type safety and improves code quality.
-   **Jest + React Testing Library:** Tools for writing and executing tests to ensure the reliability and stability of components.

1.  **Infinite Scroll for Hero List:**
   -  The hero list uses an infinite scroll feature, which loads more heroes automatically as the user scrolls down. 	This makes it easier for users to keep browsing without needing to click through pages.
-   It offers a simple and easy way to explore a large list of heroes.
2.  **Detailed Hero Information Displayed as a Graph:**
    
   -   When a hero is clicked, a detailed graph is rendered using React Flow, showcasing connections between:
       -   The selected hero (as the central node).
       -   The movies in which the hero appears (linked to the hero).
       -   The starships the hero has traveled on (linked to the movies).

**Testing:**

-   **Jest** and **React Testing Library** were used to write unit tests for the app's core components and logic.
-   This ensures the app's stability and correctness, even as the codebase evolves over time.

### How to Run the Project:

To set up and run the project locally, follow these steps:

1.  **Install dependencies:**
    
    `npm install` 
    
2.  **Run the development server:**

    
    `npm run dev` 
    
These commands will install the necessary packages and start the development server, allowing you to access the application in your browser.