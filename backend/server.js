import { Express } from 'express';
import data from './data';

const app = express();

app.get('api/products', (req, res) => {
  req.send(data.products);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
