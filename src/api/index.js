import mongoose from 'mongoose';

const uri = 'mongodb+srv://morty:BTksgizBcczxKk8p@watermelon.htrvsic.mongodb.net/USERS?retryWrites=true&w=majority';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));




const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  class: {
    type: String,
  },
  marks: {
    mains: {
      math: [Number],
      phsx: [Number],
      chem: [Number],
      total: [Number],
      rank: [Number]
    },
    advance: {
      math: [Number],
      phsx: [Number],
      chem: [Number],
      total: [Number],
      rank: [Number]
    }
  },
  dates: {
    mains: [Date],
    advance: [Date],
  },
});


// Define a User model
const UserModel = mongoose.model('User', userSchema);

export const searchUsers = async (query) => {
  try {
    const data = await UserModel.find({
      $or: [
        { name: { $regex: query, $options: 'i' } },
        { class: { $regex: query, $options: 'i' } },
      ],
    });

    return data;
  } catch (error) {
    console.error(error.message);
    return null;
  }
};

export const getUserById = async (query) => {
  try {
    const data = await UserModel.findOne({ _id: query });
    return data;
  } catch (error) {
    console.error('Error:', error.message);
    return null;
  }
};
