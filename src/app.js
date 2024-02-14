import express from 'express';
import cors from 'cors';
import pollRoutes from './routes/polls.js';
import voteRoutes from './routes/votes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', pollRoutes);
app.use('/api', voteRoutes);

dotev.config()
const port = process.env.PORT || 5000
app.listen(port, () => {
	console.log(`Servidor rodando na porta ${port}`)
})