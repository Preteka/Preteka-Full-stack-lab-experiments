EX.NO:3
DATE:
      COLLECTING MEMBER DETAILS  USING NODE.JS, EXPRESS, AND MONGODB (ATLAS)
AIM:
	           To create a web application that allows users to Add, Update, and Delete student details using an HTML form, storing the data in MongoDB Atlas.
            
ALGORITHM:
STEP 1: Start the Process.
STEP 3: Create the MongoDB Atlas cluster and get the connection URI. Use this URI to connect MongoDB in server.js via Mongoose.
STEP 4: Set up the Express server in server.js, configure middleware using body-parser, and connect to MongoDB Atlas using Mongoose.
STEP 5: Create a Mongoose schema and model in models/Student.js to store student details – name, age, and bloodgroup.
STEP 6: Design a form using HTML (public/index.html) to input student details (Name, Age, Blood Group) and send the data using POST method to /member.
STEP 7: Style the form and page using CSS (public/style.css) with a clean and responsive layout for better user experience.
STEP 8: Define routes in server.js to:
•	Serve the form via GET /
•	Handle form submission and insert student record via POST /member
•	View all students using GET /member
•	Delete a student using GET /delete/:id
•	Show a pre-filled form for editing using GET /member/:id
•	Handle the update using POST /update/:id
STEP 9: In the /students GET route, apply logic to loop through student data and display each student's Name, Age, and Blood Group along with Update and Delete links.
STEP 10: Run the server using node server.js and open http://localhost:3000 in the browser to test the form, view records, update, and delete.
STEP 11: Once the application works as expected, verify the inserted and updated entries in the MongoDB Atlas cluster under the correct database and collection.
STEP 12: After testing, stop the server by pressing Ctrl + C in the terminal.

OUTPUT:
<img width="939" height="497" alt="image" src="https://github.com/user-attachments/assets/6d7aba38-f80c-474a-89ee-082aaec6eeb7" />

<img width="497" height="345" alt="image" src="https://github.com/user-attachments/assets/e801128a-702f-4f5f-92ce-b4010c09298a" />

<img width="531" height="384" alt="image" src="https://github.com/user-attachments/assets/44e5207b-2715-479d-998b-836db37494a3" />

<img width="940" height="529" alt="image" src="https://github.com/user-attachments/assets/766fd48c-16ea-46bb-bfb6-076c0ef1179d" />

