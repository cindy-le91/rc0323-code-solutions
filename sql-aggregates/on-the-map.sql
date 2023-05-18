select "cities"."countryId",
       count(*) as "totalCities",
       "countries"."name" as "countryName"
  from "cities"
  join "countries" using ("countryId")
  group by "cities"."countryId", "countries"."name";
