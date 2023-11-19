# RapidLogr: 🚀 A Log Exploration Adventure
<p align="center">
  <img align=center src="https://github.com/dyte-submissions/november-2023-hiring-othegagan/assets/77300329/c6038144-0f66-42c4-80c2-bd365b9f6056" alt="Logo" height="500">
</p>

<h3 align="center">
RapidLogr, a dynamic application crafted as part of Dyte Inc.'s hiring project.
</h3>
<p align="center">
 It allows users to uncover insights, troubleshoot issues, and navigate logs effortlessly with these stellar features..!
</h4>
</br></br>
<img src="https://i.imgur.com/y4oV9VV.png" alt="colored line"  witdth="100px" align="left">
</br>

<p >Live Site :  https://rapidlogr.vercel.app/ </p>


## Key Features 🔥
- 💫 `Log Search: 🔍:`  Swiftly search through logs with RapidLogr's robust search functionality. - Explore various search parameters to find information in the blink of an eye.
- ⚠️ `Severity Filtering: ` Filter logs by severity to focus on critical issues or specific levels of importance. - Fine-tune your log analysis with precision.
- 📅 `Date Range Filtering:` Dive into log analysis with date range filtering. - Investigate issues that occurred during specific time intervals.
-  📱  `Mobile Magic: `RapidLogr is designed to shine on all devices, ensuring a seamless experience on mobile phones and tablets.
- 🎨  `User-Friendly Interface:` Navigate logs effortlessly with RapidLogr's clean and intuitive interface. - Experience user-friendly design for efficient log exploration.
- 🌓 `Adaptive Light and Dark Modes:`  Customize your log exploration with the choice of light or dark mode. - Tailor your environment to suit your visual preferences.
- ⚡`Next.js and Tailwind CSS Magic :` RapidLogr leverages Next.js for a powerful and efficient frontend. - Tailwind CSS brings flexibility and style, resulting in a sleek and modern design.


# Steps for setup and usage

## Installation 💻

- Clone the Repository and Open your terminal.
- Download all the file from the repo and keep it in a folder.
- Run command `pnpm install` or `yarn install` or `npm install` (pnpm is prefered).
- Running the above command will install all the required dependicies to run the application.
- Go to mongodb website https://mongodb.com/ and create your account or use the existing one. Create a new database called `logs_db`. And create a collection inside called `logs_collection`.
- After successfull creation of db and collection, copy the MONGODB_URI / connection string. 

## Modification 📝

- Go to `.env` in  root, if not found create one.
- Replace the keys & save it. This would give access to mongodb.
```text
    MONGODB_URI = 'your mongodb uri'
```
- Start the development server by running `pnpm run dev` or `npm run dev`

🔥💥😎 Start exploring your `logs` by search and using `filters`💫.

At this point application is ready visit `http://localhost:3000/` </br>
To use application, simply enter value you want in the search bar.
The application will then displaying the logs with the filters you have applied.Even you can combine multiple filters at once and find the log you need.

<img src="https://i.imgur.com/y4oV9VV.png" alt="colored line" align="center">

## Database Interaction

- To populate the database, use the endpoint: `http://localhost:3000/api/logs`. Send a `POST` request to this endpoint to add logs to the database.
- To retrieve logs, send a `GET` request to the same endpoint: `http://localhost:3000/api/logs`. You'll receive the logs as a response.
- The application utilizes the latest Next.js server actions for these operations.

## Server-Side Filtering and Searching

- 💥 RapidLogr employs server-side filtering and searching for efficient log exploration. The application utilizes MongoDB aggregation to process search parameters and perform advanced queries on the server.
  
-  😎 This approach enhances performance by fetching and processing data on the server side, delivering faster response times and optimizing resource utilization.
  
-  😁 Additionally, server-side processing adds extra benefits in terms of scalability and reduces the load on the client, providing a seamless log exploration experience.


🎉💻 RapidLogr has been an exciting challenge, offering an awesome experience in log exploration. With a user-friendly interface, server-side magic, and responsive design, it's a log management adventure like no other.

<h3 align="center " >🚀 Thanks to Dyte Hiring Team,for giving the challenge..! </h3>


<div align="center">
    <h3 align="center">💫 Designed and Developed with ❤️ by <a href="https://thegagan-portfolio.vercel.app/">Gagan Kumar</a> （づ￣3￣）づ╭❤️～ </h3>
    <p align="center"> Don't be shy to contact 📫 <a href="mailto:example@gmail.com">hellothegagan@gmail.com</a>   
 | 
     🤙 +91-9036644552</p>
</div>

