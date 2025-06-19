import mongoose from 'mongoose';

const MONGODB_URI =
  process.env.MONGODB_URI ||
  'mongodb+srv://danielvor:Souls2Maka@danielvor.jwkglzf.mongodb.net/todo_db?retryWrites=true&w=majority&appName=danielvor';

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log('✅ Conectado ao MongoDB, banco:', mongoose.connection.name);
      return mongoose;
    });
  }
  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }
  return cached.conn;
}

const taskSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
  },
  {
    collection: 'tasks',
    versionKey: false,
  }
);

taskSchema.set('toJSON', {
  transform: (_doc, ret) => {
    delete ret.__v;
    return ret;
  },
});

const Task = mongoose.models.Task || mongoose.model('Task', taskSchema);

export default async function handler(req, res) {
  try {
    await connectToDatabase();

    switch (req.method) {
      case 'GET':
        try {
          const tasks = await Task.find({});
          console.log('🔎 Tarefas encontradas:', tasks.length);
          tasks.forEach(t => console.log(`📝 ${t._id} - ${t.title}`));
          res.status(200).json(tasks);
        } catch (error) {
          console.error('❌ Erro ao buscar tarefas:', error);
          res.status(500).json({ error: error.message });
        }
        break;

      case 'POST':
        try {
          const { title, content } = req.body;
          const newTask = new Task({ title, content });
          await newTask.save();
          res.status(201).json(newTask);
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
        break;

      case 'PUT':
        try {
          const { id, title, content } = req.body;
          const updatedTask = await Task.findByIdAndUpdate(id, { title, content }, { new: true });
          if (!updatedTask) {
            return res.status(404).json({ error: 'Task not found' });
          }
          res.status(200).json(updatedTask);
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
        break;

      case 'DELETE':
        try {
          const { id } = req.query;
          const deletedTask = await Task.findByIdAndDelete(id);
          if (!deletedTask) {
            return res.status(404).json({ error: 'Task not found' });
          }
          res.status(204).end();
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
        break;

      default:
        res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error('❌ Erro na conexão com o MongoDB:', error);
    res.status(500).json({ error: 'Erro de conexão com o banco de dados' });
  }
}
