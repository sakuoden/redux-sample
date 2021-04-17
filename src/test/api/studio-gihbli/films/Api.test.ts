import FilmIdResponse from "../../../../api/studio-gihbli/films/filmid/FilmIdResponse";
import FilmsResource from "../../../../api/studio-gihbli/films/FilmsResource";
import Film from "../../../../api/studio-gihbli/films/filmid/Film";

test("STUDIO GIHBLI APIのFILMSリソースをIDで取得出来る", async () => {
    const response: FilmIdResponse = await new FilmsResource().filmId("58611129-2dbc-4a81-a72f-77ddfc1b1b49");
    const film: Film = response.createFilm();
    expect(film.original_title).toBe("となりのトトロ");
});
