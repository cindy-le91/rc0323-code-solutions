SELECT
   "films"."releaseYear",
   "genres"."name"
FROM "filmGenre"
join "films" using ("filmId")
join "genres" using ("genreId")
WHERE "films"."title" = 'Boogie Amelie'
