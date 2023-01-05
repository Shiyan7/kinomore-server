import fs from 'fs';
import path from "path"
const __dirname = path.resolve();

const movies = [{
    id: 4365427,
    year: 2022,
    rating: "8.3",
    title: "Уэнсдэй",
    genre: "Фэнтези",
    image: `${process.env.API_URL}/images/1`,
    trailer: `${process.env.API_URL}/trailers/1`
  },
  {
    id: 915196,
    year: 2016,
    rating: "8.4",
    title: "Очень странные дела",
    genre: "Ужасы",
    image: `${process.env.API_URL}/images/2`,
    trailer: `${process.env.API_URL}/trailers/1`
  },
  {
    id: 1199773,
    year: 2022,
    rating: "6.8",
    title: "Чёрная Пантера: Ваканда навеки",
    genre: "Триллеры",
    image: `${process.env.API_URL}/images/3`,
    trailer: `${process.env.API_URL}/trailers/1`
  },
  {
    id: 1115098,
    year: 2022,
    rating: "5.7",
    title: "Мир Юрского периода: Господство",
    genre: "Триллеры",
    image: `${process.env.API_URL}/images/4`,
    trailer: `${process.env.API_URL}/trailers/1`
  },
  {
    id: 505898,
    year: 2022,
    rating: "8.4",
    title: "Аватар: Путь воды",
    genre: "Фантастика",
    image: `${process.env.API_URL}/images/5`,
    trailer: `${process.env.API_URL}/trailers/1`
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
      const id = req.params.id;
      res.sendFile(`${__dirname}/assets/videos/${id}.mp4`);
    } catch (e) {
      console.error(e)
    }
  }
}

export default new MovieController();