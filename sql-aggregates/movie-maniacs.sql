
select "firstName",
      "lastName",
      sum("payments"."amount") as "totalPayment"
from "customers"
join "payments" using ("customerId")
group by "customers"."firstName", "customers"."lastName", "customerId"
order by "totalPayment" desc;
