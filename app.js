import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';
import 'dotenv/config';

const app = express();
app.use(bodyParser.json())
const PORT = process.env.PORT || 3030;
const api_key = process.env.APIKEY

app.get('/city',async (req,res)=>{
    const city = req.query.city;    //getting city name from user form

    //https://openweathermap.org  link to api provider
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${api_key}`
    let weather;
    try {
        const response = await axios.get(url)
        weather = response.data; //getting data from 3rd party api

        //sending out the relevant data 
        return res.status(200).json({
            city: weather.name,
            temperature: weather.main.temp,
            humidity: weather.main.humidity,
            visibility: weather.visibility,
            timezoneUTC: weather.timezone,
            description: weather.weather[0].description,
        });
    } catch (error) {
        weather = null
        error ='please try again'
    }
})



app.listen(PORT,()=>console.log(`server is running on http://localhost:${PORT}`))