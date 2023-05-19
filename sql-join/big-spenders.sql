select "firstName", "lastName", "amount"
from "customers"
join "payments" USING ("customerId")
order by "amount" desc
limit 10;
