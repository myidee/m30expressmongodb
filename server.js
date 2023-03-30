const mongoose = require('mongoose')
const express = require('express');
app = express();
const port = process.env.PORT || 3000;


mongoose.connect('mongodb+srv://newuser:123@cluster0.f9d6o.gcp.mongodb.net/Activity')

const activitySchema = new mongoose.Schema({
    activity: {type: String, required: true}
})

const ActivityModel = mongoose.model('Activity', activitySchema);


app.get('/', (req,res) => {
  const task1 = new ActivityModel({
    activity: 'activity 1'
  })

  ActivityModel.insertMany([task1]);

  res.send('<h2>Document Added</h2>')
})

app.listen(port, () => {
    console.log('Server is running on port:' + port);
})