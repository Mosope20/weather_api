# 🌦️ Weather API ⛈️

This project provides a simple Node.js application that allows users to retrieve weather information for a specified location. It utilizes the OpenWeatherMap API to fetch current weather data. I chose to work on this project so as to learn how to integrate a 3rd party API in Node.js using axios.
I plan on improving this project to automatically get user location for better user experience.

---

## ✨ Features

- 🌍 **Location-Based Weather Retrieval**: Fetch current weather data for any specified city.
- 📡 **API Integration**: Integrates with the OpenWeatherMap API to provide accurate and up-to-date weather information.

---

## 📂 Project Structure

```plaintext
weather_api/
├── node_modules/
├── .env
├── .gitignore
├── README.md
├── app.js
├── package-lock.json
├── package.json
```

---

## 🛠️ Getting Started

Follow these steps to set up and run the project locally:

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Mosope20/weather_api.git
```

### 2️⃣ Navigate to the Project Directory

```bash
cd weather_api
```

### 3️⃣ Install Dependencies

Make sure Node.js is installed on your system. Then, run:
```bash
npm install
```

### 4️⃣ Set Up Environment Variables

Create a .env file in the root directory to store sensitive information like JWT secret keys. For example:
```bash
API_KEY=your_openweathermap_api_key
```

### 5️⃣ Run the Application
start the server with:
```bash
node app.js
```
### 🌤️🌤️The application should now be running, and you can use it to fetch weather information for specified locations.

---

## 📡 API Endpoints
- GET /city: Input the name of the city for which you want to retrieve weather information.
- Kindly visit [openweathermap](https://openweathermap.org/current) to access the full data retrived from their API. Feel free to edit the data you send out to your endpoint.

---

## 📦 Dependencies
- express: Web framework for Node.js.
- axios: Promise-based HTTP client for making API requests.
- dotenv: Loads environment variables from a .env file.


---

## 🌟 Contribution Guidelines
I ❤️ contributions! If you'd like to contribute:

- Fork the repository.
- Create a new branch for your feature or bug fix.
- Submit a pull request with a clear description of your changes.

---

## 📜 License
This project is licensed under the MIT License. Feel free to use it as you like!

---

## ✍️ Author
Mosope20
GitHub: [Mosope20](github.com/Mosope20/)




