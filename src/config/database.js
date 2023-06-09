import mongoose from 'mongoose';

const connectDatabase = () => {
  mongoose.connect(process.env.DB_LOCAL_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  }).then(con => {
    console.log(`Mongo database connected with HOST: ${con.connection.host}`)
  })
}

export default connectDatabase;