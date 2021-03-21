import express from 'express';
// import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'

const app = express();

app.use(express.json({ limit: "30mmb", extended: true }));
app.use(express.urlencoded({ limit: "30mmb", extended: true }));
app.use(cors());

const CONNECTION_URL = "mongodb+srv://user123:user123@togethermomentscl0.wnkhw.mongodb.net/togetherMomentsCL0?retryWrites=true&w=majority"

const PORT = process.env.PORT || 5000

app.use('/posts', postRoutes)

app.get('/', (req, res) => {
    res.send('homepage')
})

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);