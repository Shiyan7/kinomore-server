import fs from 'fs';
import path from "path"
const __dirname = path.resolve();

const movies = [{
    id: 4365427,
    year: 2022,
    rating: "8.3",
    title: "Уэнсдэй",
    genre: "Фэнтези",
    scale: "1.05",
    image: `${process.env.API_URL}/images/1`,
    trailer: `${process.env.API_URL}/trailers/1`
  },
  {
    id: 1199773,
    year: 2022,
    rating: "6.8",
    title: "Чёрная Пантера: Ваканда навеки",
    genre: "Триллеры",
    scale: "1.35",
    image: `${process.env.API_URL}/images/2`,
    trailer: `${process.env.API_URL}/trailers/2`
  },
  {
    id: 1115098,
    year: 2022,
    rating: "5.7",
    title: "Мир Юрского периода: Господство",
    genre: "Триллеры",
    scale: "1.15",
    image: `${process.env.API_URL}/images/3`,
    trailer: `${process.env.API_URL}/trailers/3`
  },
  {
    id: 505898,
    year: 2022,
    rating: "8.4",
    title: "Аватар: Путь воды",
    genre: "Фантастика",
    scale: "1.35",
    image: `${process.env.API_URL}/images/4,`,
    trailer: `${process.env.API_URL}/trailers/4`
  },
];
class MovieController {
  async getHeroMovies(req, res, next) {
    try {
      return res.json(movies);
    } catch (e) {
      console.error(e)
    }
  }

  async getImage(req, res) {
    try {
      const id = req.params.id;
      res.sendFile(`${__dirname}/assets/images/${id}.jpg`);
    } catch (e) {
      console.error(e)
    }
  }

  async getTrailer(req, res) {
    try {
      const { range } = req.headers;
      const id = req.params.id;
      const filePath = `${__dirname}/assets/videos/${id}.mp4`;
      const stat = fs.statSync(filePath);
      const fileSize = stat.size;

      if (range) {
        const parts = range.replace(/bytes=/, '').split('-');
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

        const chunksize = end - start + 1;
        const file = fs.createReadStream(filePath, { start, end });
        const head = {
          'Content-Range': bytes `${start}-${end}/${fileSize}`,
          'Accept-Ranges': 'bytes',
          'Content-Length': chunksize,
          'Content-Type': 'video/mp4',
        };

        res.writeHead(206, head);
        file.pipe(res);
      } else {
        const head = {
          'Content-Length': fileSize,
          'Content-Type': 'video/mp4',
        };
        res.writeHead(200, head);
        fs.createReadStream(filePath).pipe(res);
      }
    } catch (e) {
      console.error(e)
    }
  }
}

export default new MovieController();