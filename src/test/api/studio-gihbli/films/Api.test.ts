import FilmsResource from "../../../../api/studio-gihbli/films/FilmsResource";
import Film from "../../../../api/studio-gihbli/films/filmid/Film";

test("STUDIO GIHBLI APIのFILMSリソースをIDで取得出来る", async () => {
    const film: Film = await new FilmsResource().filmId("58611129-2dbc-4a81-a72f-77ddfc1b1b49");
    expect(film.original_title).toBe("となりのトトロ");
});
