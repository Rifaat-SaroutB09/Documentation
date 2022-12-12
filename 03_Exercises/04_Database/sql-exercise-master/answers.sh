1)
SELECT * from students ;
 
2)SELECT Name from students ;
SELECT Name from students WHERE (Age >30) ;

3)SELECT name from students Where (Age == 30) AND  (Gender == 'F');

4)SELECT Points FROM students Where (Name == 'Alex');

5)
INSERT INTO students VALUES (7,'Rifaat ALSAROUT' , 27 , 'M',250); 

6)
UPDATE   students SET Points = 400 WHERE Name = 'Basma';

7)
UPDATE   students SET Points = 100 WHERE Name = 'Alex';

10)CREATE TABLE "graduates"(
       "ID"  INTEGER Not NULL ,
	   "Name" TEXT NOT NULL UNIQUE ,
	   "Age" TEXT ,
	   "Gender" TEXT,
	   Points TEXT,
	   "Graduation" text,
	   PRIMARY key ("ID" AUTOINCREMENT)
	   );
SELECT * from students ;
	
11)
INSERT INTO graduates VALUES (1,'Layal' , 18 , 'M',300, 08/09/2018) ; 
	
12)
DELETE  FROM students WHERE (name = 'layla');

14)
SELECT emloyees.name , companies.name as company , companies.date ,
FROM companies,emloyees ,
Where companies.name=emloyees.company ;

15)
SELECT emloyees.name 
FROM companies.emloyees 
WHERE companies.name = emloyees.company AND companies.date <2000

 
16)
SELECT company 
FROM emloyees
WHERE Role = 'Graphic Designer '

18)
SELECT Name FROM students 
WHERE max(Points)

19)
SELECT AVG(Points) FROM students

20)
SELECT name from students WHERE (Points>500)

21)
SELECT COLUMUN names LIKE %s% FROM students 
