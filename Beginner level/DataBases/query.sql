-- task : 
-- Given this table:

-- | id | name | city | age |
-- | --- | --- | --- | --- |
-- | 1 | Ali | Cairo | 19 |
-- | 2 | Sara | Giza | 21 |
-- | 3 | Omar | Alex | 22 |

-- ### ❓ Write an SQL query to select the **name** and **city** of users whose **age is greater than 20**.

--my solution:
SELECT 
    name , city
FROM
    users
WHERE
    age > 20;