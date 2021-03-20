import express from 'express';
// import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(express.json({ limit: "30mmb", extended: true }));
app.use(express.urlencoded({ limit: "30mmb", extended: true }));
app.use(cors());

