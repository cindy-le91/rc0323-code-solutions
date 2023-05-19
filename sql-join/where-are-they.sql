select
   "a"."line1" as "line1",
   "c"."name" as "cityName",
   "a"."district" as "district",
   "countries"."name" as "countryName"
from "addresses" as "a"
join "cities" as "c" USING ("cityId")
join "countries" using ("countryId")
limit 10;
