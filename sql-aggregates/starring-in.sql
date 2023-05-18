select
  "actors"."firstName",
    "actors"."lastName",
    "genres"."name" as "genreName",
    count(*) as "appearances"
from
"castMembers"
join "filmGenre" using ("filmId")
join "genres" using ("genreId")
join "actors" using ("actorId")
where "actors"."firstName" = 'Lisa'
and "actors"."lastName" = 'Monroe'
group by "actors"."firstName", "actors"."lastName", "genreName"
