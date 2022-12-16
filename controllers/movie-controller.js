
class MovieController {
    async getHeroMovies(req, res, next) {
        try {
            const movies = [
                {
                  id: 4365427,
                  year: 2022,
                  rating: "8.3",
                  title: "Уэнсдэй",
                  genre: "Фэнтези",
                  image: "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/nPWRN9MDIjO2gDB7nYOPje1pBLu.jpg",
                },
                {
                  id: 915196,
                  year: 2016,
                  rating: "8.4",
                  title: "Очень странные дела",
                  genre: "Ужасы",
                  image: "https://www.themoviedb.org/t/p/original/2MaumbgBlW1NoPo3ZJO38A6v7OS.jpg",
                },
                {
                  id: 1199773,
                  year: 2022,
                  rating: "6.8",
                  title: "Чёрная Пантера: Ваканда навеки",
                  genre: "Триллеры",
                  image: "https://www.themoviedb.org/t/p/original/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg",
                },
                {
                  id: 1115098,
                  year: 2022,
                  rating: "5.7",
                  title: "Мир Юрского периода: Господство",
                  genre: "Триллеры",
                  image: "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/jauI01vUIkPA0xVsamGj0Gs1nNL.jpg",
                },
                {
                  id: 505898,
                  year: 2022,
                  rating: "8.4",
                  title: "Аватар: Путь воды",
                  genre: "Фантастика",
                  image: "https://www.themoviedb.org/t/p/original/zaapQ1zjKe2BGhhowh5pM251Gpl.jpg",
                },
            ];

            return res.json(movies);
        } catch (e) {
            next(e);
        }
    }
}

export default new MovieController();